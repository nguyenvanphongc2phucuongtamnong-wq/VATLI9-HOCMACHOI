import { Question, ShuffledQuestion } from '../types';

/**
 * Fisher-Yates array shuffle that returns a new array
 */
export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const LABELS = ['A', 'B', 'C', 'D'];

/**
 * Validates a Question structure to guarantee it meets pedagogical and database standards.
 */
export function validateQuestion(q: unknown): { isValid: boolean; error?: string } {
  if (!q || typeof q !== 'object') {
    return { isValid: false, error: 'Dữ liệu câu hỏi rỗng hoặc không phải đối tượng' };
  }

  const candidate = q as Partial<Question>;

  if (!candidate.id || typeof candidate.id !== 'string') {
    return { isValid: false, error: 'Thiếu mã định danh câu hỏi (id)' };
  }

  if (typeof candidate.lessonId !== 'number' || candidate.lessonId < 1 || candidate.lessonId > 17) {
    return { isValid: false, error: `Mã bài học không hợp lệ: ${candidate.lessonId}` };
  }

  if (!candidate.question || typeof candidate.question !== 'string' || candidate.question.trim().length === 0) {
    return { isValid: false, error: 'Nội dung câu hỏi rỗng' };
  }

  if (!candidate.options || !Array.isArray(candidate.options) || candidate.options.length < 2) {
    return { isValid: false, error: 'Danh sách phương án lựa chọn phải có ít nhất 2 lựa chọn' };
  }

  if (!candidate.correctAnswer || typeof candidate.correctAnswer !== 'string' || candidate.correctAnswer.trim().length === 0) {
    return { isValid: false, error: 'Thiếu đáp án đúng chuẩn mực' };
  }

  const targetAnswer = candidate.correctAnswer.trim().toLowerCase();
  const foundIndex = candidate.options.findIndex(
    (opt) => typeof opt === 'string' && opt.trim().toLowerCase() === targetAnswer
  );

  if (foundIndex < 0) {
    return {
      isValid: false,
      error: `Đáp án đúng "${candidate.correctAnswer}" không tồn tại trong danh sách 4 phương án lựa chọn`
    };
  }

  return { isValid: true };
}

/**
 * Takes a raw Question and shuffles its options completely randomly using Fisher-Yates.
 * Accurately maps the correct label (A, B, C, or D) to the option whose text equals question.correctAnswer.
 * CRITICAL RULE: If the correct answer is not found or options are invalid, MARKS AS INVALID.
 * Never silently assigns Option A as the correct answer!
 */
export function shuffleQuestion(q: Question): ShuffledQuestion {
  const validation = validateQuestion(q);
  if (!validation.isValid) {
    console.error(`[Question Error] Câu hỏi "${q?.id}" không hợp lệ: ${validation.error}`);
    return {
      id: q?.id || 'invalid-q',
      lessonId: q?.lessonId || 0,
      difficulty: q?.difficulty || 'de',
      question: q?.question || '(Câu hỏi lỗi dữ liệu)',
      options: (q?.options || []).map((text, idx) => ({
        label: LABELS[idx] || `${idx + 1}`,
        text: String(text)
      })),
      correctLabel: '', // Không gán bừa A
      correctText: q?.correctAnswer || '',
      explanation: q?.explanation || 'Câu hỏi này đang được bảo trì để kiểm duyệt lại.',
      isValid: false,
      validationError: validation.error
    };
  }

  // Shuffle option texts with Fisher-Yates
  const shuffledTexts = shuffleArray(q.options);

  // Find index of the correct answer
  const correctIdx = shuffledTexts.findIndex(
    (text) => text.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()
  );

  if (correctIdx < 0) {
    // Should never happen because of validateQuestion, but guard against race conditions
    return {
      id: q.id,
      lessonId: q.lessonId,
      difficulty: q.difficulty,
      question: q.question,
      options: shuffledTexts.map((text, idx) => ({
        label: LABELS[idx],
        text
      })),
      correctLabel: '',
      correctText: q.correctAnswer,
      explanation: q.explanation,
      isValid: false,
      validationError: 'Không tìm thấy đáp án chuẩn sau khi xáo trộn'
    };
  }

  const options = shuffledTexts.map((text, idx) => ({
    label: LABELS[idx],
    text
  }));

  return {
    id: q.id,
    lessonId: q.lessonId,
    difficulty: q.difficulty,
    question: q.question,
    options,
    correctLabel: LABELS[correctIdx],
    correctText: q.correctAnswer,
    explanation: q.explanation,
    isValid: true
  };
}

/**
 * Shuffles an array of questions, only including valid questions into tests/practices.
 */
export function shuffleAllQuestions(questions: Question[]): ShuffledQuestion[] {
  return questions
    .map((q) => shuffleQuestion(q))
    .filter((sq) => sq.isValid !== false);
}
