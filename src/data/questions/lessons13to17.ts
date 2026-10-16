import { Question } from '../../types';

export const QUESTIONS_13_TO_17: Question[] = [
  // --- BÀI 13: NĂNG LƯỢNG CỦA DÒNG ĐIỆN. CÔNG SUẤT ĐIỆN (20 CÂU) ---
  {
    id: 'q13-1',
    lessonId: 13,
    difficulty: 'de',
    question: 'Công thức tính công suất điện P của một đoạn mạch là:',
    options: ['P = U * I', 'P = U / I', 'P = I / U', 'P = U * I^2'],
    correctAnswer: 'P = U * I',
    explanation: 'Công suất điện của đoạn mạch bằng tích hiệu điện thế và cường độ dòng điện: P = U.I.'
  },
  {
    id: 'q13-2',
    lessonId: 13,
    difficulty: 'de',
    question: 'Đơn vị đo công suất điện trong hệ SI là:',
    options: ['Oát (Watt - W)', 'Jun (Joule - J)', 'Vôn (Volt - V)', 'Ampe (Ampere - A)'],
    correctAnswer: 'Oát (Watt - W)',
    explanation: '1 W = 1 V * 1 A.'
  },
  {
    id: 'q13-3',
    lessonId: 13,
    difficulty: 'de',
    question: 'Trên bóng đèn có ghi "220 V - 40 W". Con số "40 W" có ý nghĩa gì?',
    options: ['Công suất định mức của bóng đèn khi mắc vào hiệu điện thế định mức 220 V', 'Điện năng tiêu thụ trong 1 giây luôn luôn là 40 W dù ở hiệu điện thế nào', 'Nhiệt độ tối đa của bóng đèn', 'Trọng lượng của bóng đèn'],
    correctAnswer: 'Công suất định mức của bóng đèn khi mắc vào hiệu điện thế định mức 220 V',
    explanation: 'Công suất định mức biểu thị công suất tiêu thụ khi thiết bị hoạt động ở hiệu điện thế định mức.'
  },
  {
    id: 'q13-4',
    lessonId: 13,
    difficulty: 'de',
    question: 'Công thức tính điện năng tiêu thụ (công của dòng điện) A theo công suất P và thời gian t là:',
    options: ['A = P * t = U * I * t', 'A = P / t', 'A = U * I / t', 'A = P + t'],
    correctAnswer: 'A = P * t = U * I * t',
    explanation: 'Điện năng tiêu thụ A = P.t.'
  },
  {
    id: 'q13-5',
    lessonId: 13,
    difficulty: 'de',
    question: '1 số điện (1 kWh) dùng trong tính tiền điện sinh hoạt tương đương với bao nhiêu Jun (J)?',
    options: ['3.600.000 J (3,6 MJ)', '3.600 J', '1.000 J', '360.000 J'],
    correctAnswer: '3.600.000 J (3,6 MJ)',
    explanation: '1 kWh = 1000 W * 3600 s = 3.600.000 J = 3,6.10^6 J.'
  },
  {
    id: 'q13-6',
    lessonId: 13,
    difficulty: 'de',
    question: 'Thiết bị đo điện năng tiêu thụ trong các gia đình là:',
    options: ['Công tơ điện', 'Vôn kế', 'Ampe kế', 'Nhiệt kế'],
    correctAnswer: 'Công tơ điện',
    explanation: 'Công tơ điện (đồng hồ điện) đo lượng điện năng tiêu thụ tính bằng kWh.'
  },
  {
    id: 'q13-7',
    lessonId: 13,
    difficulty: 'de',
    question: 'Bóng đèn LED tiêu thụ ít điện hơn bóng đèn dây tóc cùng độ sáng vì:',
    options: ['Hiệu suất biến đổi điện năng thành quang năng của đèn LED cao hơn nhiều, ít toả nhiệt vô ích', 'Đèn LED nhỏ hơn', 'Đèn LED làm bằng nhựa', 'Đèn LED không cần dùng dây điện'],
    correctAnswer: 'Hiệu suất biến đổi điện năng thành quang năng của đèn LED cao hơn nhiều, ít toả nhiệt vô ích',
    explanation: 'Đèn LED có hiệu suất phát quang rất cao (>80%), trong khi bóng dây tóc lãng phí hơn 90% thành nhiệt.'
  },
  {
    id: 'q13-8',
    lessonId: 13,
    difficulty: 'kho',
    question: 'Một bóng đèn 220 V - 100 W hoạt động bình thường liên tục trong 5 giờ mỗi ngày. Lượng điện năng tiêu thụ trong 30 ngày là:',
    options: ['15 kWh', '150 kWh', '1,5 kWh', '500 kWh'],
    correctAnswer: '15 kWh',
    explanation: 'A = P * t = 0,1 kW * (5 h * 30) = 0,1 * 150 = 15 kWh.'
  },
  {
    id: 'q13-9',
    lessonId: 13,
    difficulty: 'kho',
    question: 'Một ấm điện 220 V - 1000 W được sử dụng đúng hiệu điện thế định mức. Cường độ dòng điện chạy qua ấm xấp xỉ bằng:',
    options: ['4,55 A', '0,22 A', '2,2 A', '10 A'],
    correctAnswer: '4,55 A',
    explanation: 'I = P / U = 1000 / 220 ≈ 4,55 A.'
  },
  {
    id: 'q13-10',
    lessonId: 13,
    difficulty: 'kho',
    question: 'Điện trở của một bóng đèn sợi đốt có ghi 220 V - 100 W khi hoạt động bình thường là:',
    options: ['484 Ω', '22 Ω', '220 Ω', '100 Ω'],
    correctAnswer: '484 Ω',
    explanation: 'R = U^2 / P = 220^2 / 100 = 48400 / 100 = 484 Ω.'
  },
  {
    id: 'q13-11',
    lessonId: 13,
    difficulty: 'kho',
    question: 'Một gia đình sử dụng bình nóng lạnh công suất 2,5 kW trong 1 giờ mỗi ngày. Với giá điện trung bình 2.000 đồng/kWh, số tiền điện phải trả cho bình này trong tháng (30 ngày) là:',
    options: ['150.000 đồng', '75.000 đồng', '300.000 đồng', '50.000 đồng'],
    correctAnswer: '150.000 đồng',
    explanation: 'A = 2,5 kW * 1 h * 30 ngày = 75 kWh. Tiền = 75 * 2000 = 150.000 đồng.'
  },
  {
    id: 'q13-12',
    lessonId: 13,
    difficulty: 'kho',
    question: 'Hai bóng đèn Đ1 (220 V - 60 W) và Đ2 (220 V - 100 W) mắc song song vào mạng điện 220 V. Đèn nào sẽ sáng hơn?',
    options: ['Đèn Đ2 sáng hơn', 'Đèn Đ1 sáng hơn', 'Hai đèn sáng bằng nhau', 'Cả hai đèn đều không sáng'],
    correctAnswer: 'Đèn Đ2 sáng hơn',
    explanation: 'Mắc song song vào mạng 220 V thì cả 2 đều đạt công suất định mức, Đ2 (100 W) lớn hơn Đ1 (60 W) nên sáng hơn.'
  },
  {
    id: 'q13-13',
    lessonId: 13,
    difficulty: 'kho',
    question: 'Công thức tính công suất toả nhiệt trên điện trở R khi có dòng điện I chạy qua là:',
    options: ['P = I^2 * R = U^2 / R', 'P = I * R^2', 'P = I / R', 'P = U * R'],
    correctAnswer: 'P = I^2 * R = U^2 / R',
    explanation: 'Thay U = I.R vào P = U.I được P = I^2.R = U^2 / R.'
  },
  {
    id: 'q13-14',
    lessonId: 13,
    difficulty: 'kho',
    question: 'Hành động nào sau đây giúp tiết kiệm điện năng hiệu quả nhất trong sinh hoạt hàng ngày?',
    options: ['Tắt các thiết bị điện khi ra khỏi phòng và sử dụng thiết bị dán nhãn năng lượng 5 sao hiệu suất cao', 'Để tivi ở chế độ chờ (standby) 24/24', 'Bật điều hoà 16°C mở cửa sổ', 'Bật bình nóng lạnh cả ngày lẫn đêm'],
    correctAnswer: 'Tắt các thiết bị điện khi ra khỏi phòng và sử dụng thiết bị dán nhãn năng lượng 5 sao hiệu suất cao',
    explanation: 'Biện pháp tiết kiệm điện chuẩn khuyến nghị của Bộ Công Thương.'
  },
  {
    id: 'q13-15',
    lessonId: 13,
    difficulty: 'cuc_kho',
    question: 'Mắc nối tiếp hai bóng đèn Đ1 (220 V - 40 W) và Đ2 (220 V - 100 W) vào mạng điện 220 V. Đèn nào sẽ sáng hơn và vì sao?',
    options: ['Đèn Đ1 sáng hơn vì có điện trở lớn hơn nên toả công suất nhiệt lớn hơn khi cùng cường độ dòng điện', 'Đèn Đ2 sáng hơn vì công suất định mức lớn hơn', 'Hai đèn sáng như nhau', 'Cả hai đèn cháy ngay lập tức'],
    correctAnswer: 'Đèn Đ1 sáng hơn vì có điện trở lớn hơn nên toả công suất nhiệt lớn hơn khi cùng cường độ dòng điện',
    explanation: 'R1 = 220^2/40 = 1210 Ω, R2 = 220^2/100 = 484 Ω. Mắc nối tiếp cùng I, công suất thực tế P = I^2.R nên Đ1 có R1 lớn hơn sẽ sáng hơn.'
  },
  {
    id: 'q13-16',
    lessonId: 13,
    difficulty: 'cuc_kho',
    question: 'Một nguồn điện không đổi có hiệu điện thế U mắc với một biến trở R. Công suất toả nhiệt trên biến trở đạt giá trị cực đại khi:',
    options: ['Điện trở R bằng điện trở trong r của nguồn điện', 'Điện trở R = 0', 'Điện trở R tiến tới vô cùng', 'Điện trở R = 2r'],
    correctAnswer: 'Điện trở R bằng điện trở trong r của nguồn điện',
    explanation: 'Định lí ghép phối trở kháng cực đại: P = I^2.R = U^2.R / (R + r)^2 đạt cực đại khi R = r.'
  },
  {
    id: 'q13-17',
    lessonId: 13,
    difficulty: 'cuc_kho',
    question: 'Một bếp điện có hai dây mayso R1 và R2. Nếu dùng riêng R1 thì đun sôi ấm nước trong 15 phút, dùng riêng R2 thì đun sôi ấm nước trong 30 phút. Nếu mắc song song cả hai dây thì đun sôi ấm nước đó trong thời gian bao lâu (bỏ qua hao phí)?',
    options: ['10 phút', '45 phút', '22,5 phút', '7,5 phút'],
    correctAnswer: '10 phút',
    explanation: 'Nhiệt lượng Q = U^2.t / R => t tỉ lệ với R. Mắc song song: 1/Rtđ = 1/R1 + 1/R2 => 1/t = 1/t1 + 1/t2 = 1/15 + 1/30 = 3/30 = 1/10 => t = 10 phút.'
  },
  {
    id: 'q13-18',
    lessonId: 13,
    difficulty: 'cuc_kho',
    question: 'Ở câu hỏi trên, nếu mắc nối tiếp cả hai dây mayso R1 và R2 thì thời gian đun sôi cùng ấm nước đó là:',
    options: ['45 phút', '15 phút', '20 phút', '60 phút'],
    correctAnswer: '45 phút',
    explanation: 'Mắc nối tiếp: Rtđ = R1 + R2 => t_nt = t1 + t2 = 15 + 30 = 45 phút.'
  },
  {
    id: 'q13-19',
    lessonId: 13,
    difficulty: 'cuc_kho',
    question: 'Một quạt điện chạy với hiệu điện thế 220 V và cường độ dòng điện 0,5 A. Công suất toàn phần của quạt là 110 W. Biết cuộn dây động cơ có điện trở thuần 20 Ω. Hiệu suất cơ học của quạt là:',
    options: ['95,45%', '81,8%', '90%', '75%'],
    correctAnswer: '95,45%',
    explanation: 'Công suất hao phí nhiệt P_hp = I^2.r = 0,5^2 * 20 = 5 W. Công suất cơ học có ích P_ích = 110 - 5 = 105 W. Hiệu suất H = 105 / 110 ≈ 95,45%.'
  },
  {
    id: 'q13-20',
    lessonId: 13,
    difficulty: 'cuc_kho',
    question: 'Đường dây tải điện có điện trở tổng cộng R = 10 Ω truyền tải công suất điện P = 100 kW từ nhà máy đến khu dân cư ở hiệu điện thế U = 10 kV (10.000 V). Công suất hao phí do toả nhiệt trên đường dây là:',
    options: ['1.000 W (1 kW)', '10.000 W (10 kW)', '100 W', '500 W'],
    correctAnswer: '1.000 W (1 kW)',
    explanation: 'I = P / U = 100.000 / 10.000 = 10 A. P_hp = I^2.R = 10^2 * 10 = 1.000 W = 1 kW (chỉ chiếm 1%).'
  },

  // --- BÀI 14: ĐỊNH LUẬT JOULE – LENZ (20 CÂU) ---
  {
    id: 'q14-1',
    lessonId: 14,
    difficulty: 'de',
    question: 'Định luật Joule – Lenz phát biểu rằng nhiệt lượng toả ra trên dây dẫn khi có dòng điện chạy qua tỉ lệ thuận với:',
    options: ['Bình phương cường độ dòng điện, điện trở của dây và thời gian dòng điện chạy qua', 'Cường độ dòng điện, điện trở và thời gian', 'Hiệu điện thế và thời gian', 'Thể tích của dây dẫn'],
    correctAnswer: 'Bình phương cường độ dòng điện, điện trở của dây và thời gian dòng điện chạy qua',
    explanation: 'Định luật Joule - Lenz: Q = I^2.R.t.'
  },
  {
    id: 'q14-2',
    lessonId: 14,
    difficulty: 'de',
    question: 'Hệ thức của định luật Joule – Lenz khi đo Q bằng Jun (J) là:',
    options: ['Q = I^2 * R * t', 'Q = I * R * t^2', 'Q = I * R / t', 'Q = R / (I^2 * t)'],
    correctAnswer: 'Q = I^2 * R * t',
    explanation: 'Q (J), I (A), R (Ω), t (s).'
  },
  {
    id: 'q14-3',
    lessonId: 14,
    difficulty: 'de',
    question: 'Nếu đo nhiệt lượng Q bằng calo (cal) thì hệ thức định luật Joule – Lenz có hệ số chuyển đổi là:',
    options: ['Q = 0,24 * I^2 * R * t', 'Q = 4,18 * I^2 * R * t', 'Q = 2,4 * I * R * t', 'Q = 0,42 * I^2 * R * t'],
    correctAnswer: 'Q = 0,24 * I^2 * R * t',
    explanation: '1 J ≈ 0,24 cal nên Q(cal) = 0,24 * I^2.R.t.'
  },
  {
    id: 'q14-4',
    lessonId: 14,
    difficulty: 'de',
    question: 'Thiết bị nào sau đây hoạt động dựa trên tác dụng nhiệt của dòng điện theo định luật Joule – Lenz?',
    options: ['Ấm siêu tốc đun nước, bàn là điện và bếp hồng ngoại', 'Quạt trần điện cơ', 'Chuông điện', 'Tủ lạnh máy nén'],
    correctAnswer: 'Ấm siêu tốc đun nước, bàn là điện và bếp hồng ngoại',
    explanation: 'Các thiết bị này biến đổi hầu như toàn bộ điện năng thành nhiệt năng qua dây đốt nóng.'
  },
  {
    id: 'q14-5',
    lessonId: 14,
    difficulty: 'de',
    question: 'Dây mayso trong các thiết bị sưởi ấm hoặc bếp điện thường được làm bằng hợp kim niken - crom (nichrome) vì:',
    options: ['Hợp kim nichrome có điện trở suất lớn và chịu được nhiệt độ nóng đỏ rất cao mà không bị oxi hoá', 'Nó dẫn điện tốt hơn đồng', 'Nó rất rẻ tiền', 'Nó phát ra sóng siêu âm'],
    correctAnswer: 'Hợp kim nichrome có điện trở suất lớn và chịu được nhiệt độ nóng đỏ rất cao mà không bị oxi hoá',
    explanation: 'Nichrome có ρ ≈ 1,1.10^-6 Ω.m (lớn gấp 60 lần đồng) và bền ở nhiệt độ trên 1000°C.'
  },
  {
    id: 'q14-6',
    lessonId: 14,
    difficulty: 'de',
    question: 'Khi dòng điện chạy qua dây dẫn tăng lên gấp 2 lần (điện trở và thời gian không đổi) thì nhiệt lượng toả ra trên dây sẽ:',
    options: ['Tăng lên gấp 4 lần', 'Tăng lên gấp 2 lần', 'Giảm đi một nửa', 'Không thay đổi'],
    correctAnswer: 'Tăng lên gấp 4 lần',
    explanation: 'Q tỉ lệ với I^2: (2I)^2 = 4 I^2.'
  },
  {
    id: 'q14-7',
    lessonId: 14,
    difficulty: 'de',
    question: 'Hiệu suất H của ấm điện đun nước được tính bằng công thức:',
    options: ['H = (Q_ích / A_toàn_phần) * 100%', 'H = (A_toàn_phần / Q_ích) * 100%', 'H = Q_ích * A_toàn_phần', 'H = Q_toả / Q_ích'],
    correctAnswer: 'H = (Q_ích / A_toàn_phần) * 100%',
    explanation: 'Q_ích là nhiệt lượng làm sôi nước = m.c.Δt; A_toàn_phần là điện năng tiêu thụ = P.t.'
  },
  {
    id: 'q14-8',
    lessonId: 14,
    difficulty: 'kho',
    question: 'Một điện trở R = 10 Ω có dòng điện I = 2 A chạy qua trong 5 phút. Nhiệt lượng toả ra trên điện trở là:',
    options: ['12.000 J', '200 J', '1.200 J', '20.000 J'],
    correctAnswer: '12.000 J',
    explanation: 't = 5 phút = 300 s. Q = I^2 * R * t = 2^2 * 10 * 300 = 4 * 10 * 300 = 12.000 J = 12 kJ.'
  },
  {
    id: 'q14-9',
    lessonId: 14,
    difficulty: 'kho',
    question: 'Tại sao khi nối ấm điện với nguồn điện bằng dây dẫn bằng đồng thì dây mayso trong ấm nóng đỏ còn dây nối bằng đồng hầu như không nóng?',
    options: ['Vì dây nối bằng đồng có điện trở rất nhỏ so với điện trở rất lớn của dây mayso (Q tỉ lệ với R khi cùng I)', 'Vì dây đồng dài hơn', 'Vì nước làm mát dây đồng', 'Dây đồng không dẫn điện'],
    correctAnswer: 'Vì dây nối bằng đồng có điện trở rất nhỏ so với điện trở rất lớn của dây mayso (Q tỉ lệ với R khi cùng I)',
    explanation: 'Dây nối và mayso mắc nối tiếp cùng I, do R_đồng rất nhỏ nên Q_đồng không đáng kể; R_mayso lớn nên toả nhiệt dữ dội.'
  },
  {
    id: 'q14-10',
    lessonId: 14,
    difficulty: 'kho',
    question: 'Dùng ấm điện 1000 W đun sôi 2 lít nước (m = 2 kg) từ nhiệt độ 20°C lên 100°C trong 14 phút. Biết nhiệt dung riêng của nước c = 4200 J/(kg.K). Hiệu suất của ấm điện xấp xỉ bằng:',
    options: ['80%', '90%', '70%', '85%'],
    correctAnswer: '80%',
    explanation: 'Q_ích = m.c.Δt = 2 * 4200 * 80 = 672.000 J. A = P * t = 1000 * (14 * 60) = 840.000 J. H = 672.000 / 840.000 = 80%.'
  },
  {
    id: 'q14-11',
    lessonId: 14,
    difficulty: 'kho',
    question: 'Để bảo vệ các thiết bị điện tử trong máy tính không bị quá nhiệt do tác dụng Joule – Lenz, người ta phải:',
    options: ['Gắn các khối tản nhiệt bằng kim loại nhôm/đồng có nhiều cánh tản nhiệt và quạt thông gió làm mát', 'Bọc kín máy bằng xốp giữ nhiệt', 'Giảm hiệu điện thế xuống 0', 'Bôi dầu mỡ lên vi mạch'],
    correctAnswer: 'Gắn các khối tản nhiệt bằng kim loại nhôm/đồng có nhiều cánh tản nhiệt và quạt thông gió làm mát',
    explanation: 'Khối tản nhiệt nhôm/đồng dẫn nhiệt nhanh và diện tích tiếp xúc không khí lớn giúp giải toả nhiệt lượng do dòng điện toả ra.'
  },
  {
    id: 'q14-12',
    lessonId: 14,
    difficulty: 'kho',
    question: 'Hiện tượng đoản mạch (chập mạch) gây nguy hiểm cháy nổ nhà cửa là vì:',
    options: ['Điện trở mạch đột ngột giảm xuống gần bằng 0, làm cường độ dòng điện I tăng vọt sinh nhiệt lượng khổng lồ theo định luật Joule – Lenz đốt cháy vỏ cách điện', 'Hiệu điện thế giảm về 0', 'Nguồn điện tự ngắt phát tia lửa', 'Dòng điện đổi màu'],
    correctAnswer: 'Điện trở mạch đột ngột giảm xuống gần bằng 0, làm cường độ dòng điện I tăng vọt sinh nhiệt lượng khổng lồ theo định luật Joule – Lenz đốt cháy vỏ cách điện',
    explanation: 'Khi chập mạch, R ≈ 0 => I = U/R cực lớn => Q = I^2.R.t trong tích tắc đốt cháy nhựa bọc dây và vật dễ cháy xung quanh.'
  },
  {
    id: 'q14-13',
    lessonId: 14,
    difficulty: 'kho',
    question: 'Hai điện trở R1 và R2 (với R1 = 2 * R2) mắc nối tiếp vào hiệu điện thế U. Tỉ số nhiệt lượng toả ra trên hai điện trở Q1 / Q2 trong cùng khoảng thời gian là:',
    options: ['2', '1/2', '4', '1/4'],
    correctAnswer: '2',
    explanation: 'Mắc nối tiếp cùng I: Q = I^2.R.t => Q1 / Q2 = R1 / R2 = 2.'
  },
  {
    id: 'q14-14',
    lessonId: 14,
    difficulty: 'kho',
    question: 'Nếu mắc song song hai điện trở trên (R1 = 2 * R2) vào cùng hiệu điện thế U thì tỉ số nhiệt lượng toả ra Q1 / Q2 trong cùng thời gian sẽ là:',
    options: ['1/2', '2', '4', '1'],
    correctAnswer: '1/2',
    explanation: 'Mắc song song cùng U: Q = (U^2 / R) * t => Q1 / Q2 = R2 / R1 = 1/2.'
  },
  {
    id: 'q14-15',
    lessonId: 14,
    difficulty: 'cuc_kho',
    question: 'Một ấm điện có công suất 1200 W được chế tạo từ dây nichrome có tiết diện 0,2 mm² và điện trở suất 1,1.10^-6 Ω.m dùng ở mạng điện 220 V. Chiều dài của sợi dây mayso xấp xỉ bằng:',
    options: ['7,33 m', '14,6 m', '3,67 m', '10,5 m'],
    correctAnswer: '7,33 m',
    explanation: 'R = U^2 / P = 220^2 / 1200 = 48400 / 1200 ≈ 40,33 Ω. Chiều dài l = R * S / ρ = 40,33 * (0,2.10^-6) / 1,1.10^-6 ≈ 7,33 m.'
  },
  {
    id: 'q14-16',
    lessonId: 14,
    difficulty: 'cuc_kho',
    question: 'Một bếp điện đun sôi 1,5 lít nước ở 25°C trong 10 phút. Biết hiệu suất của bếp là 75%, c_nước = 4200 J/(kg.K). Công suất tiêu thụ của bếp điện là:',
    options: ['1050 W', '1400 W', '787,5 W', '2100 W'],
    correctAnswer: '1050 W',
    explanation: 'Q_ích = 1,5 * 4200 * (100 - 25) = 472.500 J. Điện năng tiêu thụ A = Q_ích / 0,75 = 630.000 J. Công suất P = A / t = 630.000 / (10 * 60) = 1050 W.'
  },
  {
    id: 'q14-17',
    lessonId: 14,
    difficulty: 'cuc_kho',
    question: 'Cắt một dây mayso của bếp điện làm hai phần bằng nhau rồi mắc song song hai phần đó lại với nhau vào hiệu điện thế định mức ban đầu. Công suất toả nhiệt của bếp mới so với bếp ban đầu sẽ:',
    options: ['Tăng lên gấp 4 lần', 'Tăng lên gấp 2 lần', 'Giảm đi một nửa', 'Không thay đổi'],
    correctAnswer: 'Tăng lên gấp 4 lần',
    explanation: 'Mỗi nửa có điện trở R/2. Ghép song song: Rtđ = (R/2) / 2 = R/4. Công suất mới P\' = U^2 / (R/4) = 4 * (U^2/R) = 4P.'
  },
  {
    id: 'q14-18',
    lessonId: 14,
    difficulty: 'cuc_kho',
    question: 'Trong thí nghiệm kiểm chứng định luật Joule – Lenz bằng nhiệt lượng kế đo sự tăng nhiệt độ Δt của nước, nếu bỏ qua nhiệt dung của vỏ nhiệt lượng kế và hao phí thì đại lượng nào sau đây tỉ lệ bậc nhất với thời gian đun t?',
    options: ['Độ tăng nhiệt độ của nước Δt', 'Bình phương nhiệt độ', 'Căn bậc hai nhiệt độ', 'Khối lượng nước'],
    correctAnswer: 'Độ tăng nhiệt độ của nước Δt',
    explanation: 'm.c.Δt = I^2.R.t => Δt = (I^2.R / mc) * t, tức là Δt tỉ lệ bậc nhất với thời gian t.'
  },
  {
    id: 'q14-19',
    lessonId: 14,
    difficulty: 'cuc_kho',
    question: 'Một dây chì dùng làm cầu chì có đường kính d. Cường độ dòng điện giới hạn làm đứt chì phụ thuộc vào đường kính d theo tỉ lệ lũy thừa nào?',
    options: ['I giới hạn tỉ lệ với d^(3/2)', 'I giới hạn tỉ lệ với d', 'I giới hạn tỉ lệ với d^2', 'I giới hạn không phụ thuộc d'],
    correctAnswer: 'I giới hạn tỉ lệ với d^(3/2)',
    explanation: 'Định luật Preece cho cầu chì: Nhiệt toả I^2.R = I^2 * ρ.l / (π.d^2/4) cân bằng nhiệt thoát qua mặt trụ S_xungquanh = π.d.l => I^2 tỉ lệ với d^3 => I tỉ lệ d^(3/2).'
  },
  {
    id: 'q14-20',
    lessonId: 14,
    difficulty: 'cuc_kho',
    question: 'Tác dụng nhiệt của dòng điện là một con dao hai lưỡi trong kĩ thuật điện vì:',
    options: ['Hữu ích trong các thiết bị sưởi nhiệt và đun nấu, nhưng là nguồn hao phí năng lượng và nguy cơ cháy nổ làm giảm tuổi thọ vi mạch điện tử', 'Chỉ có hại không có ích', 'Chỉ có ích không có hại bao giờ', 'Làm thay đổi màu sắc dòng điện'],
    correctAnswer: 'Hữu ích trong các thiết bị sưởi nhiệt và đun nấu, nhưng là nguồn hao phí năng lượng và nguy cơ cháy nổ làm giảm tuổi thọ vi mạch điện tử',
    explanation: 'Nhận định khoa học toàn diện về ứng dụng và hạn chế cần khắc phục của tác dụng nhiệt Joule – Lenz.'
  },

  // --- BÀI 15: TỪ TRƯỜNG (20 CÂU) ---
  {
    id: 'q15-1',
    lessonId: 15,
    difficulty: 'de',
    question: 'Không gian xung quanh nam châm hoặc xung quanh dòng điện luôn tồn tại:',
    options: ['Từ trường', 'Trọng trường', 'Điện trường tĩnh không đổi', 'Chân không tuyệt đối'],
    correctAnswer: 'Từ trường',
    explanation: 'Từ trường tồn tại xung quanh nam châm và hạt mang điện chuyển động (dòng điện).'
  },
  {
    id: 'q15-2',
    lessonId: 15,
    difficulty: 'de',
    question: 'Dụng cụ đơn giản và nhạy bén nhất để nhận biết sự tồn tại của từ trường là:',
    options: ['Kim nam châm thử có trục quay tự do', 'Nhiệt kế điện tử', 'Quả cầu kim loại tích điện', 'Gương phẳng'],
    correctAnswer: 'Kim nam châm thử có trục quay tự do',
    explanation: 'Kim nam châm thử sẽ bị lệch hướng và chỉ theo một phương xác định trong từ trường.'
  },
  {
    id: 'q15-3',
    lessonId: 15,
    difficulty: 'de',
    question: 'Hình ảnh các đường mạt sắt sắp xếp xung quanh một thanh nam châm được gọi là:',
    options: ['Từ phổ', 'Quang phổ', 'Sóng âm phổ', 'Điện phổ'],
    correctAnswer: 'Từ phổ',
    explanation: 'Từ phổ cho ta hình ảnh trực quan sinh động về các đường sức từ.'
  },
  {
    id: 'q15-4',
    lessonId: 15,
    difficulty: 'de',
    question: 'Quy ước chiều của đường sức từ ở bên ngoài thanh nam châm là:',
    options: ['Đi ra từ cực Bắc (N) và đi vào cực Nam (S)', 'Đi ra từ cực Nam (S) và đi vào cực Bắc (N)', 'Đi từ trong ra ngoài theo hình sao', 'Không có chiều xác định'],
    correctAnswer: 'Đi ra từ cực Bắc (N) và đi vào cực Nam (S)',
    explanation: 'Quy tắc vàng: "Vào Nam (S) - Ra Bắc (N)".'
  },
  {
    id: 'q15-5',
    lessonId: 15,
    difficulty: 'de',
    question: 'Nơi nào có đường sức từ dày (mau) hơn thì từ trường ở đó:',
    options: ['Mạnh hơn', 'Yếu hơn', 'Bằng 0', 'Có nhiệt độ cao hơn'],
    correctAnswer: 'Mạnh hơn',
    explanation: 'Mật độ đường sức từ biểu thị độ mạnh yếu của từ trường: đường sức mau là từ trường mạnh, đường sức thưa là từ trường yếu.'
  },
  {
    id: 'q15-6',
    lessonId: 15,
    difficulty: 'de',
    question: 'Hai cực cùng tên của hai thanh nam châm đặt gần nhau sẽ:',
    options: ['Đẩy nhau', 'Hút nhau', 'Vừa hút vừa đẩy', 'Không tương tác'],
    correctAnswer: 'Đẩy nhau',
    explanation: 'Cùng cực (Bắc - Bắc hoặc Nam - Nam) thì đẩy nhau; khác cực thì hút nhau.'
  },
  {
    id: 'q15-7',
    lessonId: 15,
    difficulty: 'de',
    question: 'Trái Đất là một nam châm khổng lồ. Cực từ nằm gần cực Bắc địa lí của Trái Đất là:',
    options: ['Cực Nam từ', 'Cực Bắc từ', 'Cực Tây từ', 'Cực Đông từ'],
    correctAnswer: 'Cực Nam từ',
    explanation: 'Vì cực Bắc của kim la bàn luôn bị hút chỉ về hướng Bắc địa lí, nên gần cực Bắc địa lí phải là cực Nam từ của Trái Đất.'
  },
  {
    id: 'q15-8',
    lessonId: 15,
    difficulty: 'kho',
    question: 'Thí nghiệm lịch sử của ai vào năm 1820 đã lần đầu tiên phát hiện ra mối liên hệ mật thiết giữa dòng điện và từ trường?',
    options: ['Hans Christian Oersted', 'Isaac Newton', 'Michael Faraday', 'Thomas Edison'],
    correctAnswer: 'Hans Christian Oersted',
    explanation: 'Oersted phát hiện kim nam châm bị lệch khi đặt song song với dây dẫn có dòng điện chạy qua.'
  },
  {
    id: 'q15-9',
    lessonId: 15,
    difficulty: 'kho',
    question: 'Từ trường đều là từ trường có đặc điểm nào sau đây?',
    options: ['Các đường sức từ là những đường thẳng song song và cách đều nhau, lực từ tác dụng như nhau tại mọi điểm', 'Các đường sức từ hội tụ tại một điểm', 'Có độ mạnh thay đổi liên tục theo thời gian', 'Chỉ xuất hiện ở Bắc Cực'],
    correctAnswer: 'Các đường sức từ là những đường thẳng song song và cách đều nhau, lực từ tác dụng như nhau tại mọi điểm',
    explanation: 'Ví dụ về từ trường đều là khoảng không gian giữa hai nhánh của nam châm chữ U.'
  },
  {
    id: 'q15-10',
    lessonId: 15,
    difficulty: 'kho',
    question: 'Kim la bàn dùng để định hướng đường đi trên biển hoặc trong rừng luôn tự định vị theo hướng nào khi cân bằng?',
    options: ['Phương Bắc - Nam địa lí', 'Phương Đông - Tây', 'Phương thẳng đứng', 'Chỉ về phía Mặt Trời lặn'],
    correctAnswer: 'Phương Bắc - Nam địa lí',
    explanation: 'Dưới tác dụng của từ trường Trái Đất, kim nam châm tự định hướng theo trục Bắc - Nam.'
  },
  {
    id: 'q15-11',
    lessonId: 15,
    difficulty: 'kho',
    question: 'Vật liệu nào sau đây là vật liệu từ bị nam châm hút mạnh?',
    options: ['Sắt, thép, niken và coban', 'Đồng, nhôm và vàng', 'Gỗ khô, nhựa và cao su', 'Thủy tinh và gốm sứ'],
    correctAnswer: 'Sắt, thép, niken và coban',
    explanation: 'Các kim loại sắt từ gồm Fe, Ni, Co và các hợp kim của chúng.'
  },
  {
    id: 'q15-12',
    lessonId: 15,
    difficulty: 'kho',
    question: 'Nếu bẻ gãy một thanh nam châm thẳng thành hai nửa thì mỗi nửa sẽ trở thành:',
    options: ['Một nam châm hoàn chỉnh mới có đầy đủ hai cực Bắc (N) và Nam (S)', 'Một nửa chỉ có cực Bắc, nửa kia chỉ có cực Nam', 'Thanh sắt bình thường mất hết từ tính', 'Một khối chất lỏng'],
    correctAnswer: 'Một nam châm hoàn chỉnh mới có đầy đủ hai cực Bắc (N) và Nam (S)',
    explanation: 'Không tồn tại đơn cực từ trong tự nhiên; bẻ đôi nam châm ta luôn thu được hai nam châm lưỡng cực mới.'
  },
  {
    id: 'q15-13',
    lessonId: 15,
    difficulty: 'kho',
    question: 'Góc tạo bởi trục kim la bàn chỉ Bắc từ và hướng Bắc địa lí thực sự tại một địa điểm gọi là:',
    options: ['Góc từ thiên', 'Góc khúc xạ', 'Góc nghiêng từ', 'Góc tới hạn'],
    correctAnswer: 'Góc từ thiên',
    explanation: 'Góc từ thiên là sai lệch giữa hướng Bắc la bàn và kinh tuyến địa lí thực sự.'
  },
  {
    id: 'q15-14',
    lessonId: 15,
    difficulty: 'kho',
    question: 'Từ quyển của Trái Đất có vai trò sinh mệnh sống còn nào đối với sự sống trên hành tinh?',
    options: ['Lá chắn từ trường bảo vệ Trái Đất khỏi gió Mặt Trời và các dòng hạt mang điện nguy hiểm từ vũ trụ', 'Giúp tạo ra mưa tuyết', 'Làm cho Trái Đất quay chậm lại', 'Cung cấp năng lượng cho cây xanh quang hợp'],
    correctAnswer: 'Lá chắn từ trường bảo vệ Trái Đất khỏi gió Mặt Trời và các dòng hạt mang điện nguy hiểm từ vũ trụ',
    explanation: 'Từ trường làm chệch hướng các tia vũ trụ và gió Mặt Trời có hại, bảo vệ bầu khí quyển và sự sống.'
  },
  {
    id: 'q15-15',
    lessonId: 15,
    difficulty: 'cuc_kho',
    question: 'Hiện tượng cực quang huyền ảo lung linh xuất hiện ở các vùng cực Bắc và cực Nam của Trái Đất là do:',
    options: ['Các hạt mang điện mang năng lượng cao trong gió Mặt Trời bị từ trường Trái Đất hút dồn về hai cực và va chạm với các phân tử khí quyển kích thích phát quang', 'Băng tuyết ở vùng cực phản chiếu ánh trăng', 'Núi lửa phun trào ánh sáng màu', 'Các vệ tinh nhân tạo chiếu đèn'],
    correctAnswer: 'Các hạt mang điện mang năng lượng cao trong gió Mặt Trời bị từ trường Trái Đất hút dồn về hai cực và va chạm với các phân tử khí quyển kích thích phát quang',
    explanation: 'Từ trường xoắn các ion gió Mặt Trời về phễu cực, va chạm kích thích oxy và nitơ phát ra ánh sáng lục, đỏ rực rỡ.'
  },
  {
    id: 'q15-16',
    lessonId: 15,
    difficulty: 'cuc_kho',
    question: 'Một dây dẫn thẳng rất dài đặt vuông góc với mặt phẳng trang giấy mang dòng điện chạy từ trước ra sau (kí hiệu dấu cộng +). Các đường sức từ xung quanh dây dẫn có dạng là:',
    options: ['Các đường tròn đồng tâm có chiều theo chiều quay kim đồng hồ', 'Các đường tròn đồng tâm ngược chiều kim đồng hồ', 'Các đường thẳng song song', 'Các đường xoắn ốc tỏa ra xa'],
    correctAnswer: 'Các đường tròn đồng tâm có chiều theo chiều quay kim đồng hồ',
    explanation: 'Theo quy tắc nắm tay phải cho dây thẳng: ngón cái trỏ vào trong mặt giấy (+), các ngón tay khum lại chỉ chiều kim đồng hồ.'
  },
  {
    id: 'q15-17',
    lessonId: 15,
    difficulty: 'cuc_kho',
    question: 'Hiện tượng "bão từ" xảy ra khi Mặt Trời bùng nổ mạnh mẽ có thể gây ra tác hại nghiêm trọng nào đối với xã hội hiện đại?',
    options: ['Làm gián đoạn truyền thông vô tuyến, làm sai lệch hệ thống định vị GPS, đánh sập lưới điện cao thế diện rộng', 'Gây ra động đất mạnh 9 độ Richter', 'Làm tăng nhiệt độ phòng lên 100°C', 'Làm tan chảy các thanh sắt nam châm'],
    correctAnswer: 'Làm gián đoạn truyền thông vô tuyến, làm sai lệch hệ thống định vị GPS, đánh sập lưới điện cao thế diện rộng',
    explanation: 'Bão từ gây cảm ứng dòng điện khổng lồ trên lưới điện và tầng điện ly làm nghẽn sóng viễn thông và GPS.'
  },
  {
    id: 'q15-18',
    lessonId: 15,
    difficulty: 'cuc_kho',
    question: 'Một số loài chim di cư và rùa biển có thể bay vạn dặm vượt đại dương mà không bị lạc đường nhờ:',
    options: ['Các hạt từ tính sinh học (magnetite) trong cơ thể giúp chúng cảm nhận được hướng của từ trường Trái Đất', 'Nhìn theo bản đồ giấy', 'Dò theo mùi của gió biển', 'Đi theo ánh sao đêm'],
    correctAnswer: 'Các hạt từ tính sinh học (magnetite) trong cơ thể giúp chúng cảm nhận được hướng của từ trường Trái Đất',
    explanation: 'Sinh học hiện đại chứng minh nhiều loài chim và cá có giác quan từ tính sinh học (magnetoreception).'
  },
  {
    id: 'q15-19',
    lessonId: 15,
    difficulty: 'cuc_kho',
    question: 'Từ tính của một nam châm vĩnh cửu có thể bị suy giảm hoặc mất hẳn khi:',
    options: ['Bị nung nóng lên trên nhiệt độ Curie hoặc bị va đập đập búa mạnh nhiều lần', 'Ngâm trong nước muối mát', 'Để trong bóng tối', 'Bọc bằng giấy bạc'],
    correctAnswer: 'Bị nung nóng lên trên nhiệt độ Curie hoặc bị va đập đập búa mạnh nhiều lần',
    explanation: 'Nhiệt độ cao phá vỡ trật tự của các miền từ hóa (domain từ), khử sạch từ tính nam châm.'
  },
  {
    id: 'q15-20',
    lessonId: 15,
    difficulty: 'cuc_kho',
    question: 'Tàu đệm từ trường (Maglev) có thể di chuyển với tốc độ trên 400 - 600 km/h mà không phát ra tiếng rít bánh xe vì:',
    options: ['Nhờ lực đẩy từ trường nâng toàn bộ đoàn tàu lơ lửng cách đường ray vài centimet, loại bỏ hoàn toàn ma sát bánh xe', 'Tàu gắn cánh quạt phản lực máy bay', 'Tàu chạy trên đệm dầu nhớt', 'Tàu có khối lượng bằng 0'],
    correctAnswer: 'Nhờ lực đẩy từ trường nâng toàn bộ đoàn tàu lơ lửng cách đường ray vài centimet, loại bỏ hoàn toàn ma sát bánh xe',
    explanation: 'Lực từ đẩy nam châm siêu dẫn giúp tàu bay lượn trên ray loại bỏ ma sát lăn, đạt vận tốc siêu thanh trên bộ.'
  },

  // --- BÀI 16: TỪ TRƯỜNG CỦA ỐNG DÂY CÓ DÒNG ĐIỆN. NAM CHÂM ĐIỆN (20 CÂU) ---
  {
    id: 'q16-1',
    lessonId: 16,
    difficulty: 'de',
    question: 'Đường sức từ bên trong lòng của một ống dây dài có dòng điện chạy qua là:',
    options: ['Những đường thẳng gần như song song và cách đều nhau (từ trường đều)', 'Các đường xoắn ốc lộn xộn', 'Các đường cong khép kín quanh mép ngoài', 'Không có đường sức từ'],
    correctAnswer: 'Những đường thẳng gần như song song và cách đều nhau (từ trường đều)',
    explanation: 'Trong lòng ống dây dài có dòng điện, từ trường là từ trường đều.'
  },
  {
    id: 'q16-2',
    lessonId: 16,
    difficulty: 'de',
    question: 'Quy tắc nào được dùng để xác định chiều đường sức từ của ống dây có dòng điện?',
    options: ['Quy tắc nắm tay phải', 'Quy tắc bàn tay trái', 'Quy tắc vặn đinh ốc 2 ngón', 'Quy tắc bàn chân'],
    correctAnswer: 'Quy tắc nắm tay phải',
    explanation: 'Nắm bàn tay phải sao cho 4 ngón khum theo chiều dòng điện, ngón cái choãi ra 90° chỉ chiều đường sức từ.'
  },
  {
    id: 'q16-3',
    lessonId: 16,
    difficulty: 'de',
    question: 'Theo quy tắc nắm tay phải, ngón tay cái choãi ra 90° chỉ:',
    options: ['Chiều của đường sức từ trong lòng ống dây (đầu này là cực Bắc N của ống dây)', 'Chiều dòng điện chạy qua ống dây', 'Lực từ kéo ống dây', 'Chiều quay của Trái Đất'],
    correctAnswer: 'Chiều của đường sức từ trong lòng ống dây (đầu này là cực Bắc N của ống dây)',
    explanation: 'Đầu mà ngón cái chỉ ra chính là cực Bắc (N) của ống dây điện.'
  },
  {
    id: 'q16-4',
    lessonId: 16,
    difficulty: 'de',
    question: 'Cấu tạo của một nam châm điện đơn giản gồm có:',
    options: ['Một ống dây dẫn có lõi sắt non đặt bên trong', 'Một thanh thép đặc có sơn màu', 'Một tấm đồng mỏng bọc cao su', 'Một cục nam châm vĩnh cửu hình tròn'],
    correctAnswer: 'Một ống dây dẫn có lõi sắt non đặt bên trong',
    explanation: 'Ống dây quấn quanh lõi sắt non tạo thành nam châm điện.'
  },
  {
    id: 'q16-5',
    lessonId: 16,
    difficulty: 'de',
    question: 'Tại sao lõi của nam châm điện phải dùng sắt non mà không dùng thép cứng?',
    options: ['Sắt non nhiễm từ nhanh và mất hết từ tính ngay khi ngắt dòng điện, còn thép bị giữ lại từ tính biến thành nam châm vĩnh cửu', 'Sắt non rẻ tiền hơn thép', 'Thép không dẫn được điện', 'Sắt non phát nhiệt tốt hơn'],
    correctAnswer: 'Sắt non nhiễm từ nhanh và mất hết từ tính ngay khi ngắt dòng điện, còn thép bị giữ lại từ tính biến thành nam châm vĩnh cửu',
    explanation: 'Đặc tính từ mềm của sắt non giúp nam châm điện có thể bật/tắt từ tính chủ động theo công tắc điện.'
  },
  {
    id: 'q16-6',
    lessonId: 16,
    difficulty: 'de',
    question: 'Để tăng lực từ của một nam châm điện, người ta có thể:',
    options: ['Tăng cường độ dòng điện hoặc tăng số vòng quấn của ống dây', 'Giảm cường độ dòng điện', 'Rút lõi sắt non ra ngoài', 'Bọc ống dây bằng lớp cách nhiệt dày'],
    correctAnswer: 'Tăng cường độ dòng điện hoặc tăng số vòng quấn của ống dây',
    explanation: 'Lực từ của nam châm điện tăng khi tăng I và tăng số vòng n.'
  },
  {
    id: 'q16-7',
    lessonId: 16,
    difficulty: 'de',
    question: 'Ưu điểm vượt trội của nam châm điện so với nam châm vĩnh cửu là:',
    options: ['Có thể điều khiển lực từ mạnh yếu tuỳ ý và đóng ngắt từ tính dễ dàng bằng dòng điện', 'Không bao giờ bị hỏng', 'Không cần dùng kim loại', 'Tự sản xuất ra điện năng'],
    correctAnswer: 'Có thể điều khiển lực từ mạnh yếu tuỳ ý và đóng ngắt từ tính dễ dàng bằng dòng điện',
    explanation: 'Nam châm điện cực kì linh hoạt: ngắt điện thì mất lực hút, đảo chiều dòng điện thì đổi cực từ, tăng dòng điện thì tăng lực hút.'
  },
  {
    id: 'q16-8',
    lessonId: 16,
    difficulty: 'kho',
    question: 'Cần cẩu điện dùng nam châm điện trong các nhà máy luyện kim tái chế phế liệu có khả năng:',
    options: ['Hút nâng hàng tấn sắt thép phế liệu rồi thả xuống đúng vị trí chỉ bằng thao tác ngắt công tắc điện', 'Hút được cả gỗ và bê tông', 'Hoạt động vĩnh cửu không cần nguồn điện', 'Hút nhôm nguyên chất'],
    correctAnswer: 'Hút nâng hàng tấn sắt thép phế liệu rồi thả xuống đúng vị trí chỉ bằng thao tác ngắt công tắc điện',
    explanation: 'Ứng dụng điển hình của nam châm điện trong công nghiệp nặng.'
  },
  {
    id: 'q16-9',
    lessonId: 16,
    difficulty: 'kho',
    question: 'Rơle điện từ (electromagnetic relay) trong các mạch điện tự động đóng vai trò như:',
    options: ['Một công tắc đóng ngắt tự động điều khiển mạch công suất lớn bằng một tín hiệu dòng điện nhỏ an toàn', 'Một máy phát điện', 'Một biến trở', 'Một cầu chì bảo vệ sét đánh'],
    correctAnswer: 'Một công tắc đóng ngắt tự động điều khiển mạch công suất lớn bằng một tín hiệu dòng điện nhỏ an toàn',
    explanation: 'Rơle dùng nam châm điện hút tiếp điểm để đóng ngắt mạch điện cao thế từ xa một cách tự động và an toàn.'
  },
  {
    id: 'q16-10',
    lessonId: 16,
    difficulty: 'kho',
    question: 'Trong chuông điện báo động, khi nhấn giữ nút chuông thì búa gõ liên tục vào chuông kêu kính coong là nhờ:',
    options: ['Sự đóng ngắt mạch điện tự động tuần hoàn giữa tiếp điểm đàn hồi và nam châm điện', 'Mô tơ quay cánh quạt gió thổi vào chuông', 'Một cục than đập vào chuông', 'Pin tự nổ lách tách'],
    correctAnswer: 'Sự đóng ngắt mạch điện tự động tuần hoàn giữa tiếp điểm đàn hồi và nam châm điện',
    explanation: 'Khi nam châm điện hút thanh sắt, búa đập chuông đồng thời làm hở tiếp điểm; mất điện nam châm thả ra, thanh sắt đàn hồi quay lại chạm tiếp điểm đóng mạch, chu trình lặp lại liên tục.'
  },
  {
    id: 'q16-11',
    lessonId: 16,
    difficulty: 'kho',
    question: 'Một ống dây có dòng điện chạy qua. Nếu đổi chiều dòng điện chạy trong ống dây thì:',
    options: ['Các cực từ của ống dây đổi vị trí cho nhau (Bắc thành Nam và ngược lại)', 'Lực từ giảm về 0', 'Ống dây phát nổ', 'Ống dây trở thành vật nhiễm điện tích âm'],
    correctAnswer: 'Các cực từ của ống dây đổi vị trí cho nhau (Bắc thành Nam và ngược lại)',
    explanation: 'Theo quy tắc nắm tay phải, khi dòng điện đổi chiều thì ngón cái đổi chiều ngược lại nên cực Bắc và Nam đổi chỗ.'
  },
  {
    id: 'q16-12',
    lessonId: 16,
    difficulty: 'kho',
    question: 'Loa điện động (loa nghe nhạc) phát ra âm thanh dựa trên nguyên lí tương tác giữa:',
    options: ['Từ trường của nam châm vĩnh cửu và cuộn dây có dòng điện xoay chiều âm tần gắn liền với màng loa', 'Hai bản kim loại cọ xát vào nhau', 'Khí nén trong bình cao áp', 'Ánh sáng laser chiếu vào màng nhựa'],
    correctAnswer: 'Từ trường của nam châm vĩnh cửu và cuộn dây có dòng điện xoay chiều âm tần gắn liền với màng loa',
    explanation: 'Dòng điện âm tần biến thiên làm cuộn dây dao động ra vào trong khe từ của nam châm, kéo màng loa dao động phát ra sóng âm.'
  },
  {
    id: 'q16-13',
    lessonId: 16,
    difficulty: 'kho',
    question: 'Lõi sắt non đưa vào lòng ống dây làm tăng từ trường của ống dây lên hàng ngàn lần vì:',
    options: ['Lõi sắt non bị từ hoá mạnh, từ trường của lõi sắt non cùng chiều cộng hưởng với từ trường của ống dây', 'Lõi sắt non làm giảm điện trở của dây đồng', 'Lõi sắt hút nhiệt lượng làm dây lạnh đi', 'Lõi sắt tạo thêm dòng điện mới'],
    correctAnswer: 'Lõi sắt non bị từ hoá mạnh, từ trường của lõi sắt non cùng chiều cộng hưởng với từ trường của ống dây',
    explanation: 'Độ từ thẩm μ của sắt non rất lớn (~ hàng ngàn), các nguyên tử sắt định hướng từ trường cực mạnh.'
  },
  {
    id: 'q16-14',
    lessonId: 16,
    difficulty: 'kho',
    question: 'Để nam châm điện hút được vật có khối lượng lớn nhất, mặt tiếp xúc của hai cực nam châm điện thường có hình dạng:',
    options: ['Hình móng ngựa hoặc chữ U với hai cực gần sát nhau', 'Hình thanh dài mảnh khảnh', 'Hình quả bóng tròn xoe', 'Hình tam giác nhọn'],
    correctAnswer: 'Hình móng ngựa hoặc chữ U với hai cực gần sát nhau',
    explanation: 'Dạng chữ U giúp hai cực cùng tập trung hút đồng thời trên một mặt phẳng khép kín mạch từ, lực giữ tăng cực đại.'
  },
  {
    id: 'q16-15',
    lessonId: 16,
    difficulty: 'cuc_kho',
    question: 'Một ống dây thẳng dài l = 20 cm có 1000 vòng dây quấn sít nhau, dòng điện chạy qua là I = 2 A. Cảm ứng từ B trong lòng ống dây tính theo hệ thức B = 4π.10^-7 * (N/l) * I xấp xỉ bằng:',
    options: ['0,0126 Tesla (1,26.10^-2 T)', '0,00126 T', '0,126 T', '1,26 T'],
    correctAnswer: '0,0126 Tesla (1,26.10^-2 T)',
    explanation: 'N/l = 1000 / 0,2 = 5000 vòng/m. B = 4 * 3,1416.10^-7 * 5000 * 2 = 1,2566.10^-2 T ≈ 0,0126 T.'
  },
  {
    id: 'q16-16',
    lessonId: 16,
    difficulty: 'cuc_kho',
    question: 'Trong máy chụp cộng hưởng từ hạt nhân y tế (MRI), người ta phải sử dụng loại nam châm nào để tạo ra từ trường cực mạnh (1,5 đến 3 Tesla) siêu ổn định?',
    options: ['Nam châm điện siêu dẫn được làm lạnh bằng heli lỏng gần 0 Kelvin', 'Nam châm vĩnh cửu đồ chơi', 'Nam châm điện dùng pin con thỏ', 'Quặng sắt tự nhiên'],
    correctAnswer: 'Nam châm điện siêu dẫn được làm lạnh bằng heli lỏng gần 0 Kelvin',
    explanation: 'Cuộn dây siêu dẫn mang dòng điện hàng trăm ampe không có điện trở toả nhiệt, tạo từ trường đều vô cùng mạnh để quét hình ảnh y khoa tế vi.'
  },
  {
    id: 'q16-17',
    lessonId: 16,
    difficulty: 'cuc_kho',
    question: 'Treo một ống dây dẫn mềm nhẹ có dòng điện chạy qua tự do trong không gian. Khi có dòng điện chạy qua, ống dây sẽ có xu hướng biến dạng cơ học như thế nào?',
    options: ['Các vòng dây hút nhau làm ống dây ngắn lại theo chiều dọc và nở rộng ra theo chiều ngang', 'Ống dây dài ra gấp đôi', 'Ống dây xoắn tròn thành số 8', 'Không có biến dạng nào'],
    correctAnswer: 'Các vòng dây hút nhau làm ống dây ngắn lại theo chiều dọc và nở rộng ra theo chiều ngang',
    explanation: 'Dòng điện trong các vòng dây lân cận chạy cùng chiều nên hút nhau làm ống co ngắn lại.'
  },
  {
    id: 'q16-18',
    lessonId: 16,
    difficulty: 'cuc_kho',
    question: 'Một van điện từ (solenoid valve) trong máy giặt tự động hoặc hệ thống tưới cây tự động hoạt động theo cơ chế nào?',
    options: ['Khi cấp điện, nam châm điện hút trục van lõi thép mở cửa cho nước chảy qua; khi ngắt điện, lò xo đẩy đóng van lại', 'Dùng quạt hút nước', 'Làm nước sôi bốc hơi', 'Dùng cảm biến hồng ngoại'],
    correctAnswer: 'Khi cấp điện, nam châm điện hút trục van lõi thép mở cửa cho nước chảy qua; khi ngắt điện, lò xo đẩy đóng van lại',
    explanation: 'Ứng dụng tự động hóa then chốt của solenoid valve điều khiển lưu chất.'
  },
  {
    id: 'q16-19',
    lessonId: 16,
    difficulty: 'cuc_kho',
    question: 'Nếu quấn hai nửa cuộn dây của nam châm điện ngược chiều nhau trên cùng một lõi sắt non thẳng và cho cùng một dòng điện chạy qua thì nam châm điện đó sẽ:',
    options: ['Hầu như mất hết từ tính vì từ trường của hai nửa triệt tiêu lẫn nhau', 'Có lực hút mạnh gấp đôi', 'Phát sáng màu tím', 'Tạo ra dòng điện vô hạn'],
    correctAnswer: 'Hầu như mất hết từ tính vì từ trường của hai nửa triệt tiêu lẫn nhau',
    explanation: 'Từ trường do hai phần cuộn dây sinh ra ngược chiều và có độ lớn bằng nhau nên khử nhau hoàn toàn.'
  },
  {
    id: 'q16-20',
    lessonId: 16,
    difficulty: 'cuc_kho',
    question: 'Phát biểu nào sau đây đúng nhất về bản chất của lực điện từ tác dụng lên dây dẫn có dòng điện đặt trong từ trường?',
    options: ['Là tổng hợp của các lực Lorentz tác dụng lên các hạt electron mang điện chuyển động có hướng bên trong dây dẫn', 'Là lực hấp dẫn giữa hai khối lượng kim loại', 'Là áp suất của không khí xung quanh', 'Là lực ma sát tiếp xúc'],
    correctAnswer: 'Là tổng hợp của các lực Lorentz tác dụng lên các hạt electron mang điện chuyển động có hướng bên trong dây dẫn',
    explanation: 'Lực từ vĩ mô F = B.I.l.sin α chính là kết quả tích luỹ của lực Lorentz vi mô f = q.v.B.sin α tác dụng lên từng điện tích chuyển động.'
  },

  // --- BÀI 17: HIỆN TƯỢNG CẢM ỨNG ĐIỆN TỪ (20 CÂU) ---
  {
    id: 'q17-1',
    lessonId: 17,
    difficulty: 'de',
    question: 'Hiện tượng cảm ứng điện từ được nhà vật lí vĩ đại người Anh nào phát minh ra vào năm 1831?',
    options: ['Michael Faraday', 'Isaac Newton', 'James Clerk Maxwell', 'Albert Einstein'],
    correctAnswer: 'Michael Faraday',
    explanation: 'Michael Faraday phát hiện ra hiện tượng cảm ứng điện từ đặt nền móng cho thời đại điện lực.'
  },
  {
    id: 'q17-2',
    lessonId: 17,
    difficulty: 'de',
    question: 'Điều kiện để xuất hiện dòng điện cảm ứng trong một cuộn dây dẫn kín là:',
    options: ['Số đường sức từ xuyên qua tiết diện cuộn dây biến thiên (tăng lên hoặc giảm đi)', 'Đặt nam châm đứng yên mãi mãi trong cuộn dây', 'Cuộn dây phải làm bằng vàng', 'Nhiệt độ cuộn dây phải rất nóng'],
    correctAnswer: 'Số đường sức từ xuyên qua tiết diện cuộn dây biến thiên (tăng lên hoặc giảm đi)',
    explanation: 'Chỉ khi từ thông qua mạch kín biến thiên theo thời gian thì mới sinh ra dòng điện cảm ứng.'
  },
  {
    id: 'q17-3',
    lessonId: 17,
    difficulty: 'de',
    question: 'Trường hợp nào sau đây xuất hiện dòng điện cảm ứng trong cuộn dây dẫn kín?',
    options: ['Đưa một cực của thanh nam châm lại gần hoặc ra xa cuộn dây', 'Đặt thanh nam châm nằm yên bất động cạnh cuộn dây', 'Giữ cả cuộn dây và nam châm cùng chuyển động tịnh tiến với vận tốc như nhau', 'Đặt cuộn dây trong tủ sắt kín'],
    correctAnswer: 'Đưa một cực của thanh nam châm lại gần hoặc ra xa cuộn dây',
    explanation: 'Khi dịch chuyển nam châm lại gần hoặc ra xa, số đường sức từ xuyên qua cuộn dây tăng hoặc giảm sinh ra dòng cảm ứng.'
  },
  {
    id: 'q17-4',
    lessonId: 17,
    difficulty: 'de',
    question: 'Dòng điện cảm ứng xuất hiện trong cuộn dây dẫn kín khi số đường sức từ qua tiết diện cuộn dây đang tăng lên sẽ có từ trường cảm ứng:',
    options: ['Chống lại sự tăng đó (ngược chiều với từ trường ban đầu)', 'Cùng chiều để kích thích tăng nhanh hơn', 'Vuông góc với trục dây', 'Bằng 0'],
    correctAnswer: 'Chống lại sự tăng đó (ngược chiều với từ trường ban đầu)',
    explanation: 'Định luật Lenz: dòng điện cảm ứng có chiều sao cho từ trường nó sinh ra chống lại nguyên nhân sinh ra nó.'
  },
  {
    id: 'q17-5',
    lessonId: 17,
    difficulty: 'de',
    question: 'Máy phát điện xoay chiều hoạt động dựa trên hiện tượng vật lí nào?',
    options: ['Hiện tượng cảm ứng điện từ', 'Hiện tượng phản xạ ánh sáng', 'Hiện tượng mao dẫn', 'Hiện tượng nở vì nhiệt'],
    correctAnswer: 'Hiện tượng cảm ứng điện từ',
    explanation: 'Máy phát điện biến đổi cơ năng thành điện năng dựa vào hiện tượng cảm ứng điện từ.'
  },
  {
    id: 'q17-6',
    lessonId: 17,
    difficulty: 'de',
    question: 'Hai bộ phận chính cấu tạo nên mọi máy phát điện xoay chiều là:',
    options: ['Roto (phần quay) và stato (phần đứng yên)', 'Bóng đèn và pin khô', 'Thước đo và nhiệt kế', 'Ống kính và lăng kính'],
    correctAnswer: 'Roto (phần quay) và stato (phần đứng yên)',
    explanation: 'Roto là phần quay (có thể là nam châm hoặc cuộn dây), stato là phần đứng yên.'
  },
  {
    id: 'q17-7',
    lessonId: 17,
    difficulty: 'de',
    question: 'Đinamo gắn ở bánh xe đạp để thắp sáng đèn xe hoạt động bằng cách:',
    options: ['Núm quay của đinamo cọ sát vào lốp xe làm quay một nam châm trước cuộn dây cố định, sinh dòng điện cảm ứng thắp sáng đèn', 'Tích điện ma sát ở bánh xe', 'Chứa một cục pin sạc bí mật bên trong', 'Lấy điện từ mặt đường ray'],
    correctAnswer: 'Núm quay của đinamo cọ sát vào lốp xe làm quay một nam châm trước cuộn dây cố định, sinh dòng điện cảm ứng thắp sáng đèn',
    explanation: 'Đinamo xe đạp là một máy phát điện xoay chiều mini biến động năng quay của bánh xe thành điện năng.'
  },
  {
    id: 'q17-8',
    lessonId: 17,
    difficulty: 'kho',
    question: 'Khi quay đều một khung dây dẫn kín trong từ trường đều của một nam châm chữ U thì dòng điện tạo ra trong khung dây là:',
    options: ['Dòng điện xoay chiều có chiều luân phiên thay đổi tuần hoàn', 'Dòng điện một chiều không đổi như pin', 'Dòng điện tĩnh điện', 'Không xuất hiện dòng điện'],
    correctAnswer: 'Dòng điện xoay chiều có chiều luân phiên thay đổi tuần hoàn',
    explanation: 'Số đường sức từ qua khung dây luân phiên tăng giảm điều hoà tạo ra suất điện động xoay chiều.'
  },
  {
    id: 'q17-9',
    lessonId: 17,
    difficulty: 'kho',
    question: 'Trong các nhà máy thủy điện lớn như Hòa Bình hay Sơn La, nguồn năng lượng nào làm quay roto máy phát điện?',
    options: ['Thế năng trọng trường của cột nước trên cao chảy xuống làm quay tuabin nước', 'Nhiệt lượng đốt than đá', 'Năng lượng gió thổi', 'Năng lượng ánh sáng mặt trời'],
    correctAnswer: 'Thế năng trọng trường của cột nước trên cao chảy xuống làm quay tuabin nước',
    explanation: 'Thủy năng của dòng nước làm quay các cánh tuabin nối liền trục với roto máy phát điện.'
  },
  {
    id: 'q17-10',
    lessonId: 17,
    difficulty: 'kho',
    question: 'Dòng điện xoay chiều sinh hoạt ở Việt Nam có tần số định mức là bao nhiêu Hert (Hz)?',
    options: ['50 Hz (đổi chiều 100 lần trong 1 giây)', '60 Hz', '100 Hz', '10 Hz'],
    correctAnswer: '50 Hz (đổi chiều 100 lần trong 1 giây)',
    explanation: 'Lưới điện quốc gia Việt Nam có tần số 50 Hz, mỗi chu kì đổi chiều 2 lần nên đổi chiều 100 lần mỗi giây.'
  },
  {
    id: 'q17-11',
    lessonId: 17,
    difficulty: 'kho',
    question: 'Một cuộn dây dẫn kín được nối với một điện kế nhạy. Khi đưa cực Bắc của nam châm vào nhanh trong lòng cuộn dây thì kim điện kế lệch sang phải. Nếu rút nhanh cực Bắc đó ra ngoài thì kim điện kế sẽ:',
    options: ['Lệch sang phía bên trái', 'Vẫn lệch sang phải như cũ', 'Đứng yên ở số 0', 'Quay tròn liên tục'],
    correctAnswer: 'Lệch sang phía bên trái',
    explanation: 'Khi rút ra, từ thông giảm nên dòng cảm ứng đổi chiều ngược lại, làm kim điện kế lệch sang trái.'
  },
  {
    id: 'q17-12',
    lessonId: 17,
    difficulty: 'kho',
    question: 'Bếp từ gia đình nấu chín thức ăn dựa trên ứng dụng nào của hiện tượng cảm ứng điện từ?',
    options: ['Cuộn dây mâm từ phát từ trường biến thiên tần số cao tạo dòng điện Foucault xoáy mạnh trong đáy nồi kim loại làm đáy nồi tự toả nhiệt rất nhanh', 'Dùng ngọn lửa gas vô hình', 'Dùng tia laser công suất lớn', 'Bắn hạt vi ba siêu âm'],
    correctAnswer: 'Cuộn dây mâm từ phát từ trường biến thiên tần số cao tạo dòng điện Foucault xoáy mạnh trong đáy nồi kim loại làm đáy nồi tự toả nhiệt rất nhanh',
    explanation: 'Dòng Foucault sinh ra trong đáy nồi có tính từ (inox/sắt) sinh nhiệt lượng cực lớn trực tiếp làm chín thức ăn với hiệu suất trên 90%.'
  },
  {
    id: 'q17-13',
    lessonId: 17,
    difficulty: 'kho',
    question: 'Máy biến áp (máy biến thế) trong hệ thống truyền tải điện chỉ có thể biến đổi hiệu điện thế của loại dòng điện nào?',
    options: ['Dòng điện xoay chiều (AC)', 'Dòng điện một chiều từ pin (DC)', 'Cả dòng xoay chiều và dòng một chiều', 'Chỉ dùng cho sét đánh'],
    correctAnswer: 'Dòng điện xoay chiều (AC)',
    explanation: 'Máy biến áp cần từ thông biến thiên liên tục trong lõi thép, điều này chỉ dòng điện xoay chiều mới tạo ra được.'
  },
  {
    id: 'q17-14',
    lessonId: 17,
    difficulty: 'kho',
    question: 'Nếu thả rơi tự do một nam châm thẳng đi qua một ống đồng thẳng đứng dày thì nam châm rơi chậm hơn nhiều so với khi rơi trong không khí vì:',
    options: ['Thành ống đồng xuất hiện các dòng điện xoáy cảm ứng tạo ra lực từ cản trở chuyển động rơi theo định luật Lenz', 'Đồng hút sắt như nam châm', 'Không khí trong ống đồng bị nén lại', 'Ống đồng có ma sát cực lớn'],
    correctAnswer: 'Thành ống đồng xuất hiện các dòng điện xoáy cảm ứng tạo ra lực từ cản trở chuyển động rơi theo định luật Lenz',
    explanation: 'Thí nghiệm kinh điển về hiệu ứng hãm điện từ: dòng Foucault sinh ra trong ống đồng tạo lực từ hướng lên chống lại rơi tự do.'
  },
  {
    id: 'q17-15',
    lessonId: 17,
    difficulty: 'cuc_kho',
    question: 'Theo định luật Faraday về cảm ứng điện từ, độ lớn của suất điện động cảm ứng xuất hiện trong mạch kín tỉ lệ với:',
    options: ['Tốc độ biến thiên của từ thông qua mạch kín đó (e = -ΔΦ / Δt)', 'Diện tích của cuộn dây', 'Điện trở của mạch điện', 'Khối lượng của nam châm'],
    correctAnswer: 'Tốc độ biến thiên của từ thông qua mạch kín đó (e = -ΔΦ / Δt)',
    explanation: 'Định luật cơ bản của điện từ học: e_c = - dΦ/dt.'
  },
  {
    id: 'q17-16',
    lessonId: 17,
    difficulty: 'cuc_kho',
    question: 'Một máy phát điện xoay chiều 1 pha có roto là một nam châm gồm p cặp cực (p cực Bắc và p cực Nam) quay đều với tốc độ n vòng/giây. Tần số f của dòng điện phát ra tính bằng công thức:',
    options: ['f = n * p', 'f = n / p', 'f = 60 * n * p', 'f = p / n'],
    correctAnswer: 'f = n * p',
    explanation: 'Khi tốc độ quay đo bằng vòng/giây: f = n.p (nếu n đo bằng vòng/phút thì f = n.p / 60).'
  },
  {
    id: 'q17-17',
    lessonId: 17,
    difficulty: 'cuc_kho',
    question: 'Một máy phát điện xoay chiều có 4 cặp cực (p = 4). Để tạo ra dòng điện có tần số 50 Hz thì roto phải quay với tốc độ là:',
    options: ['750 vòng/phút (12,5 vòng/giây)', '1500 vòng/phút', '3000 vòng/phút', '500 vòng/phút'],
    correctAnswer: '750 vòng/phút (12,5 vòng/giây)',
    explanation: 'f = n.p / 60 => n = 60.f / p = 60 * 50 / 4 = 3000 / 4 = 750 vòng/phút.'
  },
  {
    id: 'q17-18',
    lessonId: 17,
    difficulty: 'cuc_kho',
    question: 'Để giảm bớt hao phí do dòng điện xoáy Foucault gây nóng lõi thép trong các máy biến áp và máy phát điện, người ta cấu tạo lõi thép bằng cách:',
    options: ['Ghép nhiều lá thép silic mỏng cách điện với nhau bằng lớp sơn vecni thay vì dùng một khối thép đặc', 'Làm lõi bằng nhựa xốp', 'Khoan thủng nhiều lỗ lớn', 'Bọc lõi bằng cao su'],
    correctAnswer: 'Ghép nhiều lá thép silic mỏng cách điện với nhau bằng lớp sơn vecni thay vì dùng một khối thép đặc',
    explanation: 'Các lá mỏng cách điện chia nhỏ đường tròn khép kín của dòng xoáy Foucault, làm tăng điện trở và giảm thiểu tổn hao toả nhiệt.'
  },
  {
    id: 'q17-19',
    lessonId: 17,
    difficulty: 'cuc_kho',
    question: 'Trong hệ thống sạc không dây của điện thoại thông minh (chuẩn Qi), năng lượng được truyền từ đế sạc sang điện thoại thông qua:',
    options: ['Sự ghép cảm ứng từ giữa cuộn phát trong đế sạc và cuộn thu cảm ứng trong nắp lưng điện thoại bằng trường điện từ cao tần', 'Sóng bluetooth', 'Tia hồng ngoại', 'Gió tĩnh điện'],
    correctAnswer: 'Sự ghép cảm ứng từ giữa cuộn phát trong đế sạc và cuộn thu cảm ứng trong nắp lưng điện thoại bằng trường điện từ cao tần',
    explanation: 'Dòng điện biến thiên ở cuộn dây đế sạc sinh từ trường biến thiên cảm ứng sang cuộn dây trong điện thoại tạo dòng sạc cho pin.'
  },
  {
    id: 'q17-20',
    lessonId: 17,
    difficulty: 'cuc_kho',
    question: 'Khám phá về hiện tượng cảm ứng điện từ của Michael Faraday đã mở ra kỷ nguyên nào cho nhân loại?',
    options: ['Kỷ nguyên điện khí hoá và cách mạng công nghiệp lần thứ hai, biến năng lượng thiên nhiên thành điện năng phục vụ toàn cầu', 'Kỷ nguyên săn bắn hái lượm', 'Kỷ nguyên đồ đồng', 'Kỷ nguyên máy hơi nước cơ học thuần tuý'],
    correctAnswer: 'Kỷ nguyên điện khí hoá và cách mạng công nghiệp lần thứ hai, biến năng lượng thiên nhiên thành điện năng phục vụ toàn cầu',
    explanation: 'Ý nghĩa vĩ đại của hiện tượng cảm ứng điện từ: cho phép loài người xây dựng mạng lưới điện toàn cầu.'
  }
];
