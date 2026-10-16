import React, { useState, useEffect, useMemo } from 'react';
import { 
  Zap, 
  Puzzle, 
  FlaskConical, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Sparkles, 
  ArrowRight,
  HelpCircle,
  Play
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  LessonSpeedGame, 
  LessonMatchGame, 
  LessonPredictGame 
} from '../types';
import { shuffleArray } from '../utils/random';
import { soundManager } from '../utils/audio';
import { FormattedText, MathView } from './MathView';

// ==========================================
// 1. SPEED QUIZ MINI GAME ("AI NHANH HƠN?")
// ==========================================
interface SpeedQuizMiniGameProps {
  game: LessonSpeedGame;
  lessonId: number;
  onScoreEarned?: (points: number) => void;
}

export const SpeedQuizMiniGame: React.FC<SpeedQuizMiniGameProps> = ({ 
  game, 
  lessonId, 
  onScoreEarned 
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(game.timeLimit || 20);
  const [shuffledOptions, setShuffledOptions] = useState<{ label: string; text: string }[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(true);

  // Initialize and shuffle options whenever game changes
  const initGame = () => {
    const labels = ['A', 'B', 'C', 'D'];
    const shuffled = shuffleArray([...game.options]).map((text, idx) => ({
      label: labels[idx],
      text,
    }));
    setShuffledOptions(shuffled);
    setSelectedOption(null);
    setIsAnswered(false);
    setTimeLeft(game.timeLimit || 20);
    setIsStarted(true);
  };

  useEffect(() => {
    initGame();
  }, [game.id, lessonId]);

  // Countdown timer
  useEffect(() => {
    if (!isStarted || isAnswered || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          // Time out -> automatically mark as wrong
          setIsAnswered(true);
          soundManager.playWrong();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isStarted, isAnswered, timeLeft]);

  const handleSelectOption = (text: string) => {
    if (isAnswered) return;
    setSelectedOption(text);
    setIsAnswered(true);

    const isCorrect = text.trim().toLowerCase() === game.correctAnswer.trim().toLowerCase();
    if (isCorrect) {
      soundManager.playCorrect();
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.75 } });
      if (onScoreEarned) onScoreEarned(10);
    } else {
      soundManager.playWrong();
    }
  };

  const isUserCorrect = selectedOption?.trim().toLowerCase() === game.correctAnswer.trim().toLowerCase();
  const progressPercent = Math.max(0, Math.min(100, (timeLeft / (game.timeLimit || 20)) * 100));

  return (
    <div className="bg-gradient-to-br from-amber-500/10 via-amber-50 to-orange-50/50 rounded-3xl p-5 sm:p-7 border-2 border-amber-300 shadow-sm my-6 relative overflow-hidden">
      {/* Badge header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-amber-200/70">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-sm">
            <Zap className="w-5 h-5 fill-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xs font-extrabold uppercase tracking-wider bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded-md">
                Mini Game 1
              </span>
              <span className="text-xs font-bold text-amber-900">Thử Thách Phản Xạ</span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-amber-950">
              {game.title}
            </h4>
          </div>
        </div>

        {/* Timer Badge */}
        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-bold shadow-2xs transition-colors ${
            timeLeft <= 5 && !isAnswered 
              ? 'bg-rose-500 text-white animate-pulse' 
              : 'bg-white border border-amber-200 text-amber-900'
          }`}>
            <Clock className="w-4 h-4" />
            <span>{isAnswered ? 'Đã xong' : `${timeLeft}s`}</span>
          </div>

          <button
            onClick={initGame}
            title="Xáo trộn & chơi lại"
            className="p-1.5 rounded-xl border border-amber-200 bg-white text-amber-800 hover:bg-amber-100 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      {!isAnswered && (
        <div className="w-full bg-amber-100 rounded-full h-1.5 mb-5 overflow-hidden">
          <div 
            className={`h-full transition-all duration-1000 ${
              timeLeft <= 5 ? 'bg-rose-500' : 'bg-amber-500'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}

      {/* Question Text */}
      <div className="text-sm sm:text-base font-bold text-slate-800 mb-5 leading-relaxed bg-white/70 p-4 rounded-2xl border border-amber-100">
        <FormattedText text={game.question} />
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
        {shuffledOptions.map((opt, idx) => {
          const isSelected = selectedOption === opt.text;
          const isCorrect = opt.text.trim().toLowerCase() === game.correctAnswer.trim().toLowerCase();

          let btnStyle = 'bg-white border-amber-200/80 hover:border-amber-400 hover:bg-amber-50/60 text-slate-800';

          if (isAnswered) {
            if (isCorrect) {
              btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-400/40';
            } else if (isSelected && !isCorrect) {
              btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 font-medium';
            } else {
              btnStyle = 'bg-white/50 border-slate-200 text-slate-400 opacity-60';
            }
          }

          return (
            <button
              key={idx}
              disabled={isAnswered}
              onClick={() => handleSelectOption(opt.text)}
              className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer ${btnStyle}`}
            >
              <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                isAnswered && isCorrect 
                  ? 'bg-emerald-600 text-white' 
                  : isAnswered && isSelected && !isCorrect
                  ? 'bg-rose-500 text-white'
                  : 'bg-amber-100 text-amber-900'
              }`}>
                {opt.label}
              </span>
              <span className="text-xs sm:text-sm pt-0.5 leading-snug">
                <FormattedText text={opt.text} />
              </span>
            </button>
          );
        })}
      </div>

      {/* Feedback & Explanation */}
      {isAnswered && (
        <div className={`p-4 rounded-2xl border text-xs sm:text-sm mt-3 ${
          isUserCorrect
            ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
            : 'bg-rose-50/90 border-rose-300 text-rose-950'
        }`}>
          <div className="flex items-center gap-2 font-bold mb-2">
            {isUserCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Xuất sắc! Trả lời đúng trong chớp mắt (+10 điểm)</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>
                  {timeLeft === 0 ? 'Đã hết thời gian! ' : 'Chưa chính xác! '}
                  Đáp án chuẩn là: <strong className="text-emerald-800 underline"><FormattedText text={game.correctAnswer} /></strong>
                </span>
              </>
            )}
          </div>
          <div className="pt-2 border-t border-slate-200/60 leading-relaxed text-slate-700">
            <strong>💡 Giải thích nhanh SGK: </strong>
            <FormattedText text={game.explanation} />
          </div>

          <div className="mt-3 flex justify-end">
            <button
              onClick={initGame}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 text-white font-bold text-xs hover:bg-amber-700 transition-all cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Chơi lại câu này (xáo trộn)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 2. MATCH KNOWLEDGE MINI GAME ("GHÉP ĐÚNG KIẾN THỨC")
// ==========================================
interface MatchKnowledgeMiniGameProps {
  game: LessonMatchGame;
  lessonId: number;
  onScoreEarned?: (points: number) => void;
}

export const MatchKnowledgeMiniGame: React.FC<MatchKnowledgeMiniGameProps> = ({ 
  game, 
  lessonId, 
  onScoreEarned 
}) => {
  // We shuffle left and right separately
  const [shuffledLeft, setShuffledLeft] = useState<{ id: string; text: string; category: string }[]>([]);
  const [shuffledRight, setShuffledRight] = useState<{ id: string; text: string }[]>([]);
  const [selectedLeftId, setSelectedLeftId] = useState<string | null>(null);
  const [selectedRightId, setSelectedRightId] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [wrongMismatch, setWrongMismatch] = useState<{ leftId: string; rightId: string } | null>(null);

  const initGame = () => {
    const leftList = game.pairs.map(p => ({ id: p.id, text: p.left, category: p.category }));
    const rightList = game.pairs.map(p => ({ id: p.id, text: p.right }));
    setShuffledLeft(shuffleArray(leftList));
    setShuffledRight(shuffleArray(rightList));
    setSelectedLeftId(null);
    setSelectedRightId(null);
    setMatchedIds([]);
    setWrongMismatch(null);
  };

  useEffect(() => {
    initGame();
  }, [game.id, lessonId]);

  // Handle clicking left card
  const handleLeftClick = (id: string) => {
    if (matchedIds.includes(id)) return;
    setWrongMismatch(null);
    setSelectedLeftId(id);

    // If right card is already selected, check match
    if (selectedRightId) {
      checkMatch(id, selectedRightId);
    }
  };

  // Handle clicking right card
  const handleRightClick = (id: string) => {
    if (matchedIds.includes(id)) return;
    setWrongMismatch(null);
    setSelectedRightId(id);

    // If left card is already selected, check match
    if (selectedLeftId) {
      checkMatch(selectedLeftId, id);
    }
  };

  const checkMatch = (leftId: string, rightId: string) => {
    if (leftId === rightId) {
      // MATCHED!
      soundManager.playCorrect();
      setMatchedIds(prev => {
        const next = [...prev, leftId];
        if (next.length === game.pairs.length) {
          confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
          if (onScoreEarned) onScoreEarned(20);
        }
        return next;
      });
      setSelectedLeftId(null);
      setSelectedRightId(null);
    } else {
      // MISMATCH
      soundManager.playWrong();
      setWrongMismatch({ leftId, rightId });
      setTimeout(() => {
        setSelectedLeftId(null);
        setSelectedRightId(null);
        setWrongMismatch(null);
      }, 700);
    }
  };

  const isCompleted = matchedIds.length === game.pairs.length && game.pairs.length > 0;

  return (
    <div className="bg-gradient-to-br from-indigo-500/10 via-indigo-50 to-sky-50/50 rounded-3xl p-5 sm:p-7 border-2 border-indigo-300 shadow-sm my-6 relative">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-indigo-200/70">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
            <Puzzle className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xs font-extrabold uppercase tracking-wider bg-indigo-200/80 text-indigo-950 px-2 py-0.5 rounded-md">
                Mini Game 2
              </span>
              <span className="text-xs font-bold text-indigo-900">Ghép Cặp Thông Minh</span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-indigo-950">
              {game.title}
            </h4>
          </div>
        </div>

        {/* Progress & Reset */}
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-xl bg-white border border-indigo-200 text-indigo-900 font-bold text-xs sm:text-sm">
            Đã ghép: {matchedIds.length}/{game.pairs.length}
          </span>
          <button
            onClick={initGame}
            title="Chơi lại từ đầu"
            className="p-1.5 rounded-xl border border-indigo-200 bg-white text-indigo-800 hover:bg-indigo-100 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 mb-5">
        👉 <strong>Hướng dẫn:</strong> Nhấn chọn 1 thẻ ở <em>Cột Trái</em> (Khái niệm/Đại lượng) và 1 thẻ tương ứng ở <em>Cột Phải</em> (Công thức/Đơn vị/Ý nghĩa) để ghép cặp chuẩn xác!
      </p>

      {/* Matching Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {/* Left Column */}
        <div className="space-y-2.5">
          <div className="text-xs font-bold text-indigo-900 uppercase tracking-wider px-1">
            Cột Trái: Đại Lượng / Khái Niệm
          </div>
          {shuffledLeft.map(card => {
            const isMatched = matchedIds.includes(card.id);
            const isSelected = selectedLeftId === card.id;
            const isWrong = wrongMismatch?.leftId === card.id;

            let cardStyle = 'bg-white border-slate-200 hover:border-indigo-300 text-slate-800';

            if (isMatched) {
              cardStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold opacity-80';
            } else if (isWrong) {
              cardStyle = 'bg-rose-100 border-rose-400 text-rose-950 animate-shake';
            } else if (isSelected) {
              cardStyle = 'bg-indigo-100 border-indigo-600 text-indigo-950 font-bold ring-2 ring-indigo-400/50';
            }

            return (
              <button
                key={card.id}
                disabled={isMatched}
                onClick={() => handleLeftClick(card.id)}
                className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${cardStyle}`}
              >
                <div className="flex-1">
                  <span className="text-2xs font-bold uppercase text-indigo-700 block mb-0.5">
                    {card.category}
                  </span>
                  <div className="text-xs sm:text-sm font-semibold">
                    <FormattedText text={card.text} />
                  </div>
                </div>
                {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />}
              </button>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="space-y-2.5">
          <div className="text-xs font-bold text-indigo-900 uppercase tracking-wider px-1">
            Cột Phải: Công Thức / Đơn Vị / Giải Thích
          </div>
          {shuffledRight.map(card => {
            const isMatched = matchedIds.includes(card.id);
            const isSelected = selectedRightId === card.id;
            const isWrong = wrongMismatch?.rightId === card.id;

            let cardStyle = 'bg-white border-slate-200 hover:border-indigo-300 text-slate-800';

            if (isMatched) {
              cardStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold opacity-80';
            } else if (isWrong) {
              cardStyle = 'bg-rose-100 border-rose-400 text-rose-950 animate-shake';
            } else if (isSelected) {
              cardStyle = 'bg-indigo-100 border-indigo-600 text-indigo-950 font-bold ring-2 ring-indigo-400/50';
            }

            return (
              <button
                key={card.id}
                disabled={isMatched}
                onClick={() => handleRightClick(card.id)}
                className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${cardStyle}`}
              >
                <div className="flex-1 text-xs sm:text-sm font-semibold">
                  <FormattedText text={card.text} />
                </div>
                {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Completion Summary */}
      {isCompleted && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-bold text-sm sm:text-base mb-3 text-emerald-900">
            <Sparkles className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span>Chúc mừng em! Đã ghép đúng tất cả các cặp kiến thức (+20 điểm)</span>
          </div>

          <div className="space-y-2 mb-4">
            {game.pairs.map(p => (
              <div key={p.id} className="p-2.5 rounded-xl bg-white border border-emerald-200/80">
                <div className="flex items-baseline gap-2 font-semibold text-slate-800 mb-1">
                  <span className="text-indigo-700"><FormattedText text={p.left} /></span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="text-emerald-700"><FormattedText text={p.right} /></span>
                </div>
                {p.explanation && (
                  <p className="text-2xs sm:text-xs text-slate-600">
                    💡 <em>{p.explanation}</em>
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={initGame}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-all cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Chơi lại lượt mới</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ===================================================
// 3. PREDICT EXPERIMENT MINI GAME ("DỰ ĐOÁN KẾT QUẢ")
// ===================================================
interface PredictExperimentMiniGameProps {
  game: LessonPredictGame;
  lessonId: number;
  onScoreEarned?: (points: number) => void;
}

export const PredictExperimentMiniGame: React.FC<PredictExperimentMiniGameProps> = ({ 
  game, 
  lessonId, 
  onScoreEarned 
}) => {
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const initGame = () => {
    setShuffledOptions(shuffleArray([...game.options]));
    setSelectedOption(null);
    setIsSubmitted(false);
    setIsSimulating(false);
  };

  useEffect(() => {
    initGame();
  }, [game.id, lessonId]);

  const handleSubmit = (option: string) => {
    if (isSubmitted) return;
    setSelectedOption(option);
    setIsSimulating(true);

    // Simulate animated experiment reaction
    setTimeout(() => {
      setIsSimulating(false);
      setIsSubmitted(true);
      const isCorrect = option.trim().toLowerCase() === game.correctAnswer.trim().toLowerCase();
      if (isCorrect) {
        soundManager.playCorrect();
        confetti({ particleCount: 45, spread: 65, origin: { y: 0.7 } });
        if (onScoreEarned) onScoreEarned(15);
      } else {
        soundManager.playWrong();
      }
    }, 900);
  };

  const isUserCorrect = selectedOption?.trim().toLowerCase() === game.correctAnswer.trim().toLowerCase();

  return (
    <div className="bg-gradient-to-br from-emerald-500/10 via-teal-50 to-emerald-50/50 rounded-3xl p-5 sm:p-7 border-2 border-emerald-300 shadow-sm my-6 relative">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-emerald-200/70">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-sm">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xs font-extrabold uppercase tracking-wider bg-teal-200/80 text-teal-950 px-2 py-0.5 rounded-md">
                Mini Game 3
              </span>
              <span className="text-xs font-bold text-teal-900">Phòng Thí Nghiệm Tư Duy</span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-teal-950">
              {game.title}
            </h4>
          </div>
        </div>

        <button
          onClick={initGame}
          title="Thử lại thí nghiệm"
          className="p-1.5 rounded-xl border border-teal-200 bg-white text-teal-800 hover:bg-teal-100 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Setup Description */}
      <div className="p-4 rounded-2xl bg-white/80 border border-teal-100 text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
        <strong className="text-teal-900">🔬 Bố trí thí nghiệm: </strong>
        <FormattedText text={game.setupDescription} />
      </div>

      {/* Visual Experiment SVG Simulation */}
      <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 mb-5 text-white flex flex-col items-center justify-center min-h-[170px] relative overflow-hidden shadow-inner">
        <ExperimentVisualCanvas 
          type={game.visualType} 
          isSimulating={isSimulating} 
          isSubmitted={isSubmitted} 
        />
        <div className="text-2xs text-slate-400 mt-2 font-mono tracking-wider uppercase">
          Mô hình vật lý thí nghiệm tương tác (SGK Vật lí 9)
        </div>
      </div>

      {/* Question */}
      <div className="text-sm sm:text-base font-bold text-slate-800 mb-4 flex items-start gap-2">
        <HelpCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
        <span>
          <FormattedText text={game.question} />
        </span>
      </div>

      {/* Prediction Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
        {shuffledOptions.map((opt, idx) => {
          const isSelected = selectedOption === opt;
          const isCorrect = opt.trim().toLowerCase() === game.correctAnswer.trim().toLowerCase();

          let btnStyle = 'bg-white border-slate-200 hover:border-teal-400 hover:bg-teal-50/50 text-slate-800';

          if (isSubmitted) {
            if (isCorrect) {
              btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-400/40';
            } else if (isSelected && !isCorrect) {
              btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 font-medium';
            } else {
              btnStyle = 'bg-white/50 border-slate-200 text-slate-400 opacity-60';
            }
          }

          return (
            <button
              key={idx}
              disabled={isSubmitted || isSimulating}
              onClick={() => handleSubmit(opt)}
              className={`p-3.5 rounded-2xl border text-left flex items-start gap-2.5 transition-all cursor-pointer ${btnStyle}`}
            >
              <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                isSubmitted && isCorrect 
                  ? 'bg-emerald-600 text-white' 
                  : isSubmitted && isSelected && !isCorrect
                  ? 'bg-rose-500 text-white'
                  : 'bg-teal-100 text-teal-900'
              }`}>
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="text-xs sm:text-sm pt-0.5 leading-snug">
                <FormattedText text={opt} />
              </span>
            </button>
          );
        })}
      </div>

      {/* Simulation Running Status */}
      {isSimulating && (
        <div className="p-3 rounded-xl bg-teal-100 border border-teal-300 text-teal-950 text-xs sm:text-sm flex items-center justify-center gap-2 animate-pulse mb-3">
          <div className="w-4 h-4 border-2 border-teal-600 border-t-transparent rounded-full animate-spin" />
          <span>Đang chạy mô phỏng thí nghiệm thực tế...</span>
        </div>
      )}

      {/* Outcome and Explanation */}
      {isSubmitted && (
        <div className={`p-4 rounded-2xl border text-xs sm:text-sm ${
          isUserCorrect
            ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
            : 'bg-rose-50/90 border-rose-300 text-rose-950'
        }`}>
          <div className="flex items-center gap-2 font-bold mb-2">
            {isUserCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm sm:text-base">Chính xác hoàn toàn! Bạn đã phán đoán đúng quy luật vật lý (+15 điểm)</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span className="text-sm sm:text-base">Dự đoán chưa chính xác! Cùng đối chiếu với thực nghiệm:</span>
              </>
            )}
          </div>

          <div className="p-3 rounded-xl bg-white/80 border border-slate-200/80 mb-2 leading-relaxed text-slate-800">
            <strong className="text-teal-900">✨ Hiện tượng thực tế diễn ra: </strong>
            <FormattedText text={game.actualOutcome} />
          </div>

          <div className="p-3 rounded-xl bg-white/80 border border-slate-200/80 leading-relaxed text-slate-800">
            <strong className="text-slate-900">💡 Nguyên nhân khoa học: </strong>
            <FormattedText text={game.explanation} />
          </div>

          <div className="mt-3 flex justify-end">
            <button
              onClick={initGame}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs hover:bg-teal-700 transition-all cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Chạy lại mô phỏng</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ===================================================
// DYNAMIC SVG ILLUSTRATION CANVAS FOR EXPERIMENT MINI GAME
// ===================================================
const ExperimentVisualCanvas: React.FC<{ 
  type: string; 
  isSimulating: boolean; 
  isSubmitted: boolean; 
}> = ({ type, isSimulating, isSubmitted }) => {
  // Kinetic energy: ball rolling down ramp and hitting block
  if (type === 'kinetic') {
    return (
      <svg viewBox="0 0 400 130" className="w-full max-w-[380px] h-auto">
        {/* Inclined ramp */}
        <polygon points="20,20 120,90 20,90" fill="#334155" />
        <line x1="120" y1="90" x2="380" y2="90" stroke="#64748b" strokeWidth="4" />
        
        {/* Height label */}
        <line x1="15" y1="20" x2="15" y2="90" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,3" />
        <text x="5" y="58" fill="#f59e0b" fontSize="11" fontWeight="bold">h</text>
        
        {/* Steel Ball */}
        <circle 
          cx={isSubmitted ? 240 : isSimulating ? 120 : 35} 
          cy={isSubmitted ? 80 : isSimulating ? 80 : 30} 
          r={isSubmitted ? 14 : 10} 
          fill="#38bdf8" 
          stroke="#fff" 
          strokeWidth="2"
          className="transition-all duration-700 ease-out"
        />
        <text 
          x={isSubmitted ? 240 : isSimulating ? 120 : 35} 
          y={isSubmitted ? 84 : isSimulating ? 84 : 34} 
          fill="#0f172a" 
          fontSize="9" 
          fontWeight="bold" 
          textAnchor="middle"
        >
          {isSubmitted ? '2m' : 'm'}
        </text>

        {/* Wooden block */}
        <rect 
          x={isSubmitted ? 280 : isSimulating ? 180 : 150} 
          y="65" 
          width="35" 
          height="25" 
          fill="#f97316" 
          rx="3"
          className="transition-all duration-700 ease-out"
        />
        <text 
          x={isSubmitted ? 297 : isSimulating ? 197 : 167} 
          y="81" 
          fill="#fff" 
          fontSize="10" 
          fontWeight="bold" 
          textAnchor="middle"
        >
          Gỗ
        </text>

        {/* Distance label */}
        {isSubmitted && (
          <g className="animate-fadeIn">
            <line x1="150" y1="105" x2="280" y2="105" stroke="#34d399" strokeWidth="2" />
            <text x="215" y="120" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">
              s2 ≈ 2 · s1 (gấp đôi)
            </text>
          </g>
        )}
      </svg>
    );
  }

  // Refraction: water tank with coin & light ray
  if (type === 'refraction') {
    return (
      <svg viewBox="0 0 400 130" className="w-full max-w-[380px] h-auto">
        {/* Bowl */}
        <path d="M 80,40 Q 80,105 200,105 Q 320,105 320,40 Z" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2" />
        <line x1="80" y1="55" x2="320" y2="55" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4,4" />
        <text x="95" y="50" fill="#7dd3fc" fontSize="10">Mặt nước</text>

        {/* Real coin at bottom */}
        <ellipse cx="200" cy="98" rx="14" ry="5" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
        <text x="200" y="101" fill="#713f12" fontSize="7" textAnchor="middle" fontWeight="bold">Thật</text>

        {/* Apparent coin */}
        {isSubmitted && (
          <g className="animate-fadeIn">
            <ellipse cx="200" cy="75" rx="14" ry="5" fill="#fde047" stroke="#eab308" strokeWidth="1.5" strokeDasharray="2,2" />
            <text x="200" y="78" fill="#713f12" fontSize="7" textAnchor="middle" fontWeight="bold">Ảnh ảo</text>
            <path d="M 200,98 L 240,55 L 340,20" stroke="#f59e0b" strokeWidth="2" fill="none" />
            <circle cx="345" cy="18" r="8" fill="#ec4899" />
            <text x="360" y="22" fill="#fff" fontSize="10">Mắt</text>
          </g>
        )}
      </svg>
    );
  }

  // Converging lens / Focal burning
  if (type === 'converging-lens') {
    return (
      <svg viewBox="0 0 400 130" className="w-full max-w-[380px] h-auto">
        {/* Optical Axis */}
        <line x1="20" y1="65" x2="380" y2="65" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,4" />
        {/* Lens */}
        <path d="M 180,15 Q 195,65 180,115 Q 165,65 180,15 Z" fill="#38bdf8" fillOpacity="0.4" stroke="#0284c7" strokeWidth="2" />
        <text x="180" y="12" fill="#38bdf8" fontSize="10" textAnchor="middle" fontWeight="bold">TK Hội Tụ</text>

        {/* Parallel incoming rays */}
        <line x1="30" y1="35" x2="180" y2="35" stroke="#facc15" strokeWidth="2" />
        <line x1="30" y1="65" x2="180" y2="65" stroke="#facc15" strokeWidth="2" />
        <line x1="30" y1="95" x2="180" y2="95" stroke="#facc15" strokeWidth="2" />

        {/* Converging rays to F' */}
        <line x1="180" y1="35" x2="280" y2="65" stroke="#facc15" strokeWidth="2" />
        <line x1="180" y1="65" x2="280" y2="65" stroke="#facc15" strokeWidth="2" />
        <line x1="180" y1="95" x2="280" y2="65" stroke="#facc15" strokeWidth="2" />

        {/* Focus F' */}
        <circle cx="280" cy="65" r="4" fill="#ef4444" />
        <text x="280" y="82" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">F' (Tiêu điểm)</text>

        {/* Paper burning effect */}
        {isSubmitted && (
          <g className="animate-pulse">
            <circle cx="280" cy="65" r="9" fill="#ef4444" fillOpacity="0.5" />
            <text x="325" y="68" fill="#f87171" fontSize="11" fontWeight="bold">🔥 Bốc cháy!</text>
          </g>
        )}
      </svg>
    );
  }

  // Ohm's law & circuit
  if (type === 'ohm') {
    return (
      <svg viewBox="0 0 400 130" className="w-full max-w-[380px] h-auto">
        {/* Wire Loop */}
        <rect x="60" y="25" width="280" height="80" fill="none" stroke="#94a3b8" strokeWidth="2" rx="10" />
        {/* Battery */}
        <line x1="200" y1="15" x2="200" y2="35" stroke="#f59e0b" strokeWidth="3" />
        <line x1="206" y1="20" x2="206" y2="30" stroke="#f59e0b" strokeWidth="2" />
        <text x="203" y="10" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">
          {isSubmitted ? 'U = 12V' : 'U = 6V'}
        </text>

        {/* Resistor */}
        <rect x="90" y="95" width="50" height="20" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" rx="3" />
        <text x="115" y="109" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">10 Ω</text>

        {/* Ammeter */}
        <circle cx="270" cy="105" r="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
        <text x="270" y="109" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">A</text>
        {/* Needle */}
        <line 
          x1="270" 
          y1="105" 
          x2={isSubmitted ? 280 : 273} 
          y2={isSubmitted ? 93 : 91} 
          stroke="#ef4444" 
          strokeWidth="2" 
          className="transition-all duration-500"
        />
        <text x="270" y="130" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">
          {isSubmitted ? 'I = 1,2 A' : 'I = 0,6 A'}
        </text>
      </svg>
    );
  }

  // Induction / Magnet into Coil
  if (type === 'induction') {
    return (
      <svg viewBox="0 0 400 130" className="w-full max-w-[380px] h-auto">
        {/* Magnet */}
        <rect 
          x={isSubmitted ? 110 : isSimulating ? 80 : 40} 
          y="45" 
          width="40" 
          height="22" 
          fill="#ef4444" 
          className="transition-all duration-500"
        />
        <rect 
          x={isSubmitted ? 150 : isSimulating ? 120 : 80} 
          y="45" 
          width="40" 
          height="22" 
          fill="#3b82f6" 
          className="transition-all duration-500"
        />
        <text x={isSubmitted ? 130 : 60} y="60" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">N</text>
        <text x={isSubmitted ? 170 : 100} y="60" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">S</text>

        {/* Coil */}
        <ellipse cx="230" cy="56" rx="10" ry="24" fill="none" stroke="#f59e0b" strokeWidth="3" />
        <ellipse cx="245" cy="56" rx="10" ry="24" fill="none" stroke="#f59e0b" strokeWidth="3" />
        <ellipse cx="260" cy="56" rx="10" ry="24" fill="none" stroke="#f59e0b" strokeWidth="3" />

        {/* Galvanometer */}
        <circle cx="340" cy="56" r="18" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
        <text x="340" y="53" fill="#94a3b8" fontSize="8" textAnchor="middle">mA</text>
        {/* Needle deflected */}
        <line 
          x1="340" 
          y1="64" 
          x2={isSubmitted ? 350 : 340} 
          y2={isSubmitted ? 44 : 40} 
          stroke="#ef4444" 
          strokeWidth="2" 
          className="transition-all duration-300"
        />
        <text x="340" y="88" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">
          {isSubmitted ? 'Kim lệch!' : 'Kim tại 0'}
        </text>
      </svg>
    );
  }

  // Default clean physical laboratory schematic
  return (
    <svg viewBox="0 0 400 130" className="w-full max-w-[380px] h-auto">
      <rect x="30" y="20" width="340" height="90" fill="#1e293b" rx="12" stroke="#475569" strokeWidth="1.5" />
      <circle cx="90" cy="65" r="28" fill="#0284c7" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
      <text x="90" y="69" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Vật Lí 9</text>
      <line x1="130" y1="65" x2="230" y2="65" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,4" />
      <circle cx="270" cy="65" r="22" fill="#10b981" fillOpacity="0.2" stroke="#34d399" strokeWidth="2" />
      <text x="270" y="69" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">Thực tế</text>
    </svg>
  );
};
