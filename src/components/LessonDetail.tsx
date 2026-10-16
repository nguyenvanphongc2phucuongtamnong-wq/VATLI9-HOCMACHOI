import React, { useState, useEffect } from 'react';
import { Lesson, UserProgress, ShuffledQuestion, Formula, ExampleProblem } from '../types';
import { getQuestionsByLesson } from '../data/questionBank';
import { shuffleQuestion } from '../utils/random';
import { soundManager } from '../utils/audio';
import { recordQuizAttempt } from '../utils/storage';
import { MathView, FormattedText } from './MathView';
import confetti from 'canvas-confetti';

import { 
  ArrowLeft, 
  BookOpen, 
  HelpCircle, 
  Sparkles, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  Award, 
  ChevronRight,
  Calculator,
  Lightbulb,
  FileText,
  Volume2,
  ChevronLeft,
  AlertTriangle,
  Play,
  Flame,
  Target,
  RefreshCw,
  Clock,
  HelpCircle as QuestionIcon
} from 'lucide-react';
import { 
  PracticeMode, 
  generateLessonQuiz, 
  recordQuestionAnswer,
  getQuestionHistory
} from '../utils/quizGenerator';
import { 
  getActiveSession, 
  saveActiveSession, 
  clearActiveSession,
  getStudentProfile,
  registerAutoSaveListeners,
  ActivePracticeSession 
} from '../utils/sessionPersistence';
import { QuestionReportModal } from './QuestionReportModal';
import { AIExplanationModal } from './AIExplanationModal';
import { ExplainRequestParams } from '../utils/aiExplainer';

interface LessonDetailProps {
  lesson: Lesson;
  userProgress: UserProgress;
  initialTab?: 'theory' | 'quiz';
  onBack: () => void;
  onNextLesson?: (nextLessonId: number) => void;
  onUpdateProgress: (progress: UserProgress) => void;
}

