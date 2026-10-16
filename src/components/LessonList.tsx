import React, { useState } from 'react';
import { Lesson, UserProgress } from '../types';
import { 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Search, 
  GraduationCap,
  PlayCircle,
  HelpCircle,
  Clock
} from 'lucide-react';

interface LessonListProps {
  lessons: Lesson[];
  userProgress: UserProgress;
  onSelectLesson: (lessonId: number) => void;
  onStartPractice?: (lessonId: number) => void;
}

export const LessonList: React.FC<LessonListProps> = ({
  lessons,
  userProgress,
  onSelectLesson,
  onStartPractice
}) => {
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const chapters = [
    { id: 'all', title: 'Tất Cả (17 Bài)' },
    { id: 'ch1', title: 'Chương I: Năng Lượng Cơ Học (Bài 1 - 4)' },
    { id: 'ch2', title: 'Chương II: Ánh Sáng (Bài 5 - 10)' },
    { id: 'ch3', title: 'Chương III: Điện Học (Bài 11 - 14)' },
    { id: 'ch4', title: 'Chương IV: Điện Từ (Bài 15 - 17)' },
  ];

  const filteredLessons = lessons.filter(lesson => {
    let matchChapter = true;
    if (selectedChapter === 'ch1') matchChapter = lesson.id >= 1 && lesson.id <= 4;
    else if (selectedChapter === 'ch2') matchChapter = lesson.id >= 5 && lesson.id <= 10;
    else if (selectedChapter === 'ch3') matchChapter = lesson.id >= 11 && lesson.id <= 14;
    else if (selectedChapter === 'ch4') matchChapter = lesson.id >= 15 && lesson.id <= 17;

    const summaryStr = Array.isArray(lesson.summary) ? lesson.summary.join(' ') : '';
    const matchSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      summaryStr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `bài ${lesson.id}`.includes(searchQuery.toLowerCase());

    return matchChapter && matchSearch;
  });


  const completedCount = userProgress.completedLessons.length;
  const progressPercent = Math.round((completedCount / lessons.length) * 100);

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-sky-500 via-indigo-600 to-blue-700 p-6 sm:p-8 text-white shadow-lg shadow-sky-100">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Sách Giáo Khoa Kết Nối Tri Thức Với Cuộc Sống</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">
            Khám Phá Thế Giới Vật Lý 9
          </h1>
          <p className="text-sky-100 text-sm sm:text-base mb-6 max-w-2xl leading-relaxed">
            Học trọn vẹn 17 bài học, nắm vững định luật và công thức, trải nghiệm mô phỏng thí nghiệm trực quan và làm ngân hàng 340+ câu trắc nghiệm bám sát đề thi.
          </p>

          {/* Quick Progress Bar */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
            <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-2">
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-sky-200" />
                Tiến độ khóa học của bạn:
              </span>
              <span className="font-bold text-white">
                {completedCount} / {lessons.length} bài ({progressPercent}%)
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-amber-400 h-2.5 rounded-full transition-all duration-500 shadow-xs"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Decorative background circles */}
        <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute right-20 top-0 w-48 h-48 rounded-full bg-sky-300/20 blur-xl pointer-events-none" />
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Chapters tabs */}
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-1 scrollbar-none">
          {chapters.map(ch => (
            <button
              key={ch.id}
              onClick={() => setSelectedChapter(ch.id)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-all ${
                selectedChapter === ch.id
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {ch.title}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm kiếm bài học..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
          />
        </div>
      </div>

      {/* Lesson Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredLessons.map((lesson) => {
          const isCompleted = userProgress.completedLessons.includes(lesson.id);
          const bestScore = userProgress.quizScores[lesson.id];

          return (
            <div
              key={lesson.id}
              id={`lesson-card-${lesson.id}`}
              className="group bg-white rounded-2xl border border-slate-200/80 hover:border-sky-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-5 sm:p-6">
                {/* Card Header: Lesson Number & Completion Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 text-xs font-bold uppercase rounded-lg bg-sky-100 text-sky-700">
                      Bài {lesson.id}
                    </span>
                    <span className="text-xs text-slate-600 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-600" />
                      ~30 phút
                    </span>
                  </div>

                  {isCompleted ? (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Đã học
                    </span>
                  ) : bestScore !== undefined ? (
                    <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      Điểm: {bestScore}/20
                    </span>
                  ) : (
                    <span className="text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                      Mở khóa sẵn
                    </span>
                  )}
                </div>

                {/* Lesson Title */}
                <h2 
                  onClick={() => onSelectLesson(lesson.id)}
                  className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-sky-600 transition-colors cursor-pointer line-clamp-2 mb-2"
                >
                  {lesson.title}
                </h2>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-500 line-clamp-3 mb-4 leading-relaxed">
                  {lesson.shortDesc}
                </p>

                {/* Key Concepts Preview Pills */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {lesson.sections.flatMap(s => s.formulas || []).slice(0, 2).map((f: { latex: string; name: string }, i: number) => (
                    <span 
                      key={i}
                      className="px-2 py-0.5 text-xs bg-slate-50 border border-slate-100 rounded-md text-slate-600 font-mono"
                    >
                      {f.name || f.latex}
                    </span>
                  ))}
                  <span className="px-2 py-0.5 text-xs bg-amber-50 border border-amber-100 rounded-md text-amber-700 font-medium">
                    20 câu trắc nghiệm
                  </span>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectLesson(lesson.id)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl bg-sky-600 text-white hover:bg-sky-700 transition-colors shadow-xs"
                  id={`btn-study-lesson-${lesson.id}`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Học lý thuyết</span>
                </button>

                <button
                  onClick={() => onStartPractice ? onStartPractice(lesson.id) : onSelectLesson(lesson.id)}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl border border-sky-200 text-sky-700 bg-white hover:bg-sky-50 transition-colors"
                  id={`btn-quiz-lesson-${lesson.id}`}
                  title="Làm 20 câu trắc nghiệm ngay"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Luyện tập</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {filteredLessons.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-600 font-medium">Không tìm thấy bài học nào phù hợp với từ khóa.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedChapter('all'); }}
            className="mt-3 px-4 py-1.5 text-xs font-semibold text-sky-600 hover:underline"
          >
            Đặt lại bộ lọc
          </button>
        </div>
      )}
    </div>
  );
};
