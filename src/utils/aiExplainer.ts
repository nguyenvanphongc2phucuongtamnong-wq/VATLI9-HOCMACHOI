export interface AIExplanationResult {
  source: 'gemini' | 'pedagogical_engine';
  isCorrect: boolean;
  verdict: string;
  misconceptionAnalysis: string;
  stepByStepReasoning: string[];
  formulaAndUnits: string[];
  realWorldExample: string;
  adviceForStudent: string;
  rawText?: string;
}

export interface ExplainRequestParams {
  question: string;
  options: string[];
  chosenAnswer: string;
  correctAnswer: string;
  explanation: string;
  lessonTitle: string;
  difficulty?: string;
  style?: 'concise' | 'detailed' | 'real_world';
}

/**
 * Requests an in-depth pedagogical explanation for a question.
 * Tries the server-side Gemini API endpoint first, and if offline or unavailable,
 * smoothly falls back to our curriculum-grounded pedagogical rule engine.
 */
export async function getAIExplanation(params: ExplainRequestParams): Promise<AIExplanationResult> {
  const isCorrect = params.chosenAnswer.trim().toLowerCase() === params.correctAnswer.trim().toLowerCase();

  // Try server endpoint
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch('/api/ai-explain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data.explanationText) {
        return {
          source: 'gemini',
          isCorrect,
          verdict: isCorrect 
            ? 'Em đã chọn hoàn toàn chính xác theo kiến thức SGK!' 
            : 'Em đã chọn phương án chưa chính xác. Cùng xem phân tích nhé!',
          misconceptionAnalysis: extractSection(data.explanationText, 'nguyên nhân', 'Nguyên nhân dễ nhầm lẫn') ||
            (isCorrect ? 'Em đã hiểu sâu sắc bản chất và không bị bẫy phương án nhiễu.' : 'Học sinh thường chọn nhầm phương án này do chưa phân biệt rõ bản chất hiện tượng hoặc nhầm lẫn công thức/đơn vị.'),
          stepByStepReasoning: parseSteps(data.explanationText),
          formulaAndUnits: extractFormulas(data.explanationText, params.explanation),
          realWorldExample: extractSection(data.explanationText, 'ví dụ', 'Ví dụ thực tiễn đời sống') || 'Xem thêm trong phần ví dụ minh họa của bài học.',
          adviceForStudent: extractSection(data.explanationText, 'lời khuyên', 'Mẹo ghi nhớ') || 'Hãy đọc kỹ câu hỏi và kiểm tra lại đơn vị trước khi tính toán nhé!',
          rawText: data.explanationText
        };
      }
    }
  } catch (err) {
    // Fallback to local expert engine below
  }

  // Local Curriculum-Grounded Pedagogical Engine
  return generateDeterministicExplanation(params, isCorrect);
}