export const LessonDetail: React.FC<LessonDetailProps> = ({
  lesson,
  userProgress,
  initialTab = 'theory',
  onBack,
  onNextLesson,
  onUpdateProgress
}) => {
  const [activeTab, setActiveTab] = useState<'theory' | 'formulas' | 'examples' | 'quiz'>(
    initialTab === 'quiz' ? 'quiz' : 'theory'
  );

  // Extract all formulas and examples from sections
  const allFormulas: Formula[] = lesson.sections.flatMap(s => s.formulas || []);
  const allExamples: ExampleProblem[] = lesson.sections.flatMap(s => s.examples || []);

  // Quiz state & practice mode
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('new');
  const [questions, setQuestions] = useState<ShuffledQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [modeNotice, setModeNotice] = useState<string | null>(null);
  const [activeSessionBanner, setActiveSessionBanner] = useState<ActivePracticeSession | null>(null);

  // Modals state
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportedQuestionData, setReportedQuestionData] = useState<{
    id: string;
    text: string;
    options: string[];
    correctAnswer: string;
    userAnswer?: string;
  } | null>(null);

  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiExplainParams, setAiExplainParams] = useState<ExplainRequestParams | null>(null);

  // Student stats for this lesson
  const questionHistory = getQuestionHistory();
  const lessonQuestions = getQuestionsByLesson(lesson.id);
  const wrongCountInLesson = lessonQuestions.filter(q => {
    const rec = questionHistory[q.id];
    return rec && (rec.lastResult === 'wrong' || rec.timesWrong > 0);
  }).length;
  const unansweredCountInLesson = lessonQuestions.filter(q => {
    const rec = questionHistory[q.id];
    return !rec || rec.timesAnswered === 0;
  }).length;

  // Initialize or resume quiz
  const initQuiz = (mode: PracticeMode = practiceMode, forceNew: boolean = false) => {
    if (!forceNew) {
      const existing = getActiveSession(lesson.id);
      if (existing && !existing.isFinished && Array.isArray(existing.questions) && existing.questions.length > 0) {
        setActiveSessionBanner(existing);
        setQuestions(existing.questions);
        setCurrentQIndex(existing.currentQIndex || 0);
        setSelectedAnswers(existing.selectedAnswers || {});
        setScore(existing.score || 0);
        setPracticeMode(existing.mode || mode);
        const expMap: Record<number, boolean> = {};
        Object.keys(existing.selectedAnswers || {}).forEach(idx => {
          expMap[Number(idx)] = true;
        });
        setShowExplanation(expMap);
        setQuizFinished(false);
        return;
      }
    }

    // Generate fresh differentiated quiz
    const result = generateLessonQuiz(lesson.id, mode, 20);
    setQuestions(result.questions);
    setCurrentQIndex(0);
    setSelectedAnswers({});
    setShowExplanation({});
    setQuizFinished(false);
    setScore(0);
    setPracticeMode(mode);
    setModeNotice(result.notice || null);
    setActiveSessionBanner(null);

    // Save starting session state immediately so refresh preserves the question set
    const profile = getStudentProfile();
    saveActiveSession({
      studentId: profile.studentId,
      studentName: profile.studentName,
      sessionId: `sess-${lesson.id}-${Date.now()}`,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      mode,
      questions: result.questions,
      selectedAnswers: {},
      currentQIndex: 0,
      score: 0,
      isFinished: false,
      startedAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    });
  };

  const handleResumeSession = () => {
    if (activeSessionBanner) {
      setQuestions(activeSessionBanner.questions);
      setCurrentQIndex(activeSessionBanner.currentQIndex || 0);
      setSelectedAnswers(activeSessionBanner.selectedAnswers || {});
      setScore(activeSessionBanner.score || 0);
      setPracticeMode(activeSessionBanner.mode);
      const expMap: Record<number, boolean> = {};
      Object.keys(activeSessionBanner.selectedAnswers || {}).forEach(idx => {
        expMap[Number(idx)] = true;
      });
      setShowExplanation(expMap);
      setQuizFinished(false);
      setActiveSessionBanner(null);
    }
  };

  const handleStartFreshSession = () => {
    clearActiveSession(lesson.id);
    setActiveSessionBanner(null);
    initQuiz(practiceMode, true);
  };

  // Register clean auto-save listeners on unmount or tab switch
  useEffect(() => {
    const unregister = registerAutoSaveListeners(() => {
      if (quizFinished || questions.length === 0) return null;
      const profile = getStudentProfile();
      return {
        studentId: profile.studentId,
        studentName: profile.studentName,
        sessionId: `sess-${lesson.id}`,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        mode: practiceMode,
        questions,
        selectedAnswers,
        currentQIndex,
        score,
        isFinished: false,
        startedAt: new Date().toISOString(),
        lastUpdated: new Date().toISOString()
      };
    });
    return unregister;
  }, [quizFinished, questions, selectedAnswers, currentQIndex, score, practiceMode, lesson.id, lesson.title]);

  useEffect(() => {
    initQuiz(practiceMode, false);
    if (initialTab === 'quiz') {
      setActiveTab('quiz');
    } else {
      setActiveTab('theory');
    }
  }, [lesson.id, initialTab]);

  const handleSelectOption = (optionText: string) => {
    if (selectedAnswers[currentQIndex]) return; // Already answered

    const currentQ = questions[currentQIndex];
    const isCorrect = optionText.trim().toLowerCase() === currentQ.correctText.trim().toLowerCase();

    const newSelected = { ...selectedAnswers, [currentQIndex]: optionText };
    setSelectedAnswers(newSelected);
    setShowExplanation({ ...showExplanation, [currentQIndex]: true });

    const newScore = isCorrect ? score + 1 : score;

    // Track question statistics for practice modes
    recordQuestionAnswer(currentQ.id, lesson.id, isCorrect);

    // Auto-save active session
    const profile = getStudentProfile();
    saveActiveSession({
      studentId: profile.studentId,
      studentName: profile.studentName,
      sessionId: `sess-${lesson.id}`,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      mode: practiceMode,
      questions,
      selectedAnswers: newSelected,
      currentQIndex,
      score: newScore,
      isFinished: false,
      startedAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    });

    if (isCorrect) {
      soundManager.playCorrect();
      setScore(prev => prev + 1);
      // Confetti burst
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
      });
    } else {
      soundManager.playWrong();
    }
  };

  const handleFinishQuiz = () => {
    const finalScore = score;
    setQuizFinished(true);
    clearActiveSession(lesson.id);

    const updated = recordQuizAttempt(lesson.id, finalScore, questions.length);
    onUpdateProgress(updated);

    if (finalScore >= questions.length * 0.8) {
      soundManager.playApplause();
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const openReportModal = (q: ShuffledQuestion, userAnswer?: string) => {
    setReportedQuestionData({
      id: q.id,
      text: q.question,
      options: q.options.map(o => o.text),
      correctAnswer: q.correctText,
      userAnswer: userAnswer || selectedAnswers[currentQIndex]
    });
    setReportModalOpen(true);
  };

  const openAiExplainModal = (q: ShuffledQuestion, userAnswer?: string) => {
    setAiExplainParams({
      question: q.question,
      options: q.options.map(o => o.text),
      chosenAnswer: userAnswer || selectedAnswers[currentQIndex] || '(Chưa chọn câu trả lời)',
      correctAnswer: q.correctText,
      explanation: q.explanation,
      lessonTitle: lesson.title,
      difficulty: q.difficulty
    });
    setAiModalOpen(true);
  };

  const currentQ = questions[currentQIndex];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Back button & Lesson Title Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex items-center justify-between gap-4 mb-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors"
            id="btn-back-to-lessons"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Danh sách bài học</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-bold rounded-lg bg-sky-100 text-sky-700 uppercase">
              Bài {lesson.id} / 17
            </span>
            {userProgress.completedLessons.includes(lesson.id) && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <CheckCircle className="w-3.5 h-3.5" />
                Đã hoàn thành
              </span>
            )}
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-3 tracking-tight">
          {lesson.title}
        </h1>

        {/* Objectives */}
        <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-4 mb-4">
          <h2 className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Mục tiêu bài học cần đạt
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-sky-950">
            {lesson.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Sub-Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pt-2" role="tablist">
          <button
            onClick={() => setActiveTab('theory')}
            className={`flex items-center gap-2 pb-3 px-4 text-sm font-semibold transition-all border-b-2 ${
              activeTab === 'theory'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Lý Thuyết Chi Tiết</span>
          </button>

          <button
            onClick={() => setActiveTab('formulas')}
            className={`flex items-center gap-2 pb-3 px-4 text-sm font-semibold transition-all border-b-2 ${
              activeTab === 'formulas'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Công Thức & Đơn Vị ({allFormulas.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('examples')}
            className={`flex items-center gap-2 pb-3 px-4 text-sm font-semibold transition-all border-b-2 ${
              activeTab === 'examples'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>Ví Dụ & Thực Tế ({allExamples.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 pb-3 px-4 text-sm font-semibold transition-all border-b-2 ${
              activeTab === 'quiz'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>20 Câu Trắc Nghiệm</span>
            <span className="px-1.5 py-0.5 text-xs rounded-full bg-amber-100 text-amber-800">
              Có chấm điểm
            </span>
          </button>
        </div>
      </div>

      {/* Tab 1: Detailed Theory */}
      {activeTab === 'theory' && (
        <div className="space-y-6">
          {lesson.sections.map((section, sIdx) => (
            <div 
              key={sIdx} 
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-sky-100 text-sky-700 text-sm font-bold">
                  {sIdx + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                  {section.title}
                </h3>
              </div>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}><FormattedText text={paragraph} /></p>
                ))}
              </div>

              {section.keyPoints && section.keyPoints.length > 0 && (
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-900 text-xs sm:text-sm uppercase tracking-wider block mb-1">
                      Điểm cốt lõi cần nhớ
                    </span>
                    <ul className="space-y-1 text-xs sm:text-sm text-amber-950 leading-relaxed list-disc pl-4">
                      {section.keyPoints.map((kp, kpIdx) => (
                        <li key={kpIdx}><FormattedText text={kp} /></li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Quick jump to quiz button */}
          <div className="flex justify-end pt-4">
            <button
              onClick={() => setActiveTab('quiz')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-sky-600 text-white font-semibold text-sm hover:bg-sky-700 shadow-md shadow-sky-200 transition-all hover:scale-102 cursor-pointer"
              id="btn-jump-to-quiz"
            >
              <span>Làm ngay 20 câu trắc nghiệm bài {lesson.id}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Formulas & Units */}
      {activeTab === 'formulas' && (
        <div className="space-y-4">
          {allFormulas.length === 0 ? (
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 text-center text-slate-500">
              Bài học này tập trung vào nhận biết dụng cụ và hiện tượng định tính, không có công thức tính toán phức tạp.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {allFormulas.map((f, fIdx) => (
                <div
                  key={fIdx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-sky-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider block mb-1">
                      Công thức {fIdx + 1}
                    </span>
                    <h3 className="text-base font-bold text-slate-800 mb-3">
                      {f.name}
                    </h3>

                    <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 text-center mb-4 overflow-x-auto">
                      <MathView math={f.latex} display={true} className="text-xl sm:text-2xl font-bold text-sky-950" />
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      <FormattedText text={f.description} />
                    </p>

                    {f.units && (
                      <div className="space-y-1.5 mb-4">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                          Đơn vị các đại lượng theo SGK:
                        </span>
                        {Object.entries(f.units).map(([symbol, unitDesc], uIdx) => (
                          <div key={uIdx} className="text-xs sm:text-sm text-slate-600 flex items-baseline gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                            <span><strong>{symbol}</strong>: <FormattedText text={unitDesc} /></span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Real Life Examples */}
      {activeTab === 'examples' && (
        <div className="space-y-5">
          {allExamples.length === 0 ? (
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 text-center text-slate-500">
              Bài học này tập trung vào thực hành trực tiếp tại phòng thí nghiệm.
            </div>
          ) : (
            allExamples.map((ex, exIdx) => (
              <div
                key={exIdx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold">
                    Ví Dụ {exIdx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800">
                    {ex.title}
                  </h3>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                  <strong>Đề bài / Hiện tượng: </strong>
                  <FormattedText text={ex.problem} />
                </div>

                {ex.given && ex.given.length > 0 && (
                  <div className="mb-4 text-xs sm:text-sm text-slate-600">
                    <strong>Tóm tắt: </strong>
                    {ex.given.map((g, gIdx) => (
                      <span key={gIdx}>
                        <FormattedText text={g} />
                        {gIdx < ex.given!.length - 1 ? '; ' : ''}
                      </span>
                    ))}
                  </div>
                )}

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-emerald-950 text-xs sm:text-sm leading-relaxed space-y-2">
                  <strong className="text-emerald-900 block mb-1">
                    💡 Hướng dẫn phân tích & lời giải:
                  </strong>
                  {ex.steps.map((step, sIdx) => (
                    <div key={sIdx}>
                      <FormattedText text={step} />
                    </div>
                  ))}
                  <div className="pt-2 font-bold text-emerald-900 border-t border-emerald-200/60 flex items-center gap-1.5">
                    <span>Đáp số:</span>
                    <FormattedText text={ex.answer} />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab 4: 20 Questions Quiz */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          {!quizFinished ? (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              {/* Active Session Restoration Banner */}
              {activeSessionBanner && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-200/80 text-amber-900 flex items-center justify-center font-bold">
                      <Clock className="w-5 h-5 text-amber-800" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold text-amber-950">
                        Phát hiện bài làm dở dang lúc {new Date(activeSessionBanner.lastUpdated).toLocaleTimeString('vi-VN')}
                      </div>
                      <div className="text-2xs sm:text-xs text-amber-800">
                        Đã làm {Object.keys(activeSessionBanner.selectedAnswers).length}/{activeSessionBanner.questions.length} câu • Đúng {activeSessionBanner.score} câu • Chế độ: {activeSessionBanner.mode === 'new' ? 'Bộ đề mới' : activeSessionBanner.mode === 'review_wrong' ? 'Ôn câu sai' : activeSessionBanner.mode === 'unanswered' ? 'Câu chưa làm' : 'Thích ứng'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      onClick={handleResumeSession}
                      className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs cursor-pointer shadow-xs transition-all"
                    >
                      Tiếp Tục Làm Tiếp
                    </button>
                    <button
                      onClick={handleStartFreshSession}
                      className="px-3 py-2 rounded-xl border border-amber-300 text-amber-900 hover:bg-amber-100 font-semibold text-xs cursor-pointer"
                    >
                      Tạo Đề Mới
                    </button>
                  </div>
                </div>
              )}

              {/* Mode Selection Pills */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => initQuiz('new', true)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      practiceMode === 'new'
                        ? 'bg-sky-600 text-white shadow-2xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Luyện Đề Mới</span>
                  </button>
                  <button
                    onClick={() => initQuiz('review_wrong', true)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      practiceMode === 'review_wrong'
                        ? 'bg-rose-600 text-white shadow-2xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                    }`}
                  >
                    <Flame className="w-3.5 h-3.5" />
                    <span>Ôn Câu Sai ({wrongCountInLesson})</span>
                  </button>
                  <button
                    onClick={() => initQuiz('unanswered', true)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      practiceMode === 'unanswered'
                        ? 'bg-emerald-600 text-white shadow-2xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                    }`}
                  >
                    <QuestionIcon className="w-3.5 h-3.5" />
                    <span>Câu Chưa Làm ({unansweredCountInLesson})</span>
                  </button>
                  <button
                    onClick={() => initQuiz('adaptive', true)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      practiceMode === 'adaptive'
                        ? 'bg-indigo-600 text-white shadow-2xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                    }`}
                  >
                    <Target className="w-3.5 h-3.5" />
                    <span>Luyện Thích Ứng</span>
                  </button>
                </div>

                <div className="text-2xs text-slate-500 font-medium self-end sm:self-auto">
                  Chế độ: <strong className="text-slate-800">{practiceMode === 'new' ? 'Bộ đề mới' : practiceMode === 'review_wrong' ? 'Ôn câu sai' : practiceMode === 'unanswered' ? 'Luyện câu chưa làm' : 'Luyện tập thích ứng'}</strong>
                </div>
              </div>

              {modeNotice && (
                <div className="p-3 mb-6 rounded-2xl bg-sky-50 border border-sky-200 text-sky-900 text-xs flex items-center gap-2">
                  <Sparkles className="w-4 h-4 shrink-0 text-sky-600" />
                  <span>{modeNotice}</span>
                </div>
              )}

              {/* Quiz Header & Question Index Progress */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-6">
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Luyện tập trắc nghiệm bài {lesson.id}
                  </div>
                  <div className="text-lg font-extrabold text-slate-800">
                    Câu {currentQIndex + 1} / {questions.length}
                  </div>
                </div>

                {/* Score badge & quick actions */}
                <div className="flex items-center gap-3">
                  <div className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Đúng: {score} câu</span>
                  </div>

                  <button
                    onClick={() => initQuiz(practiceMode, true)}
                    className="p-2 text-slate-400 hover:text-sky-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                    title="Xáo trộn lại và làm lại từ đầu"
                    id="btn-restart-quiz"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 rounded-full h-2 mb-6 overflow-hidden">
                <div 
                  className="bg-sky-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Content */}
              {currentQ && (
                <div className="space-y-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed flex-1">
                      <FormattedText text={currentQ.question} />
                    </div>
                    <span className={`text-3xs font-extrabold uppercase px-2.5 py-1 rounded-full shrink-0 ${
                      currentQ.difficulty === 'cuc_kho'
                        ? 'bg-purple-100 text-purple-800'
                        : currentQ.difficulty === 'kho'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {currentQ.difficulty === 'cuc_kho' ? 'Vận dụng cao' : currentQ.difficulty === 'kho' ? 'Vận dụng' : 'Cơ bản'}
                    </span>
                  </div>

                  {/* Shuffled ABCD Options */}
                  <div className="grid grid-cols-1 gap-3">
                    {currentQ.options.map((option: { label: string; text: string }, optIdx: number) => {
                      const isSelected = selectedAnswers[currentQIndex] === option.text;
                      const hasAnswered = !!selectedAnswers[currentQIndex];
                      const isCorrectOption = option.text.trim().toLowerCase() === currentQ.correctText.trim().toLowerCase();

                      let btnStyle = 'bg-white border-slate-200 hover:border-sky-300 hover:bg-sky-50/40 text-slate-700 cursor-pointer';

                      if (hasAnswered) {
                        if (isCorrectOption) {
                          btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold shadow-xs';
                        } else if (isSelected && !isCorrectOption) {
                          btnStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                        } else {
                          btnStyle = 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={hasAnswered}
                          onClick={() => handleSelectOption(option.text)}
                          className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${btnStyle}`}
                          id={`quiz-opt-${currentQIndex}-${option.label}`}
                        >
                          <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                            hasAnswered && isCorrectOption
                              ? 'bg-emerald-500 text-white'
                              : hasAnswered && isSelected && !isCorrectOption
                              ? 'bg-rose-500 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            {option.label}
                          </span>
                          <span className="text-sm sm:text-base pt-0.5 leading-snug">
                            <FormattedText text={option.text} />
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Immediate Explanation Card */}
                  {showExplanation[currentQIndex] && (
                    <div className={`p-4 sm:p-5 rounded-2xl border transition-all animate-fadeIn ${
                      selectedAnswers[currentQIndex]?.trim().toLowerCase() === currentQ.correctText.trim().toLowerCase()
                        ? 'bg-emerald-50/80 border-emerald-200'
                        : 'bg-amber-50/80 border-amber-200'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        {selectedAnswers[currentQIndex]?.trim().toLowerCase() === currentQ.correctText.trim().toLowerCase() ? (
                          <>
                            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                            <span className="font-bold text-emerald-900 text-sm">
                              Chính xác! Làm rất tốt! 🎉
                            </span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                            <span className="font-bold text-rose-900 text-sm">
                              Chưa chính xác rồi. Đáp án đúng là:{' '}
                              <span className="underline font-extrabold text-emerald-800 ml-1">
                                <FormattedText text={currentQ.correctText} />
                              </span>
                            </span>
                          </>
                        )}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-2 pt-2 border-t border-slate-200/60">
                        <strong className="text-slate-900">Giải thích chi tiết: </strong>
                        <FormattedText text={currentQ.explanation} />
                      </div>

                      {/* AI Explain & Report Error Buttons */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-200/60 mt-3">
                        <button
                          onClick={() => openAiExplainModal(currentQ, selectedAnswers[currentQIndex])}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-all cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Giải thích thêm cho em</span>
                        </button>

                        <button
                          onClick={() => openReportModal(currentQ, selectedAnswers[currentQIndex])}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 transition-all cursor-pointer"
                        >
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Báo lỗi câu hỏi</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Bottom Navigation Buttons */}
                  <div className="flex items-center justify-between pt-4">
                    <button
                      disabled={currentQIndex === 0}
                      onClick={() => setCurrentQIndex(prev => prev - 1)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 text-slate-600 disabled:opacity-30 hover:bg-slate-50 cursor-pointer"
                      id="btn-prev-q"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Câu trước</span>
                    </button>

                    {currentQIndex < questions.length - 1 ? (
                      <button
                        onClick={() => setCurrentQIndex(prev => prev + 1)}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-sky-600 text-white hover:bg-sky-700 shadow-xs cursor-pointer"
                        id="btn-next-q"
                      >
                        <span>Câu tiếp theo</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={handleFinishQuiz}
                        className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs sm:text-sm font-bold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-200 cursor-pointer"
                        id="btn-finish-quiz"
                      >
                        <Award className="w-4 h-4" />
                        <span>Nộp bài & Xem kết quả</span>
                      </button>
                    )}
                  </div>

                  {/* Question Index Palette */}
                  <div className="pt-6 border-t border-slate-100">
                    <div className="text-xs font-semibold text-slate-400 mb-2">
                      Mục lục 20 câu hỏi:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {questions.map((q, idx) => {
                        const isAnswered = !!selectedAnswers[idx];
                        const isCurrent = idx === currentQIndex;
                        const isAnsCorrect = selectedAnswers[idx]?.trim().toLowerCase() === q.correctText.trim().toLowerCase();

                        let style = 'bg-slate-100 text-slate-600 hover:bg-slate-200';
                        if (isAnswered) {
                          style = isAnsCorrect ? 'bg-emerald-500 text-white' : 'bg-rose-400 text-white';
                        }
                        if (isCurrent) {
                          style += ' ring-2 ring-sky-500 ring-offset-2';
                        }

                        return (
                          <button
                            key={idx}
                            onClick={() => setCurrentQIndex(idx)}
                            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${style}`}
                            title={`Câu ${idx + 1}`}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Quiz Completed Score Summary */
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md text-center max-w-xl mx-auto animate-fadeIn">
              <div className="w-20 h-20 rounded-3xl bg-linear-to-tr from-sky-400 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-sky-200">
                <Award className="w-10 h-10" />
              </div>

              <h2 className="text-2xl font-extrabold text-slate-800 mb-2">
                Kết Quả Bài Luyện Tập
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                Bài {lesson.id}: {lesson.title}
              </p>

              {/* Big Score Box */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6">
                <div className="text-4xl sm:text-5xl font-black text-sky-600 mb-1">
                  {score} / {questions.length}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  Điểm số: {((score / questions.length) * 10).toFixed(1)} / 10
                </div>

                <p className="text-sm font-medium mt-3 text-slate-700">
                  {score >= 18
                    ? 'Xuất sắc! Em đã nắm rất vững kiến thức bài học này!'
                    : score >= 14
                    ? 'Làm tốt lắm! Em đã hiểu bài khá sâu sắc!'
                    : score >= 10
                    ? 'Đạt yêu cầu! Hãy ôn lại các phần lý thuyết chưa rõ nhé!'
                    : 'Cố lên em nhé! Hãy đọc lại lý thuyết và thử làm lại lần nữa!'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                <button
                  onClick={() => initQuiz(practiceMode, true)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 cursor-pointer"
                  id="btn-retry-quiz"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Làm lại bộ câu hỏi này</span>
                </button>

                {lesson.id < 17 && onNextLesson && (
                  <button
                    onClick={() => onNextLesson(lesson.id + 1)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-sky-600 text-white font-semibold text-sm hover:bg-sky-700 shadow-xs cursor-pointer"
                    id="btn-next-lesson"
                  >
                    <span>Sang Bài {lesson.id + 1}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Detailed Review Section for All 20 Questions */}
              <div className="text-left border-t border-slate-100 pt-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sky-600" />
                  <span>Chi Tiết Đáp Án & Hướng Dẫn Giải ({questions.length} câu)</span>
                </h3>

                <div className="space-y-4">
                  {questions.map((q, idx) => {
                    const userAns = selectedAnswers[idx];
                    const isCorrect = userAns?.trim().toLowerCase() === q.correctText.trim().toLowerCase();

                    return (
                      <div
                        key={idx}
                        className={`p-5 rounded-2xl border transition-all ${
                          isCorrect
                            ? 'bg-emerald-50/40 border-emerald-200'
                            : 'bg-rose-50/40 border-rose-200'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                              isCorrect
                                ? 'bg-emerald-500 text-white'
                                : 'bg-rose-500 text-white'
                            }`}
                          >
                            {idx + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-slate-800 text-sm sm:text-base mb-2 leading-relaxed">
                              <FormattedText text={q.question} />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm mb-3">
                              <div
                                className={`p-2.5 rounded-xl ${
                                  isCorrect ? 'bg-emerald-100/60 text-emerald-950 font-medium' : 'bg-rose-100/60 text-rose-950'
                                }`}
                              >
                                <strong>Em đã chọn: </strong>
                                <FormattedText text={userAns || '(Chưa chọn câu trả lời)'} />
                              </div>
                              <div className="p-2.5 rounded-xl bg-emerald-100/60 text-emerald-950 font-medium">
                                <strong>Đáp án chuẩn SGK: </strong>
                                <FormattedText text={q.correctText} />
                              </div>
                            </div>

                            <div className="p-3 rounded-xl bg-white/80 border border-slate-200/60 text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                              <strong className="text-slate-900">Giải thích chi tiết & công thức: </strong>
                              <FormattedText text={q.explanation} />
                            </div>

                            {/* Action Buttons in Review */}
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
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
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
          lessonId={lesson.id}
          lessonTitle={lesson.title}
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
