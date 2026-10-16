import { shuffleQuestion, validateQuestion, shuffleArray } from './src/utils/random';
import { ALL_QUESTIONS, getExamQuestionsWithMetadata } from './src/data/questionBank';
import { generateLessonQuiz } from './src/utils/quizGenerator';
import { PHYSICS_TEST_CASES } from './src/components/SimulationTestSuiteModal';
import { getVietnamDateString, calculateDaysBetweenVietnamDates } from './src/utils/storage';

console.log('====================================================');
console.log('🧪 BẮT ĐẦU CHẠY BỘ KIỂM THỬ TỰ ĐỘNG CÁC MODULES');
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  if (condition) {
    console.log(`✅ [PASS] ${testName}`);
    passCount++;
  } else {
    console.error(`❌ [FAIL] ${testName} ${detail ? `-> ${detail}` : ''}`);
    failCount++;
  }
}

// ---------------------------------------------------------
// TEST 1: random.ts shuffleQuestion & validation
// ---------------------------------------------------------
console.log('--- TEST 1: Kiểm thử shuffleQuestion & validateQuestion ---');

const validQ = {
  id: 'test-1',
  lessonId: 2,
  difficulty: 'de' as const,
  question: 'Đơn vị của động năng là gì?',
  options: ['Niu-tơn (N)', 'Jun (J)', 'Oát (W)', 'Vôn (V)'],
  correctAnswer: 'Jun (J)',
  explanation: 'Động năng là một dạng năng lượng, có đơn vị là Jun (J).'
};

const shuffledValid = shuffleQuestion(validQ);
assert(shuffledValid.isValid === true, 'Câu hỏi hợp lệ có isValid = true');
const matchedOption = shuffledValid.options.find(o => o.label === shuffledValid.correctLabel);
assert(matchedOption?.text === 'Jun (J)', 'correctLabel trỏ chính xác đến phương án "Jun (J)"');

// Invalid question: correct answer NOT in options
const corruptedQ = {
  id: 'test-corrupt-1',
  lessonId: 2,
  difficulty: 'de' as const,
  question: 'Câu hỏi lỗi đáp án',
  options: ['A', 'B', 'C', 'D'],
  correctAnswer: 'E (Không có trong 4 phương án)',
  explanation: 'Lỗi'
};
const shuffledCorrupt = shuffleQuestion(corruptedQ);
assert(shuffledCorrupt.isValid === false, 'Câu hỏi thiếu đáp án trong phương án phải bị đánh dấu isValid = false');
assert(shuffledCorrupt.correctLabel === '', 'Câu hỏi lỗi không được tự gán nhãn A (correctLabel = "")');

// ---------------------------------------------------------
// TEST 2: questionBank.ts & Fisher-Yates
// ---------------------------------------------------------
console.log('\n--- TEST 2: Kiểm thử questionBank & Fisher-Yates ---');
assert(ALL_QUESTIONS.length === 340, 'Ngân hàng câu hỏi đủ 340 câu (17 bài * 20 câu)');

const examMetadata = getExamQuestionsWithMetadata(15, [1, 2]);
assert(examMetadata.questions.length === 15, 'Tạo đề thi 15 câu từ bài 1, 2');
const uniqueExamIds = new Set(examMetadata.questions.map(q => q.id));
assert(uniqueExamIds.size === 15, 'Đề thi không có câu hỏi trùng lặp');

// Test deficit notice when count > pool
const smallPoolMeta = getExamQuestionsWithMetadata(50, [1]); // Lesson 1 only has 20 questions
assert(smallPoolMeta.questions.length === 20, 'Không tự bịa dữ liệu giả khi kho không đủ câu, lấy tối đa 20 câu');
assert(!!smallPoolMeta.notice, 'Có thông báo số lượng thực tế khi kho không đủ câu');

// ---------------------------------------------------------
// TEST 3: Physics simulation & Total Internal Reflection
// ---------------------------------------------------------
console.log('\n--- TEST 3: Kiểm thử Vật lý Khúc xạ & Phản xạ toàn phần ---');

let simAllPass = true;
PHYSICS_TEST_CASES.forEach(tc => {
  const res = tc.runSimulation();
  if (!res.passed) {
    simAllPass = false;
    console.error(`Test case failed: ${tc.id}`);
  }
});
assert(simAllPass, 'Toàn bộ 10 bài kiểm thử vật lý (Snell, góc tới hạn, TIR, thấu kính, Ohm, cơ năng) đều ĐẠT');

