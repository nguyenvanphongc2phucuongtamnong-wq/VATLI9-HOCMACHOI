import React, { useState, useEffect } from 'react';
import { getSavedMiniGameStats, saveMiniGameStats, INITIAL_MINIGAME_STATS, MiniGameStats } from '../../data/miniGamesData';
import { 
  Trophy, 
  Award, 
  Zap, 
  Sparkles, 
  Flame, 
  RotateCcw, 
  CheckCircle2, 
  Star, 
  Compass, 
  FlaskConical,
  ShieldAlert,
  Medal
} from 'lucide-react';

interface Badge {
  id: string;
  title: string;
  desc: string;
  icon: string;
  isUnlocked: (stats: MiniGameStats) => boolean;
}

export const AchievementsView: React.FC<{ onNavigateToGame: (tab: 'speed' | 'treasure' | 'lab') => void }> = ({ onNavigateToGame }) => {
  const [stats, setStats] = useState<MiniGameStats>(() => getSavedMiniGameStats());
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => {
    setStats(getSavedMiniGameStats());
  }, []);

  const badges: Badge[] = [
    {
      id: 'b-speed-1',
      title: 'Tia Chớp Phản Xạ',
      desc: 'Đạt từ 300 điểm trở lên trong Mini Game Phản Xạ Siêu Tốc',
      icon: '⚡',
      isUnlocked: (s) => s.speedQuiz.highScore >= 300
    },
    {
      id: 'b-speed-2',
      title: 'Bậc Thầy Tốc Độ',
      desc: 'Đạt từ 800 điểm trở lên trong Mini Game Phản Xạ Siêu Tốc',
      icon: '🏎️',
      isUnlocked: (s) => s.speedQuiz.highScore >= 800
    },
    {
      id: 'b-streak-1',
      title: 'Chuỗi Bất Bại',
      desc: 'Đạt chuỗi trả lời đúng liên tiếp từ 5 câu trở lên',
      icon: '🔥',
      isUnlocked: (s) => s.speedQuiz.bestStreak >= 5
    },
    {
      id: 'b-treasure-1',
      title: 'Nhà Thám Hiểm',
      desc: 'Mở khóa thành công ít nhất 1 Rương Kho Báu Vật Lý',
      icon: '🗝️',
      isUnlocked: (s) => s.treasureHunt.treasuresUnlocked >= 1
    },
    {
      id: 'b-treasure-2',
      title: 'Vua Kho Báu Hoàng Kim',
      desc: 'Mở khóa từ 3 Rương Kho Báu Vật Lý trở lên',
      icon: '👑',
      isUnlocked: (s) => s.treasureHunt.treasuresUnlocked >= 3
    },
    {
      id: 'b-stars-1',
      title: 'Nhà Thu Thập Ngôi Sao',
      desc: 'Tích lũy từ 5 Ngôi Sao Vàng ⭐ trở lên từ các ải Kho Báu',
      icon: '⭐',
      isUnlocked: (s) => s.treasureHunt.totalStars >= 5
    },
    {
      id: 'b-lab-1',
      title: 'Nhà Thực Nghiệm',
      desc: 'Đưa ra ít nhất 3 dự đoán khoa học chính xác trong Phòng Thí Nghiệm Ảo',
      icon: '🔬',
      isUnlocked: (s) => s.virtualLab.correctPredictions >= 3
    },
    {
      id: 'b-lab-2',
      title: 'Bác Học Tương Lai',
      desc: 'Thực hiện và kiểm chứng từ 6 lượt thí nghiệm mô phỏng',
      icon: '🧪',
      isUnlocked: (s) => s.virtualLab.totalRuns >= 6
    }
  ];

  const unlockedBadgesCount = badges.filter((b) => b.isUnlocked(stats)).length;

  const handleReset = () => {
    saveMiniGameStats(INITIAL_MINIGAME_STATS);
    setStats(INITIAL_MINIGAME_STATS);
    setConfirmReset(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-amber-500/15 via-purple-500/10 to-sky-500/15 rounded-3xl p-6 sm:p-8 border border-amber-300 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-3xl shadow-md shadow-amber-200">
              🏆
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-2xs font-extrabold uppercase tracking-wider bg-amber-200 text-amber-950 rounded-full">
                  Bảng Thành Tích Cá Nhân
                </span>
                <span className="text-xs font-bold text-amber-900">
                  Độc Lập & Lưu Trữ Riêng Biệt
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Thành Tích & Huy Hiệu Mini Game
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Toàn bộ kỷ lục điểm số, số lần chơi và huy hiệu đạt được khi tham gia 3 mini game Vật lý.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-amber-200 shadow-2xs">
            <Medal className="w-5 h-5 text-amber-500" />
            <div className="text-left">
              <span className="text-2xs text-slate-400 font-bold uppercase block">Huy hiệu đạt được</span>
              <span className="text-sm font-black text-slate-900">
                {unlockedBadgesCount} / {badges.length} huy hiệu
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Game Detailed Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Game 1: Speed Quiz Stats */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <h3 className="font-extrabold text-sm text-slate-900">
                  Phản Xạ Siêu Tốc
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded-md text-3xs font-extrabold bg-amber-100 text-amber-900">
                Mini Game 1
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50">
                <span className="text-slate-500 font-medium">Điểm kỷ lục cao nhất:</span>
                <span className="font-black text-amber-700">{stats.speedQuiz.highScore}đ</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50">
                <span className="text-slate-500 font-medium">Số lượt đã chơi:</span>
                <span className="font-black text-slate-800">{stats.speedQuiz.gamesPlayed} lượt</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50">
                <span className="text-slate-500 font-medium">Tổng số câu đúng:</span>
                <span className="font-black text-emerald-600">{stats.speedQuiz.totalCorrect} câu</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50">
                <span className="text-slate-500 font-medium">Chuỗi đúng dài nhất:</span>
                <span className="font-black text-orange-600">{stats.speedQuiz.bestStreak} câu</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigateToGame('speed')}
            className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-all cursor-pointer"
          >
            Chơi Phản Xạ Siêu Tốc
          </button>
        </div>

        {/* Game 2: Treasure Hunt Stats */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧲</span>
                <h3 className="font-extrabold text-sm text-slate-900">
                  Kho Báu Vật Lý
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded-md text-3xs font-extrabold bg-amber-100 text-amber-900">
                Mini Game 2
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50">
                <span className="text-slate-500 font-medium">Rương đã mở khóa:</span>
                <span className="font-black text-amber-700">{stats.treasureHunt.treasuresUnlocked} rương 👑</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50">
                <span className="text-slate-500 font-medium">Tổng sao tích lũy:</span>
                <span className="font-black text-yellow-600">{stats.treasureHunt.totalStars} ⭐</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50">
                <span className="text-slate-500 font-medium">Điểm kỷ lục thám hiểm:</span>
                <span className="font-black text-slate-800">{stats.treasureHunt.highScore}đ</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50">
                <span className="text-slate-500 font-medium">Chủ đề đã chinh phục:</span>
                <span className="font-black text-emerald-600">{stats.treasureHunt.completedTopics.length} bản đồ</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigateToGame('treasure')}
            className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-all cursor-pointer"
          >
            Chơi Kho Báu Vật Lý
          </button>
        </div>

        {/* Game 3: Virtual Lab Stats */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔬</span>
                <h3 className="font-extrabold text-sm text-slate-900">
                  Phòng Thí Nghiệm Ảo
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded-md text-3xs font-extrabold bg-indigo-100 text-indigo-900">
                Mini Game 3
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50">
                <span className="text-slate-500 font-medium">Dự đoán chính xác:</span>
                <span className="font-black text-indigo-700">{stats.virtualLab.correctPredictions} lần</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50">
                <span className="text-slate-500 font-medium">Số lượt chạy thí nghiệm:</span>
                <span className="font-black text-slate-800">{stats.virtualLab.totalRuns} lần</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50">
                <span className="text-slate-500 font-medium">Thí nghiệm đã kiểm chứng:</span>
                <span className="font-black text-emerald-600">{stats.virtualLab.experimentsCompleted} trạm</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-50">
                <span className="text-slate-500 font-medium">Tỉ lệ chính xác:</span>
                <span className="font-black text-amber-600">
                  {stats.virtualLab.totalRuns > 0
                    ? `${Math.round((stats.virtualLab.correctPredictions / stats.virtualLab.totalRuns) * 100)}%`
                    : '0%'}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigateToGame('lab')}
            className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-all cursor-pointer"
          >
            Vào Phòng Thí Nghiệm Ảo
          </button>
        </div>
      </div>

      {/* Badges Collection */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="font-black text-base text-slate-900">
              Bộ Sưu Tập Huy Hiệu Danh Giá (8 Huy Hiệu)
            </h3>
          </div>
          <span className="text-xs font-bold text-slate-500">
            {unlockedBadgesCount} / {badges.length} đã mở
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {badges.map((badge) => {
            const unlocked = badge.isUnlocked(stats);

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                  unlocked
                    ? 'border-amber-300 bg-amber-50/40 shadow-2xs'
                    : 'border-slate-100 bg-slate-50/60 opacity-60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{badge.icon}</span>
                    {unlocked ? (
                      <span className="px-2 py-0.5 rounded-full text-3xs font-extrabold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Đã Mở
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full text-3xs font-bold bg-slate-200 text-slate-600">
                        Chưa Mở
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mb-1">
                    {badge.title}
                  </h4>
                  <p className="text-2xs text-slate-500 leading-relaxed">
                    {badge.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reset stats option */}
      <div className="flex justify-end pt-2">
        {confirmReset ? (
          <div className="flex items-center gap-2 bg-rose-50 p-2.5 rounded-xl border border-rose-200">
            <span className="text-2xs text-rose-800 font-bold">Xác nhận xóa toàn bộ điểm mini game?</span>
            <button
              onClick={handleReset}
              className="px-2.5 py-1 bg-rose-600 text-white rounded-lg text-2xs font-bold hover:bg-rose-700 cursor-pointer"
            >
              Xóa Ngay
            </button>
            <button
              onClick={() => setConfirmReset(false)}
              className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded-lg text-2xs font-bold hover:bg-slate-50 cursor-pointer"
            >
              Hủy
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirmReset(true)}
            className="text-2xs text-slate-400 hover:text-rose-600 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Đặt lại toàn bộ thành tích mini game</span>
          </button>
        )}
      </div>
    </div>
  );
};
