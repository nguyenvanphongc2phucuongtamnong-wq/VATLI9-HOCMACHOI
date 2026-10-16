import { Question } from '../types';
import { QUESTIONS_1_TO_6 } from './questions/lessons1to6';
import { QUESTIONS_7_TO_12 } from './questions/lessons7to12';
import { QUESTIONS_13_TO_17 } from './questions/lessons13to17';
import { shuffleArray, validateQuestion } from '../utils/random';

const RAW_QUESTIONS: Question[] = [
  ...QUESTIONS_1_TO_6,
  ...QUESTIONS_7_TO_12,
  ...QUESTIONS_13_TO_17
];

/**
 * Filter and deduplicate verified questions to ensure zero corruption or duplicate entries.
 */
function buildValidatedBank(raw: Question[]): Question[] {
  const seenIds = new Set<string>();
  const seenTexts = new Set<string>();
  const validList: Question[] = [];

  for (const q of raw) {
    const val = validateQuestion(q);
    if (!val.isValid) {
      console.warn(`[Question Bank] Bỏ qua câu hỏi không hợp lệ ${q?.id}: ${val.error}`);
      continue;
    }

    if (seenIds.has(q.id)) {
      console.warn(`[Question Bank] Bỏ qua câu trùng ID: ${q.id}`);
      continue;
    }

    const normText = q.question.trim().toLowerCase();
    if (seenTexts.has(normText)) {
      console.warn(`[Question Bank] Bỏ qua câu trùng nội dung: ${q.id}`);
      continue;
    }

    seenIds.add(q.id);
    seenTexts.add(normText);
    validList.push(q);
  }

  return validList;
}

export const ALL_QUESTIONS: Question[] = buildValidatedBank(RAW_QUESTIONS);

export function getQuestionsByLesson(lessonId: number): Question[] {
  return ALL_QUESTIONS.filter(q => q.lessonId === lessonId);
}

export interface ExamQuestionsResult {
  questions: Question[];
  requestedCount: number;
  availableCount: number;
  notice?: string;
}

/**
 * Retrieves randomized exam questions using the cryptographically fair Fisher-Yates algorithm.
 * Guarantees scope verification, deduplication, and accurate count warnings if pool is smaller than requested.
 */
export function getRandomExamQuestions(count: number = 20, lessonIds?: number[]): Question[] {
  const result = getExamQuestionsWithMetadata(count, lessonIds);
  return result.questions;
}

export function getExamQuestionsWithMetadata(count: number = 20, lessonIds?: number[]): ExamQuestionsResult {
  let pool = ALL_QUESTIONS;
  if (lessonIds && lessonIds.length > 0) {
    pool = ALL_QUESTIONS.filter(q => lessonIds.includes(q.lessonId));
  }

  const availableCount = pool.length;
  let notice: string | undefined = undefined;

  if (availableCount < count) {
    notice = `Ngân hàng câu hỏi trong phạm vi bài học chỉ có sẵn ${availableCount} câu hợp lệ. Hệ thống cung cấp tối đa ${availableCount} câu cho bài thi.`;
  }

  const shuffled = shuffleArray(pool);
  const selected = shuffled.slice(0, Math.min(count, availableCount));

  return {
    questions: selected,
    requestedCount: count,
    availableCount,
    notice
  };
}
