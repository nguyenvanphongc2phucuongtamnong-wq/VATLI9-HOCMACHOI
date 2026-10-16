import { UserProgress, ExamResult } from '../types';

const STORAGE_KEY = 'vatly9_user_progress_v2';

/**
 * Returns YYYY-MM-DD in Asia/Ho_Chi_Minh (Vietnam) time zone.
 */
export function getVietnamDateString(date: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Ho_Chi_Minh',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
}

/**
 * Calculates the exact calendar day difference between two Vietnam date strings (YYYY-MM-DD).
 * Fully handles midnight boundaries (e.g. 23:59 vs 00:01).
 */
export function calculateDaysBetweenVietnamDates(dateStr1: string, dateStr2: string): number {
  try {
    const [y1, m1, d1] = dateStr1.split('-').map(Number);
    const [y2, m2, d2] = dateStr2.split('-').map(Number);
    if (!y1 || !m1 || !d1 || !y2 || !m2 || !d2) return 1;
    const t1 = Date.UTC(y1, m1 - 1, d1);
    const t2 = Date.UTC(y2, m2 - 1, d2);
    return Math.round((t2 - t1) / (1000 * 60 * 60 * 24));
  } catch {
    return 1;
  }
}

export function getInitialProgress(): UserProgress {
  return {
    completedLessons: [],
    quizScores: {},
    totalQuestionsAnswered: 0,
    correctAnswersCount: 0,
    examHistory: [],
    streakDays: 1,
    lastActiveDate: getVietnamDateString(),
    soundEnabled: true,
    badges: [
      {
        id: 'newbie',
        title: 'Khởi Đầu Mới',
        description: 'Bắt đầu hành trình khám phá Vật Lý 9',
        icon: 'Sparkles',
        unlocked: true,
        unlockedAt: new Date().toISOString()
      },
      {
        id: 'optics_master',
        title: 'Bậc Thầy Quang Học',
        description: 'Hoàn thành các bài quang học và khúc xạ',
        icon: 'Eye',
        unlocked: false
      },
      {
        id: 'circuit_wizard',
        title: 'Phù Thủy Mạch Điện',
        description: 'Đạt điểm tối đa bài Định luật Ohm và mạch điện',
        icon: 'Zap',
        unlocked: false
      },
      {
        id: 'speed_demon',
        title: 'Chiến Binh Tốc Độ',
        description: 'Đạt trên 10 câu đúng liên tiếp trong Đấu Trường',
        icon: 'Flame',
        unlocked: false
      },
      {
        id: 'exam_ace',
        title: 'Thủ Khoa Vật Lý',
        description: 'Đạt điểm 10 trong một bài thi thử tổng hợp',
        icon: 'Award',
        unlocked: false
      }
    ]
  };
}

export function loadUserProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getInitialProgress();
    const parsed = JSON.parse(raw);
    return { ...getInitialProgress(), ...parsed };
  } catch {
    return getInitialProgress();
  }
}

export function saveUserProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress to localStorage', e);
  }
}

export function resetUserProgress(): UserProgress {
  const fresh = getInitialProgress();
  saveUserProgress(fresh);
  return fresh;
}

/**
 * Checks and updates the daily learning streak based strictly on Asia/Ho_Chi_Minh time.
 */
export function checkDailyStreak(progress: UserProgress): UserProgress {
  const todayVietnam = getVietnamDateString();
  if (progress.lastActiveDate === todayVietnam) {
    return progress;
  }

  const diffDays = calculateDaysBetweenVietnamDates(progress.lastActiveDate, todayVietnam);

  let newStreak = progress.streakDays;
  if (diffDays === 1) {
    newStreak += 1; // Consecutive day in Vietnam time
  } else if (diffDays > 1) {
    newStreak = 1; // Broken streak
  }

  const updated: UserProgress = {
    ...progress,
    streakDays: newStreak,
    lastActiveDate: todayVietnam
  };
  saveUserProgress(updated);
  return updated;
}

export function recordQuizAttempt(
  lessonId: number,
  score: number,
  total: number
): UserProgress {
  const current = loadUserProgress();
  const prevBest = current.quizScores[lessonId] || 0;
  const newBest = Math.max(prevBest, score);

  current.quizScores[lessonId] = newBest;
  if (!current.completedLessons.includes(lessonId) && score >= Math.ceil(total * 0.6)) {
    current.completedLessons.push(lessonId);
  }

  current.totalQuestionsAnswered += total;
  current.correctAnswersCount += score;

  // Check badges
  if (lessonId >= 5 && lessonId <= 10 && score === total) {
    const b = current.badges.find((x: { id: string }) => x.id === 'optics_master');
    if (b && !b.unlocked) {
      b.unlocked = true;
      b.unlockedAt = new Date().toISOString();
    }
  }
  if ((lessonId === 11 || lessonId === 12) && score === total) {
    const b = current.badges.find((x: { id: string }) => x.id === 'circuit_wizard');
    if (b && !b.unlocked) {
      b.unlocked = true;
      b.unlockedAt = new Date().toISOString();
    }
  }

  saveUserProgress(current);
  return current;
}

export function recordExamResult(result: ExamResult): UserProgress {
  const current = loadUserProgress();
  current.examHistory.unshift(result);
  current.totalQuestionsAnswered += result.totalQuestions;
  current.correctAnswersCount += result.score;

  if (result.score === result.totalQuestions) {
    const b = current.badges.find((x: { id: string }) => x.id === 'exam_ace');
    if (b && !b.unlocked) {
      b.unlocked = true;
      b.unlockedAt = new Date().toISOString();
    }
  }

  saveUserProgress(current);
  return current;
}
