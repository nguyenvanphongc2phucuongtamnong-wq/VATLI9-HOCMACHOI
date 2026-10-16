export type ReportReason = 
  | 'sai_dap_an' 
  | 'sai_kien_thuc' 
  | 'loi_cong_thuc' 
  | 'loi_hinh_anh' 
  | 'loi_dien_dat' 
  | 'khac';

export type ReportStatus = 'pending' | 'verified' | 'resolved' | 'rejected';

export interface QuestionReport {
  id: string;
  questionId: string;
  lessonId: number;
  lessonTitle?: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
  userSelectedAnswer?: string;
  reason: ReportReason;
  comment: string;
  reportedAt: string;
  status: ReportStatus;
  teacherNotes?: string;
  studentId?: string;
  studentName?: string;
  savedDestination?: 'server' | 'local';
}

const REPORT_STORAGE_KEY = 'vatly9_reported_questions_v2';

export const REASON_LABELS: Record<ReportReason, { title: string; desc: string; icon: string }> = {
  sai_dap_an: {
    title: 'Sai đáp án chuẩn',
    desc: 'Đáp án được đánh dấu là đúng bị sai, hoặc chấm câu trả lời đúng thành sai.',
    icon: '❌'
  },
  sai_kien_thuc: {
    title: 'Sai kiến thức / định luật',
    desc: 'Nội dung câu hỏi hoặc giải thích trái với định luật SGK KHTN/Vật lý 9.',
    icon: '⚠️'
  },
  loi_cong_thuc: {
    title: 'Lỗi công thức / ký hiệu',
    desc: 'Công thức toán lý hiển thị sai, nhầm đơn vị (J, W, V, A, Ω) hoặc ký hiệu KaTeX.',
    icon: '📐'
  },
  loi_hinh_anh: {
    title: 'Lỗi hình minh họa',
    desc: 'Hình vẽ, sơ đồ mạch điện hoặc tia sáng không hiển thị hoặc không khớp nội dung.',
    icon: '🖼️'
  },
  loi_dien_dat: {
    title: 'Lỗi diễn đạt / ngữ pháp',
    desc: 'Câu hỏi có lỗi chính tả, tối nghĩa hoặc phương án trả lời bị lặp.',
    icon: '✏️'
  },
  khac: {
    title: 'Vấn đề khác',
    desc: 'Các góp ý khác về trải nghiệm hoặc chất lượng câu hỏi.',
    icon: '💬'
  }
};

export const STATUS_LABELS: Record<ReportStatus, { label: string; color: string }> = {
  pending: { label: 'Chờ duyệt', color: 'bg-amber-100 text-amber-800 border-amber-200' },
  verified: { label: 'Đã xác minh (Có lỗi)', color: 'bg-rose-100 text-rose-800 border-rose-200' },
  resolved: { label: 'Đã sửa chữa', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  rejected: { label: 'Bác bỏ (Không lỗi)', color: 'bg-slate-100 text-slate-700 border-slate-200' }
};

/**
 * Synchronous local read for initial render / offline mode
 */
export function getSavedReports(): QuestionReport[] {
  try {
    const raw = localStorage.getItem(REPORT_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Failed to load reports from localStorage', err);
    return [];
  }
}

function persistLocalReports(reports: QuestionReport[]): void {
  try {
    localStorage.setItem(REPORT_STORAGE_KEY, JSON.stringify(reports));
  } catch (err) {
    console.error('Failed to save reports to localStorage', err);
  }
}

/**
 * Fetches reports from shared server DB and synchronizes with local storage.
 */
export async function fetchReports(): Promise<QuestionReport[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch('/api/reports', { signal: controller.signal });
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.reports)) {
        const marked: QuestionReport[] = data.reports.map((r: QuestionReport) => ({
          ...r,
          savedDestination: 'server'
        }));
        persistLocalReports(marked);
        return marked;
      }
    }
  } catch {
    // Network or server error -> fallback to local
  }
  return getSavedReports();
}

/**
 * Submits a new question report.
 * Tries server first. If server returns 201, marks as 'server'.
 * If server fails, saves to localStorage and explicitly marks as 'local'.
 */
export async function saveReport(
  reportData: Omit<QuestionReport, 'id' | 'reportedAt' | 'status'>
): Promise<{ report: QuestionReport; destination: 'server' | 'local' }> {
  // Try sending to shared server DB
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch('/api/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reportData),
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      if (data.report) {
        const serverReport: QuestionReport = {
          ...data.report,
          savedDestination: 'server'
        };
        const localList = getSavedReports().filter(r => r.id !== serverReport.id);
        localList.unshift(serverReport);
        persistLocalReports(localList);
        return { report: serverReport, destination: 'server' };
      }
    }
  } catch {
    // Failed to send to server -> save locally
  }

  // Local fallback
  const localList = getSavedReports();
  const fallbackReport: QuestionReport = {
    ...reportData,
    id: `rep-local-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    reportedAt: new Date().toISOString(),
    status: 'pending',
    savedDestination: 'local'
  };

  localList.unshift(fallbackReport);
  persistLocalReports(localList);
  return { report: fallbackReport, destination: 'local' };
}

/**
 * Updates report status and teacher notes on both server and local storage.
 */
export async function updateReportStatus(
  reportId: string,
  status: ReportStatus,
  teacherNotes?: string
): Promise<void> {
  const reports = getSavedReports();
  const index = reports.findIndex(r => r.id === reportId);
  if (index >= 0) {
    reports[index].status = status;
    if (teacherNotes !== undefined) {
      reports[index].teacherNotes = teacherNotes;
    }
    persistLocalReports(reports);
  }

  // Update server if possible
  try {
    await fetch(`/api/reports/${encodeURIComponent(reportId)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status, teacherNotes })
    });
  } catch (err) {
    console.warn('Could not sync status update to server', err);
  }
}

/**
 * Deletes a report from both server and local storage.
 */
export async function deleteReport(reportId: string): Promise<void> {
  const reports = getSavedReports().filter(r => r.id !== reportId);
  persistLocalReports(reports);

  try {
    await fetch(`/api/reports/${encodeURIComponent(reportId)}`, {
      method: 'DELETE'
    });
  } catch (err) {
    console.warn('Could not sync delete to server', err);
  }
}
