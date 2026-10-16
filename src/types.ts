export interface Formula {
  latex: string;
  name: string;
  description: string;
  units?: { [key: string]: string };
}

export interface ExampleProblem {
  id: string;
  title: string;
  problem: string;
  given: string[];
  formulaUsed: string;
  steps: string[];
  answer: string;
  illustrationType?: string;
  similarProblem: {
    problem: string;
    given: string[];
    hint: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  };
}

export interface LessonSection {
  title: string;
  content: string[];
  keyPoints?: string[];
  formulas?: Formula[];
  illustration?: {
    type: 'svg-diagram' | 'experiment-setup' | 'concept-chart' | 'energy-flow';
    id: string;
    caption: string;
  };
  examples?: ExampleProblem[];
}

export interface Lesson {
  id: number;
  chapter: string;
  chapterNumber: number;
  title: string;
  shortDesc: string;
  objectives: string[];
  sections: LessonSection[];
  summary: string[];
  realWorldApplications: string[];
  iconName: string;
}

export type QuestionDifficulty = 'de' | 'kho' | 'cuc_kho';

export interface QuestionOption {
  id: string; // 'A', 'B', 'C', 'D' originally
  text: string;
}

export interface Question {
  id: string;
  lessonId: number;
  difficulty: QuestionDifficulty;
  question: string;
  options: string[]; // 4 options
  correctAnswer: string; // The exact text of the correct option
  explanation: string;
}

export interface ShuffledQuestion {
  id: string;
  lessonId: number;
  difficulty: QuestionDifficulty;
  question: string;
  options: { label: string; text: string }[]; // A, B, C, D with randomized text
  correctLabel: string; // Current A/B/C/D matching the correct text
  correctText: string;
  explanation: string;
  isValid?: boolean;
  validationError?: string;
}

export interface Exam {
  id: string;
  title: string;
  subtitle: string;
  durationMinutes: number;
  totalQuestions: number;
  questions: Question[];
}

export interface Experiment {
  id: string;
  lessonId: number;
  title: string;
  objectives: string[];
  tools: string[];
  steps: string[];
  phenomenon: string;
  conclusion: string;
  quizQuestion: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  };
}

export interface QuizAttempt {
  id: string;
  type: 'practice' | 'mini-test' | 'exam';
  title: string;
  lessonId?: number;
  date: string;
  score: number; // 0 to 10
  correctCount: number;
  wrongCount: number;
  totalQuestions: number;
  timeSpentSeconds: number;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface ExamResult {
  id: string;
  examTitle: string;
  score: number;
  totalQuestions: number;
  timeSpentSeconds: number;
  completedAt: string;
}

export interface UserProgress {
  completedLessons: number[];
  quizScores: Record<number, number>;
  totalQuestionsAnswered: number;
  correctAnswersCount: number;
  examHistory: ExamResult[];
  streakDays: number;
  lastActiveDate: string;
  soundEnabled: boolean;
  badges: Badge[];
}

export type TabType = 'lessons' | 'detail' | 'simulations' | 'games' | 'exam' | 'progress';

export interface UserStats {
  lessonsLearned: number[]; // lesson IDs marked completed
  completedQuizzes: QuizAttempt[];
  soundEnabled: boolean;
  highScore: number;
  miniGameScores: { [gameId: string]: number };
}

export interface LessonSpeedGame {
  id: string;
  title: string;
  timeLimit: number; // in seconds (15-30s)
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface LessonMatchPair {
  id: string;
  left: string;
  right: string;
  category: 'Đại lượng - Ký hiệu' | 'Đại lượng - Đơn vị' | 'Đại lượng - Công thức' | 'Hiện tượng - Giải thích' | 'Thiết bị - Công dụng';
  explanation?: string;
}

export interface LessonMatchGame {
  id: string;
  title: string;
  pairs: LessonMatchPair[];
}

export interface LessonPredictGame {
  id: string;
  title: string;
  setupDescription: string;
  visualType: string;
  question: string;
  options: string[];
  correctAnswer: string;
  actualOutcome: string;
  explanation: string;
}

export interface LessonMiniGamesSet {
  lessonId: number;
  speedGame: LessonSpeedGame;
  matchGame: LessonMatchGame;
  predictGame: LessonPredictGame;
}


