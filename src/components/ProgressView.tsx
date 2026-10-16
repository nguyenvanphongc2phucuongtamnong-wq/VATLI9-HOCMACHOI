import React from 'react';
import { UserProgress, Lesson } from '../types';
import { getInitialProgress, saveUserProgress } from '../utils/storage';
import { 
  TrendingUp, 
  Award, 
  Flame, 
  CheckCircle2, 
  Clock, 
  RotateCcw, 
  Sparkles,
  BookOpen,
  Calendar,
  Zap,
  Target
} from 'lucide-react';

interface ProgressViewProps {
  userProgress: UserProgress;
  lessons: Lesson[];
  onResetProgress: () => void;
  onSelectLesson: (lessonId: number) => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  userProgress,
  lessons,
  onResetProgress,
  onSelectLesson
}) => {
  const totalLessons = lessons.length;
  const completedLessons = userProgress.completedLessons.length;
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  const accuracy = userProgress.totalQuestionsAnswered > 0
    ? Math.round((userProgress.correctAnswersCount / userProgress.totalQuestionsAnswered) * 100)
    : 0;

  // Chapter completion counts
  const ch1Completed = userProgress.completedLessons.filter(id => id >= 1 && id <= 4).length;
  const ch2Completed = userProgress.completedLessons.filter(id => id >= 5 && id <= 10).length;
  const ch3Completed = userProgress.completedLessons.filter(id => id >= 11 && id <= 14).length;
  const ch4Completed = userProgress.completedLessons.filter(id => id >= 15 && id <= 17).length;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Title Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-800">
              Tiến Độ & Hồ Sơ Học Tập
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Thống kê năng lực, kết quả làm bài tập và danh hiệu học tập
            </p>
          </div>
        </div>

        <button
          onClick={onResetProgress}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 border border-rose-200 self-start sm:self-auto transition-colors"
          title="Đặt lại toàn bộ tiến độ học tập"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Đặt lại tiến độ</span>
        </button>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Bài đã hoàn thành</span>
            <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-800">
            {completedLessons} <span className="text-sm font-bold text-slate-400">/ {totalLessons}</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-sky-500 h-1.5 rounded-full" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Độ chính xác</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-600">
            {accuracy}%
          </div>
          <span className="text-2xs text-slate-400 mt-2 block">
            {userProgress.correctAnswersCount} / {userProgress.totalQuestionsAnswered} câu đúng
          </span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Chuỗi ngày học</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-amber-600">
            {userProgress.streakDays} ngày
          </div>
          <span className="text-2xs text-slate-400 mt-2 block">
            Duy trì học đều đặn mỗi ngày
          </span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Bài thi đã làm</span>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-indigo-600">
            {userProgress.examHistory.length}
          </div>
          <span className="text-2xs text-slate-400 mt-2 block">
            Đề kiểm tra & thi thử
          </span>
        </div>
      </div>

      {/* Chapter Mastery Breakdown */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <h2 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-sky-500" />
          Tiến Độ Từng Chương Học
        </h2>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-700 mb-1">
              <span>Chương I: Năng Lượng Cơ Học (Bài 1 - 4: Động năng, Thế năng, Cơ năng, Công và công suất)</span>
              <span className="font-bold text-sky-600">{ch1Completed} / 4 bài</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-sky-500 h-2 rounded-full transition-all" style={{ width: `${(ch1Completed / 4) * 100}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-700 mb-1">
              <span>Chương II: Ánh Sáng & Quang Học Khúc Xạ (Bài 5 - 10: Khúc xạ, Phản xạ toàn phần, Thấu kính)</span>
              <span className="font-bold text-sky-600">{ch2Completed} / 6 bài</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-sky-500 h-2 rounded-full transition-all" style={{ width: `${(ch2Completed / 6) * 100}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-700 mb-1">
              <span>Chương III: Điện Trở. Định Luật Ohm & Mạch Điện (Bài 11 - 14)</span>
              <span className="font-bold text-sky-600">{ch3Completed} / 4 bài</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-sky-500 h-2 rounded-full transition-all" style={{ width: `${(ch3Completed / 4) * 100}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-700 mb-1">
              <span>Chương IV: Từ Trường & Hiện Tượng Cảm Ứng Điện Từ (Bài 15 - 17)</span>
              <span className="font-bold text-sky-600">{ch4Completed} / 3 bài</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-sky-500 h-2 rounded-full transition-all" style={{ width: `${(ch4Completed / 3) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Badges / Thành Tích */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <h2 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-500" />
          Huy Hiệu Thành Tích Đạt Được
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {userProgress.badges.map((badge) => (
            <div
              key={badge.id}
              className={`p-4 rounded-2xl border flex items-start gap-3 transition-all ${
                badge.unlocked
                  ? 'bg-amber-50/50 border-amber-200'
                  : 'bg-slate-50 border-slate-200 opacity-60'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0 ${
                badge.unlocked ? 'bg-amber-500 text-white shadow-xs' : 'bg-slate-200 text-slate-400'
              }`}>
                {badge.unlocked ? '🏆' : '🔒'}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-0.5">
                  {badge.title}
                </h3>
                <p className="text-xs text-slate-500 leading-snug">
                  {badge.description}
                </p>
                {badge.unlocked && badge.unlockedAt && (
                  <span className="text-2xs text-emerald-600 font-semibold block mt-1">
                    ✓ Mở khóa thành công
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Exam History */}
      {userProgress.examHistory.length > 0 && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-500" />
            Lịch Sử Làm Bài Kiểm Tra Gần Đây
          </h2>

          <div className="space-y-3">
            {userProgress.examHistory.slice(0, 5).map((ex) => (
              <div
                key={ex.id}
                className="p-4 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-between gap-4"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-0.5">
                    {ex.examTitle}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(ex.completedAt).toLocaleDateString('vi-VN')}
                    </span>
                    <span>
                      Thời gian: {Math.floor(ex.timeSpentSeconds / 60)} phút {ex.timeSpentSeconds % 60}s
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-base sm:text-lg font-black text-indigo-600">
                    {((ex.score / ex.totalQuestions) * 10).toFixed(1)} / 10
                  </div>
                  <div className="text-2xs font-semibold text-slate-600">
                    {ex.score}/{ex.totalQuestions} câu
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
