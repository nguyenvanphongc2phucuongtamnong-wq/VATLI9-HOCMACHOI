import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { LessonList } from './components/LessonList';
import { LessonDetail } from './components/LessonDetail';
import { Simulations } from './components/Simulations';
import { MiniGames } from './components/MiniGames';
import { ExamMode } from './components/ExamMode';
import { ProgressView } from './components/ProgressView';
import { LESSONS_DATA } from './data/lessonsData';
import { UserProgress, TabType } from './types';
import { loadUserProgress, resetUserProgress, checkDailyStreak } from './utils/storage';
import { soundManager } from './utils/audio';
import { Sparkles, BookOpen, FlaskConical, Gamepad2, FileCheck2, TrendingUp } from 'lucide-react';

export default function App() {
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    const loaded = loadUserProgress();
    return checkDailyStreak(loaded);
  });

  const [activeTab, setActiveTab] = useState<TabType>('lessons');
  const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);
  const [lessonInitialTab, setLessonInitialTab] = useState<'theory' | 'quiz'>('theory');

  // Sync audio mute state
  useEffect(() => {
    soundManager.setMuted(!userProgress.soundEnabled);
  }, [userProgress.soundEnabled]);

  const handleToggleSound = () => {
    const updated: UserProgress = {
      ...userProgress,
      soundEnabled: !userProgress.soundEnabled
    };
    setUserProgress(updated);
    soundManager.setMuted(!updated.soundEnabled);
  };

  const handleSelectLesson = (lessonId: number) => {
    setSelectedLessonId(lessonId);
    setLessonInitialTab('theory');
    setActiveTab('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartPractice = (lessonId: number) => {
    setSelectedLessonId(lessonId);
    setLessonInitialTab('quiz');
    setActiveTab('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetProgress = () => {
    if (window.confirm('Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ và điểm số học tập?')) {
      const fresh = resetUserProgress();
      setUserProgress(fresh);
    }
  };

  const selectedLesson = selectedLessonId 
    ? LESSONS_DATA.find(l => l.id === selectedLessonId) 
    : null;

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-800 flex flex-col antialiased selection:bg-sky-100 selection:text-sky-900">
      {/* Top App Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab !== 'detail') setSelectedLessonId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        userProgress={userProgress}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Dynamic View Switching */}
        {activeTab === 'lessons' && (
          <LessonList
            lessons={LESSONS_DATA}
            userProgress={userProgress}
            onSelectLesson={handleSelectLesson}
            onStartPractice={handleStartPractice}
          />
        )}

        {activeTab === 'detail' && selectedLesson && (
          <LessonDetail
            lesson={selectedLesson}
            userProgress={userProgress}
            initialTab={lessonInitialTab}
            onBack={() => {
              setActiveTab('lessons');
              setSelectedLessonId(null);
            }}
            onNextLesson={(nextId) => {
              setSelectedLessonId(nextId);
              setLessonInitialTab('theory');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onUpdateProgress={(updated) => setUserProgress(updated)}
          />
        )}

        {activeTab === 'simulations' && (
          <Simulations />
        )}

        {activeTab === 'games' && (
          <MiniGames onSelectLesson={handleSelectLesson} />
        )}

        {activeTab === 'exam' && (
          <ExamMode
            userProgress={userProgress}
            onUpdateProgress={(updated) => setUserProgress(updated)}
          />
        )}

        {activeTab === 'progress' && (
          <ProgressView
            userProgress={userProgress}
            lessons={LESSONS_DATA}
            onResetProgress={handleResetProgress}
            onSelectLesson={handleSelectLesson}
          />
        )}
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-slate-200/80 bg-white py-6 mt-12 text-center text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-slate-700">Vật Lý 9 - Kết Nối Tri Thức</span>
            <span className="text-slate-400">|</span>
            <span>17 bài học, 340+ câu trắc nghiệm & thí nghiệm mô phỏng</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600">
            <span>Không khóa bài học</span>
            <span>•</span>
            <span>Xáo trộn ngẫu nhiên đáp án ABCD</span>
            <span>•</span>
            <span>Âm thanh chúc mừng & vỗ tay</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
