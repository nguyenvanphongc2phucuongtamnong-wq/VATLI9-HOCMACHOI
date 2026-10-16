import React, { useState, useEffect } from 'react';
import { 
  TREASURE_TOPICS, 
  TreasureTopic, 
  TreasureStage, 
  getSavedMiniGameStats, 
  saveMiniGameStats 
} from '../../data/miniGamesData';
import { QuestionDifficulty } from '../../types';
import { MathView, FormattedText } from '../MathView';
import { soundManager } from '../../utils/audio';
import { shuffleArray } from '../../utils/random';
import confetti from 'canvas-confetti';
import { 
  Key, 
  Lock, 
  Unlock, 
  Sparkles, 
  Heart, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ChevronRight, 
  Trophy, 
  Star,
  MapPin,
  Compass,
  ArrowRight
} from 'lucide-react';

interface ShuffledTreasureOption {
  label: string;
  text: string;
}

export const TreasureHuntGame: React.FC = () => {
  // Game states: 'select-topic' | 'playing' | 'victory' | 'failed'
  const [gameState, setGameState] = useState<'select-topic' | 'playing' | 'victory' | 'failed'>('select-topic');
  
  // Topic & difficulty selections
  const [selectedTopic, setSelectedTopic] = useState<TreasureTopic>(TREASURE_TOPICS[0]);
  const [difficulty, setDifficulty] = useState<QuestionDifficulty>('de');

  // Journey state
  const [stages, setStages] = useState<TreasureStage[]>([]);
  const [currentStageIdx, setCurrentStageIdx] = useState<number>(0);
  const [keysCollected, setKeysCollected] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [score, setScore] = useState<number>(0);

  // Current stage question options
  const [currentOptions, setCurrentOptions] = useState<ShuffledTreasureOption[]>([]);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);

  // High scores & stats
  const [stats, setStats] = useState(() => getSavedMiniGameStats());

  useEffect(() => {
    setStats(getSavedMiniGameStats());
  }, [gameState]);

  // Start expedition
  const startExpedition = (topic: TreasureTopic, diff: QuestionDifficulty) => {
    setSelectedTopic(topic);
    setDifficulty(diff);

    // Get stages for the selected difficulty and shuffle questions slightly or randomize choices
    const baseStages = topic.stages[diff];
    const randomizedStages = shuffleArray(baseStages);
    setStages(randomizedStages);
    setCurrentStageIdx(0);
    setKeysCollected(0);
    setLives(3);
    setScore(0);
    setupStageQuestion(randomizedStages[0]);
    setGameState('playing');
  };

  const setupStageQuestion = (stage: TreasureStage) => {
    const shuffledTexts = shuffleArray(stage.options);
    const labels = ['A', 'B', 'C', 'D'];
    const optionsWithLabels: ShuffledTreasureOption[] = shuffledTexts.map((text, idx) => ({
      label: labels[idx],
      text
    }));
    setCurrentOptions(optionsWithLabels);
    setSelectedLabel(null);
    setIsCorrect(null);
    setShowHint(false);
  };

  const currentStage = stages[currentStageIdx];

  // User submits answer
  const handleAnswer = (option: ShuffledTreasureOption) => {
    if (selectedLabel !== null) return; // already answered
    setSelectedLabel(option.label);

    const correct = option.text === currentStage.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      soundManager.playCorrect();
      const pointsEarned = currentStage.points * (difficulty === 'cuc_kho' ? 2 : difficulty === 'kho' ? 1.5 : 1);
      setScore(prev => prev + Math.round(pointsEarned));
      setKeysCollected(prev => prev + 1);

      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
      });
    } else {
      soundManager.playWrong();
      setShowHint(true);
      const remainingLives = lives - 1;
      setLives(remainingLives);
      if (remainingLives <= 0) {
        setGameState('failed');
      }
    }
  };

  // Next stage or finish
  const handleNextStage = () => {
    const nextIdx = currentStageIdx + 1;
    if (nextIdx >= stages.length) {
      // Victory! Treasure unlocked
      soundManager.playApplause();
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.5 }
      });

      const currentStats = getSavedMiniGameStats();
      const updatedStats = {
        ...currentStats,
        treasureHunt: {
          treasuresUnlocked: currentStats.treasureHunt.treasuresUnlocked + 1,
          totalStars: currentStats.treasureHunt.totalStars + (difficulty === 'cuc_kho' ? 3 : difficulty === 'kho' ? 2 : 1),
          highScore: Math.max(currentStats.treasureHunt.highScore, score + 200),
          completedTopics: Array.from(new Set([...currentStats.treasureHunt.completedTopics, selectedTopic.id]))
        }
      };
      saveMiniGameStats(updatedStats);
      setStats(updatedStats);
      setGameState('victory');
    } else {
      setCurrentStageIdx(nextIdx);
      setupStageQuestion(stages[nextIdx]);
    }
  };

  // -------------------------------------------------------------
  // RENDER: TOPIC & DIFFICULTY SELECTION
  // -------------------------------------------------------------
  if (gameState === 'select-topic') {
    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-indigo-500/15 rounded-3xl p-6 sm:p-8 border border-amber-300 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-3xl shadow-md shadow-amber-200">
                🧲
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 text-2xs font-extrabold uppercase tracking-wider bg-amber-200 text-amber-950 rounded-full">
                    Mini Game 2
                  </span>
                  <span className="text-xs font-bold text-amber-900">
                    Mở Rương Kho Báu Vật Lý
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Kho Báu Vật Lý: Chinh Phục Thử Thách
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Vượt qua 5 chặng đường bí ẩn bằng kiến thức Vật Lý để thu thập đủ 5 Chìa Khóa Vàng 🗝️ và mở khóa Rương Kho Báu Hoàng Kim!
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-amber-200 shadow-2xs">
              <Trophy className="w-5 h-5 text-amber-500 fill-amber-400" />
              <div className="text-left">
                <span className="text-2xs text-slate-400 font-bold uppercase block">Rương đã mở</span>
                <span className="text-sm font-black text-slate-900">{stats.treasureHunt.treasuresUnlocked} rương 👑</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 1: Select Difficulty */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-3">
          <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <span>1. Chọn mức độ thử thách:</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setDifficulty('de')}
              className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                difficulty === 'de'
                  ? 'border-emerald-500 bg-emerald-50/70 ring-2 ring-emerald-300/40'
                  : 'border-slate-200 hover:border-emerald-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-lg">🟢</span>
                <span className="text-xs font-black text-emerald-700">Dễ (x1 điểm)</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Nhận Biết & Công Thức</h4>
              <p className="text-2xs text-slate-500 mt-1">
                Hỏi về định luật cơ bản, công thức SGK và ví dụ trực quan.
              </p>
            </button>

            <button
              onClick={() => setDifficulty('kho')}
              className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                difficulty === 'kho'
                  ? 'border-amber-500 bg-amber-50/70 ring-2 ring-amber-300/40'
                  : 'border-slate-200 hover:border-amber-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-lg">🟡</span>
                <span className="text-xs font-black text-amber-700">Khó (x1.5 điểm)</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Hiểu Bản Chất & Vận Dụng</h4>
              <p className="text-2xs text-slate-500 mt-1">
                Liên hệ 2 công thức, so sánh đại lượng và giải bài toán 2 bước.
              </p>
            </button>

            <button
              onClick={() => setDifficulty('cuc_kho')}
              className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                difficulty === 'cuc_kho'
                  ? 'border-rose-500 bg-rose-50/70 ring-2 ring-rose-300/40'
                  : 'border-slate-200 hover:border-rose-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-lg">🔴</span>
                <span className="text-xs font-black text-rose-700">Cực Khó (x2 điểm)</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Suy Luận Nâng Cao</h4>
              <p className="text-2xs text-slate-500 mt-1">
                Bài toán mạch hỗn hợp, bảo toàn cơ năng và khúc xạ phản xạ toàn phần.
              </p>
            </button>
          </div>
        </div>

        {/* Step 2: Select Topic & Start */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
          <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <span>2. Chọn bản đồ thám hiểm theo chủ đề:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TREASURE_TOPICS.map((topic) => {
              const isSelected = selectedTopic.id === topic.id;
              const isCleared = stats.treasureHunt.completedTopics.includes(topic.id);

              return (
                <div
                  key={topic.id}
                  className={`p-5 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'border-amber-500 bg-amber-50/30 ring-2 ring-amber-400/40 shadow-sm'
                      : 'border-slate-200 hover:border-amber-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl">{topic.icon}</span>
                      {isCleared && (
                        <span className="px-2 py-0.5 text-3xs font-extrabold bg-emerald-100 text-emerald-800 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Đã Mở
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      {topic.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {topic.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => startExpedition(topic, difficulty)}
                    className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  >
                    <span>Bắt Đầu Vượt Ải</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER: VICTORY (Treasure Unlocked)
  // -------------------------------------------------------------
  if (gameState === 'victory') {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-xl mx-auto text-center space-y-6">
        <div className="w-24 h-24 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-inner text-5xl animate-bounce">
          👑
        </div>

        <div>
          <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-900">
            Chiến Thắng Vang Dội!
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            RƯƠNG KHO BÁU ĐÃ MỞ KHÓA!
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Em đã xuất sắc giải mã toàn bộ 5 thử thách của chủ đề <strong>{selectedTopic.title}</strong>!
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-gradient-to-tr from-amber-400 via-amber-500 to-yellow-500 text-white shadow-lg space-y-2">
          <div className="text-xs font-extrabold uppercase tracking-wider opacity-90">
            Kho báu tích lũy
          </div>
          <div className="text-4xl sm:text-5xl font-black">
            +{score} Điểm
          </div>
          <div className="flex items-center justify-center gap-1 text-yellow-100 pt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-200 text-yellow-300" />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => startExpedition(selectedTopic, difficulty)}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-all shadow-md shadow-amber-200 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Thám Hiểm Lại</span>
          </button>

          <button
            onClick={() => setGameState('select-topic')}
            className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold transition-all cursor-pointer"
          >
            <span>Chọn Bản Đồ Khác</span>
          </button>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER: FAILED
  // -------------------------------------------------------------
  if (gameState === 'failed') {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-xl mx-auto text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto text-4xl">
          💀
        </div>

        <div>
          <h2 className="text-2xl font-black text-slate-900">
            Hết Mạng Sinh Lực!
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Em đã dùng hết 3 mạng tại <strong>{currentStage.stageName}</strong>. Đừng nản lòng, hãy xem lại gợi ý và thử lại nhé!
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 space-y-1">
          <span className="font-bold text-slate-900 block">💡 Lời giải ngắn của chặng này:</span>
          <FormattedText text={currentStage.explanation} />
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => startExpedition(selectedTopic, difficulty)}
            className="flex-1 py-3 px-5 rounded-2xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-all shadow-md shadow-amber-200 cursor-pointer"
          >
            Thử Lại Từ Đầu
          </button>
          <button
            onClick={() => setGameState('select-topic')}
            className="py-3 px-5 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 font-bold hover:bg-slate-100 transition-all cursor-pointer"
          >
            Đổi Chủ Đề
          </button>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER: ACTIVE EXPEDITION JOURNEY
  // -------------------------------------------------------------
  return (
    <div className="max-w-3xl mx-auto space-y-5">
      {/* Expedition Stage Map (Checkpoints) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-500" />
            <span className="font-bold text-xs sm:text-sm text-slate-800">
              {selectedTopic.title}
            </span>
            <span className={`px-2 py-0.5 rounded-full text-2xs font-extrabold ${
              difficulty === 'de' ? 'bg-emerald-100 text-emerald-800' : difficulty === 'kho' ? 'bg-amber-100 text-amber-900' : 'bg-rose-100 text-rose-900'
            }`}>
              {difficulty === 'de' ? 'Dễ' : difficulty === 'kho' ? 'Khó' : 'Cực Khó'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Lives */}
            <div className="flex items-center gap-1 text-rose-500">
              {[...Array(3)].map((_, i) => (
                <Heart
                  key={i}
                  className={`w-4 h-4 ${i < lives ? 'fill-rose-500 text-rose-500' : 'text-slate-300'}`}
                />
              ))}
            </div>

            {/* Score */}
            <span className="font-black text-xs sm:text-sm text-amber-900 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
              ⭐ {score}đ
            </span>
          </div>
        </div>

        {/* 5 Checkpoints Pathway */}
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-slate-100 -translate-y-1/2 z-0" />
          {stages.map((st, idx) => {
            const isCompleted = idx < currentStageIdx || (idx === currentStageIdx && isCorrect);
            const isCurrent = idx === currentStageIdx;

            return (
              <div key={idx} className="flex flex-col items-center relative z-10">
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-black transition-all ${
                    isCompleted
                      ? 'bg-amber-500 text-white shadow-md shadow-amber-200 scale-105'
                      : isCurrent
                      ? 'bg-sky-600 text-white ring-4 ring-sky-200 animate-pulse'
                      : 'bg-slate-100 text-slate-400 border border-slate-200'
                  }`}
                >
                  {isCompleted ? '🗝️' : idx === stages.length - 1 ? '👑' : idx + 1}
                </div>
                <span className="text-3xs font-bold text-slate-500 mt-1 hidden sm:block max-w-[60px] text-center truncate">
                  {st.stageName.split(':')[0]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Current Stage Challenge Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">{currentStage.stageIcon}</span>
            <div>
              <span className="text-3xs font-extrabold text-amber-700 uppercase tracking-wider block">
                Chặng {currentStageIdx + 1} / {stages.length}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {currentStage.stageName}
              </h3>
            </div>
          </div>

          <div className="px-2.5 py-1 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold flex items-center gap-1">
            <Key className="w-3.5 h-3.5 text-amber-600" />
            <span>+{currentStage.points}đ</span>
          </div>
        </div>

        {/* Question Text */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
          <FormattedText text={currentStage.question} />
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {currentOptions.map((opt) => {
            const isSelected = selectedLabel === opt.label;
            const isThisCorrect = opt.text === currentStage.correctAnswer;

            let btnStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800 hover:border-amber-300';
            if (selectedLabel !== null) {
              if (isThisCorrect) {
                btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-300';
              } else if (isSelected) {
                btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-300';
              } else {
                btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={opt.label}
                disabled={selectedLabel !== null}
                onClick={() => handleAnswer(opt)}
                className={`flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${btnStyle}`}
              >
                <span className={`w-8 h-8 rounded-xl font-black text-sm flex items-center justify-center shrink-0 ${
                  selectedLabel !== null && isThisCorrect
                    ? 'bg-emerald-500 text-white'
                    : isSelected && !isThisCorrect
                    ? 'bg-rose-500 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  {opt.label}
                </span>
                <span className="text-xs sm:text-sm font-semibold flex-1 leading-snug">
                  <FormattedText text={opt.text} />
                </span>
              </button>
            );
          })}
        </div>

        {/* Hint or Explanation Card */}
        {selectedLabel !== null && (
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
                  {isCorrect ? 'Tuyệt vời! Thu thập thành công 1 Chìa Khóa Vàng 🗝️' : 'Chưa đúng, mất 1 ❤️!'}
                </div>
                <div className="text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900">Giải thích: </span>
                  <FormattedText text={currentStage.explanation} />
                </div>
              </div>
            </div>

            <button
              onClick={handleNextStage}
              className="w-full py-3.5 px-6 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-amber-200 transition-all cursor-pointer"
            >
              <span>{currentStageIdx + 1 >= stages.length ? 'Mở Rương Kho Báu' : 'Tiến Lên Chặng Tiếp Theo'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Optional Hint if player gets stuck */}
        {selectedLabel === null && (
          <div className="flex justify-end pt-1">
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-2xs text-amber-700 hover:text-amber-800 font-bold flex items-center gap-1 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{showHint ? 'Ẩn gợi ý' : 'Xem gợi ý thử thách'}</span>
            </button>
          </div>
        )}

        {showHint && selectedLabel === null && (
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Gợi ý: </span>
              <FormattedText text={currentStage.hint} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
