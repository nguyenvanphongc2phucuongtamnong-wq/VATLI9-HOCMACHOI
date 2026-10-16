import { Question } from '../../types';

export const QUESTIONS_1_TO_6: Question[] = [
  // --- BÀI 1 (20 CÂU) ---
  {
    id: 'q1-1',
    lessonId: 1,
    difficulty: 'de',
    question: 'Dụng cụ nào sau đây được dùng để phát hiện dòng điện cảm ứng trong các thí nghiệm Vật lý 9?',
    options: ['Điện kế', 'Nhiệt kế', 'Tốc kế', 'Lực kế'],
    correctAnswer: 'Điện kế',
    explanation: 'Điện kế là dụng cụ nhạy dùng để phát hiện dòng điện cảm ứng có cường độ rất nhỏ.'
  },
  {
    id: 'q1-2',
    lessonId: 1,
    difficulty: 'de',
    question: 'Vạch số 0 trên mặt thang đo của điện kế trong phòng thí nghiệm thường nằm ở vị trí nào?',
    options: ['Chính giữa thang đo', 'Góc ngoài cùng bên trái', 'Góc ngoài cùng bên phải', 'Không cố định'],
    correctAnswer: 'Chính giữa thang đo',
    explanation: 'Vạch số 0 nằm ở giữa thang đo để kim có thể lệch sang trái hoặc sang phải tùy theo chiều dòng điện cảm ứng.'
  },
  {
    id: 'q1-3',
    lessonId: 1,
    difficulty: 'de',
    question: 'Để tạo ra chùm sáng song song hẹp trong thí nghiệm khúc xạ ánh sáng, người ta thường dùng:',
    options: ['Đèn 12 V - 21 W có khe chắn sáng hẹp hoặc đèn laser', 'Đèn dầu', 'Gương cầu lõm', 'Nến thắp sáng không có khe chắn'],
    correctAnswer: 'Đèn 12 V - 21 W có khe chắn sáng hẹp hoặc đèn laser',
    explanation: 'Đèn có khe hẹp hoặc đèn laser phát ra chùm tia sáng hẹp biểu diễn đường truyền của tia sáng.'
  },
  {
    id: 'q1-4',
    lessonId: 1,
    difficulty: 'de',
    question: 'Đồng hồ đo điện đa năng có thể đo được những đại lượng nào sau đây?',
    options: ['Cường độ dòng điện, hiệu điện thế và điện trở', 'Khối lượng, thể tích và áp suất', 'Nhiệt độ và độ ẩm không khí', 'Vận tốc và gia tốc'],
    correctAnswer: 'Cường độ dòng điện, hiệu điện thế và điện trở',
    explanation: 'Đồng hồ vạn năng (multimeter) cho phép đo I (ampe), U (vôn) và R (ôm) cho cả mạch AC và DC.'
  },
  {
    id: 'q1-5',
    lessonId: 1,
    difficulty: 'de',
    question: 'Bản bán trụ bằng thủy tinh trong thí nghiệm khúc xạ ánh sáng có công dụng chính là:',
    options: ['Nghiên cứu hiện tượng khúc xạ và phản xạ toàn phần của ánh sáng', 'Làm gương phản chiếu toàn bộ ánh sáng', 'Đo điện áp của nguồn điện', 'Hấp thụ hoàn toàn ánh sáng tới'],
    correctAnswer: 'Nghiên cứu hiện tượng khúc xạ và phản xạ toàn phần của ánh sáng',
    explanation: 'Bản bán trụ kết hợp bảng chia độ giúp đo chính xác góc tới i và góc khúc xạ r.'
  },
  {
    id: 'q1-6',
    lessonId: 1,
    difficulty: 'de',
    question: 'Cuộn dây dẫn kín gắn hai đèn LED mắc song song ngược cực có tác dụng gì?',
    options: ['Phát hiện sự xuất hiện và đổi chiều của dòng điện cảm ứng', 'Đo điện trở của cuộn dây', 'Tạo ra từ trường cực mạnh', 'Làm giảm nhiệt độ cuộn dây'],
    correctAnswer: 'Phát hiện sự xuất hiện và đổi chiều của dòng điện cảm ứng',
    explanation: 'Đèn LED chỉ cho dòng điện đi qua một chiều; hai đèn ngược cực giúp quan sát sự đổi chiều của dòng cảm ứng.'
  },
  {
    id: 'q1-7',
    lessonId: 1,
    difficulty: 'de',
    question: 'Một bài báo cáo nghiên cứu khoa học thường có bao nhiêu phần cơ bản theo quy chuẩn SGK?',
    options: ['8 phần', '3 phần', '5 phần', '12 phần'],
    correctAnswer: '8 phần',
    explanation: 'Bao gồm: 1. Tiêu đề; 2. Tóm tắt; 3. Giới thiệu; 4. Phương pháp; 5. Kết quả; 6. Thảo luận; 7. Kết luận; 8. Tài liệu tham khảo.'
  },
  {
    id: 'q1-8',
    lessonId: 1,
    difficulty: 'kho',
    question: 'Tại sao khi làm thí nghiệm với nguồn sáng laser, giáo viên luôn yêu cầu học sinh tuyệt đối không chiếu trực tiếp tia laser vào mắt?',
    options: ['Tia laser có năng lượng tập trung cao có thể làm tổn thương hoặc bỏng võng mạc mắt', 'Tia laser có điện áp cao gây điện giật', 'Tia laser gây nhiễm phóng xạ', 'Tia laser làm hỏng kính cận'],
    correctAnswer: 'Tia laser có năng lượng tập trung cao có thể làm tổn thương hoặc bỏng võng mạc mắt',
    explanation: 'Tia laser có mật độ năng lượng rất lớn, nếu chiếu vào mắt sẽ phá huỷ các tế bào thị giác trên võng mạc.'
  },
  {
    id: 'q1-9',
    lessonId: 1,
    difficulty: 'kho',
    question: 'Khi sử dụng đồng hồ đo điện đa năng để đo hiệu điện thế xoay chiều trong gia đình, cần chọn thang đo nào?',
    options: ['ACV (xoay chiều) có dải đo trên 250 V', 'DCV 20 V (một chiều)', 'DCA 10 A', 'Thang đo điện trở Ω'],
    correctAnswer: 'ACV (xoay chiều) có dải đo trên 250 V',
    explanation: 'Điện lưới gia đình là dòng xoay chiều 220 V nên phải chọn thang ACV và dải đo an toàn > 250 V (như 500 V hay 750 V).'
  },
  {
    id: 'q1-10',
    lessonId: 1,
    difficulty: 'kho',
    question: 'Trong báo cáo khoa học, phần "Phương pháp" có nhiệm vụ chính là gì?',
    options: ['Mô tả chi tiết quá trình tiến hành thí nghiệm, thiết bị, hoá chất và cách thu thập dữ liệu', 'Đưa ra lời cảm ơn ban giám hiệu', 'Liệt kê danh sách tất cả các trang web tham khảo', 'Nêu giá tiền mua sắm dụng cụ'],
    correctAnswer: 'Mô tả chi tiết quá trình tiến hành thí nghiệm, thiết bị, hoá chất và cách thu thập dữ liệu',
    explanation: 'Phần Phương pháp giúp người đọc hiểu rõ quy trình và có thể tái lập lại thí nghiệm kiểm chứng.'
  },
  {
    id: 'q1-11',
    lessonId: 1,
    difficulty: 'kho',
    question: 'Khi kim điện kế chỉ vạch 0 trong một thí nghiệm cảm ứng điện từ kín, điều đó chứng tỏ:',
    options: ['Không có dòng điện cảm ứng chạy qua mạch', 'Dòng điện trong mạch là vô cùng lớn', 'Điện thế hai đầu cuộn dây đạt cực đại', 'Điện trở của cuộn dây bằng 0'],
    correctAnswer: 'Không có dòng điện cảm ứng chạy qua mạch',
    explanation: 'Vạch 0 biểu thị cường độ dòng điện cảm ứng bằng 0.'
  },
  {
    id: 'q1-12',
    lessonId: 1,
    difficulty: 'kho',
    question: 'Khi thiết kế một slide thuyết trình báo cáo thí nghiệm vật lý, điều nào sau đây là NÊN làm?',
    options: ['Sử dụng biểu đồ, hình ảnh trực quan và gạch đầu dòng ngắn gọn súc tích', 'Chép nguyên văn cả trang sách giáo khoa vào từng slide', 'Dùng thật nhiều phông chữ phức tạp khó đọc', 'Không chèn bất kì số liệu thực nghiệm nào'],
    correctAnswer: 'Sử dụng biểu đồ, hình ảnh trực quan và gạch đầu dòng ngắn gọn súc tích',
    explanation: 'Slide cần trực quan, dễ theo dõi, tập trung vào hình ảnh và kết quả then chốt.'
  },
  {
    id: 'q1-13',
    lessonId: 1,
    difficulty: 'kho',
    question: 'Khi lắp các dụng cụ quang học (đèn chiếu sáng, thấu kính, màn hứng) trên giá quang học, yêu cầu kĩ thuật bắt buộc là:',
    options: ['Các dụng cụ phải được đặt đồng trục quang học', 'Màn chắn phải đặt nghiêng 45° so với trục', 'Thấu kính phải đặt cao hơn đèn 20 cm', 'Đèn phải quay về phía người quan sát'],
    correctAnswer: 'Các dụng cụ phải được đặt đồng trục quang học',
    explanation: 'Đồng trục quang học đảm bảo chùm tia sáng đi qua tâm thấu kính và tạo ảnh rõ ràng trên màn hứng.'
  },
  {
    id: 'q1-14',
    lessonId: 1,
    difficulty: 'kho',
    question: 'Kích thước tiêu chuẩn của poster báo cáo treo tường khoa học thường dùng là:',
    options: ['Khổ A0 hoặc A1', 'Khổ A5', 'Khổ A4', 'Khổ danh thiếp'],
    correctAnswer: 'Khổ A0 hoặc A1',
    explanation: 'Khổ A0 (841 x 1189 mm) hoặc A1 đủ lớn để người xem đọc rõ từ khoảng cách 1 - 2 mét.'
  },
  {
    id: 'q1-15',
    lessonId: 1,
    difficulty: 'cuc_kho',
    question: 'Học sinh tiến hành đo điện trở của một vật dẫn bằng đồng hồ vạn năng. Khi chưa chập hai que đo để chỉnh vạch 0, kết quả đo sẽ như thế nào?',
    options: ['Kết quả đo sẽ bị sai lệch do chứa điện trở tiếp xúc và sai số điểm 0 của đồng hồ', 'Kết quả luôn bằng 0', 'Đồng hồ sẽ bị nổ cầu chì ngay lập tức', 'Không ảnh hưởng gì đến độ chính xác'],
    correctAnswer: 'Kết quả đo sẽ bị sai lệch do chứa điện trở tiếp xúc và sai số điểm 0 của đồng hồ',
    explanation: 'Hiệu chuẩn điểm 0 trước khi đo điện trở là bước bắt buộc để loại trừ sai số hệ thống.'
  },
  {
    id: 'q1-16',
    lessonId: 1,
    difficulty: 'cuc_kho',
    question: 'Trong phần "Thảo luận" của bài báo cáo khoa học, nếu kết quả thực nghiệm có sai lệch so với công thức lí thuyết trong SGK, tác giả nên làm gì?',
    options: ['Phân tích các nguyên nhân gây sai số (dụng cụ, môi trường, kĩ năng đo) một cách trung thực', 'Tự ý sửa lại số liệu đo cho khớp với lý thuyết', 'Xoá bỏ hoàn toàn kết quả đo không báo cáo', 'Kết luận SGK sai hoàn toàn'],
    correctAnswer: 'Phân tích các nguyên nhân gây sai số (dụng cụ, môi trường, kĩ năng đo) một cách trung thực',
    explanation: 'Tính trung thực khoa học đòi hỏi bảo lưu số liệu và tìm nguyên nhân sai số thực tế.'
  },
  {
    id: 'q1-17',
    lessonId: 1,
    difficulty: 'cuc_kho',
    question: 'Khi sử dụng điện kế đo dòng cảm ứng, người ta nhận thấy khi đẩy nam châm nhanh thì kim lệch nhiều, đẩy chậm thì kim lệch ít. Thí nghiệm này chứng minh điều gì?',
    options: ['Cường độ dòng cảm ứng tỉ lệ thuận với tốc độ biến thiên của từ thông qua cuộn dây', 'Điện thế của nam châm phụ thuộc vận tốc', 'Cuộn dây sinh ra ma sát từ', 'Kim điện kế bị kẹt cơ học'],
    correctAnswer: 'Cường độ dòng cảm ứng tỉ lệ thuận với tốc độ biến thiên của từ thông qua cuộn dây',
    explanation: 'Tốc độ dịch chuyển nam châm càng nhanh thì từ thông biến thiên càng nhanh, suất điện động cảm ứng càng lớn.'
  },
  {
    id: 'q1-18',
    lessonId: 1,
    difficulty: 'cuc_kho',
    question: 'Bộ thí nghiệm tìm hiểu tính chất ảnh qua thấu kính gồm các chi tiết theo thứ tự trên giá quang học là:',
    options: ['Nguồn sáng -> Vật sáng (chữ F) -> Thấu kính -> Màn chắn', 'Màn chắn -> Thấu kính -> Nguồn sáng -> Vật sáng', 'Thấu kính -> Màn chắn -> Vật sáng -> Nguồn sáng', 'Vật sáng -> Màn chắn -> Thấu kính -> Nguồn sáng'],
    correctAnswer: 'Nguồn sáng -> Vật sáng (chữ F) -> Thấu kính -> Màn chắn',
    explanation: 'Nguồn sáng chiếu qua vật sáng, ánh sáng từ vật đi qua thấu kính và hội tụ tạo ảnh trên màn chắn.'
  },
  {
    id: 'q1-19',
    lessonId: 1,
    difficulty: 'cuc_kho',
    question: 'Để tăng tính thuyết phục của bài thuyết trình báo cáo khoa học trước hội đồng, yếu tố nào là quan trọng nhất?',
    options: ['Dẫn chứng số liệu thực nghiệm chính xác, lập luận logic và hình ảnh minh chứng rõ ràng', 'Nói thật to và thật nhanh', 'Trang trí slide nhiều màu sắc nhấp nháy bắt mắt', 'Thuộc lòng từng dấu chấm dấu phẩy'],
    correctAnswer: 'Dẫn chứng số liệu thực nghiệm chính xác, lập luận logic và hình ảnh minh chứng rõ ràng',
    explanation: 'Khoa học coi trọng bằng chứng thực nghiệm và tư duy phản biện logic.'
  },
  {
    id: 'q1-20',
    lessonId: 1,
    difficulty: 'cuc_kho',
    question: 'Vì sao trong thí nghiệm quang học, giá quang học thường có thước đo độ dài tích hợp dọc theo thân giá?',
    options: ['Để đo chính xác khoảng cách từ vật tới thấu kính (d) và từ thấu kính tới màn (d\')', 'Để chống trơn trượt giá đỡ', 'Để thấu kính không bị rơi vỡ', 'Để trang trí thêm cho giá quang học'],
    correctAnswer: 'Để đo chính xác khoảng cách từ vật tới thấu kính (d) và từ thấu kính tới màn (d\')',
    explanation: 'Thước đo tích hợp cho phép đọc trực tiếp tọa độ vị trí vật d và ảnh d\' phục vụ tính toán tiêu cự.'
  },

  // --- BÀI 2 (20 CÂU) ---
  {
    id: 'q2-1',
    lessonId: 2,
    difficulty: 'de',
    question: 'Động năng của một vật là dạng năng lượng mà vật có được do:',
    options: ['Vật đang chuyển động', 'Vật ở trên cao so với mặt đất', 'Vật bị biến dạng đàn hồi', 'Vật có nhiệt độ cao'],
    correctAnswer: 'Vật đang chuyển động',
    explanation: 'Động năng là năng lượng gắn liền với chuyển động của vật.'
  },
  {
    id: 'q2-2',
    lessonId: 2,
    difficulty: 'de',
    question: 'Công thức tính động năng của một vật có khối lượng m chuyển động với vận tốc v là:',
    options: ['Wđ = 1/2 m v^2', 'Wđ = m v', 'Wđ = m g h', 'Wđ = 1/2 m^2 v'],
    correctAnswer: 'Wđ = 1/2 m v^2',
    explanation: 'Biểu thức chuẩn SGK: Wđ = 1/2 m v^2.'
  },
  {
    id: 'q2-3',
    lessonId: 2,
    difficulty: 'de',
    question: 'Trong hệ SI, đơn vị đo của động năng và thế năng là:',
    options: ['Jun (J)', 'Oát (W)', 'Niutơn (N)', 'Mã lực (HP)'],
    correctAnswer: 'Jun (J)',
    explanation: 'Tất cả các dạng năng lượng cơ học đều có đơn vị chuẩn là Jun (J).'
  },
  {
    id: 'q2-4',
    lessonId: 2,
    difficulty: 'de',
    question: 'Thế năng trọng trường của một vật phụ thuộc vào những yếu tố nào?',
    options: ['Trọng lượng (khối lượng) và độ cao của vật so với mốc thế năng', 'Vận tốc và thể tích của vật', 'Hình dạng và màu sắc của vật', 'Nhiệt độ môi trường xung quanh'],
    correctAnswer: 'Trọng lượng (khối lượng) và độ cao của vật so với mốc thế năng',
    explanation: 'Wt = P.h = m.g.h phụ thuộc vào trọng lượng P (hay m) và độ cao h.'
  },
  {
    id: 'q2-5',
    lessonId: 2,
    difficulty: 'de',
    question: 'Công thức tính thế năng trọng trường của một vật ở độ cao h là:',
    options: ['Wt = P * h', 'Wt = 1/2 m v^2', 'Wt = P / h', 'Wt = F * s * t'],
    correctAnswer: 'Wt = P * h',
    explanation: 'Wt = P.h trong đó P là trọng lượng (N), h là độ cao (m).'
  },
  {
    id: 'q2-6',
    lessonId: 2,
    difficulty: 'de',
    question: 'Một quả bóng đặt nằm yên trên mặt đất (chọn mặt đất làm mốc thế năng). Động năng và thế năng của quả bóng là:',
    options: ['Động năng bằng 0, thế năng bằng 0', 'Động năng khác 0, thế năng bằng 0', 'Động năng bằng 0, thế năng khác 0', 'Động năng và thế năng đều đạt cực đại'],
    correctAnswer: 'Động năng bằng 0, thế năng bằng 0',
    explanation: 'Vận tốc v = 0 => Wđ = 0; độ cao h = 0 => Wt = 0.'
  },
  {
    id: 'q2-7',
    lessonId: 2,
    difficulty: 'de',
    question: 'Nếu khối lượng của một vật tăng lên gấp đôi trong khi tốc độ chuyển động không đổi, thì động năng của vật sẽ:',
    options: ['Tăng lên gấp đôi', 'Tăng lên gấp bốn', 'Giảm đi một nửa', 'Không thay đổi'],
    correctAnswer: 'Tăng lên gấp đôi',
    explanation: 'Vì Wđ tỉ lệ thuận bậc nhất với khối lượng m.'
  },
  {
    id: 'q2-8',
    lessonId: 2,
    difficulty: 'kho',
    question: 'Nếu vận tốc của một ô tô tăng lên gấp đôi thì động năng của ô tô đó sẽ thay đổi như thế nào?',
    options: ['Tăng gấp 4 lần', 'Tăng gấp 2 lần', 'Tăng gấp 8 lần', 'Không đổi'],
    correctAnswer: 'Tăng gấp 4 lần',
    explanation: 'Wđ tỉ lệ với bình phương vận tốc (v^2). Khi v tăng 2 lần thì v^2 tăng 2^2 = 4 lần.'
  },
  {
    id: 'q2-9',
    lessonId: 2,
    difficulty: 'kho',
    question: 'Một viên đạn có khối lượng 10 g bay với tốc độ 600 m/s. Động năng của viên đạn là:',
    options: ['1800 J', '3600 J', '180 J', '36000 J'],
    correctAnswer: '1800 J',
    explanation: 'Đổi m = 10 g = 0,01 kg. Wđ = 1/2 * 0,01 * (600)^2 = 0,005 * 360.000 = 1800 J.'
  },
  {
    id: 'q2-10',
    lessonId: 2,
    difficulty: 'kho',
    question: 'Một thùng hàng nặng 50 kg được cẩu lên độ cao 6 m so với mặt đất. Lấy g = 10 m/s², chọn gốc thế năng ở mặt đất. Thế năng của thùng hàng là:',
    options: ['3000 J', '300 J', '1500 J', '500 J'],
    correctAnswer: '3000 J',
    explanation: 'Wt = m * g * h = 50 * 10 * 6 = 3000 J = 3 kJ.'
  },
  {
    id: 'q2-11',
    lessonId: 2,
    difficulty: 'kho',
    question: 'Một vật ở vị trí có độ cao h1 = 2 m có thế năng Wt1 = 40 J. Đưa vật đó lên độ cao h2 = 5 m so với cùng mốc thế năng thì thế năng của vật là:',
    options: ['100 J', '80 J', '200 J', '50 J'],
    correctAnswer: '100 J',
    explanation: 'Wt tỉ lệ thuận với h => Wt2 / Wt1 = h2 / h1 = 5 / 2 = 2,5 => Wt2 = 40 * 2,5 = 100 J.'
  },
  {
    id: 'q2-12',
    lessonId: 2,
    difficulty: 'kho',
    question: 'Vật 1 có khối lượng m1 = 2 kg đang chạy với vận tốc 4 m/s. Vật 2 có khối lượng m2 = 4 kg đang chạy với vận tốc 2 m/s. So sánh động năng của hai vật:',
    options: ['Động năng vật 1 lớn gấp đôi vật 2', 'Động năng hai vật bằng nhau', 'Động năng vật 2 lớn gấp đôi vật 1', 'Động năng vật 1 gấp 4 lần vật 2'],
    correctAnswer: 'Động năng vật 1 lớn gấp đôi vật 2',
    explanation: 'Wđ1 = 0,5 * 2 * 16 = 16 J. Wđ2 = 0,5 * 4 * 4 = 8 J => Wđ1 = 2 Wđ2.'
  },
  {
    id: 'q2-13',
    lessonId: 2,
    difficulty: 'kho',
    question: 'Một người đứng trên sân thượng tầng 3 cao 10 m so với mặt đất, cầm quả cầu sắt cao 1 m so với sàn sân thượng. Nếu chọn gốc thế năng tại sàn sân thượng thì độ cao để tính thế năng là:',
    options: ['1 m', '10 m', '11 m', '9 m'],
    correctAnswer: '1 m',
    explanation: 'Gốc thế năng chọn tại sàn sân thượng thì h tính từ sàn sân thượng tới quả cầu là 1 m.'
  },
  {
    id: 'q2-14',
    lessonId: 2,
    difficulty: 'kho',
    question: 'Trong các trường hợp sau, trường hợp nào vật chỉ có thế năng mà không có động năng?',
    options: ['Một lò xo bị nén hoặc quả táo nằm yên trên cành cây', 'Chiếc máy bay đang bay trên bầu trời', 'Hòn đá đang rơi từ trên cao xuống', 'Chiếc xe buýt đang vào bến'],
    correctAnswer: 'Một lò xo bị nén hoặc quả táo nằm yên trên cành cây',
    explanation: 'Quả táo nằm yên (v = 0 nên Wđ = 0) ở trên cành cây (h > 0 nên có thế năng).'
  },
  {
    id: 'q2-15',
    lessonId: 2,
    difficulty: 'cuc_kho',
    question: 'Một ô tô khối lượng 1 tấn đang chuyển động với vận tốc 72 km/h. Để ô tô dừng hẳn lại, phanh xe cần thực hiện một công có độ lớn bằng bao nhiêu?',
    options: ['200.000 J', '100.000 J', '2.592.000 J', '400.000 J'],
    correctAnswer: '200.000 J',
    explanation: 'Đổi: m = 1000 kg; v = 72 km/h = 20 m/s. Công của lực phanh bằng độ giảm động năng: A = 1/2 * m * v^2 = 0,5 * 1000 * 400 = 200.000 J.'
  },
  {
    id: 'q2-16',
    lessonId: 2,
    difficulty: 'cuc_kho',
    question: 'Một con chim đại bàng có khối lượng 4 kg đang bay ở độ cao 50 m với tốc độ 15 m/s. Chọn mốc thế năng tại mặt đất (g = 10 m/s²). Tổng động năng và thế năng của chim là:',
    options: ['2450 J', '2000 J', '450 J', '1450 J'],
    correctAnswer: '2450 J',
    explanation: 'Wđ = 1/2 * 4 * 15^2 = 450 J; Wt = 4 * 10 * 50 = 2000 J => Tổng = 450 + 2000 = 2450 J.'
  },
  {
    id: 'q2-17',
    lessonId: 2,
    difficulty: 'cuc_kho',
    question: 'Một vật có khối lượng m rơi từ độ cao h xuống mặt đất. Khi thế năng giảm đi 30 J thì động năng của vật tăng thêm bao nhiêu (bỏ qua sức cản không khí)?',
    options: ['Đúng 30 J', 'Lớn hơn 30 J', 'Nhỏ hơn 30 J', 'Bằng 0'],
    correctAnswer: 'Đúng 30 J',
    explanation: 'Theo định luật bảo toàn cơ năng, độ giảm thế năng bằng đúng độ tăng động năng.'
  },
  {
    id: 'q2-18',
    lessonId: 2,
    difficulty: 'cuc_kho',
    question: 'Một vật chuyển động thẳng có khối lượng 2 kg. Vận tốc của vật tăng từ 2 m/s lên 6 m/s. Công của hợp lực tác dụng lên vật trong giai đoạn này là:',
    options: ['32 J', '36 J', '16 J', '64 J'],
    correctAnswer: '32 J',
    explanation: 'Định lí động năng: A = Wđ2 - Wđ1 = 1/2 * 2 * (6^2 - 2^2) = 36 - 4 = 32 J.'
  },
  {
    id: 'q2-19',
    lessonId: 2,
    difficulty: 'cuc_kho',
    question: 'Tại sao tại các đoạn đường đèo dốc hiểm trở, người ta thường làm các hốc cứu nạn chứa đầy cát hoặc sỏi sâu?',
    options: ['Lực ma sát và lực cản của lớp cát sỏi nhanh chóng triệt tiêu toàn bộ động năng của xe mất phanh', 'Để xe đỗ lại ngắm cảnh', 'Để hứng nước mưa chống ngập', 'Để giảm tiếng ồn xe chạy'],
    correctAnswer: 'Lực ma sát và lực cản của lớp cát sỏi nhanh chóng triệt tiêu toàn bộ động năng của xe mất phanh',
    explanation: 'Công cản của cát sỏi rất lớn biến động năng của chiếc xe đang lao dốc thành nhiệt năng giúp xe dừng an toàn.'
  },
  {
    id: 'q2-20',
    lessonId: 2,
    difficulty: 'cuc_kho',
    question: 'Biết hai vật có khối lượng m1 = 2 m2. Để hai vật có động năng bằng nhau thì tỉ số tốc độ v1 / v2 phải bằng bao nhiêu?',
    options: ['1 / √2', '√2', '1 / 2', '2'],
    correctAnswer: '1 / √2',
    explanation: '1/2 m1 v1^2 = 1/2 m2 v2^2 => 2 * v1^2 = 1 * v2^2 => (v1/v2)^2 = 1/2 => v1/v2 = 1/√2.'
  },

  // --- BÀI 3 (20 CÂU) ---
  {
    id: 'q3-1',
    lessonId: 3,
    difficulty: 'de',
    question: 'Cơ năng của một vật là gì?',
    options: ['Tổng của động năng và thế năng của vật', 'Hiệu giữa động năng và thế năng', 'Tích của động năng và thế năng', 'Động năng cực đại nhân với khối lượng'],
    correctAnswer: 'Tổng của động năng và thế năng của vật',
    explanation: 'Wc = Wđ + Wt.'
  },
  {
    id: 'q3-2',
    lessonId: 3,
    difficulty: 'de',
    question: 'Khi một vật rơi tự do từ trên cao xuống dưới đất (bỏ qua ma sát), sự chuyển hóa năng lượng diễn ra như thế nào?',
    options: ['Thế năng giảm dần, động năng tăng dần', 'Động năng giảm dần, thế năng tăng dần', 'Cả động năng và thế năng đều giảm', 'Cả động năng và thế năng đều không đổi'],
    correctAnswer: 'Thế năng giảm dần, động năng tăng dần',
    explanation: 'Độ cao giảm làm thế năng giảm, tốc độ tăng làm động năng tăng.'
  },
  {
    id: 'q3-3',
    lessonId: 3,
    difficulty: 'de',
    question: 'Khi một quả bóng được ném thẳng đứng lên cao, tại điểm cao nhất của quỹ đạo:',
    options: ['Thế năng đạt giá trị lớn nhất, động năng bằng 0', 'Động năng lớn nhất, thế năng bằng 0', 'Cơ năng bằng 0', 'Động năng bằng thế năng'],
    correctAnswer: 'Thế năng đạt giá trị lớn nhất, động năng bằng 0',
    explanation: 'Tại điểm cao nhất, vận tốc đổi chiều nên tức thời v = 0 => Wđ = 0, h đạt cực đại nên Wt max.'
  },
  {
    id: 'q3-4',
    lessonId: 3,
    difficulty: 'de',
    question: 'Điều kiện để cơ năng của một vật được bảo toàn là:',
    options: ['Chỉ chịu tác dụng của trọng lực (hoặc lực đàn hồi), bỏ qua ma sát và lực cản', 'Vật phải chuyển động thẳng đều', 'Vật phải có vận tốc rất lớn', 'Khối lượng vật phải không đổi'],
    correctAnswer: 'Chỉ chịu tác dụng của trọng lực (hoặc lực đàn hồi), bỏ qua ma sát và lực cản',
    explanation: 'Khi không có lực ma sát và lực cản tiêu tán năng lượng, cơ năng được bảo toàn.'
  },
  {
    id: 'q3-5',
    lessonId: 3,
    difficulty: 'de',
    question: 'Trong dao động của con lắc đơn, khi quả nặng đi qua vị trí cân bằng (thấp nhất):',
    options: ['Vận tốc lớn nhất, động năng lớn nhất, thế năng nhỏ nhất', 'Thế năng lớn nhất, động năng bằng 0', 'Cơ năng bằng 0', 'Lực căng dây bằng 0'],
    correctAnswer: 'Vận tốc lớn nhất, động năng lớn nhất, thế năng nhỏ nhất',
    explanation: 'Tại vị trí thấp nhất, thế năng đạt cực tiểu và động năng đạt cực đại.'
  },
  {
    id: 'q3-6',
    lessonId: 3,
    difficulty: 'de',
    question: 'Một vật rơi tự do có cơ năng ban đầu là 100 J. Bỏ qua sức cản không khí, ngay trước khi chạm đất cơ năng của vật là:',
    options: ['100 J', '0 J', '50 J', '200 J'],
    correctAnswer: '100 J',
    explanation: 'Vì cơ năng bảo toàn nên tại mọi vị trí trong quá trình rơi cơ năng luôn bằng 100 J.'
  },
  {
    id: 'q3-7',
    lessonId: 3,
    difficulty: 'de',
    question: 'Nếu trong quá trình chuyển động có lực ma sát của môi trường thì cơ năng của vật sẽ:',
    options: ['Giảm dần do một phần cơ năng chuyển thành nhiệt năng', 'Tăng dần', 'Luôn luôn không đổi', 'Biến mất ngay lập tức'],
    correctAnswer: 'Giảm dần do một phần cơ năng chuyển thành nhiệt năng',
    explanation: 'Ma sát sinh công cản chuyển hoá cơ năng thành nhiệt năng làm hệ bị tiêu hao năng lượng.'
  },
  {
    id: 'q3-8',
    lessonId: 3,
    difficulty: 'kho',
    question: 'Một vật có khối lượng 1 kg được thả rơi từ độ cao 20 m xuống đất. Lấy g = 10 m/s², chọn gốc thế năng ở mặt đất. Tại độ cao nào thì động năng bằng thế năng?',
    options: ['10 m', '5 m', '15 m', '8 m'],
    correctAnswer: '10 m',
    explanation: 'Cơ năng W = mgh0 = 1 * 10 * 20 = 200 J. Khi Wđ = Wt => W = 2 Wt => 2 * mgh = 200 => h = 10 m.'
  },
  {
    id: 'q3-9',
    lessonId: 3,
    difficulty: 'kho',
    question: 'Một viên bi được thả lăn không vận tốc đầu từ đỉnh máng nghiêng cao 0,8 m. Lấy g = 10 m/s², bỏ qua ma sát. Vận tốc của viên bi ở chân máng nghiêng là:',
    options: ['4 m/s', '8 m/s', '16 m/s', '2 m/s'],
    correctAnswer: '4 m/s',
    explanation: 'Bảo toàn cơ năng: mgh = 1/2 mv^2 => v = √(2gh) = √(2 * 10 * 0,8) = √16 = 4 m/s.'
  },
  {
    id: 'q3-10',
    lessonId: 3,
    difficulty: 'kho',
    question: 'Ném một vật lên cao với vận tốc ban đầu v0 = 10 m/s từ mặt đất. Bỏ qua sức cản, lấy g = 10 m/s². Độ cao cực đại mà vật đạt được là:',
    options: ['5 m', '10 m', '20 m', '2,5 m'],
    correctAnswer: '5 m',
    explanation: '1/2 mv0^2 = mgh_max => h_max = v0^2 / (2g) = 100 / 20 = 5 m.'
  },
  {
    id: 'q3-11',
    lessonId: 3,
    difficulty: 'kho',
    question: 'Tại vị trí động năng bằng 3 lần thế năng (Wđ = 3 Wt), thế năng của vật bằng bao nhiêu phần của cơ năng?',
    options: ['1/4 cơ năng', '1/3 cơ năng', '3/4 cơ năng', '1/2 cơ năng'],
    correctAnswer: '1/4 cơ năng',
    explanation: 'Wc = Wđ + Wt = 3 Wt + Wt = 4 Wt => Wt = 1/4 Wc.'
  },
  {
    id: 'q3-12',
    lessonId: 3,
    difficulty: 'kho',
    question: 'Một búa máy có khối lượng 500 kg rơi từ độ cao 4 m xuống đóng vào cọc. Lấy g = 10 m/s². Cơ năng của búa máy ngay trước khi chạm cọc là:',
    options: ['20.000 J', '2.000 J', '10.000 J', '40.000 J'],
    correctAnswer: '20.000 J',
    explanation: 'Wc = mgh = 500 * 10 * 4 = 20.000 J = 20 kJ.'
  },
  {
    id: 'q3-13',
    lessonId: 3,
    difficulty: 'kho',
    question: 'Một người chơi xích đu dao động qua lại. Khi xích đu đi từ vị trí A (cao nhất) sang vị trí O (thấp nhất) thì:',
    options: ['Thế năng chuyển hoá dần thành động năng', 'Động năng chuyển hoá dần thành thế năng', 'Cơ năng của người đó tăng lên', 'Thế năng không thay đổi'],
    correctAnswer: 'Thế năng chuyển hoá dần thành động năng',
    explanation: 'Độ cao giảm dần nên thế năng chuyển hoá thành động năng làm tốc độ tăng dần đến cực đại ở O.'
  },
  {
    id: 'q3-14',
    lessonId: 3,
    difficulty: 'kho',
    question: 'Khi bắn một mũi tên bằng cung, năng lượng đã được chuyển hoá theo chu trình nào?',
    options: ['Thế năng đàn hồi của cánh cung chuyển hoá thành động năng của mũi tên', 'Nhiệt năng chuyển hoá thành thế năng', 'Hóa năng chuyển thành quang năng', 'Điện năng chuyển thành cơ năng'],
    correctAnswer: 'Thế năng đàn hồi của cánh cung chuyển hoá thành động năng của mũi tên',
    explanation: 'Cánh cung bị kéo căng tích trữ thế năng đàn hồi, khi buông tay lực đàn hồi đẩy mũi tên bay đi (mang động năng).'
  },
  {
    id: 'q3-15',
    lessonId: 3,
    difficulty: 'cuc_kho',
    question: 'Một vật m = 0,2 kg rơi từ độ cao h = 10 m. Khi chạm đất, do va chạm không đàn hồi nên vật chỉ nảy lên được độ cao h\' = 6 m. Cơ năng bị tiêu hao do va chạm và ma sát là (g = 10 m/s²):',
    options: ['8 J', '12 J', '20 J', '4 J'],
    correctAnswer: '8 J',
    explanation: 'Cơ năng ban đầu W1 = mgh = 0,2 * 10 * 10 = 20 J. Cơ năng sau nảy W2 = mgh\' = 0,2 * 10 * 6 = 12 J => Hao phí ΔW = 20 - 12 = 8 J.'
  },
  {
    id: 'q3-16',
    lessonId: 3,
    difficulty: 'cuc_kho',
    question: 'Một con lắc đơn dao động với góc lệch cực đại α0. Nếu sau một thời gian dao động biên độ góc giảm dần rồi dừng hẳn, điều đó có vi phạm định luật bảo toàn năng lượng không?',
    options: ['Không, vì cơ năng đã biến đổi hoàn toàn thành nhiệt năng làm nóng quả cầu và không khí xung quanh', 'Có, vì năng lượng tự nhiên biến mất', 'Có, vì con lắc bị hỏng', 'Không, vì thế năng tự phục hồi'],
    correctAnswer: 'Không, vì cơ năng đã biến đổi hoàn toàn thành nhiệt năng làm nóng quả cầu và không khí xung quanh',
    explanation: 'Tổng năng lượng toàn phần luôn bảo toàn: cơ năng chuyển hoá thành nhiệt năng do ma sát với không khí.'
  },
  {
    id: 'q3-17',
    lessonId: 3,
    difficulty: 'cuc_kho',
    question: 'Một vật được thả rơi tự do từ độ cao h. Ở độ cao nào so với mặt đất thì vận tốc của vật bằng một nửa vận tốc cực đại khi chạm đất?',
    options: ['3/4 h', '1/2 h', '1/4 h', '2/3 h'],
    correctAnswer: '3/4 h',
    explanation: 'v = 1/2 v_max => v^2 = 1/4 v_max^2 => Wđ = 1/4 Wc => Wt = 3/4 Wc => mgh\' = 3/4 mgh => h\' = 3/4 h.'
  },
  {
    id: 'q3-18',
    lessonId: 3,
    difficulty: 'cuc_kho',
    question: 'Tàu lượn siêu tốc có khối lượng m bắt đầu trượt không ma sát từ đỉnh dốc cao h1 = 30 m xuống vòng lượn tròn thẳng đứng có bán kính R = 10 m. Vận tốc của tàu ở điểm cao nhất của vòng lượn là (g = 10 m/s²):',
    options: ['14,14 m/s (√200 m/s)', '10 m/s', '20 m/s', '0 m/s'],
    correctAnswer: '14,14 m/s (√200 m/s)',
    explanation: 'Độ cao đỉnh vòng lượn h2 = 2R = 20 m. Bảo toàn cơ năng: mgh1 = mgh2 + 1/2 mv^2 => 1/2 v^2 = g(h1 - h2) = 10 * (30 - 20) = 100 => v^2 = 200 => v ≈ 14,14 m/s.'
  },
  {
    id: 'q3-19',
    lessonId: 3,
    difficulty: 'cuc_kho',
    question: 'Để nhảy cao được thành tích tốt, các vận động viên thường phải chạy lấy đà rất nhanh trước khi giẫm vào ván nhảy. Cơ sở vật lý của động tác này là:',
    options: ['Tích luỹ động năng lớn khi chạy đà để chuyển hóa thành thế năng cực đại đưa cơ thể lên cao', 'Để làm nóng người chống lạnh', 'Để trọng lực giảm bớt', 'Để tăng ma sát chân với mặt sàn'],
    correctAnswer: 'Tích luỹ động năng lớn khi chạy đà để chuyển hóa thành thế năng cực đại đưa cơ thể lên cao',
    explanation: 'Chạy đà tích luỹ động năng, sau đó lực bật biến động năng thành thế năng trọng trường nâng trọng tâm lên cao.'
  },
  {
    id: 'q3-20',
    lessonId: 3,
    difficulty: 'cuc_kho',
    question: 'Xe thế năng (đồ chơi STEM) dùng quả nặng thả rơi để kéo trục bánh xe quay. Để xe chạy được quãng đường xa nhất, ta nên:',
    options: ['Tăng độ cao thả quả nặng và giảm tối đa ma sát ở các ổ trục bánh xe', 'Giảm khối lượng quả nặng', 'Lắp bánh xe thật nhỏ và nặng', 'Tăng ma sát của trục xe'],
    correctAnswer: 'Tăng độ cao thả quả nặng và giảm tối đa ma sát ở các ổ trục bánh xe',
    explanation: 'Tăng h làm tăng thế năng ban đầu Wt = mgh, giảm ma sát ổ trục giúp cơ năng chuyển hóa trọn vẹn thành động năng tịnh tiến của xe.'
  },

  // --- BÀI 4 (20 CÂU) ---
  {
    id: 'q4-1',
    lessonId: 4,
    difficulty: 'de',
    question: 'Công cơ học xuất hiện khi nào?',
    options: ['Khi có lực tác dụng vào vật và làm cho vật dịch chuyển theo hướng của lực', 'Khi vật đứng yên chịu lực ép lớn', 'Khi một lực tác dụng vuông góc với phương dịch chuyển', 'Khi vật chỉ có nhiệt năng'],
    correctAnswer: 'Khi có lực tác dụng vào vật và làm cho vật dịch chuyển theo hướng của lực',
    explanation: 'Hai yếu tố tạo nên công cơ học: có lực tác dụng F và có quãng đường dịch chuyển s theo hướng lực.'
  },
  {
    id: 'q4-2',
    lessonId: 4,
    difficulty: 'de',
    question: 'Công thức tính công cơ học của một lực F làm vật dịch chuyển quãng đường s cùng hướng với lực là:',
    options: ['A = F * s', 'A = F / s', 'A = F + s', 'A = F * s^2'],
    correctAnswer: 'A = F * s',
    explanation: 'A = F.s trong đó F đo bằng N, s đo bằng m, A đo bằng J.'
  },
  {
    id: 'q4-3',
    lessonId: 4,
    difficulty: 'de',
    question: '1 Jun (J) tương đương với:',
    options: ['1 N.m', '1 N/m', '1 W.s^2', '1 kg.m/s'],
    correctAnswer: '1 N.m',
    explanation: '1 J = 1 N * 1 m = 1 N.m.'
  },
  {
    id: 'q4-4',
    lessonId: 4,
    difficulty: 'de',
    question: 'Công suất là đại lượng đặc trưng cho:',
    options: ['Tốc độ thực hiện công (nhanh hay chậm)', 'Khối lượng của máy móc', 'Độ bền của vật liệu', 'Mức độ tiêu hao nhiên liệu'],
    correctAnswer: 'Tốc độ thực hiện công (nhanh hay chậm)',
    explanation: 'Công suất cho biết công thực hiện được trong một đơn vị thời gian.'
  },
  {
    id: 'q4-5',
    lessonId: 4,
    difficulty: 'de',
    question: 'Biểu thức tính công suất là:',
    options: ['P = A / t', 'P = A * t', 'P = t / A', 'P = F * t'],
    correctAnswer: 'P = A / t',
    explanation: 'P = A/t trong đó A là công (J), t là thời gian (s).'
  },
  {
    id: 'q4-6',
    lessonId: 4,
    difficulty: 'de',
    question: 'Đơn vị đo của công suất trong hệ SI là:',
    options: ['Oát (W)', 'Jun (J)', 'Niutơn (N)', 'Mã lực (HP)'],
    correctAnswer: 'Oát (W)',
    explanation: '1 W = 1 J/s.'
  },
  {
    id: 'q4-7',
    lessonId: 4,
    difficulty: 'de',
    question: 'Một kilôoát (kW) bằng bao nhiêu oát (W)?',
    options: ['1000 W', '100 W', '10 W', '1.000.000 W'],
    correctAnswer: '1000 W',
    explanation: '1 kW = 10^3 W = 1000 W.'
  },
  {
    id: 'q4-8',
    lessonId: 4,
    difficulty: 'kho',
    question: 'Một học sinh cầm cặp sách nặng 30 N đứng yên đợi xe buýt trong 10 phút. Công cơ học do lực nâng của tay thực hiện trong thời gian đó là:',
    options: ['0 J', '300 J', '18.000 J', '30 J'],
    correctAnswer: '0 J',
    explanation: 'Vì quãng đường dịch chuyển s = 0 nên công cơ học A = F * s = 30 * 0 = 0 J.'
  },
  {
    id: 'q4-9',
    lessonId: 4,
    difficulty: 'kho',
    question: 'Một con ngựa kéo xe với lực không đổi F = 400 N đi được quãng đường 1,5 km trong 30 phút. Công mà ngựa thực hiện là:',
    options: ['600.000 J', '600 J', '200.000 J', '12.000 J'],
    correctAnswer: '600.000 J',
    explanation: 'Đổi s = 1,5 km = 1500 m. A = F * s = 400 * 1500 = 600.000 J = 600 kJ.'
  },
  {
    id: 'q4-10',
    lessonId: 4,
    difficulty: 'kho',
    question: 'Một cần cẩu nâng khối bê tông 2 tấn lên cao 6 m trong thời gian 20 giây. Lấy g = 10 m/s². Công suất của cần cẩu là:',
    options: ['6 kW', '12 kW', '60 kW', '120 W'],
    correctAnswer: '6 kW',
    explanation: 'F = P = 2000 * 10 = 20.000 N. Công A = F * h = 20.000 * 6 = 120.000 J. Công suất P = A / t = 120.000 / 20 = 6000 W = 6 kW.'
  },
  {
    id: 'q4-11',
    lessonId: 4,
    difficulty: 'kho',
    question: 'Một động cơ có công suất 1,5 kW hoạt động trong nửa giờ (30 phút). Công mà động cơ thực hiện được là:',
    options: ['2,7 MJ', '45 kJ', '750 J', '270 kJ'],
    correctAnswer: '2,7 MJ',
    explanation: 'P = 1500 W; t = 30 * 60 = 1800 s. A = P * t = 1500 * 1800 = 2.700.000 J = 2,7 MJ.'
  },
  {
    id: 'q4-12',
    lessonId: 4,
    difficulty: 'kho',
    question: 'Khi một vật chuyển động thẳng đều với vận tốc v dưới tác dụng của lực kéo F cùng hướng chuyển động, công suất tức thời có thể tính bằng công thức:',
    options: ['P = F * v', 'P = F / v', 'P = F * v^2', 'P = F * s / v'],
    correctAnswer: 'P = F * v',
    explanation: 'P = A / t = (F * s) / t = F * (s / t) = F * v.'
  },
  {
    id: 'q4-13',
    lessonId: 4,
    difficulty: 'kho',
    question: 'Trọng lực có thực hiện công trong trường hợp nào sau đây?',
    options: ['Quả bưởi rụng từ trên cây rơi xuống đất', 'Vệ tinh chuyển động tròn đều quanh Trái Đất', 'Chiếc xe chạy thẳng đều trên đường nằm ngang phẳng', 'Cuốn sách nằm yên trên mặt bàn'],
    correctAnswer: 'Quả bưởi rụng từ trên cây rơi xuống đất',
    explanation: 'Quả bưởi rơi theo phương thẳng đứng trùng với phương tác dụng của trọng lực nên trọng lực sinh công phát động.'
  },
  {
    id: 'q4-14',
    lessonId: 4,
    difficulty: 'kho',
    question: 'Mã lực (HP) là đơn vị công suất thường dùng cho động cơ ô tô. 1 HP xấp xỉ bằng bao nhiêu oát?',
    options: ['746 W', '1000 W', '500 W', '3600 W'],
    correctAnswer: '746 W',
    explanation: 'Theo định nghĩa thông dụng của Anh/Mỹ, 1 HP ≈ 746 W.'
  },
  {
    id: 'q4-15',
    lessonId: 4,
    difficulty: 'cuc_kho',
    question: 'Một thác nước cao 30 m có lưu lượng nước đổ xuống là 120 m³/phút. Khối lượng riêng của nước là 1000 kg/m³, lấy g = 10 m/s². Công suất cực đại của dòng nước thác là:',
    options: ['600 kW', '360 kW', '60 kW', '36.000 kW'],
    correctAnswer: '600 kW',
    explanation: 'Khối lượng nước mỗi phút: m = 120 * 1000 = 120.000 kg. Công trong 1 phút (60 s): A = mgh = 120.000 * 10 * 30 = 36.000.000 J. Công suất P = A / t = 36.000.000 / 60 = 600.000 W = 600 kW.'
  },
  {
    id: 'q4-16',
    lessonId: 4,
    difficulty: 'cuc_kho',
    question: 'Một máy bơm nước có công suất 2 kW và hiệu suất 80%. Trong 1 giờ máy có thể bơm được bao nhiêu mét khối nước lên bể cao 12 m? (g = 10 m/s², D = 1000 kg/m³)',
    options: ['48 m³', '60 m³', '24 m³', '36 m³'],
    correctAnswer: '48 m³',
    explanation: 'Công toàn phần A_tp = P * t = 2000 * 3600 = 7.200.000 J. Công có ích A_ci = 0,8 * 7.200.000 = 5.760.000 J. A_ci = m * g * h => m = 5.760.000 / (10 * 12) = 48.000 kg => V = 48 m³.'
  },
  {
    id: 'q4-17',
    lessonId: 4,
    difficulty: 'cuc_kho',
    question: 'Một chiếc ô tô chuyển động thẳng đều lên một con dốc với vận tốc không đổi 54 km/h. Lực cản tổng cộng bằng 800 N và lực thành phần của trọng lực dọc theo dốc là 1200 N. Công suất động cơ xe là:',
    options: ['30 kW', '15 kW', '20 kW', '45 kW'],
    correctAnswer: '30 kW',
    explanation: 'Để chạy đều lên dốc: Lực kéo F_k = F_c + P_dốc = 800 + 1200 = 2000 N. Đổi v = 54 km/h = 15 m/s. P = F_k * v = 2000 * 15 = 30.000 W = 30 kW.'
  },
  {
    id: 'q4-18',
    lessonId: 4,
    difficulty: 'cuc_kho',
    question: 'Người ta dùng mặt phẳng nghiêng dài 5 m để kéo một vật nặng 100 kg lên sàn xe cao 1,5 m. Do có ma sát nên lực kéo thực tế là 350 N. Hiệu suất của mặt phẳng nghiêng là (g = 10 m/s²):',
    options: ['85,7%', '75,0%', '90,0%', '80,0%'],
    correctAnswer: '85,7%',
    explanation: 'A_ci = P * h = 1000 * 1,5 = 1500 J. A_tp = F * l = 350 * 5 = 1750 J. Hiệu suất H = (1500 / 1750) * 100% ≈ 85,71%.'
  },
  {
    id: 'q4-19',
    lessonId: 4,
    difficulty: 'cuc_kho',
    question: 'Khi kéo một bao gạo trượt đều trên sàn nhà nằm ngang bằng một sợi dây hợp với phương ngang một góc 60°, lực kéo là 100 N đi được 10 m. Công của lực kéo là (biết cos 60° = 0,5):',
    options: ['500 J', '1000 J', '866 J', '0 J'],
    correctAnswer: '500 J',
    explanation: 'A = F * s * cos(α) = 100 * 10 * cos(60°) = 1000 * 0,5 = 500 J.'
  },
  {
    id: 'q4-20',
    lessonId: 4,
    difficulty: 'cuc_kho',
    question: 'Hai chiếc xe cùng leo lên một con dốc cao như nhau. Xe thứ nhất chạy hết 20 giây, xe thứ hai chạy hết 40 giây. Nếu khối lượng hai xe như nhau thì tỉ số công suất P1 / P2 là:',
    options: ['2', '1/2', '4', '1'],
    correctAnswer: '2',
    explanation: 'Cùng thực hiện một công có ích A = mgh. P1 = A / t1; P2 = A / t2 => P1 / P2 = t2 / t1 = 40 / 20 = 2.'
  },

  // --- BÀI 5 (20 CÂU) ---
  {
    id: 'q5-1',
    lessonId: 5,
    difficulty: 'de',
    question: 'Hiện tượng khúc xạ ánh sáng là:',
    options: ['Hiện tượng tia sáng bị gãy khúc tại mặt phân cách khi truyền từ môi trường trong suốt này sang môi trường trong suốt khác', 'Hiện tượng tia sáng quay ngược trở lại môi trường cũ', 'Hiện tượng ánh sáng bị tán sắc thành nhiều màu', 'Hiện tượng ánh sáng bị vật cản hấp thụ hoàn toàn'],
    correctAnswer: 'Hiện tượng tia sáng bị gãy khúc tại mặt phân cách khi truyền từ môi trường trong suốt này sang môi trường trong suốt khác',
    explanation: 'Định nghĩa chuẩn trong SGK Khoa học tự nhiên 9 bài 5.'
  },
  {
    id: 'q5-2',
    lessonId: 5,
    difficulty: 'de',
    question: 'Góc tới i là góc hợp bởi:',
    options: ['Tia tới và pháp tuyến tại điểm tới', 'Tia tới và mặt phân cách hai môi trường', 'Tia khúc xạ và pháp tuyến', 'Tia tới và tia khúc xạ'],
    correctAnswer: 'Tia tới và pháp tuyến tại điểm tới',
    explanation: 'Góc tới i được quy ước đo từ tia tới tới đường pháp tuyến vuông góc với mặt phân cách.'
  },
  {
    id: 'q5-3',
    lessonId: 5,
    difficulty: 'de',
    question: 'Tia khúc xạ và tia tới có đặc điểm nào sau đây?',
    options: ['Cùng nằm trong mặt phẳng tới và ở hai phía so với pháp tuyến', 'Luôn vuông góc với nhau', 'Luôn trùng phương truyền với nhau', 'Nằm ở cùng một phía so với pháp tuyến'],
    correctAnswer: 'Cùng nằm trong mặt phẳng tới và ở hai phía so với pháp tuyến',
    explanation: 'Theo định luật khúc xạ ánh sáng, tia khúc xạ nằm trong mặt phẳng tới và ở phía bên kia pháp tuyến.'
  },
  {
    id: 'q5-4',
    lessonId: 5,
    difficulty: 'de',
    question: 'Chiết suất tuyệt đối của môi trường chân không bằng bao nhiêu?',
    options: ['1', '0', '1,33', '1,5'],
    correctAnswer: '1',
    explanation: 'Chiết suất tuyệt đối của chân không quy ước bằng 1 (của không khí gần bằng 1).'
  },
  {
    id: 'q5-5',
    lessonId: 5,
    difficulty: 'de',
    question: 'Công thức tính chiết suất tuyệt đối n của một môi trường trong suốt là:',
    options: ['n = c / v', 'n = v / c', 'n = c * v', 'n = c + v'],
    correctAnswer: 'n = c / v',
    explanation: 'Trong đó c = 3.10^8 m/s (tốc độ ánh sáng trong chân không), v là tốc độ ánh sáng trong môi trường.'
  },
  {
    id: 'q5-6',
    lessonId: 5,
    difficulty: 'de',
    question: 'Khi tia sáng truyền vuông góc với mặt phân cách giữa hai môi trường (góc tới i = 0°) thì:',
    options: ['Tia sáng truyền thẳng không bị khúc xạ (góc khúc xạ r = 0°)', 'Tia sáng bị bẻ gãy một góc 90°', 'Tia sáng bị phản xạ toàn phần', 'Tia sáng biến mất'],
    correctAnswer: 'Tia sáng truyền thẳng không bị khúc xạ (góc khúc xạ r = 0°)',
    explanation: 'Khi i = 0° thì sin(i) = 0 => sin(r) = 0 => r = 0°, tia sáng truyền thẳng tiếp tục.'
  },
  {
    id: 'q5-7',
    lessonId: 5,
    difficulty: 'de',
    question: 'Khi chiếu tia sáng từ không khí vào nước (chiết suất n_nước > n_không khí) với góc tới i > 0°, góc khúc xạ r sẽ:',
    options: ['Nhỏ hơn góc tới (r < i)', 'Lớn hơn góc tới (r > i)', 'Luôn bằng góc tới (r = i)', 'Bằng 90°'],
    correctAnswer: 'Nhỏ hơn góc tới (r < i)',
    explanation: 'Truyền sang môi trường chiết quang hơn (n2 > n1), tia khúc xạ bị lệch lại gần pháp tuyến hơn nên r < i.'
  },
  {
    id: 'q5-8',
    lessonId: 5,
    difficulty: 'kho',
    question: 'Chiếu tia sáng từ không khí vào thủy tinh với góc tới i = 60°. Biết chiết suất của thủy tinh là n = √3 ≈ 1,732. Góc khúc xạ r trong thủy tinh là:',
    options: ['30°', '45°', '60°', '90°'],
    correctAnswer: '30°',
    explanation: 'sin(i) / sin(r) = n2 / n1 => sin(60°) / sin(r) = √3 / 1 => (√3/2) / sin(r) = √3 => sin(r) = 1/2 => r = 30°.'
  },
  {
    id: 'q5-9',
    lessonId: 5,
    difficulty: 'kho',
    question: 'Tốc độ truyền ánh sáng trong nước là v = 2,25.10^8 m/s. Biết tốc độ ánh sáng trong chân không c = 3.10^8 m/s. Chiết suất tuyệt đối của nước là:',
    options: ['1,33 (4/3)', '1,50', '1,73', '1,20'],
    correctAnswer: '1,33 (4/3)',
    explanation: 'n = c / v = 3.10^8 / 2,25.10^8 = 3 / 2,25 = 4/3 ≈ 1,33.'
  },
  {
    id: 'q5-10',
    lessonId: 5,
    difficulty: 'kho',
    question: 'Khi chiếu tia sáng từ nước ra không khí với góc tới i = 30°, góc khúc xạ r đo được là 41,8°. Hiện tượng này chứng tỏ:',
    options: ['Tia khúc xạ bị lệch xa pháp tuyến hơn so với tia tới', 'Tia khúc xạ bị lệch gần pháp tuyến hơn', 'Ánh sáng truyền nhanh hơn trong nước', 'Nước chiết quang kém hơn không khí'],
    correctAnswer: 'Tia khúc xạ bị lệch xa pháp tuyến hơn so với tia tới',
    explanation: 'Vì r = 41,8° > i = 30°, góc khúc xạ lớn hơn góc tới nên tia khúc xạ lệch xa pháp tuyến hơn.'
  },
  {
    id: 'q5-11',
    lessonId: 5,
    difficulty: 'kho',
    question: 'Đặt một đồng xu dưới đáy cốc rỗng không nhìn thấy được mép đồng xu. Khi từ từ đổ đầy nước vào cốc thì ta lại nhìn thấy đồng xu. Nguyên nhân là:',
    options: ['Tia sáng từ đồng xu truyền qua mặt nước bị khúc xạ lệch vào mắt', 'Đồng xu nổi lên mặt nước', 'Nước làm đồng xu phóng to gấp 10 lần', 'Mặt nước phản xạ ánh sáng như gương cầu'],
    correctAnswer: 'Tia sáng từ đồng xu truyền qua mặt nước bị khúc xạ lệch vào mắt',
    explanation: 'Hiện tượng khúc xạ ánh sáng nâng ảnh ảo của đồng xu lên cao hơn giúp tia sáng đi vào mắt người quan sát.'
  },
  {
    id: 'q5-12',
    lessonId: 5,
    difficulty: 'kho',
    question: 'Biết chiết suất của kim cương là 2,42. Tốc độ ánh sáng khi truyền trong viên kim cương xấp xỉ là:',
    options: ['1,24.10^8 m/s', '2,42.10^8 m/s', '3,00.10^8 m/s', '0,81.10^8 m/s'],
    correctAnswer: '1,24.10^8 m/s',
    explanation: 'v = c / n = 3.10^8 / 2,42 ≈ 1,24.10^8 m/s.'
  },
  {
    id: 'q5-13',
    lessonId: 5,
    difficulty: 'kho',
    question: 'Chiết suất tỉ đối n21 của môi trường 2 đối với môi trường 1 được tính bằng biểu thức nào sau đây?',
    options: ['n21 = n2 / n1', 'n21 = n1 / n2', 'n21 = n1 * n2', 'n21 = n2 - n1'],
    correctAnswer: 'n21 = n2 / n1',
    explanation: 'n21 = sin(i) / sin(r) = n2 / n1 = v1 / v2.'
  },
  {
    id: 'q5-14',
    lessonId: 5,
    difficulty: 'kho',
    question: 'Một thợ lặn ở dưới nước nhìn lên một chú chim đang bay trên không trung. Người thợ lặn sẽ thấy vị trí chú chim như thế nào?',
    options: ['Ở vị trí cao hơn so với vị trí thực tế', 'Ở vị trí thấp hơn so với vị trí thực tế', 'Đúng vị trí thực tế', 'Không nhìn thấy gì'],
    correctAnswer: 'Ở vị trí cao hơn so với vị trí thực tế',
    explanation: 'Tia sáng từ chim (trong không khí) vào mắt thợ lặn (trong nước) bị khúc xạ lại gần pháp tuyến khiến đường kéo dài ảnh ảo cao hơn thực tế.'
  },
  {
    id: 'q5-15',
    lessonId: 5,
    difficulty: 'cuc_kho',
    question: 'Chiếu tia sáng từ không khí vào chất lỏng trong suốt với góc tới i = 45° thì góc khúc xạ r = 30°. Khi tăng góc tới thêm 15° (tức i\' = 60°) thì góc khúc xạ r\' xấp xỉ bằng:',
    options: ['37,8°', '45,0°', '30,0°', '50,2°'],
    correctAnswer: '37,8°',
    explanation: 'n = sin(45°) / sin(30°) = (√2 / 2) / 0,5 = √2 ≈ 1,414. Khi i\' = 60°: sin(r\') = sin(60°) / √2 = (√3/2) / √2 = √6 / 4 ≈ 0,612 => r\' = arcsin(0,612) ≈ 37,76°.'
  },
  {
    id: 'q5-16',
    lessonId: 5,
    difficulty: 'cuc_kho',
    question: 'Một bản thủy tinh hai mặt song song có bề dày d = 6 cm và chiết suất n = 1,5 đặt trong không khí. Chiếu tia sáng với góc tới i = 45°. Độ dời ngang của tia ló so với tia tới ban đầu là:',
    options: ['1,97 cm', '3,00 cm', '4,24 cm', '1,41 cm'],
    correctAnswer: '1,97 cm',
    explanation: 'sin(r) = sin(45°) / 1,5 = 0,7071 / 1,5 ≈ 0,4714 => r ≈ 28,13°. Độ dời ngang e = d * sin(i - r) / cos(r) = 6 * sin(16,87°) / cos(28,13°) = 6 * 0,2902 / 0,8819 ≈ 1,97 cm.'
  },
  {
    id: 'q5-17',
    lessonId: 5,
    difficulty: 'cuc_kho',
    question: 'Một tia sáng đi từ môi trường A sang môi trường B. Nếu tăng góc tới i thêm 10° thì góc khúc xạ r tăng thêm một lượng:',
    options: ['Không xác định cố định, phụ thuộc vào giá trị cụ thể của i và chiết suất hai môi trường', 'Đúng bằng 10°', 'Luôn lớn hơn 10°', 'Luôn nhỏ hơn 10°'],
    correctAnswer: 'Không xác định cố định, phụ thuộc vào giá trị cụ thể của i và chiết suất hai môi trường',
    explanation: 'Định luật khúc xạ là tỉ số của sin (sin i / sin r = const), hàm sin phi tuyến nên góc không tăng một lượng tuyến tính cố định.'
  },
  {
    id: 'q5-18',
    lessonId: 5,
    difficulty: 'cuc_kho',
    question: 'Tia sáng truyền từ nước (n1 = 4/3) sang thủy tinh (n2 = 1,5). Khi góc tới i = 30°, góc lệch giữa tia khúc xạ và tia tới là:',
    options: ['3,6°', '15,0°', '26,4°', '5,2°'],
    correctAnswer: '3,6°',
    explanation: 'sin(r) = (n1 / n2) * sin(i) = ((4/3) / 1,5) * sin(30°) = (8/9) * 0,5 = 4/9 ≈ 0,444 => r ≈ 26,39°. Góc lệch D = |i - r| = 30° - 26,39° ≈ 3,61°.'
  },
  {
    id: 'q5-19',
    lessonId: 5,
    difficulty: 'cuc_kho',
    question: 'Một bể bơi chứa nước sâu h = 1,2 m. Chiết suất của nước là n = 4/3. Một người nhìn gần như vuông góc với mặt nước sẽ thấy đáy bể dường như cách mặt nước một khoảng là:',
    options: ['0,9 m', '1,6 m', '1,2 m', '0,6 m'],
    correctAnswer: '0,9 m',
    explanation: 'Khi ngắm gần vuông góc (góc nhỏ): h\' = h / n = 1,2 / (4/3) = 1,2 * 3 / 4 = 0,9 m.'
  },
  {
    id: 'q5-20',
    lessonId: 5,
    difficulty: 'cuc_kho',
    question: 'Khi ánh sáng truyền qua mặt phân cách giữa hai môi trường trong suốt, đại lượng nào sau đây KHÔNG bao giờ bị thay đổi?',
    options: ['Tần số của ánh sáng', 'Bước sóng của ánh sáng', 'Tốc độ truyền ánh sáng', 'Phương truyền của tia sáng (trừ khi i = 0°)'],
    correctAnswer: 'Tần số của ánh sáng',
    explanation: 'Tần số f của sóng ánh sáng do nguồn phát quyết định và không đổi khi truyền qua bất kì môi trường nào.'
  },

  // --- BÀI 6 (20 CÂU) ---
  {
    id: 'q6-1',
    lessonId: 6,
    difficulty: 'de',
    question: 'Hiện tượng phản xạ toàn phần là hiện tượng:',
    options: ['Toàn bộ tia sáng tới bị phản xạ trở lại tại mặt phân cách giữa hai môi trường', 'Tia sáng bị khúc xạ toàn bộ sang môi trường thứ hai', 'Tia sáng bị tán sắc thành 7 màu', 'Tia sáng bị hấp thụ hoàn toàn thành nhiệt'],
    correctAnswer: 'Toàn bộ tia sáng tới bị phản xạ trở lại tại mặt phân cách giữa hai môi trường',
    explanation: 'Định nghĩa SGK: phản xạ toàn phần là hiện tượng phản xạ toàn bộ tia tới ở mặt phân cách giữa hai môi trường trong suốt.'
  },
  {
    id: 'q6-2',
    lessonId: 6,
    difficulty: 'de',
    question: 'Để có thể xảy ra hiện tượng phản xạ toàn phần, ánh sáng phải truyền từ:',
    options: ['Môi trường có chiết suất lớn sang môi trường có chiết suất nhỏ hơn (n1 > n2)', 'Môi trường chiết suất nhỏ sang môi trường chiết suất lớn hơn (n1 < n2)', 'Chân không vào không khí', 'Không khí vào nước'],
    correctAnswer: 'Môi trường có chiết suất lớn sang môi trường có chiết suất nhỏ hơn (n1 > n2)',
    explanation: 'Điều kiện cần: tia sáng đi từ môi trường chiết quang hơn sang môi trường kém chiết quang hơn.'
  },
  {
    id: 'q6-3',
    lessonId: 6,
    difficulty: 'de',
    question: 'Điều kiện về góc tới i để xảy ra phản xạ toàn phần là:',
    options: ['i >= i_th (lớn hơn hoặc bằng góc tới hạn)', 'i < i_th', 'i = 0°', 'i <= 45°'],
    correctAnswer: 'i >= i_th (lớn hơn hoặc bằng góc tới hạn)',
    explanation: 'Góc tới i phải đạt từ góc tới hạn i_th trở lên.'
  },
  {
    id: 'q6-4',
    lessonId: 6,
    difficulty: 'de',
    question: 'Công thức xác định góc tới hạn phản xạ toàn phần i_th là:',
    options: ['sin(i_th) = n2 / n1', 'sin(i_th) = n1 / n2', 'tan(i_th) = n2 / n1', 'cos(i_th) = n2 / n1'],
    correctAnswer: 'sin(i_th) = n2 / n1',
    explanation: 'sin(i_th) = n2 / n1 với n1 > n2.'
  },
  {
    id: 'q6-5',
    lessonId: 6,
    difficulty: 'de',
    question: 'Cáp quang ứng dụng hiện tượng quang học nào sau đây để dẫn truyền tín hiệu thông tin?',
    options: ['Phản xạ toàn phần', 'Tán sắc ánh sáng', 'Giao thoa ánh sáng', 'Hiện tượng quang điện'],
    correctAnswer: 'Phản xạ toàn phần',
    explanation: 'Ánh sáng truyền dọc sợi quang nhờ phản xạ toàn phần liên tục ở mặt tiếp xúc giữa lõi và lớp vỏ.'
  },
  {
    id: 'q6-6',
    lessonId: 6,
    difficulty: 'de',
    question: 'Lớp lõi của sợi cáp quang có chiết suất n1 so với lớp vỏ bọc có chiết suất n2 phải thỏa mãn điều kiện:',
    options: ['n1 > n2', 'n1 < n2', 'n1 = n2', 'n1 = 1'],
    correctAnswer: 'n1 > n2',
    explanation: 'Lõi phải có chiết suất lớn hơn vỏ để ánh sáng đi từ lõi tới vỏ bị phản xạ toàn phần giữ lại trong lõi.'
  },
  {
    id: 'q6-7',
    lessonId: 6,
    difficulty: 'de',
    question: 'Hiện tượng ảo ảnh trên đường nhựa vào trưa hè nắng gắt là do hiện tượng quang học nào?',
    options: ['Phản xạ toàn phần của ánh sáng trong lớp không khí sát mặt đường', 'Nước từ lòng đường bốc hơi tạo vũng nước thật', 'Hiện tượng nhật thực', 'Ảo giác tâm lí của người đi đường'],
    correctAnswer: 'Phản xạ toàn phần của ánh sáng trong lớp không khí sát mặt đường',
    explanation: 'Không khí sát mặt đường nóng, chiết suất nhỏ hơn lớp khí lạnh phía trên, tia sáng truyền xiên bị bẻ cong và phản xạ toàn phần hắt lên mắt.'
  },
  {
    id: 'q6-8',
    lessonId: 6,
    difficulty: 'kho',
    question: 'Chiếu tia sáng từ thủy tinh (n1 = 1,5) ra không khí (n2 = 1). Góc tới hạn phản xạ toàn phần xấp xỉ bằng:',
    options: ['41,8°', '48,6°', '60,0°', '30,0°'],
    correctAnswer: '41,8°',
    explanation: 'sin(i_th) = 1 / 1,5 = 2/3 ≈ 0,667 => i_th ≈ 41,8°.'
  },
  {
    id: 'q6-9',
    lessonId: 6,
    difficulty: 'kho',
    question: 'Chiếu tia sáng từ nước (n1 = 4/3) ra không khí với góc tới i = 60°. Kết luận nào sau đây là ĐÚNG?',
    options: ['Xảy ra phản xạ toàn phần, không có tia khúc xạ ra không khí', 'Có tia khúc xạ với góc r = 30°', 'Tia sáng truyền thẳng không lệch', 'Toàn bộ tia sáng bị nước hấp thụ'],
    correctAnswer: 'Xảy ra phản xạ toàn phần, không có tia khúc xạ ra không khí',
    explanation: 'sin(i_th) = 1 / (4/3) = 0,75 => i_th ≈ 48,6°. Vì góc tới i = 60° > 48,6° nên xảy ra phản xạ toàn phần.'
  },
  {
    id: 'q6-10',
    lessonId: 6,
    difficulty: 'kho',
    question: 'Tại sao kim cương được cắt mài tinh xảo lại có độ lấp lánh rực rỡ vượt trội so với các loại thủy tinh thông thường?',
    options: ['Kim cương có chiết suất rất lớn (n ≈ 2,42) nên góc tới hạn rất nhỏ (i_th ≈ 24°), hầu hết ánh sáng vào trong đều bị phản xạ toàn phần nhiều lần trước khi ra ngoài', 'Kim cương tự phát ra ánh sáng trong bóng tối', 'Kim cương có lớp sơn phản quang đặc biệt', 'Kim cương dẫn điện rất tốt'],
    correctAnswer: 'Kim cương có chiết suất rất lớn (n ≈ 2,42) nên góc tới hạn rất nhỏ (i_th ≈ 24°), hầu hết ánh sáng vào trong đều bị phản xạ toàn phần nhiều lần trước khi ra ngoài',
    explanation: 'Góc tới hạn rất nhỏ làm cho hầu như bất kì tia sáng nào lọt vào bên trong cũng bị phản xạ toàn phần liên tiếp giữa các mặt cắt rồi mới ló ra.'
  },
  {
    id: 'q6-11',
    lessonId: 6,
    difficulty: 'kho',
    question: 'Ưu điểm nổi bật của cáp quang so với cáp đồng truyền thống là gì?',
    options: ['Dung lượng truyền dẫn dữ liệu cực lớn, tốc độ cao, không bị nhiễu sóng điện từ và suy hao tín hiệu rất thấp', 'Cáp quang rẻ tiền hơn dây thép', 'Cáp quang có thể uốn gập gãy đôi mà không ảnh hưởng tín hiệu', 'Cáp quang dẫn điện tốt hơn đồng'],
    correctAnswer: 'Dung lượng truyền dẫn dữ liệu cực lớn, tốc độ cao, không bị nhiễu sóng điện từ và suy hao tín hiệu rất thấp',
    explanation: 'Tín hiệu ánh sáng qua cáp quang có băng thông cực rộng và miễn nhiễm hoàn toàn với nhiễu sét, nhiễu điện từ trường.'
  },
  {
    id: 'q6-12',
    lessonId: 6,
    difficulty: 'kho',
    question: 'Góc tới hạn phản xạ toàn phần từ một khối chất trong suốt ra không khí là i_th = 45°. Chiết suất của chất đó là:',
    options: ['√2 ≈ 1,414', '1,50', '2,00', '1,33'],
    correctAnswer: '√2 ≈ 1,414',
    explanation: 'sin(i_th) = 1 / n => sin(45°) = 1 / n => √2 / 2 = 1 / n => n = √2 ≈ 1,414.'
  },
  {
    id: 'q6-13',
    lessonId: 6,
    difficulty: 'kho',
    question: 'Trong thí nghiệm với bản bán trụ thủy tinh, khi tăng dần góc tới i từ 0° lên đến 90° thì độ sáng của tia khúc xạ và tia phản xạ thay đổi như thế nào trước khi đạt i_th?',
    options: ['Tia khúc xạ mờ dần, tia phản xạ sáng dần lên', 'Tia khúc xạ sáng dần, tia phản xạ mờ dần', 'Cả hai tia đều không đổi độ sáng', 'Tia khúc xạ biến mất ngay từ góc 10°'],
    correctAnswer: 'Tia khúc xạ mờ dần, tia phản xạ sáng dần lên',
    explanation: 'Càng tới gần góc tới hạn, năng lượng chuyển dần từ chùm khúc xạ sang chùm phản xạ cho đến khi toàn phần.'
  },
  {
    id: 'q6-14',
    lessonId: 6,
    difficulty: 'kho',
    question: 'Nội soi y học dùng bó sợi quang học mềm để thăm khám dạ dày hoạt động dựa trên cơ sở:',
    options: ['Ánh sáng dẫn truyền qua các sợi quang nhờ phản xạ toàn phần đưa hình ảnh ra màn hình ngoài', 'Sử dụng tia X quét qua cơ thể', 'Sử dụng nam châm hút dịch vị', 'Dùng gương phẳng soi trực tiếp từ miệng'],
    correctAnswer: 'Ánh sáng dẫn truyền qua các sợi quang nhờ phản xạ toàn phần đưa hình ảnh ra màn hình ngoài',
    explanation: 'Bó sợi cáp quang dẫn ánh sáng vào khoang dạ dày và dẫn hình ảnh quang học trở lại camera ngoài.'
  },
  {
    id: 'q6-15',
    lessonId: 6,
    difficulty: 'cuc_kho',
    question: 'Một ngọn đèn nhỏ S đặt ở đáy một bể nước sâu h = 60 cm. Biết chiết suất của nước là n = 4/3. Trên mặt nước có một vùng tròn sáng do các tia sáng ló ra ngoài không khí. Bán kính R của hình tròn sáng này là:',
    options: ['68 cm', '60 cm', '45 cm', '80 cm'],
    correctAnswer: '68 cm',
    explanation: 'Tia sáng ở mép hình tròn sáng tới mặt nước dưới góc tới hạn: sin(i_th) = 1/n = 3/4 => tan(i_th) = 3 / √(4^2 - 3^2) = 3 / √7 ≈ 1,1339. Bán kính R = h * tan(i_th) = 60 * (3 / √7) ≈ 68,04 cm.'
  },
  {
    id: 'q6-16',
    lessonId: 6,
    difficulty: 'cuc_kho',
    question: 'Chiếu tia sáng từ môi trường 1 có chiết suất n1 sang môi trường 2 có chiết suất n2. Biết góc tới hạn phản xạ toàn phần là 60°. Tỉ số tốc độ ánh sáng v1 / v2 giữa hai môi trường là:',
    options: ['√3 / 2 ≈ 0,866', '2 / √3', '1 / 2', '2'],
    correctAnswer: '√3 / 2 ≈ 0,866',
    explanation: 'sin(i_th) = n2 / n1 = sin(60°) = √3 / 2. Lại có n2 / n1 = (c/v2) / (c/v1) = v1 / v2 => v1 / v2 = √3 / 2.'
  },
  {
    id: 'q6-17',
    lessonId: 6,
    difficulty: 'cuc_kho',
    question: 'Một lăng kính phản xạ toàn phần có tiết diện là tam giác vuông cân ABC vuông tại A đặt trong không khí. Chiếu tia sáng vuông góc với mặt bên AB. Tia sáng sẽ:',
    options: ['Đi thẳng vào lăng kính, phản xạ toàn phần tại mặt huyền BC và ló vuông góc ra khỏi mặt bên AC', 'Khúc xạ ra ngoài mặt huyền BC', 'Bị phản xạ ngược trở lại nguồn sáng ngay tại AB', 'Bị tán sắc thành cầu vồng'],
    correctAnswer: 'Đi thẳng vào lăng kính, phản xạ toàn phần tại mặt huyền BC và ló vuông góc ra khỏi mặt bên AC',
    explanation: 'Góc tới ở mặt huyền BC là 45° > i_th thủy tinh (≈ 42°) nên phản xạ toàn phần bẻ hướng tia sáng 90° ra mặt AC.'
  },
  {
    id: 'q6-18',
    lessonId: 6,
    difficulty: 'cuc_kho',
    question: 'Một sợi quang hình trụ có lõi chiết suất n1 = 1,5 và vỏ chiết suất n2 = 1,414 (√2). Góc tới hạn phản xạ toàn phần giữa lõi và vỏ là:',
    options: ['70,5°', '45,0°', '60,0°', '30,0°'],
    correctAnswer: '70,5°',
    explanation: 'sin(i_th) = n2 / n1 = √2 / 1,5 ≈ 0,9428 => i_th = arcsin(0,9428) ≈ 70,53°.'
  },
  {
    id: 'q6-19',
    lessonId: 6,
    difficulty: 'cuc_kho',
    question: 'Khi quan sát một miếng xốp nổi trên mặt nước có gắn cây đinh dài cắm thẳng đứng xuống nước, nếu miếng xốp đủ lớn thì từ trên không khí nhìn nghiêng ta không thể nhìn thấy mũi đinh. Hiện tượng này được giải thích bởi:',
    options: ['Tất cả các tia sáng từ mũi đinh đi ra mép miếng xốp đều bị phản xạ toàn phần không thể ló lên không khí', 'Miếng xốp phát ra bóng tối che khuất', 'Nước hấp thụ hoàn toàn tia sáng từ mũi đinh', 'Đinh bị tan trong nước'],
    correctAnswer: 'Tất cả các tia sáng từ mũi đinh đi ra mép miếng xốp đều bị phản xạ toàn phần không thể ló lên không khí',
    explanation: 'Khi bán kính miếng xốp R >= h * tan(i_th), các tia sáng từ mũi đinh tới mặt nước ngoài mép xốp đều có góc tới i >= i_th nên phản xạ toàn phần ngược xuống đáy bể.'
  },
  {
    id: 'q6-20',
    lessonId: 6,
    difficulty: 'cuc_kho',
    question: 'Để truyền tín hiệu ánh sáng đi được khoảng cách hàng trăm km trong cáp quang viễn thông ngầm dưới biển mà ít bị suy hao nhất, người ta sử dụng:',
    options: ['Thủy tinh siêu tinh khiết có độ tán xạ cực thấp và ánh sáng laser bước sóng hồng ngoại (1,31 - 1,55 μm)', 'Sợi nhựa tái chế thông thường và ánh sáng đèn pin', 'Sợi dây đồng bọc bạc', 'Ánh sáng tử ngoại công suất cao'],
    correctAnswer: 'Thủy tinh siêu tinh khiết có độ tán xạ cực thấp và ánh sáng laser bước sóng hồng ngoại (1,31 - 1,55 μm)',
    explanation: 'Thủy tinh thạch anh siêu tinh khiết ở bước sóng hồng ngoại có hệ số suy hao cực tiểu (< 0,2 dB/km) kết hợp phản xạ toàn phần.'
  }
];
