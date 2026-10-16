import React, { useState, useEffect, useRef } from 'react';
import { SPEED_QUESTIONS_BANK, SpeedQuestion, getSavedMiniGameStats, saveMiniGameStats } from '../../data/miniGamesData';
import { MathView, FormattedText } from '../MathView';
import { soundManager } from '../../utils/audio';
import { shuffleArray } from '../../utils/random';
import confetti from 'canvas-confetti';
import { 
  Zap, 
  Clock, 
  Flame, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Trophy, 
  Award, 
  Heart, 
  ChevronRight, 
  Play, 
  HelpCircle,
  Sparkles
} from 'lucide-react';

interface ShuffledSpeedOption {
  label: string;
  text: string;
}

export const SpeedQuizGame: React.FC = () => {
  // Game states: 'idle' | 'playing' | 'answered' | 'gameover'
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'answered' | 'gameover'>('idle');
  const [gameMode, setGameMode] = useState<'quick10' | 'survival'>('quick10');
  
  // Gameplay state
  const [questions, setQuestions] = useState<SpeedQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOptions, setCurrentOptions] = useState<ShuffledSpeedOption[]>([]);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
  // Scoring & Stats
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [lives, setLives] = useState(3);
  const [correctCount, setCorrectCount] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Timer: 15s per question
  const TIME_LIMIT = 15;
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load high score
  useEffect(() => {
    const stats = getSavedMiniGameStats();
    setHighScore(stats.speedQuiz.highScore);
  }, []);

  // Helper to shuffle options and assign A, B, C, D
  const prepareQuestion = (q: SpeedQuestion) => {
    const shuffledTexts = shuffleArray(q.options);
    const labels = ['A', 'B', 'C', 'D'];
    const optionsWithLabels: ShuffledSpeedOption[] = shuffledTexts.map((text, idx) => ({
      label: labels[idx],
      text
    }));
    setCurrentOptions(optionsWithLabels);
    setSelectedLabel(null);
    setIsCorrect(null);
    setTimeLeft(TIME_LIMIT);
  };

  // Start new game
  const startGame = (mode: 'quick10' | 'survival') => {
    setGameMode(mode);
    const shuffledBank = shuffleArray(SPEED_QUESTIONS_BANK);
    const selectedList = mode === 'quick10' ? shuffledBank.slice(0, 10) : shuffledBank;
    setQuestions(selectedList);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setLives(3);
    setCorrectCount(0);
    prepareQuestion(selectedList[0]);
    setGameState('playing');
  };

  // Countdown timer logic
  useEffect(() => {
    if (gameState === 'playing') {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimeOut();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, currentIndex]);

  // Handle when time runs out
  const handleTimeOut = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsCorrect(false);
    setSelectedLabel('TIMEOUT');
    soundManager.playWrong();
    setStreak(0);

    if (gameMode === 'survival') {
      const remainingLives = lives - 1;
      setLives(remainingLives);
      if (remainingLives <= 0) {
        finishGame(score);
        return;
      }
    }
    setGameState('answered');
  };

  // Handle user selecting an option
  const handleSelectAnswer = (option: ShuffledSpeedOption) => {
    if (gameState !== 'playing') return;
    if (timerRef.current) clearInterval(timerRef.current);

    const currentQ = questions[currentIndex];
    const correct = option.text === currentQ.correctAnswer;
    setSelectedLabel(option.label);
    setIsCorrect(correct);

    if (correct) {
      soundManager.playCorrect();
      const timeBonus = Math.round(timeLeft * 15);
      const streakBonus = streak * 20;
      const earned = 100 + timeBonus + streakBonus;
      const newScore = score + earned;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      setCorrectCount(prev => prev + 1);

      // Confetti for streak >= 3
      if (newStreak >= 3) {
        confetti({
          particleCount: 35,
          spread: 50,
          origin: { y: 0.7 }
        });
      }
    } else {
      soundManager.playWrong();
      setStreak(0);
      if (gameMode === 'survival') {
        const remainingLives = lives - 1;
        setLives(remainingLives);
        if (remainingLives <= 0) {
          finishGame(score);
          return;
        }
      }
    }

    setGameState('answered');
  };

  // Proceed to next question
  const handleNextQuestion = () => {
    const nextIdx = currentIndex + 1;
    if (nextIdx >= questions.length) {
      finishGame(score);
    } else {
      setCurrentIndex(nextIdx);
      prepareQuestion(questions[nextIdx]);
      setGameState('playing');
    }
  };

  // Finish game & save highscore
  const finishGame = (finalScore: number) => {
    setGameState('gameover');
    soundManager.playApplause();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const stats = getSavedMiniGameStats();
    const isNewHigh = finalScore > stats.speedQuiz.highScore;
    const updatedStats = {
      ...stats,
      speedQuiz: {
        highScore: Math.max(stats.speedQuiz.highScore, finalScore),
        gamesPlayed: stats.speedQuiz.gamesPlayed + 1,
        totalCorrect: stats.speedQuiz.totalCorrect + correctCount,
        bestStreak: Math.max(stats.speedQuiz.bestStreak, maxStreak)
      }
    };
    saveMiniGameStats(updatedStats);
    setHighScore(updatedStats.speedQuiz.highScore);
  };

  const currentQ = questions[currentIndex];

  // -------------------------------------------------------------
  // RENDER: IDLE (Start Menu)
  // -------------------------------------------------------------
  if (gameState === 'idle') {
    return (
      <div className="bg-gradient-to-br from-amber-500/10 via-sky-500/10 to-indigo-500/10 rounded-3xl p-6 sm:p-10 border border-amber-300/80 shadow-sm text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-linear-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-amber-200 animate-bounce">
            <Zap className="w-10 h-10 fill-white" />
          </div>

          <div>
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-900">
              Mini Game 1
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              ⚡ Phản Xạ Siêu Tốc
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Thử tài phản xạ chớp nhoáng với chuỗi câu hỏi ngắn về <strong>khái niệm, công thức, đơn vị, hiện tượng và bài toán tính nhẩm</strong>. Trả lời càng nhanh và chuẩn xác, điểm số càng bùng nổ!
            </p>
          </div>

          {/* High score pill */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-amber-200 text-amber-900 font-extrabold text-sm shadow-xs">
            <Trophy className="w-5 h-5 text-amber-500 fill-amber-400" />
            <span>Kỷ lục điểm cao nhất: {highScore} điểm</span>
          </div>

          {/* Mode Selection Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <button
              onClick={() => startGame('quick10')}
              className="p-5 rounded-2xl bg-white hover:bg-amber-50/60 border-2 border-amber-400 text-left transition-all hover:scale-102 hover:shadow-md cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">⏱️</span>
                <span className="px-2 py-0.5 text-2xs font-extrabold bg-amber-100 text-amber-900 rounded-md">
                  10 Câu
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700">
                10 Câu Chớp Nhoáng
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                15 giây mỗi câu. Tính điểm theo tốc độ trả lời và chuỗi liên tiếp.
              </p>
            </button>

            <button
              onClick={() => startGame('survival')}
              className="p-5 rounded-2xl bg-white hover:bg-rose-50/60 border-2 border-rose-300 text-left transition-all hover:scale-102 hover:shadow-md cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">❤️</span>
                <span className="px-2 py-0.5 text-2xs font-extrabold bg-rose-100 text-rose-900 rounded-md">
                  3 Mạng
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-rose-700">
                Chế Độ Sinh Tồn
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Chơi không giới hạn số câu hỏi cho đến khi mất hết 3 mạng sinh lực!
              </p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER: GAME OVER
  // -------------------------------------------------------------
  if (gameState === 'gameover') {
    const isNewRecord = score > highScore;
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-xl mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
          <Trophy className="w-8 h-8 fill-amber-400 text-amber-600" />
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Kết Thúc Vòng Chơi!
          </h2>
          {isNewRecord && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black mt-2 animate-pulse">
              <Sparkles className="w-4 h-4" /> KỶ LỤC ĐIỂM MỚI!
            </div>
          )}
        </div>

        {/* Score display */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-md">
          <div className="text-xs uppercase font-extrabold tracking-wider opacity-80">
            Tổng điểm của em
          </div>
          <div className="text-4xl sm:text-5xl font-black mt-1">
            {score}
          </div>
          <div className="text-xs opacity-90 mt-1">
            Trả lời đúng: {correctCount} / {questions.length} câu
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 text-left">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-2xs text-slate-400 font-bold uppercase block">Chuỗi đúng cao nhất</span>
            <span className="text-lg font-black text-slate-800 flex items-center gap-1.5 mt-0.5">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500" /> {maxStreak} câu
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-2xs text-slate-400 font-bold uppercase block">Điểm kỷ lục cũ</span>
            <span className="text-lg font-black text-slate-800 flex items-center gap-1.5 mt-0.5">
              <Trophy className="w-4 h-4 text-amber-500" /> {highScore}đ
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => startGame(gameMode)}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-all shadow-md shadow-amber-200 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Chơi Lại Ngay</span>
          </button>

          <button
            onClick={() => setGameState('idle')}
            className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold transition-all cursor-pointer"
          >
            <span>Đổi Chế Độ</span>
          </button>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER: ACTIVE GAMEPLAY
  // -------------------------------------------------------------
  const progressPercent = ((TIME_LIMIT - timeLeft) / TIME_LIMIT) * 100;
  const isUrgent = timeLeft <= 4;

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Top Status Bar: Timer, Score, Streak, Lives */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between gap-3">
        {/* Question Counter */}
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-800 text-xs font-black flex items-center justify-center">
            {currentIndex + 1}
          </span>
          <span className="text-xs text-slate-500 font-bold">
            / {questions.length}
          </span>
          <span className="px-2 py-0.5 rounded-md text-2xs font-extrabold bg-slate-100 text-slate-600 hidden sm:inline-block">
            {currentQ.categoryLabel}
          </span>
        </div>

        {/* Score & Streak */}
        <div className="flex items-center gap-3">
          {streak >= 2 && (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-black animate-pulse">
              <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
              <span>x{streak}</span>
            </div>
          )}

          <div className="text-sm font-black text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            ⭐ {score}đ
          </div>

          {gameMode === 'survival' && (
            <div className="flex items-center gap-1 text-rose-500">
              {[...Array(3)].map((_, i) => (
                <Heart
                  key={i}
                  className={`w-4 h-4 ${i < lives ? 'fill-rose-500 text-rose-500' : 'text-slate-300'}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Countdown Progress Bar */}
      <div className="relative w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200/80">
        <div 
          className={`h-full transition-all duration-1000 ${
            isUrgent ? 'bg-rose-500 animate-pulse' : 'bg-linear-to-r from-amber-400 to-amber-500'
          }`}
          style={{ width: `${100 - progressPercent}%` }}
        />
        <div className="absolute right-2 top-0 bottom-0 flex items-center text-3xs font-extrabold text-slate-600">
          <Clock className="w-2.5 h-2.5 mr-1" /> {timeLeft}s
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div>
          <span className="text-2xs font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 inline-block mb-3">
            {currentQ.categoryLabel}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
            <FormattedText text={currentQ.question} />
          </h3>
        </div>

        {/* 4 Shuffled Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {currentOptions.map((opt) => {
            const isSelected = selectedLabel === opt.label;
            const isThisCorrect = opt.text === currentQ.correctAnswer;
            
            let btnStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800 hover:border-sky-300';

            if (gameState === 'answered') {
              if (isThisCorrect) {
                btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-400/40';
              } else if (isSelected && !isThisCorrect) {
                btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-400/40';
              } else {
                btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={opt.label}
                disabled={gameState !== 'playing'}
                onClick={() => handleSelectAnswer(opt)}
                className={`flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${btnStyle}`}
              >
                <span className={`w-8 h-8 rounded-xl font-black text-sm flex items-center justify-center shrink-0 ${
                  gameState === 'answered' && isThisCorrect 
                    ? 'bg-emerald-500 text-white' 
                    : isSelected && !isThisCorrect 
                    ? 'bg-rose-500 text-white' 
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  {opt.label}
                </span>
                <span className="text-sm font-semibold flex-1 leading-snug">
                  <FormattedText text={opt.text} />
                </span>
              </button>
            );
          })}
        </div>

        {/* Immediate Feedback Banner with Explanation */}
        {gameState === 'answered' && (
          <div className="space-y-4 pt-2">
            <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
              isCorrect 
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
                : 'bg-rose-50 border-rose-300 text-rose-900'
            }`}>
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              )}
              <div className="text-xs sm:text-sm">
                <div className="font-extrabold mb-1">
                  {isCorrect ? 'Chính xác! Tốc độ phản xạ xuất sắc! 🎉' : selectedLabel === 'TIMEOUT' ? 'Hết giờ rồi!' : 'Chưa chính xác!'}
                </div>
                <div className="text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900">Giải thích: </span>
                  <FormattedText text={currentQ.explanation} />
                </div>
              </div>
            </div>

            <button
              onClick={handleNextQuestion}
              className="w-full py-3.5 px-6 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-sky-200 transition-all hover:scale-101 cursor-pointer"
            >
              <span>{currentIndex + 1 >= questions.length ? 'Xem Kết Quả Tổng Kết' : 'Câu Tiếp Theo'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
