import { Question, ShuffledQuestion, QuestionDifficulty } from '../types';
import { ALL_QUESTIONS } from '../data/questionBank';
import { shuffleArray, shuffleQuestion, validateQuestion } from './random';

export type PracticeMode = 'new' | 'review_wrong' | 'unanswered' | 'adaptive';

export interface QuestionHistoryRecord {
  questionId: string;
  lessonId: number;
  timesAnswered: number;
  timesCorrect: number;
  timesWrong: number;
  lastResult: 'correct' | 'wrong';
  lastAnsweredAt: string;
}

const QUESTION_HISTORY_KEY = 'vatly9_question_history_v1';
const LAST_SESSION_QUESTIONS_KEY = 'vatly9_last_session_qids_';

export function getQuestionHistory(): Record<string, QuestionHistoryRecord> {
  try {
    const raw = localStorage.getItem(QUESTION_HISTORY_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

export function recordQuestionAnswer(questionId: string, lessonId: number, isCorrect: boolean): void {
  try {
    const history = getQuestionHistory();
    const existing = history[questionId] || {
      questionId,
      lessonId,
      timesAnswered: 0,
      timesCorrect: 0,
      timesWrong: 0,
      lastResult: isCorrect ? 'correct' : 'wrong',
      lastAnsweredAt: new Date().toISOString()
    };

    existing.timesAnswered += 1;
    if (isCorrect) {
      existing.timesCorrect += 1;
      existing.lastResult = 'correct';
    } else {
      existing.timesWrong += 1;
      existing.lastResult = 'wrong';
    }
    existing.lastAnsweredAt = new Date().toISOString();

    history[questionId] = existing;
    localStorage.setItem(QUESTION_HISTORY_KEY, JSON.stringify(history));
  } catch (err) {
    console.error('Failed to record question answer', err);
  }
}

export function getLastSessionQuestionIds(lessonId: number): string[] {
  try {
    const raw = localStorage.getItem(`${LAST_SESSION_QUESTIONS_KEY}${lessonId}`);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function setLastSessionQuestionIds(lessonId: number, questionIds: string[]): void {
  try {
    localStorage.setItem(`${LAST_SESSION_QUESTIONS_KEY}${lessonId}`, JSON.stringify(questionIds));
  } catch {
    // ignore
  }
}

export interface QuizGenerationResult {
  questions: ShuffledQuestion[];
  mode: PracticeMode;
  totalAvailable: number;
  requestedCount: number;
  notice?: string;
}

/**
 * Generates a differentiated, verified quiz for a lesson.
 * Strict guarantees:
 * 1. Zero duplicate questions.
 * 2. Questions validated against curriculum key.
 * 3. Disjoint difficulty partitions: Dễ (de), Khó (kho), Cực khó (cuc_kho).
 * 4. Priority given to wrong and unseen questions.
 * 5. Avoids last session's question set if alternative questions exist.
 * 6. Detailed pedagogical notices if a difficulty level has a deficit.
 */
export function generateLessonQuiz(
  lessonId: number,
  mode: PracticeMode = 'new',
  targetCount: number = 20
): QuizGenerationResult {
  // Only take valid, non-corrupted questions for this lesson
  const rawBank = ALL_QUESTIONS.filter(q => q.lessonId === lessonId && validateQuestion(q).isValid);
  
  // Deduplicate bank by ID
  const bankMap = new Map<string, Question>();
  rawBank.forEach(q => {
    if (!bankMap.has(q.id)) bankMap.set(q.id, q);
  });
  const bank = Array.from(bankMap.values());

  const history = getQuestionHistory();
  const lastSessionIds = new Set(getLastSessionQuestionIds(lessonId));

  let selectedQuestions: Question[] = [];
  let notice: string | undefined = undefined;

  // Helper to pick questions while prioritizing (1) wrong, (2) unseen, (3) avoid last session
  const pickPrioritized = (candidates: Question[], count: number, excludeIds: Set<string>): Question[] => {
    const available = candidates.filter(q => !excludeIds.has(q.id));
    if (available.length <= count) {
      return available;
    }

    // Sort priority score:
    // wrong (+1000) > never answered (+500) > not in last session (+100)
    const scored = available.map(q => {
      const rec = history[q.id];
      let score = 0;
      if (rec && (rec.lastResult === 'wrong' || rec.timesWrong > 0)) {
        score += 1000 + rec.timesWrong * 10;
      } else if (!rec || rec.timesAnswered === 0) {
        score += 500;
      }
      if (!lastSessionIds.has(q.id)) {
        score += 100;
      }
      // Add slight random tie-breaker for diversity
      score += Math.random() * 10;
      return { q, score };
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, count).map(s => s.q);
  };

  if (mode === 'review_wrong') {
    // Select questions that were answered incorrectly in previous attempts
    const wrongQuestions = bank.filter(q => {
      const rec = history[q.id];
      return rec && (rec.lastResult === 'wrong' || rec.timesWrong > 0);
    });

    if (wrongQuestions.length === 0) {
      notice = 'Tuyệt vời! Em chưa có câu nào làm sai trong bài này. Hệ thống tự động tạo bộ câu hỏi mới tổng hợp cho em.';
      selectedQuestions = sampleNewQuestions(bank, targetCount, lastSessionIds);
    } else if (wrongQuestions.length < targetCount) {
      const needed = Math.min(targetCount - wrongQuestions.length, bank.length - wrongQuestions.length);
      notice = `Em có ${wrongQuestions.length} câu làm sai cần ôn tập. Hệ thống kết hợp thêm ${needed} câu mới để đủ đề.`;
      const pickedWrong = shuffleArray(wrongQuestions);
      const chosenSet = new Set(pickedWrong.map(q => q.id));
      const remainingCandidates = bank.filter(q => !chosenSet.has(q.id));
      const filler = pickPrioritized(remainingCandidates, needed, chosenSet);
      selectedQuestions = [...pickedWrong, ...filler];
    } else {
      selectedQuestions = shuffleArray(wrongQuestions).slice(0, targetCount);
    }
  } else if (mode === 'unanswered') {
    // Prioritize unseen / unanswered questions
    const unanswered = bank.filter(q => !history[q.id] || history[q.id].timesAnswered === 0);

    if (unanswered.length === 0) {
      notice = 'Em đã làm hết toàn bộ câu hỏi trong bài này! Hệ thống tạo bộ câu hỏi mới kết hợp ôn luyện tổng hợp.';
      selectedQuestions = sampleNewQuestions(bank, targetCount, lastSessionIds);
    } else if (unanswered.length < targetCount) {
      const needed = Math.min(targetCount - unanswered.length, bank.length - unanswered.length);
      notice = `Còn ${unanswered.length} câu chưa làm trong ngân hàng. Hệ thống bổ sung thêm ${needed} câu trọng tâm để đủ đề.`;
      const pickedUnanswered = shuffleArray(unanswered);
      const chosenSet = new Set(pickedUnanswered.map(q => q.id));
      const answeredCandidates = bank.filter(q => !chosenSet.has(q.id));
      const filler = pickPrioritized(answeredCandidates, needed, chosenSet);
      selectedQuestions = [...pickedUnanswered, ...filler];
    } else {
      selectedQuestions = shuffleArray(unanswered).slice(0, targetCount);
    }
  } else if (mode === 'adaptive') {
    // Adaptive Practice: Disjoint partitioning
    // Dễ (de), Khó (kho), Cực khó (cuc_kho)
    const easyBank = bank.filter(q => q.difficulty === 'de');
    const hardBank = bank.filter(q => q.difficulty === 'kho');
    const extremeBank = bank.filter(q => q.difficulty === 'cuc_kho');

    // Desired distribution: 40% easy, 40% hard, 20% extreme
    const targetEasy = Math.round(targetCount * 0.4);       // e.g. 8
    const targetHard = Math.round(targetCount * 0.4);       // e.g. 8
    const targetExtreme = targetCount - targetEasy - targetHard; // e.g. 4

    const chosenSet = new Set<string>();

    // Pick extreme
    const pickedExtreme = pickPrioritized(extremeBank, targetExtreme, chosenSet);
    pickedExtreme.forEach(q => chosenSet.add(q.id));

    // Pick hard
    const pickedHard = pickPrioritized(hardBank, targetHard, chosenSet);
    pickedHard.forEach(q => chosenSet.add(q.id));

    // Pick easy
    const pickedEasy = pickPrioritized(easyBank, targetEasy, chosenSet);
    pickedEasy.forEach(q => chosenSet.add(q.id));

    const totalPicked = [...pickedEasy, ...pickedHard, ...pickedExtreme];

    // Check if any tier had a deficit
    const deficits: string[] = [];
    if (pickedExtreme.length < targetExtreme) {
      deficits.push(`Mức cực khó có ${pickedExtreme.length}/${targetExtreme} câu`);
    }
    if (pickedHard.length < targetHard) {
      deficits.push(`Mức khó có ${pickedHard.length}/${targetHard} câu`);
    }
    if (pickedEasy.length < targetEasy) {
      deficits.push(`Mức dễ có ${pickedEasy.length}/${targetEasy} câu`);
    }

    if (totalPicked.length < targetCount) {
      const remainingNeeded = Math.min(targetCount - totalPicked.length, bank.length - totalPicked.length);
      const remainingPool = bank.filter(q => !chosenSet.has(q.id));
      const filler = pickPrioritized(remainingPool, remainingNeeded, chosenSet);
      filler.forEach(q => chosenSet.add(q.id));
      totalPicked.push(...filler);

      if (deficits.length > 0) {
        notice = `Phân phối thích ứng: ${deficits.join(', ')}. Hệ thống đã lấy toàn bộ câu có sẵn và điều chỉnh bổ sung từ các mức độ phù hợp để đủ đề ${totalPicked.length} câu.`;
      }
    } else if (deficits.length > 0) {
      notice = `Phân phối thích ứng: ${deficits.join(', ')}. Hệ thống đã tự động cân bằng tỷ lệ để đảm bảo chất lượng bài làm.`;
    }

    selectedQuestions = totalPicked;
  } else {
    // Default 'new': Generate fresh set avoiding immediate last session repetition if possible
    selectedQuestions = sampleNewQuestions(bank, targetCount, lastSessionIds);
  }

  // Final deduplication safety guarantee
  const finalUniqueMap = new Map<string, Question>();
  selectedQuestions.forEach(q => {
    if (!finalUniqueMap.has(q.id)) {
      finalUniqueMap.set(q.id, q);
    }
  });
  const finalUniqueList = Array.from(finalUniqueMap.values());

  // Shuffle question presentation order
  const presentationOrder = shuffleArray(finalUniqueList);

  // Remember this session's question IDs to prevent immediate next repetition
  setLastSessionQuestionIds(lessonId, presentationOrder.map(q => q.id));

  // Shuffle individual options safely with validation
  const finalShuffled = presentationOrder
    .map(q => shuffleQuestion(q))
    .filter(sq => sq.isValid !== false);

  return {
    questions: finalShuffled,
    mode,
    totalAvailable: bank.length,
    requestedCount: targetCount,
    notice
  };
}

function sampleNewQuestions(bank: Question[], count: number, avoidIds: Set<string>): Question[] {
  if (bank.length <= count) {
    return shuffleArray(bank);
  }

  // Try to pick from questions NOT in avoidIds first
  const freshPool = bank.filter(q => !avoidIds.has(q.id));
  if (freshPool.length >= count) {
    return shuffleArray(freshPool).slice(0, count);
  }

  // Otherwise, combine freshPool with needed questions from avoidIds
  const neededFromRepeated = count - freshPool.length;
  const repeatedPool = bank.filter(q => avoidIds.has(q.id));
  return shuffleArray([...freshPool, ...shuffleArray(repeatedPool).slice(0, neededFromRepeated)]);
}
