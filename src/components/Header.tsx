import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  FlaskConical, 
  Gamepad2, 
  FileCheck2, 
  TrendingUp, 
  Volume2, 
  VolumeX, 
  Flame,
  Atom,
  AlertTriangle
} from 'lucide-react';
import { soundManager } from '../utils/audio';
import { TabType, UserProgress } from '../types';
import { getSavedReports } from '../utils/questionReports';
import { QuestionReportModal } from './QuestionReportModal';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  userProgress: UserProgress;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  userProgress,
  onToggleSound
}) => {
  const soundEnabled = userProgress.soundEnabled;
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportsCount, setReportsCount] = useState(0);

  useEffect(() => {
    setReportsCount(getSavedReports().length);
  }, [reportModalOpen]);

  const navItems = [
    { id: 'lessons' as TabType, label: 'Bài Học (1-17)', icon: BookOpen },
    { id: 'simulations' as TabType, label: 'Thí Nghiệm Ảo', icon: FlaskConical },
    { id: 'games' as TabType, label: '🎮 Mini Game Vật Lý', icon: Gamepad2 },
    { id: 'exam' as TabType, label: 'Luyện Tập & Thi', icon: FileCheck2 },
    { id: 'progress' as TabType, label: 'Tiến Độ Học', icon: TrendingUp },
  ];


  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Title */}
          <div 
            onClick={() => setActiveTab('lessons')}
            className="flex items-center gap-3 cursor-pointer select-none group"
            id="app-logo-btn"
          >

            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-linear-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-200 group-hover:scale-105 transition-transform duration-200">
              <Atom className="w-6 h-6 sm:w-7 sm:h-7 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold bg-linear-to-r from-sky-600 to-indigo-700 bg-clip-text text-transparent">
                  Vật Lý 9
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold uppercase tracking-wider bg-sky-100 text-sky-700 rounded-full">
                  Kết Nối Tri Thức
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Học lý thuyết, mô phỏng thí nghiệm & luyện thi trắc nghiệm
              </p>
            </div>
          </div>

          {/* Quick stats & sound toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Streak & Score pills */}
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium">
                <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Chuỗi {userProgress.streakDays} ngày</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
                <span>⭐ {userProgress.correctAnswersCount} điểm</span>
              </div>
            </div>

            {/* Sound toggle button */}
            <button
              onClick={onToggleSound}
              className={`p-2.5 rounded-xl border transition-all ${
                soundEnabled 
                  ? 'bg-sky-50 border-sky-200 text-sky-700 hover:bg-sky-100' 
                  : 'bg-slate-100 border-slate-200 text-slate-400 hover:bg-slate-200'
              }`}
              title={soundEnabled ? 'Tắt âm thanh hiệu ứng' : 'Bật âm thanh hiệu ứng (tiếng vỗ tay khi đúng)'}
              aria-label="Cài đặt âm thanh"
              id="sound-toggle-btn"
            >
              {soundEnabled ? (
                <Volume2 className="w-5 h-5 text-sky-600" />
              ) : (
                <VolumeX className="w-5 h-5" />
              )}
            </button>

            {/* Error Reports Management Button */}
            <button
              onClick={() => setReportModalOpen(true)}
              className="p-2 sm:px-3 rounded-xl border border-rose-200 bg-rose-50/70 hover:bg-rose-100 text-rose-700 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
              title="Quản lý và xem danh sách các câu hỏi đã được báo lỗi"
              id="header-reports-btn"
            >
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span className="hidden sm:inline">Báo Lỗi</span>
              {reportsCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-rose-600 text-white text-3xs font-black">
                  {reportsCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto pb-2 scrollbar-none" aria-label="Tabs">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                id={`nav-tab-${item.id}`}
                className={`flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-sm shadow-sky-300'
                    : 'text-slate-600 hover:text-sky-700 hover:bg-sky-50/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

      </div>

      {/* Global Question Reports Admin View Modal */}
      <QuestionReportModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        questionId="TỔNG HỢP"
        lessonId={0}
        lessonTitle="Toàn bộ ngân hàng câu hỏi"
        questionText="Xem và xử lý danh sách phản hồi từ học sinh và giáo viên"
        options={[]}
        correctAnswer=""
        initialTeacherMode={true}
      />
    </header>
  );
};
