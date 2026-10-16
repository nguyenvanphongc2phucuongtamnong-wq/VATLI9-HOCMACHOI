import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

dotenv.config();

interface ServerQuestionReport {
  id: string;
  questionId: string;
  lessonId: number;
  lessonTitle?: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
  userSelectedAnswer?: string;
  reason: 'sai_dap_an' | 'sai_kien_thuc' | 'loi_cong_thuc' | 'loi_hinh_anh' | 'loi_dien_dat' | 'khac';
  comment: string;
  reportedAt: string;
  status: 'pending' | 'verified' | 'resolved' | 'rejected';
  teacherNotes?: string;
  studentId?: string;
  studentName?: string;
  resolvedAt?: string;
}

// In-memory reports store with local file backup for persistence across dev server restarts
const REPORTS_BACKUP_FILE = path.join(process.cwd(), '.reports_db.json');
let SERVER_REPORTS: ServerQuestionReport[] = [];

try {
  if (fs.existsSync(REPORTS_BACKUP_FILE)) {
    const data = fs.readFileSync(REPORTS_BACKUP_FILE, 'utf-8');
    SERVER_REPORTS = JSON.parse(data);
  }
} catch {
  SERVER_REPORTS = [];
}

function persistReports() {
  try {
    fs.writeFileSync(REPORTS_BACKUP_FILE, JSON.stringify(SERVER_REPORTS, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to backup reports to file', err);
  }
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

  app.use(express.json());

  // API Route: AI Explain Question
  app.post('/api/ai-explain', async (req, res) => {
    try {
      const { question, options, chosenAnswer, correctAnswer, explanation, lessonTitle, style } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(200).json({
          source: 'local_expert',
          message: 'Chuyển sang bộ phân tích sư phạm SGK Vật lý 9.'
        });
      }

      const ai = new GoogleGenAI();
      const styleInstruction = style === 'concise' 
        ? 'Giải thích thật ngắn gọn, súc tích, đi thẳng vào trọng tâm công thức và bản chất vật lý.'
        : style === 'real_world'
        ? 'Nhấn mạnh vào ứng dụng đời sống thực tế, ví dụ sinh động quanh ta.'
        : 'Trình bày đầy đủ từng bước suy luận, công thức và phân tích bẫy đề thi.';

      const prompt = `Bạn là trợ lý giáo viên Vật lý 9 (Khoa học tự nhiên 9) uyên bác, ân cần, giải thích chuẩn mực theo sách giáo khoa Việt Nam.
Bài học: "${lessonTitle || 'Vật lý 9'}"
Câu hỏi: "${question}"
Các phương án lựa chọn: ${JSON.stringify(options)}
Học sinh đã chọn: "${chosenAnswer}"
Đáp án chuẩn SGK: "${correctAnswer}"
Lời giải ban đầu: "${explanation}"
Phong cách mong muốn: ${styleInstruction}

Hãy phản hồi theo cấu trúc rõ ràng:
1. Nhận xét lựa chọn: Đúng hay sai?
2. Nguyên nhân dễ mắc lỗi / Bẫy đề thi: Tại sao học sinh hay chọn nhầm "${chosenAnswer}"? Đối chiếu cụ thể với đề bài và SGK, không quy chụp chung chung.
3. Lời giải từng bước: Lập luận khoa học, công thức cần dùng (dùng $...$ cho công thức) và đáp số. Nếu là câu hỏi định tính khái niệm, giải thích bản chất hiện tượng và không gán ghép công thức số học không liên quan.
4. Hiện tượng thực tiễn đời sống: 1 ví dụ thực tế liên quan.
5. Lời khuyên & Mẹo ghi nhớ cho học sinh.

LƯU Ý KHOA HỌC QUAN TRỌNG:
- Bám sát kiến thức SGK KHTN/Vật lý 9. Tuyệt đối không bịa đặt công thức hoặc dữ kiện sai.
- ĐẶC BIỆT VỀ QUANG HỌC: Hiện tượng phản xạ toàn phần CHỈ xảy ra khi ánh sáng truyền từ môi trường chiết quang hơn sang môi trường chiết quang kém hơn (n₁ > n₂) VÀ góc tới lớn hơn góc giới hạn (i > i_gh với sin(i_gh) = n₂/n₁). Khi góc tới đúng bằng góc giới hạn (i = i_gh), góc khúc xạ bằng 90° (tia khúc xạ đi là là sát mặt phân cách), chưa phải phản xạ toàn phần. Khi n₁ <= n₂, không bao giờ xảy ra phản xạ toàn phần.
- Dùng tiếng Việt trong sáng, sư phạm, thân thiện.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
      });

      return res.status(200).json({
        source: 'gemini',
        explanationText: response.text
      });
    } catch (err: any) {
      console.warn('Gemini explanation error, client will fallback to local expert:', err?.message);
      return res.status(200).json({
        source: 'pedagogical_engine',
        fallback: true
      });
    }
  });

  // REST API Routes: Question Error Reports (Shared Server DB)
  app.get('/api/reports', (req, res) => {
    return res.status(200).json({
      reports: SERVER_REPORTS,
      total: SERVER_REPORTS.length
    });
  });

  app.post('/api/reports', (req, res) => {
    try {
      const data = req.body;
      if (!data.questionId || !data.questionText || !data.reason) {
        return res.status(400).json({ error: 'Dữ liệu báo cáo không đầy đủ' });
      }

      const newReport: ServerQuestionReport = {
        id: `rep-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
        questionId: String(data.questionId),
        lessonId: Number(data.lessonId) || 0,
        lessonTitle: data.lessonTitle ? String(data.lessonTitle) : undefined,
        questionText: String(data.questionText),
        options: Array.isArray(data.options) ? data.options : [],
        correctAnswer: String(data.correctAnswer || ''),
        userSelectedAnswer: data.userSelectedAnswer ? String(data.userSelectedAnswer) : undefined,
        reason: data.reason,
        comment: String(data.comment || ''),
        reportedAt: new Date().toISOString(),
        status: 'pending',
        teacherNotes: '',
        studentId: data.studentId ? String(data.studentId) : undefined,
        studentName: data.studentName ? String(data.studentName) : undefined
      };

      SERVER_REPORTS.unshift(newReport);
      persistReports();

      return res.status(201).json({
        success: true,
        report: newReport,
        destination: 'server'
      });
    } catch (err: any) {
      console.error('Error saving report on server:', err);
      return res.status(500).json({ error: 'Lỗi lưu trữ báo cáo trên máy chủ' });
    }
  });

  app.patch('/api/reports/:id', (req, res) => {
    try {
      const { id } = req.params;
      const { status, teacherNotes } = req.body;
      const report = SERVER_REPORTS.find(r => r.id === id);

      if (!report) {
        return res.status(404).json({ error: 'Không tìm thấy báo cáo' });
      }

      if (status) {
        report.status = status;
        if (status === 'resolved' || status === 'rejected') {
          report.resolvedAt = new Date().toISOString();
        }
      }
      if (teacherNotes !== undefined) {
        report.teacherNotes = teacherNotes;
      }

      persistReports();
      return res.status(200).json({ success: true, report });
    } catch (err: any) {
      return res.status(500).json({ error: 'Lỗi cập nhật báo cáo' });
    }
  });

  app.delete('/api/reports/:id', (req, res) => {
    try {
      const { id } = req.params;
      const initialLength = SERVER_REPORTS.length;
      SERVER_REPORTS = SERVER_REPORTS.filter(r => r.id !== id);

      if (SERVER_REPORTS.length === initialLength) {
        return res.status(404).json({ error: 'Không tìm thấy báo cáo cần xóa' });
      }

      persistReports();
      return res.status(200).json({ success: true });
    } catch (err: any) {
      return res.status(500).json({ error: 'Lỗi xóa báo cáo' });
    }
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Mount Vite middlewares in dev
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
