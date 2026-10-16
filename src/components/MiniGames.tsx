import React, { useState } from 'react';
import { SpeedQuizGame } from './minigames/SpeedQuizGame';
import { TreasureHuntGame } from './minigames/TreasureHuntGame';
import { VirtualLabGame } from './minigames/VirtualLabGame';
import { AchievementsView } from './minigames/AchievementsView';
import { getSavedMiniGameStats } from '../data/miniGamesData';
import { 
  Zap, 
  Key, 
  FlaskConical, 
  Trophy, 
  Sparkles, 
  Gamepad2,
  Medal,
  Award
} from 'lucide-react';

interface MiniGamesProps {
  onSelectLesson?: (lessonId: number) => void;
}

export type MiniGameTab = 'speed' | 'treasure' | 'lab' | 'achievements';

export const MiniGames: React.FC<MiniGamesProps> = ({ onSelectLesson }) => {
  const [activeTab, setActiveTab] = useState<MiniGameTab>('speed');
  const stats = getSavedMiniGameStats();

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Primary Header Hub Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center text-2xl shadow-md shadow-amber-200 shrink-0">
              🎮
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-2xs font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 rounded-full">
                  Khu Vực Riêng Biệt
                </span>
                <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                  Kiến thức chuẩn SGK Vật Lý 9
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                🎮 MINI GAME VẬT LÝ
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Chơi bất kỳ lúc nào không giới hạn. Tích lũy điểm cao, mở khóa rương kho báu và đạt huy hiệu danh giá!
              </p>
            </div>
          </div>

          {/* Quick Score Snapshot */}
          <div className="flex items-center gap-2.5 bg-slate-50 p-2.5 px-4 rounded-2xl border border-slate-200/80 self-stretch sm:self-auto justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-500 fill-amber-400" />
              <div className="text-left">
                <span className="text-3xs font-bold text-slate-400 uppercase block">Kỷ lục tốc độ</span>
                <span className="text-xs font-black text-slate-800">{stats.speedQuiz.highScore}đ</span>
              </div>
            </div>
            <div className="h-6 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600" />
              <div className="text-left">
                <span className="text-3xs font-bold text-slate-400 uppercase block">Rương đã mở</span>
                <span className="text-xs font-black text-slate-800">{stats.treasureHunt.treasuresUnlocked} 👑</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Main Tabs Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-6 border-t border-slate-100 mt-6">
          <button
            onClick={() => setActiveTab('speed')}
            className={`flex items-center justify-center gap-2 p-3 sm:py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'speed'
                ? 'bg-amber-500 text-white shadow-md shadow-amber-200 scale-101'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
            }`}
          >
            <Zap className="w-4 h-4 shrink-0" />
            <span>⚡ Phản Xạ Siêu Tốc</span>
          </button>

          <button
            onClick={() => setActiveTab('treasure')}
            className={`flex items-center justify-center gap-2 p-3 sm:py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'treasure'
                ? 'bg-amber-500 text-white shadow-md shadow-amber-200 scale-101'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
            }`}
          >
            <Key className="w-4 h-4 shrink-0" />
            <span>🧲 Kho Báu Vật Lý</span>
          </button>

          <button
            onClick={() => setActiveTab('lab')}
            className={`flex items-center justify-center gap-2 p-3 sm:py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'lab'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-101'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
            }`}
          >
            <FlaskConical className="w-4 h-4 shrink-0" />
            <span>🔬 Phòng Thí Nghiệm Ảo</span>
          </button>

          <button
            onClick={() => setActiveTab('achievements')}
            className={`flex items-center justify-center gap-2 p-3 sm:py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'achievements'
                ? 'bg-slate-900 text-white shadow-md shadow-slate-300 scale-101'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
            }`}
          >
            <Trophy className="w-4 h-4 shrink-0" />
            <span>🏆 Bảng Điểm & Thành Tích</span>
          </button>
        </div>
      </div>

      {/* Tab Content Display */}
      <div>
        {activeTab === 'speed' && <SpeedQuizGame />}
        {activeTab === 'treasure' && <TreasureHuntGame />}
        {activeTab === 'lab' && <VirtualLabGame />}
        {activeTab === 'achievements' && (
          <AchievementsView onNavigateToGame={(tab) => setActiveTab(tab)} />
        )}
      </div>
    </div>
  );
};