function generateDeterministicExplanation(
  params: ExplainRequestParams,
  isCorrect: boolean
): AIExplanationResult {
  const qLower = params.question.toLowerCase();
  const explLower = params.explanation.toLowerCase();
  const chosen = params.chosenAnswer;
  const correct = params.correctAnswer;
  const combinedContext = `${qLower} ${explLower} ${params.lessonTitle.toLowerCase()}`;

  // Analyze misconception specifically based on student answer vs correct answer
  let misconception = '';
  if (isCorrect) {
    misconception = `Rất tốt! Em đã nắm vững định luật và chọn đúng phương án "${correct}", không bị đánh lừa bởi các đáp án gây nhiễu.`;
  } else {
    if (!chosen || chosen.includes('Chưa chọn')) {
      misconception = 'Em chưa chọn phương án nào trước khi nộp bài hoặc hết thời gian. Cùng xem các bước suy luận bên dưới để nắm vững câu hỏi này!';
    } else if (combinedContext.includes('phản xạ toàn phần') || combinedContext.includes('khúc xạ')) {
      if (chosen.includes('bằng') || chosen.includes('i = i_gh') || chosen.includes('≥')) {
        misconception = `Học sinh hay nhầm lẫn điều kiện xảy ra phản xạ toàn phần: Phản xạ toàn phần chỉ xảy ra khi n₁ > n₂ VÀ góc tới lớn hơn hẳn góc giới hạn (i > i_gh). Khi i = i_gh, tia khúc xạ đi là là sát mặt phân cách (góc khúc xạ r = 90°), chưa phải là phản xạ toàn phần.`;
      } else {
        misconception = `Khi chọn "${chosen}", học sinh thường chưa nhớ rõ hai điều kiện phản xạ toàn phần: (1) ánh sáng truyền từ môi trường chiết quang hơn sang môi trường chiết quang kém hơn (n₁ > n₂), và (2) góc tới i > i_gh.`;
      }
    } else if (combinedContext.includes('động năng') && (chosen.includes('tăng gấp 2') || chosen.includes('tỉ lệ bậc nhất'))) {
      misconception = `Học sinh hay mắc bẫy nghĩ rằng vận tốc tăng 2 lần thì động năng tăng 2 lần. Thực tế theo công thức W_đ = 1/2·m·v², động năng tỉ lệ với BÌNH PHƯƠNG vận tốc (v²), nên vận tốc tăng 2 lần thì động năng phải tăng 4 lần!`;
    } else if (combinedContext.includes('công cơ học') && (chosen.includes('vuông góc') || chosen.includes('không đổi'))) {
      misconception = `Học sinh hay quên điều kiện có công cơ học: Phải có lực tác dụng VÀ vật dịch chuyển theo phương có thành phần cùng hướng lực. Nếu lực vuông góc với phương dịch chuyển (như trọng lực khi xe chạy ngang), công của lực đó bằng 0.`;
    } else {
      misconception = `Khi chọn "${chosen}", học sinh thường chưa đọc kỹ yêu cầu hoặc nhầm lẫn giữa các đại lượng có quan hệ tỉ lệ, hoặc áp dụng công thức cho trường hợp riêng biệt thay vì định nghĩa chuẩn trong SGK.`;
    }
  }

  // Detect strictly relevant formulas without false positives
  const formulas: string[] = [];

  // 1. Kinetic energy: only if mentions kinetic energy or m & v^2
  if (combinedContext.includes('động năng') || (combinedContext.includes('khối lượng') && combinedContext.includes('vận tốc') && combinedContext.includes('jun'))) {
    formulas.push('W_đ = 1/2 · m · v²  (m: khối lượng đo bằng kg, v: tốc độ đo bằng m/s, W_đ đo bằng Jun J)');
  }

  // 2. Potential energy: only if mentions gravitational potential energy or height
  if (combinedContext.includes('thế năng') || (combinedContext.includes('độ cao') && combinedContext.includes('trọng lực'))) {
    formulas.push('W_t = P · h = m · g · h  (h: độ cao đo bằng m so với mốc thế năng, P: trọng lượng N, W_t: J)');
  }

  // 3. Mechanical energy
  if (combinedContext.includes('cơ năng') && (combinedContext.includes('bảo toàn') || combinedContext.includes('tổng động năng'))) {
    formulas.push('W = W_đ + W_t = hằng số  (khi vật chỉ chịu tác dụng của trọng lực, bỏ qua lực cản)');
  }

  // 4. Mechanical work: strictly check "công cơ học" or "công của lực" (avoid false matches with unrelated words like "công nghệ")
  if (combinedContext.includes('công cơ học') || combinedContext.includes('công của lực') || (combinedContext.includes('lực kéo') && combinedContext.includes('quãng đường') && combinedContext.includes('a ='))) {
    formulas.push('A = F · s  (F: lực tác dụng N, s: quãng đường dịch chuyển theo hướng của lực m, A: công đo bằng Jun J)');
  }

  // 5. Mechanical power: strictly check "công suất cơ học" or "tốc độ sinh công"
  if (combinedContext.includes('công suất cơ học') || combinedContext.includes('p = a / t') || (combinedContext.includes('công suất') && combinedContext.includes('thời gian') && !combinedContext.includes('điện'))) {
    formulas.push('P = A / t  (A: công J, t: thời gian s, P: công suất đo bằng Watt W)');
  }

  // 6. Snell's law of refraction
  if (combinedContext.includes('khúc xạ') && (combinedContext.includes('snell') || combinedContext.includes('góc tới') || combinedContext.includes('góc khúc xạ') || combinedContext.includes('chiết suất'))) {
    formulas.push('n₁ · sin(i) = n₂ · sin(r)  (n₁: chiết suất môi trường tới, n₂: chiết suất môi trường khúc xạ)');
  }

  // 7. Total internal reflection conditions - STRICT & PRECISE PHYSICS
  if (combinedContext.includes('phản xạ toàn phần') || combinedContext.includes('góc tới hạn') || combinedContext.includes('góc giới hạn')) {
    formulas.push('sin(i_gh) = n₂ / n₁  (Điều kiện: n₁ > n₂ và góc tới i > i_gh để xảy ra phản xạ toàn phần; nếu i = i_gh thì r = 90°)');
  }

  // 8. Ohm's Law
  if (combinedContext.includes('định luật ôm') || combinedContext.includes('định luật ohm') || (combinedContext.includes('điện trở') && combinedContext.includes('hiệu điện thế') && combinedContext.includes('cường độ dòng điện'))) {
    formulas.push('I = U / R  (U: hiệu điện thế V, R: điện trở Ω, I: cường độ dòng điện A)');
  }

  // 9. Electric power & Joule-Lenz law
  if (combinedContext.includes('công suất điện') || (combinedContext.includes('p = u') && combinedContext.includes('i'))) {
    formulas.push('P = U · I = I² · R = U² / R  (P đo bằng Watt W)');
  }
  if (combinedContext.includes('nhiệt lượng tỏa ra') || combinedContext.includes('jun - len-xơ') || combinedContext.includes('joule')) {
    formulas.push('Q = I² · R · t  (Q đo bằng Jun J, t đo bằng giây s)');
  }

  // 10. Lens formula
  if (combinedContext.includes('thấu kính') && (combinedContext.includes('tiêu cự') || combinedContext.includes('khoảng cách ảnh'))) {
    formulas.push('1/f = 1/d + 1/d\'  (f: tiêu cự, d: khoảng cách vật đến thấu kính, d\': khoảng cách ảnh)');
  }

  if (formulas.length === 0) {
    formulas.push('Câu hỏi thuộc dạng nhận biết & phân tích bản chất định tính. Không yêu cầu công thức số học, bám sát các định nghĩa cốt lõi trong SGK.');
  }

  // Pedagogical step-by-step reasoning
  const steps: string[] = [
    `Bước 1: Đọc kỹ yêu cầu câu hỏi: "${params.question}"`,
    `Bước 2: Đối chiếu với bài học "${params.lessonTitle}" trong chương trình KHTN / Vật lý 9.`,
    `Bước 3: Cơ sở khoa học: ${params.explanation}`,
    `Bước 4: Kết luận phương án đúng chuẩn mực là: "${correct}".`
  ];

  // Contextual real-world example
  let example = 'Hiện tượng này xuất hiện thường xuyên trong đời sống thực tế: từ chuyển động của các phương tiện giao thông, nhà máy thủy điện, đến ánh sáng truyền qua mặt nước hay các thiết bị điện trong gia đình.';
  if (combinedContext.includes('khúc xạ') || combinedContext.includes('nước')) {
    example = 'Khi nhìn một chiếc thìa cắm nghiêng trong cốc nước trong, ta thấy chiếc thìa dường như bị gãy khúc tại mặt nước do tia sáng từ thìa truyền ra không khí bị khúc xạ.';
  } else if (combinedContext.includes('phản xạ toàn phần') || combinedContext.includes('cáp quang')) {
    example = 'Cáp quang Internet truyền dữ liệu xuyên đại dương dựa trên hiện tượng phản xạ toàn phần: ánh sáng truyền trong lõi thủy tinh (n₁ cao) ra vỏ bọc (n₂ thấp) với góc tới i > i_gh, giúp tín hiệu phản xạ 100% bên trong mà không bị thất thoát ra ngoài!';
  } else if (combinedContext.includes('động năng')) {
    example = 'Xe ô tô chạy càng nhanh thì động năng càng lớn tỉ lệ với bình phương vận tốc. Khi tăng vận tốc từ 30 km/h lên 60 km/h (gấp 2), động năng tăng gấp 4, khiến quãng đường hãm phanh dài hơn rất nhiều!';
  } else if (combinedContext.includes('công cơ học') || combinedContext.includes('công suất')) {
    example = 'Một người lực sĩ cử tạ nâng tạ lên cao 2m sinh công rất lớn; nhưng khi đứng yên giữ tạ trên đầu dù tốn sức mỏi cơ nhưng theo vật lý lực không làm vật dịch chuyển nên công sinh ra bằng 0!';
  } else if (combinedContext.includes('điện trở') || combinedContext.includes('định luật ôm')) {
    example = 'Dây tóc bóng đèn sợi đốt làm bằng vonfram có điện trở lớn để khi dòng điện chạy qua, nhiệt lượng tỏa ra làm dây tóc nóng sáng đến trên 2000°C.';
  }

  const advice = isCorrect
    ? 'Em đã nắm rất vững kiến thức này! Hãy tiếp tục duy trì phương pháp tư duy đối chiếu chặt chẽ định luật để tự tin với mọi bài thi!'
    : 'Lời khuyên từ thầy cô: Hãy phân biệt rõ điều kiện của từng định luật (nhất là các trường hợp biên và đơn vị chuẩn SI) để không bị nhầm lẫn trong các bài thi!';

  return {
    source: 'pedagogical_engine',
    isCorrect,
    verdict: isCorrect 
      ? 'Chính xác! Lập luận của em rất chuẩn mực!' 
      : `Chưa chính xác. Đáp án chuẩn SGK là "${correct}".`,
    misconceptionAnalysis: misconception,
    stepByStepReasoning: steps,
    formulaAndUnits: formulas,
    realWorldExample: example,
    adviceForStudent: advice
  };
}

