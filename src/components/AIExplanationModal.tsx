import React, { useState, useEffect } from 'react';
import { getAIExplanation, AIExplanationResult, ExplainRequestParams } from '../utils/aiExplainer';
import { FormattedText } from './MathView';
import { 
  Sparkles, 
  X, 
  BookOpen, 
  Lightbulb, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  Zap, 
  Calculator,
  Compass,
  RotateCw,
  Award
} from 'lucide-react';

interface AIExplanationModalProps {
  isOpen: boolean;
  onClose: () => void;
  params: ExplainRequestParams | null;
}

export const AIExplanationModal: React.FC<AIExplanationModalProps> = ({
  isOpen,
  onClose,
  params
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<AIExplanationResult | null>(null);
  const [styleMode, setStyleMode] = useState<'detailed' | 'concise' | 'real_world'>('detailed');

  useEffect(() => {
    if (isOpen && params) {
      setLoading(true);
      setResult(null);
      getAIExplanation({ ...params, style: styleMode })
        .then((res) => {
          setResult(res);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [isOpen, params, styleMode]);

  if (!isOpen || !params) return null;

  const isCorrect = params.chosenAnswer.trim().toLowerCase() === params.correctAnswer.trim().toLowerCase();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-sky-50 via-indigo-50/50 to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-sky-200">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xs font-extrabold uppercase px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800">
                  AI Trợ Lý Vật Lý 9
                </span>
                <span className="text-3xs text-slate-500 font-medium hidden sm:inline">
                  Chuẩn SGK Kết Nối Tri Thức
                </span>
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900 mt-0.5">
                Giải Thích Sư Phạm & Phân Tích Lỗi Sai
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-200/60 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
          {/* Question Summary Banner */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs sm:text-sm">
            <div className="font-semibold text-slate-800 leading-relaxed">
              <FormattedText text={params.question} />
            </div>

            <div className="pt-2 border-t border-slate-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-2xs sm:text-xs">
              <div className={`p-2 rounded-xl flex items-center gap-1.5 ${
                isCorrect ? 'bg-emerald-100/60 text-emerald-950 font-medium' : 'bg-rose-100/60 text-rose-950'
              }`}>
                {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> : <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />}
                <span>Em đã chọn: <strong>{params.chosenAnswer || '(Chưa chọn)'}</strong></span>
              </div>
              <div className="p-2 rounded-xl bg-emerald-100/60 text-emerald-950 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Đáp án chuẩn SGK: <strong>{params.correctAnswer}</strong></span>
              </div>
            </div>
          </div>

          {/* Explanation Style Selector */}
          <div className="flex items-center justify-between gap-2 p-1.5 bg-slate-100 rounded-2xl">
            <button
              onClick={() => setStyleMode('detailed')}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                styleMode === 'detailed'
                  ? 'bg-white text-indigo-700 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📝 Từng bước & Công thức
            </button>
            <button
              onClick={() => setStyleMode('concise')}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                styleMode === 'concise'
                  ? 'bg-white text-indigo-700 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ⚡ Ngắn gọn trọng tâm
            </button>
            <button
              onClick={() => setStyleMode('real_world')}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                styleMode === 'real_world'
                  ? 'bg-white text-indigo-700 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🌍 Ví dụ thực tế
            </button>
          </div>

          {loading ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-10 h-10 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-xs text-slate-500 font-medium">
                AI đang đối chiếu với chuẩn SGK và tổng hợp lời giải sư phạm...
              </p>
            </div>
          ) : result ? (
            <div className="space-y-4 animate-fadeIn">
              {/* Section 1: Misconception & Analysis */}
              <div className={`p-4 rounded-2xl border ${
                isCorrect 
                  ? 'bg-emerald-50/80 border-emerald-200' 
                  : 'bg-amber-50/80 border-amber-200'
              }`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-base">{isCorrect ? '🎉' : '⚠️'}</span>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                    {isCorrect ? 'Nhận Xét Của Giáo Viên' : 'Nguyên Nhân Dễ Mắc Lỗi (Bẫy Đề Thi)'}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <FormattedText text={result.misconceptionAnalysis} />
                </p>
              </div>

              {/* Section 2: Step-by-step Reasoning */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-sky-600" />
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">
                    Lời Giải Từng Bước Khoa Học
                  </h4>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 pl-1">
                  {result.stepByStepReasoning.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="w-5 h-5 rounded-lg bg-sky-100 text-sky-700 font-bold text-3xs flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <div className="flex-1">
                        <FormattedText text={step} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Formulas and Units */}
              {result.formulaAndUnits && result.formulaAndUnits.length > 0 && (
                <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-indigo-600" />
                    <h4 className="font-extrabold text-xs sm:text-sm text-indigo-950">
                      Công Thức Vật Lý & Đơn Vị Cần Dùng
                    </h4>
                  </div>
                  <div className="space-y-1.5 text-xs text-indigo-900">
                    {result.formulaAndUnits.map((f, fIdx) => (
                      <div key={fIdx} className="p-2 rounded-xl bg-white/80 border border-indigo-100 font-mono">
                        <FormattedText text={f} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section 4: Real-world practical application */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">
                    Hiện Tượng Thực Tiễn Đời Sống
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <FormattedText text={result.realWorldExample} />
                </p>
              </div>

              {/* Section 5: Advice */}
              <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 text-xs text-sky-900 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="leading-relaxed font-medium">
                  <FormattedText text={result.adviceForStudent} />
                </span>
              </div>
            </div>
          ) : (
            <div className="py-8 text-center text-slate-400 text-xs">
              Chưa thể tải phân tích. Vui lòng thử lại.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/80 flex justify-between items-center text-2xs text-slate-400">
          <span>
            {result?.source === 'gemini' ? 'Được hỗ trợ bởi Gemini AI & Bộ đề SGK' : 'Được hỗ trợ bởi Hệ thống Chuyên gia Sư phạm SGK'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 cursor-pointer"
          >
            Đã Hiểu Rồi
          </button>
        </div>
      </div>
    </div>
  );
};
