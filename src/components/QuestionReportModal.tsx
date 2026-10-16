import React, { useState, useEffect } from 'react';
import { 
  ReportReason, 
  QuestionReport, 
  ReportStatus,
  REASON_LABELS, 
  STATUS_LABELS,
  saveReport, 
  fetchReports,
  getSavedReports, 
  updateReportStatus, 
  deleteReport 
} from '../utils/questionReports';
import { getStudentProfile } from '../utils/sessionPersistence';
import { FormattedText } from './MathView';
import { 
  AlertTriangle, 
  X, 
  CheckCircle2, 
  Trash2, 
  MessageSquare, 
  Filter, 
  Check, 
  Send,
  Server,
  HardDrive,
  RotateCcw
} from 'lucide-react';

interface QuestionReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  questionId: string;
  lessonId: number;
  lessonTitle?: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
  userSelectedAnswer?: string;
  initialTeacherMode?: boolean;
}

export const QuestionReportModal: React.FC<QuestionReportModalProps> = ({
  isOpen,
  onClose,
  questionId,
  lessonId,
  lessonTitle,
  questionText,
  options,
  correctAnswer,
  userSelectedAnswer,
  initialTeacherMode = false
}) => {
  const [activeView, setActiveView] = useState<'report' | 'admin'>(initialTeacherMode ? 'admin' : 'report');
  const [reason, setReason] = useState<ReportReason>('sai_dap_an');
  const [comment, setComment] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitResult, setSubmitResult] = useState<{ destination: 'server' | 'local' } | null>(null);
  const [reportsList, setReportsList] = useState<QuestionReport[]>([]);
  const [filterStatus, setFilterStatus] = useState<'all' | ReportStatus>('all');
  const [loadingList, setLoadingList] = useState<boolean>(false);

  const loadAllReports = async () => {
    setLoadingList(true);
    setReportsList(getSavedReports());
    try {
      const remote = await fetchReports();
      setReportsList(remote);
    } catch {
      // keep local
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadAllReports();
      setSubmitResult(null);
      setComment('');
      setActiveView(initialTeacherMode ? 'admin' : 'report');
    }
  }, [isOpen, initialTeacherMode]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const profile = getStudentProfile();
      const res = await saveReport({
        questionId,
        lessonId,
        lessonTitle: lessonTitle || `Bài ${lessonId}`,
        questionText,
        options,
        correctAnswer,
        userSelectedAnswer,
        reason,
        comment,
        studentId: profile.studentId,
        studentName: profile.studentName
      });
      setSubmitResult({ destination: res.destination });
      await loadAllReports();
    } catch {
      setSubmitResult({ destination: 'local' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdateStatus = async (id: string, status: ReportStatus) => {
    await updateReportStatus(id, status);
    await loadAllReports();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Xóa báo cáo này khỏi danh sách?')) {
      await deleteReport(id);
      await loadAllReports();
    }
  };

  const filteredReports = reportsList.filter(r => {
    if (filterStatus === 'all') return true;
    return r.status === filterStatus;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
                {activeView === 'report' ? 'Báo Lỗi Câu Hỏi' : 'Bảng Quản Lý Báo Lỗi Câu Hỏi'}
              </h3>
              <p className="text-2xs sm:text-xs text-slate-500">
                {activeView === 'report'
                  ? `Mã câu: ${questionId} • ${lessonTitle || `Bài ${lessonId}`}`
                  : `Tổng cộng: ${reportsList.length} báo cáo phản hồi`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView(activeView === 'report' ? 'admin' : 'report')}
              className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-white cursor-pointer transition-colors"
            >
              {activeView === 'report' ? `Quản Lý (${reportsList.length})` : 'Quay lại gửi báo lỗi'}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-200/60 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
          {activeView === 'report' ? (
            submitResult ? (
              <div className="py-8 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-black text-slate-800">
                  Cảm ơn em đã gửi phản hồi!
                </h4>

                {/* Clear, honest transparency about where the report was stored */}
                {submitResult.destination === 'server' ? (
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 max-w-md mx-auto leading-relaxed flex items-center gap-2.5 text-left">
                    <Server className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>
                      <strong>Đã gửi thành công lên máy chủ quản lý chung!</strong> Giáo viên và ban biên tập Vật Lý 9 sẽ nhận được phản hồi này để kiểm duyệt.
                    </span>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 max-w-md mx-auto leading-relaxed flex items-center gap-2.5 text-left">
                    <HardDrive className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>
                      <strong>Đã lưu cục bộ trên thiết bị của em.</strong> Do máy chủ đang ngoại tuyến hoặc kết nối mạng gián đoạn, dữ liệu được giữ an toàn trên trình duyệt này và sẽ đồng bộ khi có kết nối.
                    </span>
                  </div>
                )}

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => setSubmitResult(null)}
                    className="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
                  >
                    Gửi thêm phản hồi khác
                  </button>
                  <button
                    onClick={onClose}
                    className="px-5 py-2 text-xs font-bold rounded-xl bg-sky-600 text-white hover:bg-sky-700 cursor-pointer shadow-xs"
                  >
                    Đóng cửa sổ
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Question Info Box */}
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs sm:text-sm text-slate-700 space-y-2">
                  <div className="font-semibold text-slate-900 leading-relaxed">
                    <span className="text-slate-400 font-mono mr-1.5">[{questionId}]</span>
                    <FormattedText text={questionText} />
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 flex flex-wrap gap-x-4 gap-y-1 text-2xs sm:text-xs">
                    {correctAnswer && (
                      <span className="text-slate-500">
                        Đáp án chuẩn SGK: <strong className="text-emerald-700">{correctAnswer}</strong>
                      </span>
                    )}
                    {userSelectedAnswer && (
                      <span className="text-slate-500">
                        Em đã chọn: <strong className="text-rose-700">{userSelectedAnswer}</strong>
                      </span>
                    )}
                  </div>
                </div>

                {/* Reason Selection */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-2">
                    Vui lòng chọn loại lỗi em phát hiện:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(Object.keys(REASON_LABELS) as ReportReason[]).map((key) => {
                      const item = REASON_LABELS[key];
                      const isSelected = reason === key;
                      return (
                        <div
                          key={key}
                          onClick={() => setReason(key)}
                          className={`p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-2.5 ${
                            isSelected
                              ? 'border-rose-500 bg-rose-50/50 text-rose-950'
                              : 'border-slate-200/80 hover:border-slate-300 bg-white text-slate-700'
                          }`}
                        >
                          <span className="text-lg shrink-0 mt-0.5">{item.icon}</span>
                          <div className="min-w-0">
                            <span className="text-xs font-bold block">{item.title}</span>
                            <span className="text-3xs sm:text-2xs text-slate-500 leading-tight block mt-0.5">
                              {item.desc}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Comment Textarea */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Mô tả chi tiết hoặc đề xuất sửa đổi (không bắt buộc):
                  </label>
                  <textarea
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Ví dụ: Công thức tính cơ năng câu này phải là W = Wđ + Wt, phương án A bị thiếu bình phương vận tốc..."
                    className="w-full p-3 rounded-2xl border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none transition-all"
                  />
                </div>

                {/* Submit Action */}
                <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-xs cursor-pointer transition-all disabled:opacity-50"
                  >
                    {submitting ? (
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-3.5 h-3.5" />
                    )}
                    <span>Gửi Báo Cáo</span>
                  </button>
                </div>
              </form>
            )
          ) : (
            /* Admin / Teacher View */
            <div className="space-y-4">
              {/* Filter tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-xs font-bold text-slate-600">Trạng thái:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {(['all', 'pending', 'verified', 'resolved', 'rejected'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => setFilterStatus(st)}
                      className={`px-2.5 py-1 text-2xs font-bold rounded-lg transition-all cursor-pointer ${
                        filterStatus === st
                          ? 'bg-slate-800 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {st === 'all' && `Tất cả (${reportsList.length})`}
                      {st === 'pending' && `Chờ duyệt (${reportsList.filter(r => r.status === 'pending').length})`}
                      {st === 'verified' && `Đã xác minh (${reportsList.filter(r => r.status === 'verified').length})`}
                      {st === 'resolved' && `Đã sửa (${reportsList.filter(r => r.status === 'resolved').length})`}
                      {st === 'rejected' && `Bác bỏ (${reportsList.filter(r => r.status === 'rejected').length})`}
                    </button>
                  ))}
                </div>
              </div>

              {filteredReports.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-xs">
                  Không có báo cáo lỗi nào trong danh mục này.
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredReports.map((rep) => {
                    const reasonMeta = REASON_LABELS[rep.reason] || REASON_LABELS.khac;
                    const statusMeta = STATUS_LABELS[rep.status] || STATUS_LABELS.pending;

                    return (
                      <div
                        key={rep.id}
                        className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all space-y-2.5"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-base">{reasonMeta.icon}</span>
                            <div>
                              <span className="text-xs font-black text-slate-900 mr-2">
                                {reasonMeta.title}
                              </span>
                              <span className="text-3xs font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                                {rep.questionId}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5">
                            {rep.savedDestination === 'server' ? (
                              <span className="inline-flex items-center gap-1 text-3xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200" title="Đã đồng bộ lên cơ sở dữ liệu máy chủ">
                                <Server className="w-2.5 h-2.5" />
                                <span>Máy chủ</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-3xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold border border-slate-200" title="Lưu tạm trên trình duyệt thiết bị">
                                <HardDrive className="w-2.5 h-2.5" />
                                <span>Cục bộ</span>
                              </span>
                            )}

                            <span className={`text-3xs font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider border ${statusMeta.color}`}>
                              {statusMeta.label}
                            </span>
                          </div>
                        </div>

                        <div className="text-xs text-slate-700 leading-relaxed font-medium">
                          <FormattedText text={rep.questionText} />
                        </div>

                        {rep.comment && (
                          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 italic">
                            &ldquo;{rep.comment}&rdquo;
                          </div>
                        )}

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 border-t border-slate-100 text-2xs text-slate-400 gap-2">
                          <span>
                            {new Date(rep.reportedAt).toLocaleString('vi-VN')} {rep.studentName ? `• Bởi ${rep.studentName}` : ''}
                          </span>

                          <div className="flex items-center gap-1.5 self-end sm:self-auto">
                            {rep.status !== 'verified' && (
                              <button
                                onClick={() => handleUpdateStatus(rep.id, 'verified')}
                                className="px-2 py-1 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 font-semibold cursor-pointer text-2xs"
                              >
                                Xác minh có lỗi
                              </button>
                            )}
                            {rep.status !== 'resolved' && (
                              <button
                                onClick={() => handleUpdateStatus(rep.id, 'resolved')}
                                className="px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold cursor-pointer text-2xs"
                              >
                                Đã sửa xong
                              </button>
                            )}
                            {rep.status !== 'rejected' && (
                              <button
                                onClick={() => handleUpdateStatus(rep.id, 'rejected')}
                                className="px-2 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold cursor-pointer text-2xs"
                              >
                                Bác bỏ
                              </button>
                            )}
                            <button
                              onClick={() => handleDelete(rep.id)}
                              className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                              title="Xóa báo cáo"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
