import React, { useState, useEffect } from 'react';
import { ExamResult, UserProgress, ShuffledQuestion } from '../types';
import { getExamQuestionsWithMetadata } from '../data/questionBank';
import { shuffleQuestion } from '../utils/random';
import { soundManager } from '../utils/audio';
import { recordExamResult } from '../utils/storage';
import { FormattedText } from './MathView';
import confetti from 'canvas-confetti';
import { 
  FileCheck2, 
  Clock, 
  Award, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  AlertTriangle, 
  Play, 
  BookOpen,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { QuestionReportModal } from './QuestionReportModal';
import { AIExplanationModal } from './AIExplanationModal';
import { ExplainRequestParams } from '../utils/aiExplainer';

interface ExamPreset {
  id: string;
  title: string;
  description: string;
  durationMinutes: number;
  questionCount: number;
  lessonRange?: number[];
  badge: string;
}

const EXAM_PRESETS: ExamPreset[] = [
  {
    id: 'test-15',
    title: 'Kiểm Tra Nhanh 15 Phút',
    description: '10 câu trắc nghiệm ngẫu nhiên kiểm tra nhanh phản xạ kiến thức toàn diện.',
    durationMinutes: 15,
    questionCount: 10,
    badge: '10 Câu'
  },
  {
    id: 'test-45',
    title: 'Kiểm Tra 1 Tiết (45 Phút)',
    description: '25 câu trắc nghiệm chuẩn cấu trúc đề kiểm tra định kì của trường học.',
    durationMinutes: 45,
    questionCount: 25,
    badge: '25 Câu'
  },
  {
    id: 'exam-hk1',
    title: 'Đề Thi Học Kì I (Bài 1 - 10)',
    description: 'Chuyên đề Động năng, Thế năng, Cơ năng và Quang học khúc xạ, thấu kính.',
    durationMinutes: 45,
    questionCount: 30,
    lessonRange: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    badge: 'Học kì 1'
  },
  {
    id: 'exam-hk2',
    title: 'Đề Thi Tổng Hợp Cả Năm (Bài 1 - 17)',
    description: '40 câu bao quát toàn bộ 17 bài học trong chương trình Vật Lý 9.',
    durationMinutes: 50,
    questionCount: 40,
    badge: 'Cả năm'
  }
];

const ACTIVE_EXAM_STORAGE_KEY = 'vatly9_active_exam_session_v2';

interface SavedExamSession {
  preset: ExamPreset;
  questions: ShuffledQuestion[];
  userAnswers: Record<number, string>;
  currentIdx: number;
  startedAt: number; // timestamp in ms
  totalSeconds: number;
  isFinished: boolean;
}

interface ExamModeProps {
  userProgress: UserProgress;
  onUpdateProgress: (progress: UserProgress) => void;
}

export const ExamMode: React.FC<ExamModeProps> = ({
  userProgress,
  onUpdateProgress
}) => {
  const [activeExam, setActiveExam] = useState<ExamPreset | null>(null);
  const [questions, setQuestions] = useState<ShuffledQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isExamActive, setIsExamActive] = useState<boolean>(false);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [reviewMode, setReviewMode] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [activeExamBanner, setActiveExamBanner] = useState<SavedExamSession | null>(null);

  // Modals
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportedQuestionData, setReportedQuestionData] = useState<{
    id: string;
    text: string;
    options: string[];
    correctAnswer: string;
    userAnswer?: string;
    lessonId: number;
  } | null>(null);

  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiExplainParams, setAiExplainParams] = useState<ExplainRequestParams | null>(null);

  // Check for unfinished active exam on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(ACTIVE_EXAM_STORAGE_KEY);
      if (raw) {
        const saved: SavedExamSession = JSON.parse(raw);
        if (saved && !saved.isFinished && Array.isArray(saved.questions) && saved.questions.length > 0) {
          const elapsedSeconds = Math.floor((Date.now() - saved.startedAt) / 1000);
          const remaining = saved.totalSeconds - elapsedSeconds;

          if (remaining > 0) {
            setActiveExamBanner(saved);
          } else {
            // Time expired while away -> auto grade
            autoGradeExpiredSavedExam(saved);
          }
        }
      }
    } catch (e) {
      console.warn('Failed to parse saved exam session', e);
      localStorage.removeItem(ACTIVE_EXAM_STORAGE_KEY);
    }
  }, []);

  const autoGradeExpiredSavedExam = (saved: SavedExamSession) => {
    let score = 0;
    saved.questions.forEach((q, idx) => {
      const ans = saved.userAnswers[idx];
      if (ans && ans.trim().toLowerCase() === q.correctText.trim().toLowerCase()) {
        score += 1;
      }
    });

    const result: ExamResult = {
      id: `exam-auto-${Date.now()}`,
      examTitle: saved.preset.title,
      score,
      totalQuestions: saved.questions.length,
      timeSpentSeconds: saved.totalSeconds,
      completedAt: new Date().toISOString()
    };

    localStorage.removeItem(ACTIVE_EXAM_STORAGE_KEY);
    setExamResult(result);
    setQuestions(saved.questions);
    setUserAnswers(saved.userAnswers);
    setActiveExam(saved.preset);
    setIsExamActive(false);
    const updated = recordExamResult(result);
    onUpdateProgress(updated);
  };

  const resumeActiveExam = () => {
    if (!activeExamBanner) return;
    const elapsedSeconds = Math.floor((Date.now() - activeExamBanner.startedAt) / 1000);
    const remaining = Math.max(1, activeExamBanner.totalSeconds - elapsedSeconds);

    setQuestions(activeExamBanner.questions);
    setUserAnswers(activeExamBanner.userAnswers);
    setCurrentIdx(activeExamBanner.currentIdx || 0);
    setActiveExam(activeExamBanner.preset);
    setTimeLeft(remaining);
    setIsExamActive(true);
    setExamResult(null);
    setReviewMode(false);
    setIsSubmitting(false);
    setActiveExamBanner(null);
  };

  const discardActiveExam = () => {
    localStorage.removeItem(ACTIVE_EXAM_STORAGE_KEY);
    setActiveExamBanner(null);
  };

  const persistCurrentExam = (
    preset: ExamPreset,
    qList: ShuffledQuestion[],
    answers: Record<number, string>,
    idx: number,
    startMs: number,
    totalSec: number
  ) => {
    try {
      const payload: SavedExamSession = {
        preset,
        questions: qList,
        userAnswers: answers,
        currentIdx: idx,
        startedAt: startMs,
        totalSeconds: totalSec,
        isFinished: false
      };
      localStorage.setItem(ACTIVE_EXAM_STORAGE_KEY, JSON.stringify(payload));
    } catch {}
  };

  const startExam = (preset: ExamPreset) => {
    const meta = getExamQuestionsWithMetadata(preset.questionCount, preset.lessonRange);
    const shuffled = meta.questions
      .map(q => shuffleQuestion(q))
      .filter(sq => sq.isValid !== false);

    setQuestions(shuffled);
    setActiveExam(preset);
    setUserAnswers({});
    setCurrentIdx(0);
    const durationSec = preset.durationMinutes * 60;
    setTimeLeft(durationSec);
    setIsExamActive(true);
    setExamResult(null);
    setReviewMode(false);
    setIsSubmitting(false);
    setActiveExamBanner(null);

    persistCurrentExam(preset, shuffled, {}, 0, Date.now(), durationSec);
  };

  // Timer countdown
  useEffect(() => {
    if (!isExamActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          submitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamActive, timeLeft]);

  const handleSelectAnswer = (optionText: string) => {
    if (!isExamActive || isSubmitting) return;
    const newAnswers = { ...userAnswers, [currentIdx]: optionText };
    setUserAnswers(newAnswers);

    if (activeExam) {
      const savedRaw = localStorage.getItem(ACTIVE_EXAM_STORAGE_KEY);
      if (savedRaw) {
        try {
          const parsed = JSON.parse(savedRaw);
          persistCurrentExam(activeExam, questions, newAnswers, currentIdx, parsed.startedAt, parsed.totalSeconds);
        } catch {}
      }
    }
  };

  const handleGoToQuestion = (idx: number) => {
    setCurrentIdx(idx);
    if (activeExam) {
      const savedRaw = localStorage.getItem(ACTIVE_EXAM_STORAGE_KEY);
      if (savedRaw) {
        try {
          const parsed = JSON.parse(savedRaw);
          persistCurrentExam(activeExam, questions, userAnswers, idx, parsed.startedAt, parsed.totalSeconds);
        } catch {}
      }
    }
  };

  const submitExam = () => {
    // Protection against double submit
    if (isSubmitting || !activeExam) return;
    setIsSubmitting(true);
    setIsExamActive(false);
    localStorage.removeItem(ACTIVE_EXAM_STORAGE_KEY);

    // Score based on canonical database key text comparison
    let score = 0;
    questions.forEach((q, idx) => {
      const chosen = userAnswers[idx];
      if (chosen && chosen.trim().toLowerCase() === q.correctText.trim().toLowerCase()) {
        score += 1;
      }
    });

    const timeSpent = activeExam.durationMinutes * 60 - timeLeft;

    const result: ExamResult = {
      id: `exam-${Date.now()}`,
      examTitle: activeExam.title,
      score,
      totalQuestions: questions.length,
      timeSpentSeconds: Math.max(10, timeSpent),
      completedAt: new Date().toISOString()
    };

    setExamResult(result);
    const updated = recordExamResult(result);
    onUpdateProgress(updated);

    if (score >= questions.length * 0.8) {
      soundManager.playApplause();
      confetti({ particleCount: 120, spread: 80 });
    } else {
      soundManager.playCorrect();
    }
  };

  const openReportModal = (q: ShuffledQuestion, userAnswer?: string) => {
    setReportedQuestionData({
      id: q.id,
      text: q.question,
      options: q.options.map(o => o.text),
      correctAnswer: q.correctText,
      userAnswer: userAnswer || userAnswers[currentIdx],
      lessonId: q.lessonId
    });
    setReportModalOpen(true);
  };

  const openAiExplainModal = (q: ShuffledQuestion, userAnswer?: string) => {
    setAiExplainParams({
      question: q.question,
      options: q.options.map(o => o.text),
      chosenAnswer: userAnswer || userAnswers[currentIdx] || '(Chưa chọn câu trả lời)',
      correctAnswer: q.correctText,
      explanation: q.explanation,
      lessonTitle: `Bài ${q.lessonId}`,
      difficulty: q.difficulty
    });
    setAiModalOpen(true);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ = questions[currentIdx];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* View 1: Preset Selection Screen */}
      {!isExamActive && !examResult && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-slate-800">
                  Luyện Thi & Kiểm Tra Định Kì
                </h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  Làm đề thi bấm giờ thực tế, chấm điểm ngay theo đáp án chuẩn và hỗ trợ giải thích sư phạm chi tiết
                </p>
              </div>
            </div>
          </div>

          {/* Active In-Progress Exam Resumption Banner */}
          {activeExamBanner && (
            <div className="p-5 rounded-3xl bg-amber-50 border-2 border-amber-300 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fadeIn">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-amber-200 text-amber-900 flex items-center justify-center font-bold shrink-0">
                  <Clock className="w-6 h-6 text-amber-900 animate-pulse" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-amber-950">
                    Phát hiện bài thi chưa hoàn thành: {activeExamBanner.preset.title}
                  </div>
                  <div className="text-xs text-amber-800 mt-0.5">
                    Đã làm {Object.keys(activeExamBanner.userAnswers).length}/{activeExamBanner.questions.length} câu • Bắt đầu lúc {new Date(activeExamBanner.startedAt).toLocaleTimeString('vi-VN')}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={resumeActiveExam}
                  className="px-5 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs cursor-pointer transition-all"
                >
                  Tiếp Tục Làm Bài
                </button>
                <button
                  onClick={discardActiveExam}
                  className="px-3.5 py-2.5 rounded-2xl border border-amber-300 text-amber-900 hover:bg-amber-100 font-semibold text-xs cursor-pointer"
                >
                  Hủy Đề Này
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {EXAM_PRESETS.map((preset) => (
              <div
                key={preset.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {preset.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-600 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {preset.durationMinutes} phút
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-800 mb-2">
                    {preset.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                    {preset.description}
                  </p>
                </div>

                <button
                  onClick={() => startExam(preset)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs cursor-pointer"
                >
                  <Play className="w-4 h-4" />
                  <span>Bắt Đầu Làm Đề ({preset.questionCount} câu)</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* View 2: Active Exam Taking Interface */}
      {isExamActive && currentQ && (
        <div className="space-y-6">
          {/* Status Bar */}
          <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-indigo-600 block uppercase tracking-wider">
                {activeExam?.title}
              </span>
              <span className="text-sm sm:text-base font-extrabold text-slate-800">
                Câu {currentIdx + 1} / {questions.length} (Bài {currentQ.lessonId})
              </span>
            </div>

            {/* Timer and Submit Action */}
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-mono text-base font-black ${
                timeLeft < 300 
                  ? 'bg-rose-100 text-rose-700 animate-pulse' 
                  : 'bg-indigo-50 text-indigo-700'
              }`}>
                <Clock className="w-5 h-5" />
                <span>{formatTime(timeLeft)}</span>
              </div>

              <button
                onClick={submitExam}
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-xs cursor-pointer transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Đang Nộp...' : 'Nộp Bài Thi'}
              </button>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-100 text-slate-700">
                  Câu hỏi #{currentIdx + 1}
                </span>
                <span className="text-xs text-slate-500">
                  {currentQ.difficulty === 'de' ? '🟢 Nhận biết' : currentQ.difficulty === 'kho' ? '🟡 Thông hiểu - Vận dụng' : '🔴 Vận dụng cao'}
                </span>
              </div>

              <button
                onClick={() => openReportModal(currentQ, userAnswers[currentIdx])}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-2xs font-semibold rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Báo lỗi câu này</span>
              </button>
            </div>

            <div className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed">
              <FormattedText text={currentQ.question} />
            </div>

            {/* 4 Options Grid */}
            <div className="space-y-3">
              {currentQ.options.map((opt) => {
                const isSelected = userAnswers[currentIdx] === opt.text;

                return (
                  <button
                    key={opt.label}
                    onClick={() => handleSelectAnswer(opt.text)}
                    className={`w-full p-4 rounded-2xl border-2 text-left transition-all flex items-start gap-3 cursor-pointer ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/60 shadow-xs'
                        : 'border-slate-200/80 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {opt.label}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-800 pt-0.5 leading-relaxed font-medium">
                      <FormattedText text={opt.text} />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Question Pagination Grid */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                <button
                  onClick={() => handleGoToQuestion(Math.max(0, currentIdx - 1))}
                  disabled={currentIdx === 0}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 disabled:opacity-30 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Câu Trước</span>
                </button>

                <button
                  onClick={() => handleGoToQuestion(Math.min(questions.length - 1, currentIdx + 1))}
                  disabled={currentIdx === questions.length - 1}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 text-white font-semibold text-xs hover:bg-slate-900 disabled:opacity-30 cursor-pointer"
                >
                  <span>Câu Tiếp</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Number bubbles */}
              <div className="flex flex-wrap gap-1.5 justify-center max-w-full overflow-x-auto">
                {questions.map((_, i) => {
                  const answered = !!userAnswers[i];
                  const current = i === currentIdx;
                  return (
                    <button
                      key={i}
                      onClick={() => handleGoToQuestion(i)}
                      className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        current
                          ? 'bg-indigo-600 text-white ring-2 ring-indigo-400 ring-offset-1'
                          : answered
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View 3: Exam Result Screen */}
      {examResult && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs text-center max-w-xl mx-auto">
            <div className="w-20 h-20 rounded-3xl bg-linear-to-tr from-indigo-500 to-sky-500 flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-indigo-200">
              <Award className="w-10 h-10" />
            </div>

            <h2 className="text-2xl font-black text-slate-800 mb-1">
              Kết Quả {examResult.examTitle}
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Thời gian làm bài: {formatTime(examResult.timeSpentSeconds)}
            </p>

            {/* Score Ring / Pill */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 mb-6">
              <div className="text-4xl sm:text-5xl font-black text-indigo-600 mb-2">
                {examResult.score} / {examResult.totalQuestions}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600">
                Tỷ lệ chính xác: {Math.round((examResult.score / examResult.totalQuestions) * 100)}%
              </div>
              <div className="text-xs text-slate-500 mt-2 font-medium">
                {examResult.score >= examResult.totalQuestions * 0.8
                  ? '🎉 Xuất sắc! Em nắm rất vững kiến thức và phản xạ rất nhanh!'
                  : examResult.score >= examResult.totalQuestions * 0.5
                  ? '👍 Khá! Hãy xem lại các câu chưa đúng để củng cố thêm nhé!'
                  : '💪 Cần cố gắng thêm! Hãy ôn lại các bài lý thuyết rồi thử sức lại nhé!'}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setReviewMode(!reviewMode)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>{reviewMode ? 'Ẩn Lời Giải' : 'Xem Chi Tiết Từng Câu'}</span>
              </button>

              <button
                onClick={() => {
                  setExamResult(null);
                  setActiveExam(null);
                  setReviewMode(false);
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs sm:text-sm hover:bg-indigo-700 shadow-xs cursor-pointer"
              >
                <span>Chọn Đề Thi Khác</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Detailed Question Review List */}
          {reviewMode && (
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Chi Tiết Đáp Án & Hướng Dẫn Giải:
              </h3>
              {questions.map((q, idx) => {
                const userAns = userAnswers[idx];
                const isSkipped = !userAns || userAns.trim().length === 0;
                const isCorrect = !isSkipped && userAns.trim().toLowerCase() === q.correctText.trim().toLowerCase();

                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border ${
                      isCorrect 
                        ? 'bg-emerald-50/40 border-emerald-200' 
                        : isSkipped
                        ? 'bg-amber-50/40 border-amber-200'
                        : 'bg-rose-50/40 border-rose-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-slate-800 text-white text-xs font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-xs text-slate-600 font-semibold">
                          Bài {q.lessonId}
                        </span>
                      </div>

                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          <CheckCircle className="w-3.5 h-3.5" /> Đúng (+1 điểm)
                        </span>
                      ) : isSkipped ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                          <HelpCircle className="w-3.5 h-3.5" /> Chưa làm / Bỏ trống (0 điểm)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                          <XCircle className="w-3.5 h-3.5" /> Sai (0 điểm)
                        </span>
                      )}
                    </div>

                    <div className="text-sm font-semibold text-slate-800 mb-3 leading-relaxed">
                      <FormattedText text={q.question} />
                    </div>

                    <div className="text-xs space-y-1.5 mb-3">
                      <div className="text-slate-600">
                        Phương án bạn đã chọn: <strong className={isCorrect ? 'text-emerald-700' : isSkipped ? 'text-amber-700 italic' : 'text-rose-700'}>
                          <FormattedText text={userAns || '(Chưa chọn / Bỏ trống)'} />
                        </strong>
                      </div>
                      {!isCorrect && (
                        <div className="text-emerald-800 font-bold">
                          Đáp án đúng chuẩn SGK: <FormattedText text={q.correctText} />
                        </div>
                      )}
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-600 leading-relaxed mb-3">
                      <strong className="text-slate-900">💡 Hướng dẫn & công thức: </strong>
                      <FormattedText text={q.explanation} />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200/60">
                      <button
                        onClick={() => openAiExplainModal(q, userAns)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs cursor-pointer transition-all"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Giải thích thêm cho em</span>
                      </button>

                      <button
                        onClick={() => openReportModal(q, userAns)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 cursor-pointer transition-all"
                      >
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>Báo lỗi câu hỏi</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Question Error Reporting Modal */}
      {reportedQuestionData && (
        <QuestionReportModal
          isOpen={reportModalOpen}
          onClose={() => setReportModalOpen(false)}
          questionId={reportedQuestionData.id}
          lessonId={reportedQuestionData.lessonId}
          lessonTitle={`Bài ${reportedQuestionData.lessonId}`}
          questionText={reportedQuestionData.text}
          options={reportedQuestionData.options}
          correctAnswer={reportedQuestionData.correctAnswer}
          userSelectedAnswer={reportedQuestionData.userAnswer}
        />
      )}

      {/* AI Pedagogical Explanation Modal */}
      <AIExplanationModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        params={aiExplainParams}
      />
    </div>
  );
};
