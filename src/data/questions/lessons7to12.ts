import { Question } from '../../types';

export const QUESTIONS_7_TO_12: Question[] = [
  // --- BÀI 7: LĂNG KÍNH (20 CÂU) ---
  {
    id: 'q7-1',
    lessonId: 7,
    difficulty: 'de',
    question: 'Lăng kính là một khối chất trong suốt, đồng chất thường có dạng:',
    options: ['Lăng trụ tam giác', 'Hình lập phương', 'Hình cầu', 'Hình trụ tròn'],
    correctAnswer: 'Lăng trụ tam giác',
    explanation: 'Theo định nghĩa SGK, lăng kính là khối chất trong suốt thường có dạng lăng trụ tam giác.'
  },
  {
    id: 'q7-2',
    lessonId: 7,
    difficulty: 'de',
    question: 'Khi chiếu một chùm sáng trắng hẹp qua lăng kính, chùm tia ló bị tách ra thành:',
    options: ['Dải màu biến thiên liên tục từ đỏ đến tím (quang phổ ánh sáng trắng)', 'Chỉ có màu đỏ và xanh', 'Ánh sáng trắng sáng hơn gấp đôi', 'Tia laser màu đen'],
    correctAnswer: 'Dải màu biến thiên liên tục từ đỏ đến tím (quang phổ ánh sáng trắng)',
    explanation: 'Hiện tượng này gọi là sự tán sắc ánh sáng trắng qua lăng kính.'
  },
  {
    id: 'q7-3',
    lessonId: 7,
    difficulty: 'de',
    question: 'Ánh sáng đơn sắc là ánh sáng có đặc điểm nào sau đây?',
    options: ['Có một màu nhất định và không bị tán sắc khi đi qua lăng kính', 'Bị tách thành 7 màu khi qua lăng kính', 'Có màu trắng', 'Luôn luôn là tia sáng màu đỏ'],
    correctAnswer: 'Có một màu nhất định và không bị tán sắc khi đi qua lăng kính',
    explanation: 'Ánh sáng đơn sắc có một bước sóng xác định, chỉ bị khúc xạ lệch về đáy lăng kính chứ không bị tán sắc đổi màu.'
  },
  {
    id: 'q7-4',
    lessonId: 7,
    difficulty: 'de',
    question: 'Trong hiện tượng tán sắc qua lăng kính, tia sáng màu nào bị lệch về phía đáy lăng kính nhiều nhất?',
    options: ['Màu tím', 'Màu đỏ', 'Màu vàng', 'Màu lục'],
    correctAnswer: 'Màu tím',
    explanation: 'Chiết suất của chất làm lăng kính đối với ánh sáng tím là lớn nhất nên tia tím bị lệch nhiều nhất.'
  },
  {
    id: 'q7-5',
    lessonId: 7,
    difficulty: 'de',
    question: 'Trong hiện tượng tán sắc qua lăng kính, tia sáng màu nào bị lệch ít nhất?',
    options: ['Màu đỏ', 'Màu tím', 'Màu chàm', 'Màu da cam'],
    correctAnswer: 'Màu đỏ',
    explanation: 'Chiết suất đối với ánh sáng đỏ là nhỏ nhất nên tia đỏ bị lệch ít nhất.'
  },
  {
    id: 'q7-6',
    lessonId: 7,
    difficulty: 'de',
    question: 'Một bông hoa hồng có màu đỏ dưới ánh sáng mặt trời là vì:',
    options: ['Cánh hoa phản xạ ánh sáng đỏ vào mắt ta và hấp thụ các màu khác', 'Cánh hoa tự phát ra ánh sáng màu đỏ trong bóng tối', 'Mắt người tự nhuộm màu đỏ', 'Cánh hoa hấp thụ ánh sáng màu đỏ'],
    correctAnswer: 'Cánh hoa phản xạ ánh sáng đỏ vào mắt ta và hấp thụ các màu khác',
    explanation: 'Màu của vật là màu của ánh sáng mà vật đó phản xạ vào mắt người quan sát.'
  },
  {
    id: 'q7-7',
    lessonId: 7,
    difficulty: 'de',
    question: 'Vật có màu đen có đặc điểm quang học nào sau đây?',
    options: ['Hấp thụ hầu như tất cả các ánh sáng màu và không phản xạ ánh sáng', 'Phản xạ toàn bộ ánh sáng chiếu vào nó', 'Phát ra tia laser đen', 'Là nguồn sáng tự nhiên'],
    correctAnswer: 'Hấp thụ hầu như tất cả các ánh sáng màu và không phản xạ ánh sáng',
    explanation: 'Vật màu đen không phản xạ ánh sáng, ta nhận ra nó vì nó nằm cạnh các vật khác có phản xạ ánh sáng.'
  },
  {
    id: 'q7-8',
    lessonId: 7,
    difficulty: 'kho',
    question: 'Chiếu ánh sáng trắng qua một tấm kính lọc sắc màu lục rồi chiếu vào bông hoa màu đỏ. Mắt ta sẽ nhìn thấy bông hoa có màu gì?',
    options: ['Màu gần như đen hoặc màu xỉn tối', 'Màu lục tươi', 'Màu đỏ rực', 'Màu trắng sáng'],
    correctAnswer: 'Màu gần như đen hoặc màu xỉn tối',
    explanation: 'Tấm lọc chỉ cho ánh sáng lục đi qua; bông hoa đỏ hấp thụ ánh sáng lục và không phản xạ gì nên nhìn thấy màu đen xỉn.'
  },
  {
    id: 'q7-9',
    lessonId: 7,
    difficulty: 'kho',
    question: 'Cầu vồng thường xuất hiện sau cơn mưa rào mùa hè khi trời hửng nắng. Hiện tượng này được giải thích bởi:',
    options: ['Sự khúc xạ, phản xạ toàn phần và tán sắc ánh sáng mặt trời qua các giọt nước mưa', 'Mặt Trời chiếu đèn màu vào mây', 'Phản ứng hoá học giữa nước mưa và bụi khí quyển', 'Hiện tượng cực quang'],
    correctAnswer: 'Sự khúc xạ, phản xạ toàn phần và tán sắc ánh sáng mặt trời qua các giọt nước mưa',
    explanation: 'Mỗi giọt nước mưa đóng vai trò như một lăng kính nhỏ vừa khúc xạ, phản xạ toàn phần và tán sắc ánh sáng mặt trời.'
  },
  {
    id: 'q7-10',
    lessonId: 7,
    difficulty: 'kho',
    question: 'Khi góc chiết quang A của lăng kính nhỏ và góc tới i nhỏ, góc lệch D giữa tia ló và tia tới tính xấp xỉ bằng công thức:',
    options: ['D = (n - 1) * A', 'D = n * A', 'D = (n + 1) * A', 'D = A / n'],
    correctAnswer: 'D = (n - 1) * A',
    explanation: 'Công thức lăng kính góc nhỏ: D ≈ (n - 1) * A.'
  },
  {
    id: 'q7-11',
    lessonId: 7,
    difficulty: 'kho',
    question: 'Một lăng kính thủy tinh có góc chiết quang A = 60° và chiết suất n = 1,5 đối với tia vàng. Tia ló đi ra khỏi lăng kính luôn có xu hướng lệch về phía:',
    options: ['Đáy của lăng kính', 'Cạnh đỉnh của lăng kính', 'Phía bên trái nguồn phát', 'Không bị lệch'],
    correctAnswer: 'Đáy của lăng kính',
    explanation: 'Khi đi qua lăng kính đặt trong không khí, tia ló luôn bị lệch về phía đáy lăng kính.'
  },
  {
    id: 'q7-12',
    lessonId: 7,
    difficulty: 'kho',
    question: 'Để kiểm tra một chùm sáng có phải là ánh sáng đơn sắc hay không, phương pháp thực nghiệm tốt nhất là:',
    options: ['Cho chùm sáng đó đi qua lăng kính, nếu chỉ bị lệch mà không đổi màu hay tách dải màu thì đó là ánh sáng đơn sắc', 'Chiếu qua gương phẳng xem có phản xạ không', 'Đo nhiệt độ của chùm sáng', 'Chiếu qua kính lúp phóng to'],
    correctAnswer: 'Cho chùm sáng đó đi qua lăng kính, nếu chỉ bị lệch mà không đổi màu hay tách dải màu thì đó là ánh sáng đơn sắc',
    explanation: 'Thí nghiệm lăng kính của Newton: chùm sáng đơn sắc không bị tán sắc khi qua lăng kính.'
  },
  {
    id: 'q7-13',
    lessonId: 7,
    difficulty: 'kho',
    question: 'Tại sao biển báo giao thông nguy hiểm hoặc đèn hậu xe cộ thường dùng màu đỏ?',
    options: ['Ánh sáng đỏ bị tán xạ ít nhất trong sương mù và khói bụi nên truyền được xa nhất', 'Màu đỏ là màu ấm nhất', 'Đèn màu đỏ tiết kiệm điện hơn', 'Nhựa màu đỏ rẻ tiền hơn'],
    correctAnswer: 'Ánh sáng đỏ bị tán xạ ít nhất trong sương mù và khói bụi nên truyền được xa nhất',
    explanation: 'Ánh sáng đỏ có bước sóng dài nhất trong quang phổ khả kiến, ít bị tán xạ bởi các hạt bụi và sương mù khí quyển.'
  },
  {
    id: 'q7-14',
    lessonId: 7,
    difficulty: 'kho',
    question: 'Đĩa tròn Newton sơn 7 màu theo tỉ lệ cầu vồng. Khi quay đĩa thật nhanh bằng mô tơ, mắt người sẽ nhìn thấy đĩa có màu gì?',
    options: ['Màu trắng ngà hoặc xám nhạt', 'Màu đen kịt', 'Màu tím sẫm', 'Vẫn thấy tách bạch 7 màu riêng biệt'],
    correctAnswer: 'Màu trắng ngà hoặc xám nhạt',
    explanation: 'Do hiện tượng lưu ảnh trên võng mạc, 7 màu trộn lẫn vào nhau tạo cảm giác màu trắng (tổng hợp ánh sáng trắng).'
  },
  {
    id: 'q7-15',
    lessonId: 7,
    difficulty: 'cuc_kho',
    question: 'Một lăng kính có góc chiết quang A = 6° được làm bằng thủy tinh có chiết suất với ánh sáng đỏ là n_đỏ = 1,50 và với ánh sáng tím là n_tím = 1,54. Góc tán sắc tạo bởi tia ló màu đỏ và tia ló màu tím là:',
    options: ['0,24°', '0,54°', '3,00°', '0,04°'],
    correctAnswer: '0,24°',
    explanation: 'D_đỏ = (n_đỏ - 1) * A = 0,50 * 6° = 3,00°. D_tím = (n_tím - 1) * A = 0,54 * 6° = 3,24°. Góc tán sắc ΔD = 3,24° - 3,00° = 0,24°.'
  },
  {
    id: 'q7-16',
    lessonId: 7,
    difficulty: 'cuc_kho',
    question: 'Trong máy quang phổ lăng kính, hệ tán sắc đóng vai trò gì trong việc phân tích thành phần cấu tạo hóa học của vật chất phát sáng?',
    options: ['Tách chùm sáng phức tạp từ nguồn sáng thành các vạch quang phổ đơn sắc đặc trưng cho các nguyên tố hóa học', 'Làm hội tụ chùm sáng thành một điểm sáng hội tụ', 'Biến đổi quang năng thành điện năng', 'Làm tăng độ sáng của đèn lên 100 lần'],
    correctAnswer: 'Tách chùm sáng phức tạp từ nguồn sáng thành các vạch quang phổ đơn sắc đặc trưng cho các nguyên tố hóa học',
    explanation: 'Mỗi nguyên tố khi bị kích thích phát quang phát ra quang phổ vạch đặc trưng, lăng kính giúp tách và nhận diện các vạch này.'
  },
  {
    id: 'q7-17',
    lessonId: 7,
    difficulty: 'cuc_kho',
    question: 'Chiếu chùm sáng trắng hẹp vuông góc với mặt bên AB của một lăng kính có góc chiết quang A = 40°. Cho biết chiết suất của thủy tinh đối với ánh sáng đỏ là 1,52 và với ánh sáng tím là 1,58. Kết luận nào sau đây đúng khi tia sáng tới mặt bên AC?',
    options: ['Cả tia đỏ và tia tím đều ló ra ngoài không khí nhưng bị tách màu tán sắc', 'Tia đỏ bị phản xạ toàn phần còn tia tím ló ra ngoài', 'Tia tím bị phản xạ toàn phần còn tia đỏ ló ra ngoài', 'Cả hai tia đều bị phản xạ toàn phần bên trong lăng kính'],
    correctAnswer: 'Cả tia đỏ và tia tím đều ló ra ngoài không khí nhưng bị tách màu tán sắc',
    explanation: 'Tia tới vuông góc AB nên truyền thẳng tới mặt AC với góc tới i = 40°. Góc tới hạn tím sin(i_th) = 1/1,58 ≈ 0,633 => i_th ≈ 39,3°. Vì i = 40° > 39,3° nên tia tím bị phản xạ toàn phần, tia đỏ có sin(i_th) = 1/1,52 ≈ 0,658 => i_th ≈ 41,1° > 40° nên ló ra ngoài.'
  },
  {
    id: 'q7-18',
    lessonId: 7,
    difficulty: 'cuc_kho',
    question: 'Hiện tượng tán sắc ánh sáng chứng tỏ điều cốt lõi nào về bản chất của ánh sáng trắng?',
    options: ['Ánh sáng trắng không phải là ánh sáng đơn sắc mà là tập hợp của vô số ánh sáng đơn sắc có màu biến thiên liên tục từ đỏ đến tím', 'Ánh sáng trắng do lăng kính tự nhuộm màu', 'Ánh sáng trắng chỉ gồm 3 màu cơ bản là đỏ, lục và lam', 'Ánh sáng trắng là sóng âm tần số cao'],
    correctAnswer: 'Ánh sáng trắng không phải là ánh sáng đơn sắc mà là tập hợp của vô số ánh sáng đơn sắc có màu biến thiên liên tục từ đỏ đến tím',
    explanation: 'Đây là phát kiến vĩ đại của Isaac Newton giải thích bản chất quang phổ liên tục của ánh sáng Mặt Trời.'
  },
  {
    id: 'q7-19',
    lessonId: 7,
    difficulty: 'cuc_kho',
    question: 'Khi nhìn lên bầu trời ban ngày không có mây, ta thấy bầu trời có màu xanh lam. Hiện tượng này là do:',
    options: ['Tán xạ Rayleigh: các phân tử không khí trong khí quyển tán xạ ánh sáng bước sóng ngắn (xanh lam) mạnh hơn nhiều so với ánh sáng bước sóng dài (đỏ)', 'Khí quyển có chứa khí chlorine màu xanh', 'Đại dương phản chiếu màu xanh lên bầu trời', 'Tầng ôdôn tự phát quang'],
    correctAnswer: 'Tán xạ Rayleigh: các phân tử không khí trong khí quyển tán xạ ánh sáng bước sóng ngắn (xanh lam) mạnh hơn nhiều so với ánh sáng bước sóng dài (đỏ)',
    explanation: 'Ánh sáng xanh lam có bước sóng ngắn bị tán xạ mạnh gấp nhiều lần ánh sáng đỏ bởi các phân tử khí quyển, lan toả khắp bầu trời.'
  },
  {
    id: 'q7-20',
    lessonId: 7,
    difficulty: 'cuc_kho',
    question: 'Khi Mặt Trời lặn hoặc mọc ở sát đường chân trời, ta lại nhìn thấy bầu trời và Mặt Trời có màu đỏ rực (hoàng hôn/bình minh) là vì:',
    options: ['Tia sáng phải truyền qua lớp khí quyển rất dày, các ánh sáng bước sóng ngắn bị tán xạ gần hết, chỉ còn ánh sáng đỏ và da cam ít bị tán xạ truyền thẳng tới mắt', 'Nhiệt độ của Mặt Trời giảm vào buổi chiều tối', 'Mặt Trời cháy dữ dội hơn lúc chiều tà', 'Mặt đất bốc hơi khí nóng màu đỏ'],
    correctAnswer: 'Tia sáng phải truyền qua lớp khí quyển rất dày, các ánh sáng bước sóng ngắn bị tán xạ gần hết, chỉ còn ánh sáng đỏ và da cam ít bị tán xạ truyền thẳng tới mắt',
    explanation: 'Quãng đường truyền trong khí quyển lúc hoàng hôn dài nhất, màu xanh bị phân tán mất hết, chỉ còn các tia đỏ truyền tới mắt.'
  },

  // --- BÀI 8: THẤU KÍNH (20 CÂU) ---
  {
    id: 'q8-1',
    lessonId: 8,
    difficulty: 'de',
    question: 'Thấu kính hội tụ có đặc điểm hình dạng là:',
    options: ['Phần rìa mỏng hơn phần giữa', 'Phần rìa dày hơn phần giữa', 'Mỏng đều từ giữa ra mép', 'Có hình dạng cầu rỗng'],
    correctAnswer: 'Phần rìa mỏng hơn phần giữa',
    explanation: 'Thấu kính hội tụ (rìa mỏng) có phần giữa dày và phần rìa mỏng.'
  },
  {
    id: 'q8-2',
    lessonId: 8,
    difficulty: 'de',
    question: 'Thấu kính phân kì có đặc điểm hình dạng là:',
    options: ['Phần rìa dày hơn phần giữa', 'Phần rìa mỏng hơn phần giữa', 'Phần giữa phình to', 'Là khối cầu đặc'],
    correctAnswer: 'Phần rìa dày hơn phần giữa',
    explanation: 'Thấu kính phân kì (rìa dày) có phần giữa mỏng và phần mép rìa dày.'
  },
  {
    id: 'q8-3',
    lessonId: 8,
    difficulty: 'de',
    question: 'Mọi tia sáng đi qua quang tâm O của thấu kính đều có đặc điểm là:',
    options: ['Truyền thẳng không đổi hướng', 'Bị khúc xạ vuông góc', 'Bị phản xạ quay ngược lại', 'Đi qua tiêu điểm F'],
    correctAnswer: 'Truyền thẳng không đổi hướng',
    explanation: 'Tia sáng đi qua quang tâm O tiếp tục truyền thẳng.'
  },
  {
    id: 'q8-4',
    lessonId: 8,
    difficulty: 'de',
    question: 'Tia tới song song với trục chính của thấu kính hội tụ cho tia ló:',
    options: ['Đi qua tiêu điểm chính F\' của thấu kính', 'Truyền thẳng song song tiếp', 'Lệch ra xa trục chính', 'Quay ngược trở lại nguồn sáng'],
    correctAnswer: 'Đi qua tiêu điểm chính F\' của thấu kính',
    explanation: 'Quy tắc tia đặc biệt: tia tới song song trục chính cho tia ló đi qua tiêu điểm chính.'
  },
  {
    id: 'q8-5',
    lessonId: 8,
    difficulty: 'de',
    question: 'Ảnh thật của một vật tạo bởi thấu kính có đặc điểm nào sau đây?',
    options: ['Hứng được trên màn chắn', 'Không bao giờ hứng được trên màn chắn', 'Luôn cùng chiều với vật', 'Chỉ nhìn thấy khi áp sát mắt vào thấu kính'],
    correctAnswer: 'Hứng được trên màn chắn',
    explanation: 'Ảnh thật được tạo bởi chùm tia ló hội tụ và hứng được trên màn chắn.'
  },
  {
    id: 'q8-6',
    lessonId: 8,
    difficulty: 'de',
    question: 'Thấu kính phân kì đặt trước một vật sáng luôn cho:',
    options: ['Ảnh ảo, cùng chiều và nhỏ hơn vật', 'Ảnh thật, ngược chiều và lớn hơn vật', 'Ảnh thật, cùng chiều và bằng vật', 'Ảnh ảo, lớn hơn vật'],
    correctAnswer: 'Ảnh ảo, cùng chiều và nhỏ hơn vật',
    explanation: 'Vật thật đặt trước thấu kính phân kì luôn cho ảnh ảo cùng chiều và nhỏ hơn vật.'
  },
  {
    id: 'q8-7',
    lessonId: 8,
    difficulty: 'de',
    question: 'Tiêu cự f của thấu kính là khoảng cách từ:',
    options: ['Quang tâm O đến tiêu điểm chính F', 'Vật sáng đến thấu kính', 'Ảnh đến màn hứng', 'Rìa thấu kính đến tâm'],
    correctAnswer: 'Quang tâm O đến tiêu điểm chính F',
    explanation: 'OF = OF\' = f gọi là tiêu cự của thấu kính.'
  },
  {
    id: 'q8-8',
    lessonId: 8,
    difficulty: 'kho',
    question: 'Muốn dùng thấu kính hội tụ để thu được ảnh ảo, lớn hơn vật và cùng chiều với vật, ta phải đặt vật ở vị trí nào?',
    options: ['Trong khoảng tiêu cự (d < f)', 'Ngoài khoảng tiêu cự (d > f)', 'Tại đúng vị trí d = 2f', 'Ở rất xa thấu kính (vô cực)'],
    correctAnswer: 'Trong khoảng tiêu cự (d < f)',
    explanation: 'Khi đặt vật trong khoảng tiêu cự (d < f) của thấu kính hội tụ, chùm tia ló phân kì tạo nên ảnh ảo lớn hơn vật.'
  },
  {
    id: 'q8-9',
    lessonId: 8,
    difficulty: 'kho',
    question: 'Khi đặt vật sáng AB vuông góc với trục chính của thấu kính hội tụ tại khoảng cách d = 2f thì ảnh A\'B\' thu được là:',
    options: ['Ảnh thật, ngược chiều và có kích thước bằng đúng vật (h\' = h)', 'Ảnh ảo, cùng chiều và lớn hơn vật', 'Ảnh thật, nhỏ hơn vật 2 lần', 'Ảnh ở vô cực không rõ nét'],
    correctAnswer: 'Ảnh thật, ngược chiều và có kích thước bằng đúng vật (h\' = h)',
    explanation: 'Trường hợp đối xứng Silbermann: d = 2f cho d\' = 2f, ảnh thật ngược chiều và bằng vật.'
  },
  {
    id: 'q8-10',
    lessonId: 8,
    difficulty: 'kho',
    question: 'Một thấu kính hội tụ có tiêu cự f = 20 cm. Đặt vật sáng cách thấu kính d = 30 cm. Ảnh thu được là:',
    options: ['Ảnh thật, ngược chiều và cách thấu kính 60 cm', 'Ảnh ảo, cùng chiều cách 12 cm', 'Ảnh thật, cách 20 cm', 'Ảnh ảo, cách 60 cm'],
    correctAnswer: 'Ảnh thật, ngược chiều và cách thấu kính 60 cm',
    explanation: '1/d\' = 1/f - 1/d = 1/20 - 1/30 = 1/60 => d\' = 60 cm > 0 (ảnh thật ngược chiều).'
  },
  {
    id: 'q8-11',
    lessonId: 8,
    difficulty: 'kho',
    question: 'Một vật sáng AB cao 4 cm đặt trước thấu kính hội tụ cho ảnh thật cao 8 cm trên màn hứng. Tỉ số khoảng cách d\' / d giữa ảnh và vật đến thấu kính là:',
    options: ['2', '0,5', '4', '1'],
    correctAnswer: '2',
    explanation: 'Độ phóng đại k = h\' / h = d\' / d = 8 / 4 = 2.'
  },
  {
    id: 'q8-12',
    lessonId: 8,
    difficulty: 'kho',
    question: 'Để đốt cháy một mẩu giấy bằng ánh sáng mặt trời ngoài trời nắng, người ta thường dùng loại thấu kính nào?',
    options: ['Thấu kính hội tụ hứng chùm sáng song song từ Mặt Trời hội tụ tại tiêu điểm', 'Thấu kính phân kì', 'Gương phẳng', 'Bản thủy tinh hai mặt song song'],
    correctAnswer: 'Thấu kính hội tụ hứng chùm sáng song song từ Mặt Trời hội tụ tại tiêu điểm',
    explanation: 'Chùm tia sáng Mặt Trời song song qua thấu kính hội tụ tụ lại tại tiêu điểm làm nhiệt độ tăng vọt đốt cháy giấy.'
  },
  {
    id: 'q8-13',
    lessonId: 8,
    difficulty: 'kho',
    question: 'Tia tới đi qua tiêu điểm chính F của thấu kính hội tụ sẽ cho tia ló:',
    options: ['Song song với trục chính', 'Đi thẳng qua quang tâm O', 'Quay ngược lại 180°', 'Lệch vuông góc với thấu kính'],
    correctAnswer: 'Song song với trục chính',
    explanation: 'Theo tính chất thuận nghịch của chiều truyền ánh sáng, tia qua F cho tia ló song song trục chính.'
  },
  {
    id: 'q8-14',
    lessonId: 8,
    difficulty: 'kho',
    question: 'Nếu che khuất một nửa trên của thấu kính hội tụ bằng một tấm bìa đen khi đang hứng ảnh thật của một ngọn nến trên màn chắn thì ảnh trên màn sẽ:',
    options: ['Vẫn đầy đủ cả ngọn nến nhưng độ sáng giảm đi một nửa', 'Bị mất một nửa phía trên của ảnh', 'Bị mất một nửa phía dưới của ảnh', 'Biến mất hoàn toàn'],
    correctAnswer: 'Vẫn đầy đủ cả ngọn nến nhưng độ sáng giảm đi một nửa',
    explanation: 'Nửa dưới của thấu kính vẫn hứng được các chùm tia từ mọi điểm của vật để tạo ảnh đầy đủ, chỉ giảm bớt lượng quang thông nên ảnh tối hơn.'
  },
  {
    id: 'q8-15',
    lessonId: 8,
    difficulty: 'cuc_kho',
    question: 'Đặt vật sáng AB vuông góc với trục chính của một thấu kính hội tụ có tiêu cự f. Khi dịch chuyển vật từ vị trí d = 3f lại gần thấu kính đến vị trí d = 1,5f thì ảnh thật của vật sẽ:',
    options: ['Dịch chuyển ra xa thấu kính và kích thước ảnh lớn dần lên', 'Dịch chuyển lại gần thấu kính và nhỏ dần đi', 'Đứng yên một chỗ', 'Biến thành ảnh ảo ngay lập tức'],
    correctAnswer: 'Dịch chuyển ra xa thấu kính và kích thước ảnh lớn dần lên',
    explanation: 'Khi d giảm từ 3f xuống 1,5f (vẫn > f), d\' tăng từ 1,5f lên 3f (ảnh chạy ra xa) và h\'/h tăng từ 0,5 lên 2.'
  },
  {
    id: 'q8-16',
    lessonId: 8,
    difficulty: 'cuc_kho',
    question: 'Khoảng cách ngắn nhất giữa một vật thật và ảnh thật của nó tạo bởi thấu kính hội tụ có tiêu cự f là:',
    options: ['4f', '2f', 'f', 'f / 2'],
    correctAnswer: '4f',
    explanation: 'L = d + d\'. Theo BĐT Cauchy: d + d\' >= 2√(d.d\') = 2√(f(d+d\')) => L >= 4f (đạt được khi d = d\' = 2f).'
  },
  {
    id: 'q8-17',
    lessonId: 8,
    difficulty: 'cuc_kho',
    question: 'Một điểm sáng S nằm trên trục chính của thấu kính hội tụ có f = 10 cm, cách thấu kính 15 cm. Điểm sáng S bắt đầu chuyển động ra xa thấu kính theo trục chính với vận tốc 3 cm/s. Vận tốc tức thời của ảnh S\' tại thời điểm ban đầu là:',
    options: ['12 cm/s', '6 cm/s', '3 cm/s', '1,5 cm/s'],
    correctAnswer: '12 cm/s',
    explanation: 'Ban đầu d = 15 cm => d\' = 30 cm. Độ phóng đại dọc bằng k^2 = (d\'/d)^2 = (30/15)^2 = 4. Vận tốc ảnh v\' = k^2 * v = 4 * 3 = 12 cm/s.'
  },
  {
    id: 'q8-18',
    lessonId: 8,
    difficulty: 'cuc_kho',
    question: 'Một thấu kính phân kì có tiêu cự f = 15 cm. Đặt vật sáng AB cách thấu kính d = 30 cm. Vị trí và số phóng đại của ảnh là:',
    options: ['Ảnh ảo cách thấu kính 10 cm, cao bằng 1/3 vật', 'Ảnh thật cách thấu kính 30 cm, cao bằng vật', 'Ảnh ảo cách thấu kính 15 cm, cao gấp đôi vật', 'Ảnh thật cách thấu kính 10 cm'],
    correctAnswer: 'Ảnh ảo cách thấu kính 10 cm, cao bằng 1/3 vật',
    explanation: 'Với thấu kính phân kì quy ước tiêu cự âm f = -15 cm => 1/d\' = 1/(-15) - 1/30 = -3/30 = -1/10 => d\' = -10 cm (ảnh ảo cách 10 cm). k = |d\'/d| = 10 / 30 = 1/3.'
  },
  {
    id: 'q8-19',
    lessonId: 8,
    difficulty: 'cuc_kho',
    question: 'Để chữa tật cận thị ở mắt người, người ta dùng một thấu kính có tác dụng làm giảm độ tụ của hệ quang học mắt, giúp ảnh của vật ở xa lùi về đúng màng lưới. Đó là thấu kính:',
    options: ['Thấu kính phân kì thích hợp', 'Thấu kính hội tụ có độ tụ lớn', 'Kính lúp', 'Lăng kính tam giác'],
    correctAnswer: 'Thấu kính phân kì thích hợp',
    explanation: 'Mắt cận thị có tiêu cự quá ngắn làm chùm tia hội tụ trước võng mạc, cần đeo kính phân kì để phân kì chùm tia lùi đúng võng mạc.'
  },
  {
    id: 'q8-20',
    lessonId: 8,
    difficulty: 'cuc_kho',
    question: 'Vật sáng AB và màn chắn E đặt cố định cách nhau 90 cm. Đặt một thấu kính hội tụ vào khoảng giữa vật và màn thì tìm được hai vị trí của thấu kính đều cho ảnh rõ nét trên màn. Biết hai vị trí này cách nhau 30 cm. Tiêu cự của thấu kính là:',
    options: ['20 cm', '15 cm', '25 cm', '10 cm'],
    correctAnswer: '20 cm',
    explanation: 'Công thức phương pháp Bessel: f = (L^2 - l^2) / (4L) = (90^2 - 30^2) / (4 * 90) = (8100 - 900) / 360 = 7200 / 360 = 20 cm.'
  },

  // --- BÀI 9: ĐO TIÊU CỰ THẤU KÍNH HỘI TỤ (20 CÂU) ---
  {
    id: 'q9-1',
    lessonId: 9,
    difficulty: 'de',
    question: 'Phương pháp Silbermann dùng để đo tiêu cự của thấu kính hội tụ dựa trên nguyên tắc nào?',
    options: ['Đặt vật ở vị trí cách thấu kính d = 2f để thu được ảnh thật bằng đúng vật ở khoảng cách d\' = 2f', 'Chiếu ánh sáng laser vuông góc', 'Nhìn trực tiếp qua kính', 'Đo khối lượng thấu kính'],
    correctAnswer: 'Đặt vật ở vị trí cách thấu kính d = 2f để thu được ảnh thật bằng đúng vật ở khoảng cách d\' = 2f',
    explanation: 'Khi d = d\' = 2f thì khoảng cách vật - ảnh L = 4f.'
  },
  {
    id: 'q9-2',
    lessonId: 9,
    difficulty: 'de',
    question: 'Công thức tính tiêu cự f trong phương pháp Silbermann khi đo được d và d\' là:',
    options: ['f = (d + d\') / 4', 'f = (d + d\') / 2', 'f = d * d\'', 'f = 4 / (d + d\')'],
    correctAnswer: 'f = (d + d\') / 4',
    explanation: 'Vì d = 2f và d\' = 2f nên d + d\' = 4f => f = (d + d\') / 4.'
  },
  {
    id: 'q9-3',
    lessonId: 9,
    difficulty: 'de',
    question: 'Trong bộ thí nghiệm đo tiêu cự thấu kính hội tụ, vật sáng thường được làm bằng:',
    options: ['Tấm kính mờ có vẽ hình chữ F', 'Một chiếc gương phẳng tròn', 'Tấm sắt kín đen', 'Bóng đèn dây tóc không có chụp'],
    correctAnswer: 'Tấm kính mờ có vẽ hình chữ F',
    explanation: 'Chữ F bất đối xứng cả trục dọc và ngang giúp nhận biết dễ dàng ảnh thật bị ngược chiều và lộn ngược.'
  },
  {
    id: 'q9-4',
    lessonId: 9,
    difficulty: 'de',
    question: 'Dụng cụ nào giúp căn chỉnh nguồn sáng, vật sáng, thấu kính và màn chắn nằm trên cùng một đường thẳng?',
    options: ['Giá quang học đồng trục', 'Thước dây uốn lượn', 'Nhiệt kế thủy ngân', 'Kẹp ba chân gỗ'],
    correctAnswer: 'Giá quang học đồng trục',
    explanation: 'Giá quang học có ray trượt đồng trục đảm bảo các tâm chi tiết thẳng hàng.'
  },
  {
    id: 'q9-5',
    lessonId: 9,
    difficulty: 'de',
    question: 'Dấu hiệu nào trên màn chắn cho biết đã tìm đúng vị trí tạo ảnh rõ nét nhất?',
    options: ['Ảnh chữ F có mép sắc nét, tương phản cao và kích thước rõ ràng nhất', 'Màn chắn bốc khói', 'Màn chắn chuyển sang màu đỏ', 'Ảnh bị mờ nhòe lớn nhất'],
    correctAnswer: 'Ảnh chữ F có mép sắc nét, tương phản cao và kích thước rõ ràng nhất',
    explanation: 'Tại vị trí hội tụ chính xác, ảnh có độ sắc nét cực đại.'
  },
  {
    id: 'q9-6',
    lessonId: 9,
    difficulty: 'de',
    question: 'Để giảm sai số khi đo tiêu cự thấu kính trong bài thực hành, học sinh cần:',
    options: ['Tiến hành đo lặp lại nhiều lần (ít nhất 3 lần) rồi lấy giá trị trung bình', 'Chỉ đo đúng 1 lần duy nhất', 'Ước lượng bằng mắt không cần ghi số đo', 'Nhờ học sinh khác ghi số liệu ngẫu nhiên'],
    correctAnswer: 'Tiến hành đo lặp lại nhiều lần (ít nhất 3 lần) rồi lấy giá trị trung bình',
    explanation: 'Đo lặp lại 3 lần giúp giảm thiểu sai số ngẫu nhiên.'
  },
  {
    id: 'q9-7',
    lessonId: 9,
    difficulty: 'de',
    question: 'Khi đo chiều cao của vật h và chiều cao của ảnh h\' trong phương pháp Silbermann, hai giá trị này phải:',
    options: ['Bằng nhau (h\' = h)', 'Ảnh gấp đôi vật (h\' = 2h)', 'Vật gấp đôi ảnh (h = 2h\')', 'Ảnh bằng 0'],
    correctAnswer: 'Bằng nhau (h\' = h)',
    explanation: 'Tại d = 2f, số phóng đại k = d\'/d = 1 nên ảnh có kích thước bằng vật.'
  },
  {
    id: 'q9-8',
    lessonId: 9,
    difficulty: 'kho',
    question: 'Trong một lần đo, khoảng cách từ vật đến thấu kính là d = 16 cm và từ thấu kính đến màn hứng là d\' = 16 cm, ảnh chữ F rõ nét. Tiêu cự của thấu kính là:',
    options: ['8 cm', '16 cm', '32 cm', '4 cm'],
    correctAnswer: '8 cm',
    explanation: 'f = (d + d\') / 4 = (16 + 16) / 4 = 32 / 4 = 8 cm.'
  },
  {
    id: 'q9-9',
    lessonId: 9,
    difficulty: 'kho',
    question: 'Ba lần đo khoảng cách vật - màn (L = d + d\') lần lượt cho kết quả: L1 = 40,2 cm; L2 = 39,8 cm; L3 = 40,0 cm. Giá trị trung bình của tiêu cự thấu kính là:',
    options: ['10,0 cm', '40,0 cm', '20,0 cm', '5,0 cm'],
    correctAnswer: '10,0 cm',
    explanation: 'L_tb = (40,2 + 39,8 + 40,0) / 3 = 40,0 cm => f_tb = L_tb / 4 = 40,0 / 4 = 10,0 cm.'
  },
  {
    id: 'q9-10',
    lessonId: 9,
    difficulty: 'kho',
    question: 'Tại sao phương pháp Silbermann lại chính xác hơn phương pháp đo trực tiếp khoảng cách từ quang tâm đến tiêu điểm bằng chùm tia song song?',
    options: ['Vì việc xác định tâm thấu kính và vệt sáng nhỏ nhất tại tiêu điểm rất khó chính xác và dễ gây chói mắt', 'Vì phương pháp Silbermann không cần dùng màn hứng', 'Vì phương pháp Silbermann làm tiêu cự thấu kính tăng lên', 'Vì chùm sáng song song không bao giờ hội tụ'],
    correctAnswer: 'Vì việc xác định tâm thấu kính và vệt sáng nhỏ nhất tại tiêu điểm rất khó chính xác và dễ gây chói mắt',
    explanation: 'Xác định điểm tụ sáng nhỏ nhất có sai số rất lớn do quang sai và độ dày thấu kính; phương pháp Silbermann dùng ảnh vật thể rõ nét nên chính xác hơn.'
  },
  {
    id: 'q9-11',
    lessonId: 9,
    difficulty: 'kho',
    question: 'Nếu màn chắn và vật sáng không đặt vuông góc với trục chính của giá quang học thì ảnh thu được sẽ:',
    options: ['Bị méo mó và chỉ rõ nét từng phần, không đồng đều trên toàn bộ màn', 'Vẫn hoàn toàn rõ nét bình thường', 'Chuyển sang màu xanh lá cây', 'Biến thành ảnh ảo'],
    correctAnswer: 'Bị méo mó và chỉ rõ nét từng phần, không đồng đều trên toàn bộ màn',
    explanation: 'Khi màn bị nghiêng, các điểm trên màn có khoảng cách khác nhau tới thấu kính nên không thể cùng hội tụ sắc nét.'
  },
  {
    id: 'q9-12',
    lessonId: 9,
    difficulty: 'kho',
    question: 'Khi thực hiện thí nghiệm đo tiêu cự, học sinh dịch chuyển màn chắn ra rất xa mà vẫn không tìm được ảnh rõ nét. Nguyên nhân có thể là:',
    options: ['Khoảng cách từ vật đến thấu kính nhỏ hơn hoặc bằng tiêu cự (d <= f)', 'Thấu kính quá sạch', 'Nguồn điện quá mạnh', 'Màn chắn màu trắng'],
    correctAnswer: 'Khoảng cách từ vật đến thấu kính nhỏ hơn hoặc bằng tiêu cự (d <= f)',
    explanation: 'Khi d <= f thấu kính không cho ảnh thật trên màn mà chỉ cho ảnh ảo hoặc chùm ló song song.'
  },
  {
    id: 'q9-13',
    lessonId: 9,
    difficulty: 'kho',
    question: 'Báo cáo thực hành đo tiêu cự của học sinh cần ghi rõ các thông tin nào?',
    options: ['Mục đích, dụng cụ, các bước tiến hành, bảng số liệu thực nghiệm, tính toán sai số và kết luận', 'Chỉ cần ghi tên học sinh', 'Chỉ cần chép lại lí thuyết SGK', 'Ghi số điện thoại người bán thấu kính'],
    correctAnswer: 'Mục đích, dụng cụ, các bước tiến hành, bảng số liệu thực nghiệm, tính toán sai số và kết luận',
    explanation: 'Cấu trúc chuẩn của một báo cáo thực hành khoa học theo SGK.'
  },
  {
    id: 'q9-14',
    lessonId: 9,
    difficulty: 'kho',
    question: 'Phương pháp Bessel xác định tiêu cự đo khoảng cách cố định vật - màn L và khoảng cách giữa hai vị trí thấu kính l theo công thức:',
    options: ['f = (L^2 - l^2) / (4L)', 'f = (L + l) / 4', 'f = L * l / (L + l)', 'f = (L^2 + l^2) / 4'],
    correctAnswer: 'f = (L^2 - l^2) / (4L)',
    explanation: 'Đây là công thức phương pháp hoán vị Bessel được giới thiệu trong mục Em Có Biết của SGK bài 9.'
  },
  {
    id: 'q9-15',
    lessonId: 9,
    difficulty: 'cuc_kho',
    question: 'Trong thí nghiệm đo tiêu cự theo phương pháp Silbermann, một học sinh đo được d = 21 cm và d\' = 19 cm. Biết ảnh trên màn có chiều cao bằng vật h\' = h. Sai số hệ thống có thể xuất phát từ:',
    options: ['Vạch chuẩn vị trí quang tâm của thấu kính trên giá đỡ bị lệch 1 cm so với quang tâm thực tế', 'Nhiệt độ phòng quá thấp', 'Ánh sáng đèn quá sáng', 'Màn chắn làm bằng nhôm'],
    correctAnswer: 'Vạch chuẩn vị trí quang tâm của thấu kính trên giá đỡ bị lệch 1 cm so với quang tâm thực tế',
    explanation: 'Khi h\' = h thì thực chất vật và ảnh cách quang tâm bằng nhau (20 cm), việc đo được 21 và 19 cm chứng tỏ vạch chỉ thị trên giá kẹp bị lệch 1 cm.'
  },
  {
    id: 'q9-16',
    lessonId: 9,
    difficulty: 'cuc_kho',
    question: 'Dùng phương pháp Bessel với khoảng cách vật - màn L = 100 cm. Tìm được khoảng cách giữa hai vị trí đặt thấu kính cho ảnh rõ là l = 20 cm. Tiêu cự thấu kính là:',
    options: ['24 cm', '25 cm', '20 cm', '16 cm'],
    correctAnswer: '24 cm',
    explanation: 'f = (100^2 - 20^2) / (4 * 100) = (10000 - 400) / 400 = 9600 / 400 = 24 cm.'
  },
  {
    id: 'q9-17',
    lessonId: 9,
    difficulty: 'cuc_kho',
    question: 'Nếu dùng một thấu kính hội tụ bị mẻ một mảnh nhỏ ở mép ngoài để làm thí nghiệm đo tiêu cự thì kết quả đo tiêu cự f có bị thay đổi không?',
    options: ['Tiêu cự f không đổi, nhưng độ sáng của ảnh trên màn sẽ bị giảm đi đôi chút', 'Tiêu cự f bị giảm một nửa', 'Tiêu cự f tăng gấp đôi', 'Không thể tạo được ảnh nữa'],
    correctAnswer: 'Tiêu cự f không đổi, nhưng độ sáng của ảnh trên màn sẽ bị giảm đi đôi chút',
    explanation: 'Tiêu cự chỉ phụ thuộc vào độ cong mặt thấu kính và chiết suất thủy tinh; mép bị mẻ chỉ làm giảm lượng ánh sáng đi qua.'
  },
  {
    id: 'q9-18',
    lessonId: 9,
    difficulty: 'cuc_kho',
    question: 'Trong thí nghiệm đo tiêu cự, khi dịch chuyển đồng thời vật và màn chắn ra xa thấu kính những khoảng bằng nhau từ vị trí sát thấu kính, tỉ số chiều cao h\' / h sẽ biến thiên như thế nào?',
    options: ['Tăng dần từ giá trị rất lớn giảm dần về 1 (khi d = 2f) rồi tiếp tục giảm nhỏ hơn 1', 'Luôn luôn bằng 1', 'Tăng đều từ 0 lên vô cùng', 'Không xác định'],
    correctAnswer: 'Tăng dần từ giá trị rất lớn giảm dần về 1 (khi d = 2f) rồi tiếp tục giảm nhỏ hơn 1',
    explanation: 'Khi d < 2f ảnh thật rất lớn (k > 1), khi đến d = 2f thì k = 1, khi d > 2f thì ảnh nhỏ hơn vật (k < 1).'
  },
  {
    id: 'q9-19',
    lessonId: 9,
    difficulty: 'cuc_kho',
    question: 'Tại sao khi làm thí nghiệm quang học trong lớp học, giáo viên thường kéo rèm che bớt ánh sáng mặt trời bên ngoài?',
    options: ['Để tăng độ tương phản giúp mắt quan sát rõ ràng vệt sáng và ảnh trên màn chắn', 'Để học sinh đỡ buồn ngủ', 'Để thấu kính không bị nóng chảy', 'Để tiết kiệm điện thắp sáng'],
    correctAnswer: 'Để tăng độ tương phản giúp mắt quan sát rõ ràng vệt sáng và ảnh trên màn chắn',
    explanation: 'Môi trường tối giúp mắt phân biệt chính xác vị trí ảnh sắc nét nhất mà không bị ánh sáng môi trường làm lóa.'
  },
  {
    id: 'q9-20',
    lessonId: 9,
    difficulty: 'cuc_kho',
    question: 'Cho một thấu kính mỏng có tiêu cự danh định ghi trên nhãn là f = 100 mm. Giới hạn sai số của phép đo trong phòng thí nghiệm trường học thường nằm trong khoảng:',
    options: ['Khoảng ± 2 đến 5 mm', 'Khoảng ± 50 mm', 'Bằng 0 tuyệt đối', 'Khoảng ± 200 mm'],
    correctAnswer: 'Khoảng ± 2 đến 5 mm',
    explanation: 'Sai số thực nghiệm của học sinh THCS với thước chia mm thường dao động từ 2 - 5% (tức 2 - 5 mm đối với f = 100 mm).'
  },

  // --- BÀI 10: KÍNH LÚP. BÀI TẬP THẤU KÍNH (20 CÂU) ---
  {
    id: 'q10-1',
    lessonId: 10,
    difficulty: 'de',
    question: 'Về mặt cấu tạo quang học, kính lúp là:',
    options: ['Một thấu kính hội tụ có tiêu cự ngắn', 'Một thấu kính phân kì có tiêu cự dài', 'Một gương cầu lồi', 'Một lăng kính tam giác'],
    correctAnswer: 'Một thấu kính hội tụ có tiêu cự ngắn',
    explanation: 'Kính lúp là thấu kính hội tụ có tiêu cự f ngắn (thường f < 25 cm).'
  },
  {
    id: 'q10-2',
    lessonId: 10,
    difficulty: 'de',
    question: 'Kính lúp dùng để:',
    options: ['Quan sát các vật nhỏ dưới góc trông lớn hơn', 'Quan sát các vì sao ở rất xa', 'Hội tụ ánh sáng thành tia laser', 'Đo dòng điện'],
    correctAnswer: 'Quan sát các vật nhỏ dưới góc trông lớn hơn',
    explanation: 'Kính lúp giúp tăng góc trông của mắt đối với các vật thể nhỏ.'
  },
  {
    id: 'q10-3',
    lessonId: 10,
    difficulty: 'de',
    question: 'Công thức tính số bội giác G của kính lúp khi ngắm chừng ở vô cực là:',
    options: ['G = 25 / f (với f đo bằng cm)', 'G = f / 25', 'G = 25 * f', 'G = 25 + f'],
    correctAnswer: 'G = 25 / f (với f đo bằng cm)',
    explanation: 'Quy ước điểm cực cận của mắt chuẩn Đ = 25 cm, số bội giác G = 25 / f.'
  },
  {
    id: 'q10-4',
    lessonId: 10,
    difficulty: 'de',
    question: 'Khi quan sát một vật nhỏ qua kính lúp, ta phải đặt vật ở vị trí nào?',
    options: ['Trong khoảng tiêu cự của kính lúp (d < f)', 'Ngoài khoảng tiêu cự (d > f)', 'Tại vị trí d = 2f', 'Ở rất xa kính'],
    correctAnswer: 'Trong khoảng tiêu cự của kính lúp (d < f)',
    explanation: 'Đặt trong khoảng tiêu cự để kính lúp tạo ảnh ảo, cùng chiều và lớn hơn vật.'
  },
  {
    id: 'q10-5',
    lessonId: 10,
    difficulty: 'de',
    question: 'Ảnh của một vật nhỏ quan sát qua kính lúp có đặc điểm là:',
    options: ['Ảnh ảo, cùng chiều và lớn hơn vật', 'Ảnh thật, ngược chiều và nhỏ hơn vật', 'Ảnh thật, cùng chiều và lớn hơn vật', 'Ảnh ảo, nhỏ hơn vật'],
    correctAnswer: 'Ảnh ảo, cùng chiều và lớn hơn vật',
    explanation: 'Kính lúp tạo ảnh ảo cùng chiều phóng đại giúp mắt dễ nhìn rõ chi tiết.'
  },
  {
    id: 'q10-6',
    lessonId: 10,
    difficulty: 'de',
    question: 'Trên vành của một kính lúp có ghi kí hiệu 10x. Kí hiệu này cho biết:',
    options: ['Số bội giác của kính lúp là G = 10', 'Tiêu cự của kính lúp là 10 cm', 'Đường kính thấu kính là 10 cm', 'Giá tiền của kính là 10 nghìn đồng'],
    correctAnswer: 'Số bội giác của kính lúp là G = 10',
    explanation: 'Kí hiệu Nx biểu thị số bội giác của kính lúp.'
  },
  {
    id: 'q10-7',
    lessonId: 10,
    difficulty: 'de',
    question: 'Số bội giác ghi trên kính lúp càng lớn thì:',
    options: ['Ảnh quan sát được càng lớn và tiêu cự kính càng ngắn', 'Ảnh quan sát được càng nhỏ', 'Tiêu cự kính càng dài', 'Trọng lượng kính càng nặng'],
    correctAnswer: 'Ảnh quan sát được càng lớn và tiêu cự kính càng ngắn',
    explanation: 'G tỉ lệ nghịch với f: G = 25/f nên G lớn thì f ngắn và khả năng phóng đại góc trông càng mạnh.'
  },
  {
    id: 'q10-8',
    lessonId: 10,
    difficulty: 'kho',
    question: 'Một kính lúp có ghi 5x. Tiêu cự f của kính lúp này là:',
    options: ['5 cm', '10 cm', '125 cm', '0,2 cm'],
    correctAnswer: '5 cm',
    explanation: 'G = 25 / f => f = 25 / G = 25 / 5 = 5 cm.'
  },
  {
    id: 'q10-9',
    lessonId: 10,
    difficulty: 'kho',
    question: 'Một kính lúp có tiêu cự f = 12,5 cm. Số bội giác của kính lúp này là:',
    options: ['2x', '4x', '5x', '10x'],
    correctAnswer: '2x',
    explanation: 'G = 25 / f = 25 / 12,5 = 2x.'
  },
  {
    id: 'q10-10',
    lessonId: 10,
    difficulty: 'kho',
    question: 'Một người thợ sửa đồng hồ sử dụng kính lúp có số bội giác 10x để quan sát bánh răng nhỏ. Người thợ đó phải đặt bánh răng cách kính lúp một khoảng:',
    options: ['Nhỏ hơn 2,5 cm', 'Lớn hơn 25 cm', 'Chính xác bằng 10 cm', 'Ở vô cực'],
    correctAnswer: 'Nhỏ hơn 2,5 cm',
    explanation: 'f = 25 / G = 25 / 10 = 2,5 cm. Vật phải đặt trong khoảng tiêu cự nên d < 2,5 cm.'
  },
  {
    id: 'q10-11',
    lessonId: 10,
    difficulty: 'kho',
    question: 'Góc trông vật α và góc trông ảnh qua kính lúp β liên hệ với số bội giác G theo công thức:',
    options: ['G = β / α (hoặc tan β / tan α)', 'G = α / β', 'G = α * β', 'G = β - α'],
    correctAnswer: 'G = β / α (hoặc tan β / tan α)',
    explanation: 'Số bội giác là tỉ số giữa góc trông ảnh qua dụng cụ quang học và góc trông trực tiếp vật khi đặt ở điểm cực cận.'
  },
  {
    id: 'q10-12',
    lessonId: 10,
    difficulty: 'kho',
    question: 'Đặt vật sáng cao 1 mm trước kính lúp có f = 5 cm ở khoảng cách d = 4 cm. Ảnh ảo thu được có chiều cao là:',
    options: ['5 mm', '4 mm', '1 mm', '10 mm'],
    correctAnswer: '5 mm',
    explanation: '1/d\' = 1/f - 1/d = 1/5 - 1/4 = -1/20 => d\' = -20 cm. Số phóng đại k = |d\'/d| = 20 / 4 = 5 => h\' = 1 * 5 = 5 mm.'
  },
  {
    id: 'q10-13',
    lessonId: 10,
    difficulty: 'kho',
    question: 'Trong thực tế đời sống, đối tượng nào sau đây thường xuyên phải sử dụng kính lúp cầm tay?',
    options: ['Thợ kim hoàn soi kim cương, thợ sửa đồng hồ cơ khí và chuyên gia giám định tem cổ', 'Tài xế lái xe tải đường dài', 'Phi công lái máy bay dân dụng', 'Vận động viên điền kinh'],
    correctAnswer: 'Thợ kim hoàn soi kim cương, thợ sửa đồng hồ cơ khí và chuyên gia giám định tem cổ',
    explanation: 'Các ngành nghề cần quan sát chi tiết siêu nhỏ dưới độ phóng đại vài lần đều dùng kính lúp.'
  },
  {
    id: 'q10-14',
    lessonId: 10,
    difficulty: 'kho',
    question: 'Ngắm chừng ở vô cực khi dùng kính lúp có lợi ích gì cho mắt?',
    options: ['Mắt người quan sát không phải điều tiết nên không bị mỏi mắt khi quan sát lâu', 'Ảnh phóng to vô hạn', 'Nhìn xuyên thấu vật', 'Không cần có ánh sáng'],
    correctAnswer: 'Mắt người quan sát không phải điều tiết nên không bị mỏi mắt khi quan sát lâu',
    explanation: 'Khi ngắm chừng ở vô cực (vật đặt đúng tiêu điểm F), chùm tia ló song song giúp cơ vòng mắt thư giãn hoàn toàn.'
  },
  {
    id: 'q10-15',
    lessonId: 10,
    difficulty: 'cuc_kho',
    question: 'Một người có khoảng cực cận Đ = 25 cm dùng kính lúp có tiêu cự f = 5 cm để quan sát một dòng chữ nhỏ. Khi ngắm chừng ở điểm cực cận, khoảng cách từ dòng chữ đến kính lúp là:',
    options: ['4,17 cm', '5,00 cm', '3,50 cm', '2,50 cm'],
    correctAnswer: '4,17 cm',
    explanation: 'Ảnh ảo hiện tại cực cận nên d\' = -25 cm. Áp dụng: 1/d = 1/f - 1/d\' = 1/5 - 1/(-25) = 1/5 + 1/25 = 6/25 => d = 25/6 ≈ 4,17 cm.'
  },
  {
    id: 'q10-16',
    lessonId: 10,
    difficulty: 'cuc_kho',
    question: 'Một thấu kính hội tụ có tiêu cự f. Một vật phẳng nhỏ AB đặt vuông góc với trục chính. Để ảnh thật hứng trên màn lớn gấp 3 lần vật thì khoảng cách từ vật đến thấu kính phải bằng:',
    options: ['4/3 f', '3 f', '2 f', '5/3 f'],
    correctAnswer: '4/3 f',
    explanation: 'Ảnh thật k = d\'/d = 3 => d\' = 3d. Thay vào 1/f = 1/d + 1/(3d) = 4/(3d) => d = 4f / 3.'
  },
  {
    id: 'q10-17',
    lessonId: 10,
    difficulty: 'cuc_kho',
    question: 'Đặt vật sáng AB trước thấu kính hội tụ. Khi vật cách thấu kính 20 cm thì cho ảnh thật A1B1. Khi dịch vật lại gần thấu kính thêm 5 cm (tức d2 = 15 cm) thì ảnh dịch đi 30 cm so với vị trí ảnh cũ. Tiêu cự của thấu kính là:',
    options: ['12 cm', '10 cm', '15 cm', '18 cm'],
    correctAnswer: '12 cm',
    explanation: 'Ta có d1 = 20 cm => d1\' = 20f / (20 - f). Khi d2 = 15 cm => d2\' = 15f / (15 - f). Theo đề bài d2\' - d1\' = 30. Giải phương trình tìm được f = 12 cm (thử lại: d1\' = 30 cm, d2\' = 60 cm, 60 - 30 = 30 cm).'
  },
  {
    id: 'q10-18',
    lessonId: 10,
    difficulty: 'cuc_kho',
    question: 'Vì sao kính lúp không thể chế tạo có số bội giác quá lớn (như 100x hay 1000x) chỉ bằng một thấu kính đơn lẻ?',
    options: ['Tiêu cự quá ngắn sẽ khiến bán kính mặt cầu cực nhỏ, gây ra quang sai và méo hình nghiêm trọng làm ảnh bị mờ', 'Kính lúp sẽ quá nặng', 'Sẽ làm bỏng mắt người nhìn', 'Chất liệu thủy tinh không cho phép'],
    correctAnswer: 'Tiêu cự quá ngắn sẽ khiến bán kính mặt cầu cực nhỏ, gây ra quang sai và méo hình nghiêm trọng làm ảnh bị mờ',
    explanation: 'Để đạt độ phóng đại hàng trăm lần, người ta phải phối hợp hệ thống nhiều thấu kính trong kính hiển vi quang học.'
  },
  {
    id: 'q10-19',
    lessonId: 10,
    difficulty: 'cuc_kho',
    question: 'Một kính lúp có G = 4x. Khoảng đặt vật trước kính lúp đối với mắt bình thường có cực cận 25 cm và cực viễn ở vô cực là:',
    options: ['Từ 5 cm đến 6,25 cm', 'Từ 0 đến 25 cm', 'Từ 2,5 cm đến 5 cm', 'Từ 6,25 cm đến 12,5 cm'],
    correctAnswer: 'Từ 5 cm đến 6,25 cm',
    explanation: 'f = 25/4 = 6,25 cm. Khi ngắm ở vô cực: d_vôcực = f = 6,25 cm. Khi ngắm ở cực cận d\' = -25 cm => 1/d_cc = 1/6,25 + 1/25 = 4/25 + 1/25 = 5/25 => d_cc = 5 cm. Vậy đặt vật từ 5 cm đến 6,25 cm.'
  },
  {
    id: 'q10-20',
    lessonId: 10,
    difficulty: 'cuc_kho',
    question: 'Khi chụp ảnh bằng máy ảnh kĩ thuật số, vật ở rất xa và vật kính máy ảnh là một thấu kính hội tụ. Ảnh của vật hiện trên cảm biến điện tử là:',
    options: ['Ảnh thật, ngược chiều và nhỏ hơn vật rất nhiều', 'Ảnh ảo, cùng chiều phóng đại', 'Ảnh thật, cùng chiều bằng vật', 'Ảnh ảo ở vô cực'],
    correctAnswer: 'Ảnh thật, ngược chiều và nhỏ hơn vật rất nhiều',
    explanation: 'Vật kính máy ảnh tạo ảnh thật ngược chiều thu nhỏ trên bề mặt cảm biến sensor.'
  },

  // --- BÀI 11: ĐIỆN TRỞ. ĐỊNH LUẬT OHM (20 CÂU) ---
  {
    id: 'q11-1',
    lessonId: 11,
    difficulty: 'de',
    question: 'Định luật Ohm cho đoạn mạch phát biểu rằng cường độ dòng điện chạy qua dây dẫn:',
    options: ['Tỉ lệ thuận với hiệu điện thế và tỉ lệ nghịch với điện trở của dây', 'Tỉ lệ nghịch với hiệu điện thế và tỉ lệ thuận với điện trở', 'Tỉ lệ thuận với cả hiệu điện thế và điện trở', 'Không phụ thuộc vào hiệu điện thế'],
    correctAnswer: 'Tỉ lệ thuận với hiệu điện thế và tỉ lệ nghịch với điện trở của dây',
    explanation: 'Nội dung định luật Ohm: I = U / R.'
  },
  {
    id: 'q11-2',
    lessonId: 11,
    difficulty: 'de',
    question: 'Hệ thức của định luật Ohm là:',
    options: ['I = U / R', 'I = U * R', 'I = R / U', 'U = I / R'],
    correctAnswer: 'I = U / R',
    explanation: 'Trong đó U đo bằng V, R đo bằng Ω, I đo bằng A.'
  },
  {
    id: 'q11-3',
    lessonId: 11,
    difficulty: 'de',
    question: 'Đơn vị đo của điện trở trong hệ SI mang tên nhà bác học nào?',
    options: ['Georg Simon Ohm (Ôm - Ω)', 'James Watt', 'Isaac Newton', 'André-Marie Ampère'],
    correctAnswer: 'Georg Simon Ohm (Ôm - Ω)',
    explanation: 'Kí hiệu Ω đọc là Ôm.'
  },
  {
    id: 'q11-4',
    lessonId: 11,
    difficulty: 'de',
    question: 'Đồ thị biểu diễn sự phụ thuộc của cường độ dòng điện I vào hiệu điện thế U là:',
    options: ['Đường thẳng đi qua gốc toạ độ O(0,0)', 'Đường parabol', 'Đường hyperbol cong', 'Đường tròn'],
    correctAnswer: 'Đường thẳng đi qua gốc toạ độ O(0,0)',
    explanation: 'Vì I tỉ lệ thuận với U nên đồ thị có dạng y = ax đi qua gốc toạ độ.'
  },
  {
    id: 'q11-5',
    lessonId: 11,
    difficulty: 'de',
    question: 'Điện trở của một đoạn dây dẫn đồng chất tiết diện đều tỉ lệ thuận với:',
    options: ['Chiều dài l của dây dẫn', 'Tiết diện S của dây', 'Khối lượng của dây', 'Đường kính của dây'],
    correctAnswer: 'Chiều dài l của dây dẫn',
    explanation: 'Công thức R = ρ.l / S: R tỉ lệ thuận với chiều dài l.'
  },
  {
    id: 'q11-6',
    lessonId: 11,
    difficulty: 'de',
    question: 'Khi tăng tiết diện S của dây dẫn lên gấp đôi (chiều dài và vật liệu giữ nguyên) thì điện trở của dây dẫn sẽ:',
    options: ['Giảm đi một nửa', 'Tăng lên gấp đôi', 'Tăng lên gấp bốn', 'Không thay đổi'],
    correctAnswer: 'Giảm đi một nửa',
    explanation: 'R tỉ lệ nghịch với tiết diện S.'
  },
  {
    id: 'q11-7',
    lessonId: 11,
    difficulty: 'de',
    question: 'Đơn vị đo điện trở suất ρ trong hệ SI là:',
    options: ['Ôm mét (Ω.m)', 'Ôm trên mét (Ω/m)', 'Vôn trên ampe (V/A)', 'Oát (W)'],
    correctAnswer: 'Ôm mét (Ω.m)',
    explanation: 'ρ = R * S / l có đơn vị là Ω * m² / m = Ω.m.'
  },
  {
    id: 'q11-8',
    lessonId: 11,
    difficulty: 'kho',
    question: 'Đặt vào hai đầu điện trở R = 20 Ω một hiệu điện thế U = 12 V. Cường độ dòng điện chạy qua điện trở là:',
    options: ['0,6 A', '1,67 A', '240 A', '0,06 A'],
    correctAnswer: '0,6 A',
    explanation: 'I = U / R = 12 / 20 = 0,6 A.'
  },
  {
    id: 'q11-9',
    lessonId: 11,
    difficulty: 'kho',
    question: 'Khi hiệu điện thế giữa hai đầu dây dẫn là 6 V thì dòng điện qua nó là 0,3 A. Nếu tăng hiệu điện thế lên thành 18 V thì dòng điện qua dây là:',
    options: ['0,9 A', '0,6 A', '1,2 A', '0,1 A'],
    correctAnswer: '0,9 A',
    explanation: 'U tăng 18 / 6 = 3 lần => I tăng 3 lần: I\' = 0,3 * 3 = 0,9 A (hoặc R = 6 / 0,3 = 20 Ω => I\' = 18 / 20 = 0,9 A).'
  },
  {
    id: 'q11-10',
    lessonId: 11,
    difficulty: 'kho',
    question: 'Một dây dẫn bằng đồng có chiều dài l = 100 m, tiết diện S = 1 mm² = 10^-6 m². Biết điện trở suất của đồng là ρ = 1,7.10^-8 Ω.m. Điện trở của cuộn dây là:',
    options: ['1,7 Ω', '17 Ω', '0,17 Ω', '170 Ω'],
    correctAnswer: '1,7 Ω',
    explanation: 'R = ρ * l / S = 1,7.10^-8 * 100 / 10^-6 = 1,7 Ω.'
  },
  {
    id: 'q11-11',
    lessonId: 11,
    difficulty: 'kho',
    question: 'Hai dây nhôm có cùng chiều dài, dây thứ nhất có tiết diện S1 = 2 mm², dây thứ hai có tiết diện S2 = 6 mm². Tỉ số điện trở R1 / R2 là:',
    options: ['3', '1/3', '9', '1/9'],
    correctAnswer: '3',
    explanation: 'R1 / R2 = S2 / S1 = 6 / 2 = 3.'
  },
  {
    id: 'q11-12',
    lessonId: 11,
    difficulty: 'kho',
    question: 'Tại sao lõi dây dẫn điện trong gia đình thường làm bằng đồng hoặc nhôm mà không làm bằng sắt?',
    options: ['Đồng và nhôm có điện trở suất nhỏ hơn sắt rất nhiều nên ít gây hao phí toả nhiệt', 'Đồng rẻ hơn sắt', 'Sắt quá nhẹ', 'Sắt dẫn điện một chiều tốt hơn'],
    correctAnswer: 'Đồng và nhôm có điện trở suất nhỏ hơn sắt rất nhiều nên ít gây hao phí toả nhiệt',
    explanation: 'Điện trở suất đồng (1,7.10^-8 Ω.m) và nhôm (2,8.10^-8 Ω.m) nhỏ hơn sắt (12.10^-8 Ω.m) khoảng 5 - 7 lần.'
  },
  {
    id: 'q11-13',
    lessonId: 11,
    difficulty: 'kho',
    question: 'Trên một điện trở 4 vòng màu: Vòng 1 màu Vàng (4), Vòng 2 màu Tím (7), Vòng 3 màu Đỏ (10^2), Vòng 4 màu Vàng ánh kim (±5%). Giá trị của điện trở này là:',
    options: ['4,7 kΩ ± 5% (4700 Ω)', '47 Ω ± 5%', '470 Ω ± 10%', '247 Ω'],
    correctAnswer: '4,7 kΩ ± 5% (4700 Ω)',
    explanation: 'Giá trị R = 47 * 10^2 Ω = 4700 Ω = 4,7 kΩ với sai số ±5%.'
  },
  {
    id: 'q11-14',
    lessonId: 11,
    difficulty: 'kho',
    question: 'Khi dây tóc bóng đèn phát sáng nóng trắng, điện trở của nó so với khi nguội ở nhiệt độ phòng sẽ:',
    options: ['Tăng lên đáng kể', 'Giảm đi một nửa', 'Không thay đổi', 'Bằng 0'],
    correctAnswer: 'Tăng lên đáng kể',
    explanation: 'Kim loại (vonfram) có điện trở suất tăng theo nhiệt độ, khi dây tóc nóng lên hàng nghìn độ C thì điện trở tăng gấp nhiều lần.'
  },
  {
    id: 'q11-15',
    lessonId: 11,
    difficulty: 'cuc_kho',
    question: 'Một sợi dây đồng có điện trở R = 8 Ω. Người ta kéo dài sợi dây đồng này để chiều dài tăng gấp đôi mà thể tích kim loại không đổi. Điện trở của sợi dây sau khi kéo dãn là:',
    options: ['32 Ω', '16 Ω', '64 Ω', '4 Ω'],
    correctAnswer: '32 Ω',
    explanation: 'Thể tích V = S * l không đổi. Khi l tăng 2 lần (l\' = 2l) thì tiết diện giảm 2 lần (S\' = S / 2). Điện trở R\' = ρ * l\' / S\' = ρ * 2l / (S / 2) = 4 * (ρ l / S) = 4R = 4 * 8 = 32 Ω.'
  },
  {
    id: 'q11-16',
    lessonId: 11,
    difficulty: 'cuc_kho',
    question: 'Một dây cáp điện cao thế bằng nhôm có chiều dài 50 km, gồm lõi thép gia cường và lớp nhôm tiết diện 200 mm². Biết điện trở suất nhôm là 2,8.10^-8 Ω.m. Điện trở của đường dây tải điện này là:',
    options: ['7 Ω', '14 Ω', '3,5 Ω', '28 Ω'],
    correctAnswer: '7 Ω',
    explanation: 'Đổi l = 50.000 m; S = 200 * 10^-6 m² = 2.10^-4 m². R = 2,8.10^-8 * 50.000 / (2.10^-4) = 1,4.10^-3 / 2.10^-4 = 7 Ω.'
  },
  {
    id: 'q11-17',
    lessonId: 11,
    difficulty: 'cuc_kho',
    question: 'Một biến trở con chạy có ghi 50 Ω - 2 A. Con số "2 A" ghi trên biến trở có ý nghĩa gì?',
    options: ['Cường độ dòng điện tối đa cho phép chạy qua biến trở để không bị cháy dây', 'Cường độ dòng điện định mức tối thiểu', 'Cường độ dòng điện biến trở tự sinh ra', 'Số ampe kế cần mắc'],
    correctAnswer: 'Cường độ dòng điện tối đa cho phép chạy qua biến trở để không bị cháy dây',
    explanation: 'Dòng điện qua biến trở vượt quá 2 A sẽ sinh nhiệt lượng lớn làm đứt hoặc cháy lớp dây quấn.'
  },
  {
    id: 'q11-18',
    lessonId: 11,
    difficulty: 'cuc_kho',
    question: 'Hiện tượng siêu dẫn xảy ra ở một số vật liệu khi hạ nhiệt độ xuống rất thấp (gần 0 Kelvin). Khi đó điện trở của vật liệu sẽ:',
    options: ['Đột ngột giảm về đúng bằng 0', 'Tăng lên vô cùng lớn', 'Dao động liên tục', 'Chuyển thành nguồn điện phát điện'],
    correctAnswer: 'Đột ngột giảm về đúng bằng 0',
    explanation: 'Ở trạng thái siêu dẫn, điện trở vật liệu triệt tiêu hoàn toàn (R = 0), dòng điện có thể duy trì vĩnh viễn không suy hao.'
  },
  {
    id: 'q11-19',
    lessonId: 11,
    difficulty: 'cuc_kho',
    question: 'Đặt hiệu điện thế U không đổi vào hai đầu biến trở. Khi dịch chuyển con chạy làm điện trở tăng từ R lên 3R thì cường độ dòng điện trong mạch sẽ:',
    options: ['Giảm đi 3 lần', 'Tăng lên 3 lần', 'Giảm đi 9 lần', 'Không đổi'],
    correctAnswer: 'Giảm đi 3 lần',
    explanation: 'I = U / R. Khi R tăng 3 lần với U không đổi thì I giảm đi 3 lần.'
  },
  {
    id: 'q11-20',
    lessonId: 11,
    difficulty: 'cuc_kho',
    question: 'Hai dây dẫn bằng constantan có cùng tiết diện. Dây 1 dài 2 m có điện trở R1 = 5 Ω. Dây 2 có điện trở R2 = 12,5 Ω thì có chiều dài là:',
    options: ['5 m', '4 m', '6 m', '10 m'],
    correctAnswer: '5 m',
    explanation: 'R tỉ lệ thuận với l => l2 / l1 = R2 / R1 => l2 / 2 = 12,5 / 5 = 2,5 => l2 = 5 m.'
  },

  // --- BÀI 12: ĐOẠN MẠCH NỐI TIẾP, SONG SONG (20 CÂU) ---
  {
    id: 'q12-1',
    lessonId: 12,
    difficulty: 'de',
    question: 'Trong đoạn mạch gồm hai điện trở R1 và R2 mắc nối tiếp, cường độ dòng điện trong mạch có đặc điểm:',
    options: ['Như nhau tại mọi điểm: I = I1 = I2', 'I = I1 + I2', 'I = I1 * I2', 'I1 > I2'],
    correctAnswer: 'Như nhau tại mọi điểm: I = I1 = I2',
    explanation: 'Đặc điểm của mạch nối tiếp là cường độ dòng điện không đổi qua từng phần tử.'
  },
  {
    id: 'q12-2',
    lessonId: 12,
    difficulty: 'de',
    question: 'Trong đoạn mạch gồm hai điện trở R1 và R2 mắc nối tiếp, hiệu điện thế toàn mạch bằng:',
    options: ['U = U1 + U2', 'U = U1 = U2', 'U = U1 - U2', 'U = U1 * U2'],
    correctAnswer: 'U = U1 + U2',
    explanation: 'Hiệu điện thế hai đầu đoạn mạch nối tiếp bằng tổng các hiệu điện thế thành phần.'
  },
  {
    id: 'q12-3',
    lessonId: 12,
    difficulty: 'de',
    question: 'Công thức tính điện trở tương đương của hai điện trở R1 và R2 mắc nối tiếp là:',
    options: ['Rtđ = R1 + R2', 'Rtđ = (R1 * R2) / (R1 + R2)', '1/Rtđ = 1/R1 + 1/R2', 'Rtđ = R1 - R2'],
    correctAnswer: 'Rtđ = R1 + R2',
    explanation: 'Mạch nối tiếp: Rtđ = R1 + R2.'
  },
  {
    id: 'q12-4',
    lessonId: 12,
    difficulty: 'de',
    question: 'Trong đoạn mạch gồm hai điện trở R1 và R2 mắc song song, hiệu điện thế ở hai đầu mỗi điện trở:',
    options: ['Bằng nhau: U = U1 = U2', 'U = U1 + U2', 'U1 > U2', 'U = U1 / U2'],
    correctAnswer: 'Bằng nhau: U = U1 = U2',
    explanation: 'Hai đầu các nhánh song song nối chung vào hai điểm nút nên hiệu điện thế bằng nhau.'
  },
  {
    id: 'q12-5',
    lessonId: 12,
    difficulty: 'de',
    question: 'Trong đoạn mạch gồm hai điện trở R1 và R2 mắc song song, cường độ dòng điện mạch chính bằng:',
    options: ['I = I1 + I2', 'I = I1 = I2', 'I = I1 - I2', 'I = I1 * I2'],
    correctAnswer: 'I = I1 + I2',
    explanation: 'Dòng điện chính rẽ thành các dòng điện nhánh nên I = I1 + I2.'
  },
  {
    id: 'q12-6',
    lessonId: 12,
    difficulty: 'de',
    question: 'Công thức tính điện trở tương đương của hai điện trở R1 và R2 mắc song song là:',
    options: ['Rtđ = (R1 * R2) / (R1 + R2)', 'Rtđ = R1 + R2', 'Rtđ = (R1 + R2) / (R1 * R2)', 'Rtđ = R1 * R2'],
    correctAnswer: 'Rtđ = (R1 * R2) / (R1 + R2)',
    explanation: '1/Rtđ = 1/R1 + 1/R2 => Rtđ = (R1.R2) / (R1 + R2).'
  },
  {
    id: 'q12-7',
    lessonId: 12,
    difficulty: 'de',
    question: 'Điện trở tương đương của đoạn mạch gồm hai điện trở giống nhau R mắc song song là:',
    options: ['R / 2', '2 R', 'R', 'R^2'],
    correctAnswer: 'R / 2',
    explanation: 'Rtđ = (R * R) / (R + R) = R^2 / 2R = R / 2.'
  },
  {
    id: 'q12-8',
    lessonId: 12,
    difficulty: 'kho',
    question: 'Cho hai điện trở R1 = 15 Ω và R2 = 30 Ω mắc nối tiếp vào hiệu điện thế U = 45 V. Cường độ dòng điện qua mỗi điện trở là:',
    options: ['1 A', '3 A', '1,5 A', '0,5 A'],
    correctAnswer: '1 A',
    explanation: 'Rtđ = 15 + 30 = 45 Ω => I = U / Rtđ = 45 / 45 = 1 A. Vì mắc nối tiếp nên I1 = I2 = I = 1 A.'
  },
  {
    id: 'q12-9',
    lessonId: 12,
    difficulty: 'kho',
    question: 'Hai điện trở R1 = 20 Ω và R2 = 30 Ω mắc song song vào hiệu điện thế U = 12 V. Điện trở tương đương của đoạn mạch là:',
    options: ['12 Ω', '50 Ω', '25 Ω', '600 Ω'],
    correctAnswer: '12 Ω',
    explanation: 'Rtđ = (20 * 30) / (20 + 30) = 600 / 50 = 12 Ω.'
  },
  {
    id: 'q12-10',
    lessonId: 12,
    difficulty: 'kho',
    question: 'Trong mạch điện gia đình (220 V), các thiết bị như bóng đèn, tivi, tủ lạnh, máy giặt luôn được mắc:',
    options: ['Song song với nhau để mỗi thiết bị hoạt động độc lập với hiệu điện thế định mức 220 V', 'Nối tiếp với nhau để chia nhỏ điện áp', 'Hỗn hợp cầu Wheatstone', 'Tuỳ tiện không theo quy tắc'],
    correctAnswer: 'Song song với nhau để mỗi thiết bị hoạt động độc lập với hiệu điện thế định mức 220 V',
    explanation: 'Mắc song song đảm bảo mỗi thiết bị nhận đủ 220 V và khi tắt một thiết bị thì các thiết bị khác vẫn hoạt động bình thường.'
  },
  {
    id: 'q12-11',
    lessonId: 12,
    difficulty: 'kho',
    question: 'Hai điện trở R1 = 6 Ω và R2 = 12 Ω mắc song song. Nếu cường độ dòng điện qua R1 là I1 = 2 A thì cường độ dòng điện qua R2 là:',
    options: ['1 A', '4 A', '2 A', '0,5 A'],
    correctAnswer: '1 A',
    explanation: 'U = I1 * R1 = 2 * 6 = 12 V => I2 = U / R2 = 12 / 12 = 1 A (dòng điện tỉ lệ nghịch với điện trở nhánh).'
  },
  {
    id: 'q12-12',
    lessonId: 12,
    difficulty: 'kho',
    question: 'Cho mạch điện gồm R1 = 4 Ω mắc nối tiếp với R2 = 6 Ω. Đặt vào hai đầu mạch hiệu điện thế U = 20 V. Hiệu điện thế giữa hai đầu R1 là:',
    options: ['8 V', '12 V', '4 V', '10 V'],
    correctAnswer: '8 V',
    explanation: 'Rtđ = 4 + 6 = 10 Ω => I = 20 / 10 = 2 A => U1 = I * R1 = 2 * 4 = 8 V.'
  },
  {
    id: 'q12-13',
    lessonId: 12,
    difficulty: 'kho',
    question: 'Một chuỗi đèn nháy gồm 20 bóng đèn giống hệt nhau mắc nối tiếp vào mạng điện 220 V. Nếu chuỗi đèn sáng bình thường thì hiệu điện thế định mức của mỗi bóng đèn nhỏ là:',
    options: ['11 V', '22 V', '220 V', '5,5 V'],
    correctAnswer: '11 V',
    explanation: 'Mạch nối tiếp: U_mỗi_đèn = U_toàn_mạch / 20 = 220 / 20 = 11 V.'
  },
  {
    id: 'q12-14',
    lessonId: 12,
    difficulty: 'kho',
    question: 'Đoạn mạch gồm 3 điện trở R1 = 3 Ω, R2 = 6 Ω, R3 = 2 Ω mắc song song với nhau. Điện trở tương đương của mạch là:',
    options: ['1 Ω', '11 Ω', '0,9 Ω', '2 Ω'],
    correctAnswer: '1 Ω',
    explanation: '1/Rtđ = 1/3 + 1/6 + 1/2 = 2/6 + 1/6 + 3/6 = 6/6 = 1 => Rtđ = 1 Ω.'
  },
  {
    id: 'q12-15',
    lessonId: 12,
    difficulty: 'cuc_kho',
    question: 'Cho mạch điện gồm (R1 // R2) nối tiếp với R3. Biết R1 = 10 Ω, R2 = 15 Ω, R3 = 4 Ω. Nguồn điện có hiệu điện thế U = 20 V. Cường độ dòng điện chạy qua R1 là:',
    options: ['1,2 A', '2 A', '0,8 A', '1,5 A'],
    correctAnswer: '1,2 A',
    explanation: 'R12 = (10 * 15) / (10 + 15) = 150 / 25 = 6 Ω. Rtđ = R12 + R3 = 6 + 4 = 10 Ω. Dòng mạch chính I = 20 / 10 = 2 A. U12 = I * R12 = 2 * 6 = 12 V => I1 = U12 / R1 = 12 / 10 = 1,2 A.'
  },
  {
    id: 'q12-16',
    lessonId: 12,
    difficulty: 'cuc_kho',
    question: 'Một dây dẫn đồng chất tiết diện đều có điện trở tổng cộng R0 = 36 Ω được uốn thành một vòng tròn khép kín. Nối nguồn điện vào hai điểm A và B trên vòng tròn sao cho cung nhỏ AB chiếm 1/3 chu vi vòng tròn. Điện trở tương đương của mạch giữa A và B là:',
    options: ['8 Ω', '12 Ω', '24 Ω', '4 Ω'],
    correctAnswer: '8 Ω',
    explanation: 'Vòng tròn chia thành 2 nhánh mắc song song: Nhánh nhỏ R1 = 36 / 3 = 12 Ω; Nhánh lớn R2 = 36 - 12 = 24 Ω. Rtđ = (12 * 24) / (12 + 24) = 288 / 36 = 8 Ω.'
  },
  {
    id: 'q12-17',
    lessonId: 12,
    difficulty: 'cuc_kho',
    question: 'Cần mắc bao nhiêu điện trở giống nhau loại R0 = 60 Ω để thu được một đoạn mạch có điện trở tương đương bằng 15 Ω?',
    options: ['4 điện trở mắc song song', '4 điện trở mắc nối tiếp', '2 điện trở mắc song song', '3 điện trở mắc nối tiếp'],
    correctAnswer: '4 điện trở mắc song song',
    explanation: 'Rtđ = R0 / n => 15 = 60 / n => n = 60 / 15 = 4 điện trở mắc song song.'
  },
  {
    id: 'q12-18',
    lessonId: 12,
    difficulty: 'cuc_kho',
    question: 'Một đoạn mạch gồm điện trở R1 mắc nối tiếp với biến trở R2 vào hiệu điện thế không đổi U. Khi điều chỉnh con chạy để giá trị biến trở R2 tăng lên thì hiệu điện thế giữa hai đầu R1 sẽ:',
    options: ['Giảm đi', 'Tăng lên', 'Không đổi', 'Bằng U'],
    correctAnswer: 'Giảm đi',
    explanation: 'Khi R2 tăng thì Rtđ = R1 + R2 tăng => I = U / Rtđ giảm => U1 = I * R1 giảm.'
  },
  {
    id: 'q12-19',
    lessonId: 12,
    difficulty: 'cuc_kho',
    question: 'Có ba điện trở R1 = 2 Ω, R2 = 3 Ω, R3 = 6 Ω. Ghép cả 3 điện trở này theo cách nào để được điện trở tương đương bằng 4 Ω?',
    options: ['(R2 // R3) nối tiếp với R1', '(R1 // R2) nối tiếp với R3', '(R1 // R3) nối tiếp với R2', 'Cả 3 điện trở mắc song song'],
    correctAnswer: '(R2 // R3) nối tiếp với R1',
    explanation: 'R23 = (3 * 6) / (3 + 6) = 18 / 9 = 2 Ω. Khi đó Rtđ = R1 + R23 = 2 + 2 = 4 Ω.'
  },
  {
    id: 'q12-20',
    lessonId: 12,
    difficulty: 'cuc_kho',
    question: 'Cầu chì trong mạch điện được mắc như thế nào với thiết bị điện cần bảo vệ?',
    options: ['Mắc nối tiếp trên dây pha (dây nóng) trước thiết bị để ngắt mạch khi dòng điện quá tải', 'Mắc song song với thiết bị', 'Mắc vào dây trung tính', 'Mắc ở ngoài trời'],
    correctAnswer: 'Mắc nối tiếp trên dây pha (dây nóng) trước thiết bị để ngắt mạch khi dòng điện quá tải',
    explanation: 'Cầu chì mắc nối tiếp để khi xảy ra chập mạch hoặc quá tải, dây chì nóng chảy đứt ngắt nguồn điện bảo vệ toàn bộ mạch phía sau.'
  }
];
