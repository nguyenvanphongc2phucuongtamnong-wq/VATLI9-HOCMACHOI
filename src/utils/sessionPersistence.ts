import { ShuffledQuestion } from '../types';

export interface ActivePracticeSession {
  studentId: string;
  studentName: string;
  sessionId: string;
  lessonId: number;
  lessonTitle: string;
  mode: 'new' | 'review_wrong' | 'unanswered' | 'adaptive';
  questions: ShuffledQuestion[];
  selectedAnswers: Record<number, string>;
  currentQIndex: number;
  score: number;
  isFinished: boolean;
  startedAt: string;
  lastUpdated: string;
}

const ACTIVE_SESSION_PREFIX = 'vatly9_active_session_lesson_';
const STUDENT_PROFILE_KEY = 'vatly9_student_profile_v2';

export interface StudentProfile {
  studentId: string;
  studentName: string;
  className: string;
  schoolName?: string;
  createdAt: string;
}

function generateUniqueStudentId(): string {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `HS-${ts}-${rand}`;
}

export function getStudentProfile(): StudentProfile {
  try {
    const raw = localStorage.getItem(STUDENT_PROFILE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object' && parsed.studentId && parsed.studentName) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to parse existing student profile', e);
  }

  const defaultProfile: StudentProfile = {
    studentId: generateUniqueStudentId(),
    studentName: 'Học sinh Vật Lý 9',
    className: '9A',
    schoolName: 'THCS',
    createdAt: new Date().toISOString()
  };
  saveStudentProfile(defaultProfile);
  return defaultProfile;
}

export function saveStudentProfile(profile: StudentProfile): void {
  try {
    localStorage.setItem(STUDENT_PROFILE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error('Failed to save student profile', e);
  }
}

/**
 * Validates the schema of an active session to prevent crashes from legacy or corrupted data.
 */
function isValidSessionSchema(session: any): session is ActivePracticeSession {
  if (!session || typeof session !== 'object') return false;
  if (typeof session.lessonId !== 'number' || typeof session.sessionId !== 'string') return false;
  if (!Array.isArray(session.questions) || session.questions.length === 0) return false;
  if (typeof session.selectedAnswers !== 'object' || session.selectedAnswers === null) return false;
  if (typeof session.currentQIndex !== 'number') return false;
  return true;
}

export function getActiveSession(lessonId: number): ActivePracticeSession | null {
  const storageKey = `${ACTIVE_SESSION_PREFIX}${lessonId}`;
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return null;
    const session = JSON.parse(raw);

    if (!isValidSessionSchema(session)) {
      console.warn(`[SessionPersistence] Phát hiện dữ liệu phiên học không hợp lệ của bài ${lessonId}, tự động dọn dẹp.`);
      localStorage.removeItem(storageKey);
      return null;
    }

    if (session.isFinished) return null; // Finished session is not active
    return session;
  } catch (e) {
    console.error(`[SessionPersistence] Lỗi đọc phiên học bài ${lessonId}:`, e);
    try {
      localStorage.removeItem(storageKey);
    } catch {}
    return null;
  }
}

export function saveActiveSession(session: ActivePracticeSession): void {
  const storageKey = `${ACTIVE_SESSION_PREFIX}${session.lessonId}`;
  try {
    const updated: ActivePracticeSession = {
      ...session,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(storageKey, JSON.stringify(updated));
  } catch (e: any) {
    if (e?.name === 'QuotaExceededError') {
      console.warn('[SessionPersistence] QuotaExceededError: Đang dọn dẹp bộ nhớ đệm cũ...');
      try {
        // Clear older non-active sessions to make room
        for (let i = 1; i <= 17; i++) {
          if (i !== session.lessonId) {
            localStorage.removeItem(`${ACTIVE_SESSION_PREFIX}${i}`);
          }
        }
        localStorage.setItem(storageKey, JSON.stringify(session));
      } catch {}
    } else {
      console.error('Failed to save active session', e);
    }
  }
}

export function clearActiveSession(lessonId: number): void {
  try {
    localStorage.removeItem(`${ACTIVE_SESSION_PREFIX}${lessonId}`);
  } catch (e) {
    console.error('Failed to clear active session', e);
  }
}

/**
 * Registers both beforeunload and visibilitychange listeners for auto-saving.
 * CRITICAL: Cleanly removes BOTH listeners on cleanup to avoid memory leaks.
 */
export function registerAutoSaveListeners(getSessionToSave: () => ActivePracticeSession | null): () => void {
  const saveHandler = () => {
    try {
      const session = getSessionToSave();
      if (session && !session.isFinished) {
        saveActiveSession(session);
      }
    } catch (err) {
      console.warn('Auto-save error', err);
    }
  };

  const visibilityHandler = () => {
    if (document.visibilityState === 'hidden') {
      saveHandler();
    }
  };

  window.addEventListener('beforeunload', saveHandler);
  document.addEventListener('visibilitychange', visibilityHandler);

  return () => {
    window.removeEventListener('beforeunload', saveHandler);
    document.removeEventListener('visibilitychange', visibilityHandler);
  };
}