// Specific check: n1 > n2 at i = igh vs i > igh
const n1 = 1.333;
const n2 = 1.00;
const igh = Math.asin(n2 / n1) * (180 / Math.PI); // ~48.61°
assert(Math.abs(igh - 48.61) < 0.05, 'Góc tới hạn nước-không khí xấp xỉ 48.61°');

// At i = igh -> sin(r) = 1.0 -> r = 90° (grazing boundary)
const sinR_at_igh = (n1 / n2) * Math.sin((igh * Math.PI) / 180);
assert(Math.abs(sinR_at_igh - 1.0) < 0.0001, 'Tại i = i_gh, sin(r) = 1.0 (tia khúc xạ là là mặt nước r = 90°)');

// At i = 50° > igh -> sin(r) > 1.0 -> TIR
const sinR_tir = (n1 / n2) * Math.sin((50 * Math.PI) / 180);
assert(sinR_tir > 1.0, 'Tại i = 50° > i_gh, sin(r) > 1 (xảy ra phản xạ toàn phần)');

// At n1 < n2 (air to water, n1 = 1.0, n2 = 1.333), at i = 89.9°
const sinR_air_water = (1.0 / 1.333) * Math.sin((89.9 * Math.PI) / 180);
assert(sinR_air_water < 1.0, 'Khi n1 < n2, sin(r) luôn < 1 với mọi góc tới (không bao giờ có phản xạ toàn phần)');

// ---------------------------------------------------------
// TEST 4: quizGenerator.ts Adaptive mode & Deduplication
// ---------------------------------------------------------
console.log('\n--- TEST 4: Kiểm thử Adaptive Quiz Generator ---');
const adaptiveQuiz = generateLessonQuiz(5, 'adaptive', 20);
assert(adaptiveQuiz.questions.length === 20, 'Tạo bộ đề thích ứng 20 câu');
const adaptiveIds = new Set(adaptiveQuiz.questions.map(q => q.id));
assert(adaptiveIds.size === 20, 'Bộ đề thích ứng không có câu hỏi trùng lặp');

const diffCounts = {
  de: adaptiveQuiz.questions.filter(q => q.difficulty === 'de').length,
  kho: adaptiveQuiz.questions.filter(q => q.difficulty === 'kho').length,
  cuc_kho: adaptiveQuiz.questions.filter(q => q.difficulty === 'cuc_kho').length
};
assert(diffCounts.de > 0 && diffCounts.kho > 0, 'Phân bổ đủ các mức độ khó');

// ---------------------------------------------------------
// TEST 5: Asia/Ho_Chi_Minh Daily Streak Timezone
// ---------------------------------------------------------
console.log('\n--- TEST 5: Kiểm thử Chuỗi ngày học múi giờ Asia/Ho_Chi_Minh ---');

// Same date -> diff = 0
assert(calculateDaysBetweenVietnamDates('2026-10-16', '2026-10-16') === 0, 'Cùng ngày ở Việt Nam: diff = 0');
// Next day -> diff = 1
assert(calculateDaysBetweenVietnamDates('2026-10-15', '2026-10-16') === 1, 'Học 2 ngày liên tiếp ở Việt Nam: diff = 1 (tăng streak)');
// Missed a day -> diff = 2
assert(calculateDaysBetweenVietnamDates('2026-10-14', '2026-10-16') === 2, 'Bỏ lỡ 1 ngày ở Việt Nam: diff = 2 (reset streak = 1)');

// Edge case near midnight: 23:59:50 vs 00:00:10 next day
const dt1 = new Date('2026-10-15T16:59:50.000Z'); // 23:59:50 Vietnam (UTC+7)
const dt2 = new Date('2026-10-15T17:00:10.000Z'); // 00:00:10 Vietnam next day (UTC+7)
const vnStr1 = getVietnamDateString(dt1);
const vnStr2 = getVietnamDateString(dt2);
assert(vnStr1 === '2026-10-15' && vnStr2 === '2026-10-16', 'Chuyển ngày lúc đúng 00:00 giờ Việt Nam (UTC+7)');
assert(calculateDaysBetweenVietnamDates(vnStr1, vnStr2) === 1, 'Học lúc 23:59 và 00:01 hôm sau được tính là 2 ngày liên tiếp');

console.log('\n====================================================');
console.log(`🏁 KẾT QUẢ: ${passCount} tests PASSED, ${failCount} tests FAILED`);
console.log('====================================================');

if (failCount > 0) process.exit(1);