function extractSection(text: string, keyword: string, fallbackTitle: string): string | null {
  const lines = text.split('\n');
  let capturing = false;
  const captured: string[] = [];

  for (const line of lines) {
    const l = line.toLowerCase();
    if (l.includes(keyword) || l.includes(fallbackTitle.toLowerCase())) {
      capturing = true;
      continue;
    }
    if (capturing) {
      if (line.match(/^[0-9]+\./) || line.startsWith('##') || line.startsWith('###')) {
        break;
      }
      if (line.trim().length > 0) {
        captured.push(line.trim());
      }
    }
  }

  return captured.length > 0 ? captured.join(' ') : null;
}

function parseSteps(text: string): string[] {
  const lines = text.split('\n');
  const steps: string[] = [];
  let inSteps = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.toLowerCase().includes('lời giải từng bước') || trimmed.toLowerCase().includes('các bước')) {
      inSteps = true;
      continue;
    }
    if (inSteps) {
      if (trimmed.match(/^[0-9]+\./) || trimmed.startsWith('Bước') || trimmed.startsWith('-')) {
        steps.push(trimmed);
      } else if (trimmed.startsWith('##') || trimmed.toLowerCase().includes('hiện tượng thực tiễn')) {
        break;
      }
    }
  }

  return steps.length > 0 ? steps : [
    'Bước 1: Xác định đại lượng đã cho và đại lượng cần tìm.',
    'Bước 2: Viết công thức vật lý chuẩn xác theo SGK.',
    'Bước 3: Thay số cẩn thận, chú ý đổi về đơn vị chuẩn.',
    'Bước 4: Đối chiếu kết quả và chọn phương án đúng.'
  ];
}

function extractFormulas(aiText: string, defaultExplanation: string): string[] {
  const formulas: string[] = [];
  const mathMatches = aiText.match(/\$([^$]+)\$/g);
  if (mathMatches && mathMatches.length > 0) {
    mathMatches.slice(0, 4).forEach(m => {
      formulas.push(m.replace(/\$/g, '').trim());
    });
  }

  if (formulas.length === 0) {
    formulas.push(defaultExplanation.slice(0, 150));
  }

  return formulas;
}
