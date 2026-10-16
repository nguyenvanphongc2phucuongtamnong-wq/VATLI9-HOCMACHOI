import { Lesson } from '../types';

export const LESSONS_DATA: Lesson[] = [
  {
    id: 1,
    chapter: 'MỞ ĐẦU',
    chapterNumber: 0,
    title: 'Bài 1: Nhận biết một số dụng cụ, hoá chất. Thuyết trình một vấn đề khoa học',
    shortDesc: 'Làm quen với các dụng cụ thí nghiệm quang học, điện từ và phương pháp báo cáo, thuyết trình khoa học.',
    objectives: [
      'Nhận biết được một số dụng cụ và hoá chất sử dụng trong dạy học môn Khoa học tự nhiên 9 (phần Vật lí).',
      'Trình bày được các bước viết và trình bày báo cáo; làm được bài thuyết trình một vấn đề khoa học.'
    ],
    iconName: 'Compass',
    sections: [
      {
        title: 'I. Dụng cụ thí nghiệm quang học và điện từ',
        content: [
          '1. Dụng cụ quang học: Nguồn sáng (đèn 12 V - 21 W có khe chắn sáng hoặc đèn laser), bản bán trụ bằng thủy tinh trong suốt gắn bảng chia độ (đo góc tới i, góc khúc xạ r, phản xạ toàn phần), thấu kính hội tụ/phân kì, màn chắn và giá quang học đồng trục.',
          '2. Dụng cụ điện từ: Điện kế (phát hiện dòng điện cảm ứng, vạch 0 nằm chính giữa thang đo để chỉ cả hai chiều dòng điện), đồng hồ đo điện đa năng (đo điện áp, dòng điện, điện trở cả AC và DC), cuộn dây dẫn kín có hai đèn LED mắc song song ngược cực.'
        ],
        keyPoints: [
          'Điện kế có vạch 0 ở giữa thang đo: khi dòng điện đổi chiều, kim lệch theo hướng ngược lại.',
          'Hai đèn LED mắc song song ngược cực giúp nhận biết dòng điện xoay chiều đổi chiều luân phiên.'
        ],
        illustration: {
          type: 'experiment-setup',
          id: 'b1-instruments',
          caption: 'Bộ dụng cụ quang học và điện từ trong phòng thí nghiệm Vật lý 9'
        },
        examples: [
          {
            id: 'ex1-1',
            title: 'Ví dụ 1: Nhận biết tính năng của điện kế',
            problem: 'Tại sao trên mặt vạch đo của điện kế trong thí nghiệm cảm ứng điện từ, vạch số 0 lại được đặt ở chính giữa thay vì ở góc ngoài cùng bên trái như Ampe kế thông thường?',
            given: ['Dụng cụ: Điện kế kiểm tra dòng cảm ứng', 'Đặc điểm: Vạch số 0 nằm chính giữa'],
            formulaUsed: 'Nguyên lí phát hiện chiều dòng điện: Kim lệch sang phải hoặc sang trái',
            steps: [
              'Bước 1: Dòng điện cảm ứng có thể đổi chiều tùy thuộc vào chiều chuyển động của nam châm hoặc sự tăng/giảm của từ thông.',
              'Bước 2: Ampe kế thường chỉ đo dòng một chiều với cực dương/âm cố định nên vạch 0 ở mép trái.',
              'Bước 3: Điện kế có vạch 0 ở giữa cho phép kim quay sang phải khi dòng đi vào chốt G0, và quay sang trái khi dòng đi ngược lại, qua đó vừa phát hiện được có dòng điện, vừa xác định được chiều dòng điện.'
            ],
            answer: 'Vạch 0 ở giữa giúp xác định cả độ lớn và chiều biến thiên của dòng điện cảm ứng.',
            similarProblem: {
              problem: 'Khi mắc cuộn dây kín với 2 đèn LED đỏ và vàng mắc song song ngược cực, nếu di chuyển nam châm tới gần cuộn dây thì đèn đỏ sáng, còn khi rút nam châm ra xa thì đèn vàng sáng. Hiện tượng này chứng minh điều gì?',
              given: ['2 đèn LED đỏ và vàng mắc song song ngược cực', 'Đưa lại gần: Đèn đỏ sáng', 'Rút ra xa: Đèn vàng sáng'],
              hint: 'Mỗi đèn LED chỉ cho dòng điện chạy qua theo một chiều nhất định (từ cực dương sang cực âm của nó).',
              options: [
                'Dòng điện trong cuộn dây là dòng điện một chiều không đổi',
                'Chiều dòng điện cảm ứng khi đưa nam châm lại gần và rút ra xa là ngược nhau',
                'Cuộn dây bị hỏng một cực',
                'Nam châm bị mất từ tính'
              ],
              correctAnswer: 'Chiều dòng điện cảm ứng khi đưa nam châm lại gần và rút ra xa là ngược nhau',
              explanation: 'Vì 2 đèn LED ngược cực, khi đổi chiều chuyển động nam châm thì dòng điện cảm ứng đổi chiều làm đèn LED đối diện phát sáng.'
            }
          }
        ]
      },
      {
        title: 'II. Viết và trình bày báo cáo một vấn đề khoa học',
        content: [
          'Một báo cáo khoa học hoặc bài thuyết trình chuẩn gồm các phần: 1. Tiêu đề; 2. Tóm tắt; 3. Giới thiệu (đặt vấn đề, mục tiêu); 4. Phương pháp (dụng cụ, các bước tiến hành); 5. Kết quả (bảng biểu, số liệu); 6. Thảo luận (phân tích, so sánh); 7. Kết luận & kiến nghị; 8. Tài liệu tham khảo.',
          'Báo cáo có thể trình bày dạng văn bản, bài trình chiếu (slide) hoặc poster treo tường (khổ A0/A1).'
        ],
        keyPoints: [
          'Báo cáo khoa học cần trung thực với số liệu thu thập được từ thực nghiệm.',
          'Slide thuyết trình cần cô đọng, nhiều hình ảnh minh họa, cỡ chữ rõ ràng.'
        ]
      }
    ],
    summary: [
      'Nắm vững cách sử dụng các dụng cụ quang học (đèn laser, bản bán trụ, thấu kính) và điện từ (điện kế, đồng hồ vạn năng).',
      'Hiểu cấu trúc bài báo cáo khoa học gồm 8 phần cơ bản.',
      'Rèn luyện kĩ năng thu thập số liệu thực nghiệm và thuyết trình mạch lạc.'
    ],
    realWorldApplications: [
      'Sử dụng đồng hồ vạn năng để kiểm tra pin, dây điện đứt trong gia đình.',
      'Thiết kế bài thuyết trình khoa học cho các dự án STEM tại trường học.'
    ]
  },
  {
    id: 2,
    chapter: 'Chương I. NĂNG LƯỢNG CƠ HỌC',
    chapterNumber: 1,
    title: 'Bài 2: Động năng. Thế năng',
    shortDesc: 'Khái niệm, đặc điểm và công thức tính động năng và thế năng trọng trường của vật thể.',
    objectives: [
      'Viết được biểu thức tính động năng của vật: Wđ = 1/2 m v^2.',
      'Viết được biểu thức tính thế năng trọng trường của vật ở gần mặt đất: Wt = P.h = m.g.h.'
    ],
    iconName: 'Zap',
    sections: [
      {
        title: 'I. Động năng',
        content: [
          'Năng lượng mà vật có được do chuyển động gọi là động năng.',
          'Vật có khối lượng càng lớn và chuyển động càng nhanh thì động năng của vật càng lớn.',
          'Độ biến thiên động năng bằng công của ngoại lực tác dụng lên vật.'
        ],
        keyPoints: [
          'Biểu thức: W_đ = 1/2 * m * v^2',
          'Trong đó: m là khối lượng (kg), v là tốc độ (m/s), W_đ là động năng (Jun - J).'
        ],
        formulas: [
          {
            latex: 'W_đ = \\frac{1}{2} m v^2',
            name: 'Công thức tính động năng',
            description: 'm (kg), v (m/s), W_đ (J)'
          }
        ],
        illustration: {
          type: 'svg-diagram',
          id: 'b2-kinetic-energy',
          caption: 'Búa chuyển động đập vào thanh thép làm biến dạng hoặc xe ô tô chạy tốc độ cao mang động năng lớn'
        },
        examples: [
          {
            id: 'ex2-1',
            title: 'Ví dụ 1: Tính động năng quả bóng đá',
            problem: 'Một quả bóng đá có khối lượng m = 0,45 kg đang bay với tốc độ v = 20 m/s. Tính động năng của quả bóng.',
            given: ['m = 0,45 kg', 'v = 20 m/s'],
            formulaUsed: 'W_đ = 1/2 * m * v^2',
            steps: [
              'Bước 1: Áp dụng công thức W_đ = 1/2 * m * v^2',
              'Bước 2: Thay số: W_đ = 0,5 * 0,45 * (20)^2 = 0,5 * 0,45 * 400',
              'Bước 3: Tính toán: W_đ = 90 J'
            ],
            answer: 'Động năng của quả bóng là 90 J.',
            similarProblem: {
              problem: 'Một xe máy cùng người lái có tổng khối lượng 150 kg đang chuyển động với tốc độ 10 m/s (36 km/h). Động năng của hệ là bao nhiêu?',
              given: ['m = 150 kg', 'v = 10 m/s'],
              hint: 'Áp dụng công thức W_đ = 1/2 * m * v^2',
              options: ['750 J', '7500 J', '15000 J', '1500 J'],
              correctAnswer: '7500 J',
              explanation: 'W_đ = 1/2 * 150 * 10^2 = 75 * 100 = 7500 J.'
            }
          }
        ]
      },
      {
        title: 'II. Thế năng trọng trường',
        content: [
          'Thế năng trọng trường (gọi tắt là thế năng) là năng lượng của một vật khi nó ở một độ cao nhất định so với mặt đất hoặc so với một vị trí được chọn làm gốc để tính độ cao.',
          'Giá trị của thế năng phụ thuộc vào mốc thế năng (gốc tính độ cao). Người ta thường chọn mặt đất làm mốc thế năng.',
          'Biểu thức: W_t = P * h = 10 * m * h (lấy g ≈ 10 m/s²)'
        ],
        keyPoints: [
          'P là trọng lượng của vật (N), h là độ cao so với mốc thế năng (m).',
          'W_t là thế năng trọng trường (J).'
        ],
        formulas: [
          {
            latex: 'W_t = P \\cdot h = m \\cdot g \\cdot h',
            name: 'Công thức tính thế năng trọng trường',
            description: 'P: trọng lượng (N), h: độ cao (m), W_t: thế năng (J)'
          }
        ],
        illustration: {
          type: 'svg-diagram',
          id: 'b2-potential-energy',
          caption: 'Hồ chứa nước của nhà máy thuỷ điện ở trên cao tích trữ thế năng trọng trường rất lớn'
        },
        examples: [
          {
            id: 'ex2-2',
            title: 'Ví dụ 2: Tính thế năng của bao xi măng',
            problem: 'Một bao xi măng có trọng lượng P = 500 N được đưa lên sàn tầng 2 có độ cao h = 4 m so với mặt đất. Chọn mốc thế năng tại mặt đất. Tính thế năng của bao xi măng.',
            given: ['P = 500 N', 'h = 4 m', 'Mốc thế năng tại mặt đất'],
            formulaUsed: 'W_t = P * h',
            steps: [
              'Bước 1: Xác định độ cao h của vật so với mốc thế năng: h = 4 m.',
              'Bước 2: Thay số vào biểu thức W_t = P * h = 500 * 4',
              'Bước 3: Kết quả: W_t = 2000 J'
            ],
            answer: 'Thế năng trọng trường của bao xi măng là 2000 J.',
            similarProblem: {
              problem: 'Một xô nước có khối lượng m = 8 kg được đặt trên bàn cao 1,2 m so với sàn nhà. Lấy g = 10 m/s² và chọn gốc thế năng tại sàn nhà. Thế năng của xô nước là:',
              given: ['m = 8 kg', 'h = 1,2 m', 'g = 10 m/s²'],
              hint: 'P = 10 * m = 80 N. Sau đó W_t = P * h.',
              options: ['96 J', '80 J', '9,6 J', '960 J'],
              correctAnswer: '96 J',
              explanation: 'W_t = m * g * h = 8 * 10 * 1,2 = 96 J.'
            }
          }
        ]
      }
    ],
    summary: [
      'Động năng phụ thuộc vào khối lượng và vận tốc: W_đ = 1/2 m v^2.',
      'Thế năng trọng trường phụ thuộc vào trọng lượng và độ cao so với mốc chọn: W_t = P.h.',
      'Cả động năng và thế năng đều có đơn vị đo là Jun (J).'
    ],
    realWorldApplications: [
      'Đập thủy điện tích trữ nước trên cao để biến thế năng thành điện năng.',
      'Quy định tốc độ xe cơ giới để hạn chế tai nạn nguy hiểm do động năng tỉ lệ với bình phương vận tốc.'
    ]
  },
  {
    id: 3,
    chapter: 'Chương I. NĂNG LƯỢNG CƠ HỌC',
    chapterNumber: 1,
    title: 'Bài 3: Cơ năng',
    shortDesc: 'Tổng động năng và thế năng cấu thành cơ năng. Định luật bảo toàn cơ năng trong trường trọng lực.',
    objectives: [
      'Nêu được cơ năng là tổng động năng và thế năng của vật.',
      'Vận dụng khái niệm cơ năng phân tích được sự chuyển hoá năng lượng trong một số trường hợp đơn giản.'
    ],
    iconName: 'RotateCw',
    sections: [
      {
        title: 'I. Khái niệm cơ năng',
        content: [
          'Khi một vật vừa có động năng vừa có thế năng, tổng động năng và thế năng được gọi là cơ năng của vật.',
          'Biểu thức: W_c = W_đ + W_t = 1/2 m v^2 + P h',
          'Đơn vị của cơ năng là Jun (J).'
        ],
        keyPoints: [
          'W_c = W_đ + W_t',
          'Khi vật chuyển động trong trọng trường mà không chịu ma sát, cơ năng được bảo toàn.'
        ],
        formulas: [
          {
            latex: 'W_c = W_đ + W_t = \\frac{1}{2}mv^2 + mgh',
            name: 'Biểu thức cơ năng',
            description: 'Tổng động năng và thế năng của vật'
          }
        ],
        illustration: {
          type: 'svg-diagram',
          id: 'b3-mechanical-energy',
          caption: 'Sự chuyển hoá qua lại giữa động năng và thế năng của con lắc đơn và người tung hứng bóng'
        },
        examples: [
          {
            id: 'ex3-1',
            title: 'Ví dụ 1: Vật rơi tự do từ độ cao h',
            problem: 'Một vật có khối lượng m = 1,5 kg được thả rơi tự do từ độ cao h = 4 m so với mặt đất. Lấy g = 10 m/s². Bỏ qua sức cản không khí. Tính cơ năng của vật và tốc độ của vật khi chạm đất.',
            given: ['m = 1,5 kg', 'h = 4 m', 'g = 10 m/s²', 'v0 = 0 m/s'],
            formulaUsed: 'W_c = W_t(max) = mgh = W_đ(max) = 1/2 mv^2',
            steps: [
              'Bước 1: Chọn gốc thế năng tại mặt đất.',
              'Bước 2: Tại vị trí thả rơi (v0 = 0), cơ năng bằng thế năng cực đại: W_c = mgh = 1,5 * 10 * 4 = 60 J.',
              'Bước 3: Vì bỏ qua ma sát nên cơ năng bảo toàn. Khi chạm đất (h = 0), thế năng bằng 0, toàn bộ cơ năng chuyển hoá thành động năng: W_đ = W_c = 60 J.',
              'Bước 4: Tính tốc độ chạm đất: 1/2 * m * v^2 = 60 => v^2 = (2 * 60) / 1,5 = 80 => v = √80 ≈ 8,94 m/s.'
            ],
            answer: 'Cơ năng W = 60 J; Tốc độ khi chạm đất v ≈ 8,94 m/s.',
            similarProblem: {
              problem: 'Một hòn đá khối lượng 0,5 kg được ném thẳng đứng lên cao với tốc độ ban đầu 10 m/s từ mặt đất. Lấy g = 10 m/s², bỏ qua lực cản. Độ cao cực đại hòn đá đạt được là:',
              given: ['m = 0,5 kg', 'v0 = 10 m/s', 'g = 10 m/s²'],
              hint: 'Cơ năng ban đầu W = 1/2 m v0^2. Tại độ cao cực đại W = m g h_max.',
              options: ['10 m', '5 m', '20 m', '2,5 m'],
              correctAnswer: '5 m',
              explanation: '1/2 * m * v0^2 = m * g * h_max => h_max = v0^2 / (2g) = 100 / 20 = 5 m.'
            }
          }
        ]
      },
      {
        title: 'II. Sự chuyển hoá năng lượng và định luật bảo toàn cơ năng',
        content: [
          'Trong quá trình chuyển động: khi vật rơi xuống, thế năng giảm thì động năng tăng; khi vật đi lên cao, động năng giảm thì thế năng tăng.',
          'Nếu không có ma sát (lực cản), tổng động năng và thế năng luôn không đổi (cơ năng bảo toàn).',
          'Nếu có ma sát hoặc lực cản, một phần cơ năng chuyển hoá thành nhiệt năng làm cơ năng giảm dần.'
        ],
        keyPoints: [
          'Ở vị trí cao nhất: Thế năng lớn nhất, động năng bằng 0.',
          'Ở vị trí thấp nhất: Động năng lớn nhất, thế năng nhỏ nhất (hoặc bằng 0 nếu tại mốc).'
        ]
      }
    ],
    summary: [
      'Cơ năng là tổng của động năng và thế năng: W = Wđ + Wt.',
      'Động năng và thế năng có thể chuyển hoá qua lại lẫn nhau.',
      'Khi bỏ qua ma sát và lực cản, cơ năng của vật được bảo toàn.'
    ],
    realWorldApplications: [
      'Nguyên lí hoạt động của búa máy đóng cọc, tàu lượn siêu tốc và con lắc đồng hồ.',
      'Vận động viên nhảy cao chạy lấy đà thật nhanh rồi bật nhảy để biến động năng thành thế năng.'
    ]
  },
  {
    id: 4,
    chapter: 'Chương I. NĂNG LƯỢNG CƠ HỌC',
    chapterNumber: 1,
    title: 'Bài 4: Công và công suất',
    shortDesc: 'Khái niệm công cơ học, công thức A = F.s, tốc độ sinh công và công suất cơ học.',
    objectives: [
      'Phân tích ví dụ cụ thể để rút ra được: công có giá trị bằng lực nhân với quãng đường dịch chuyển theo hướng của lực, công suất là tốc độ thực hiện công.',
      'Liệt kê được một số đơn vị thông dụng đo công và công suất.',
      'Tính được công và công suất trong một số trường hợp đơn giản.'
    ],
    iconName: 'Gauge',
    sections: [
      {
        title: 'I. Công cơ học',
        content: [
          'Công cơ học xuất hiện khi có lực tác dụng vào vật và làm cho vật dịch chuyển một quãng đường theo hướng của lực.',
          'Công A của một lực F không đổi làm vật dịch chuyển quãng đường s theo hướng của lực: A = F * s',
          'Đơn vị của công là Jun (J): 1 J = 1 N.m; Bội số: 1 kJ = 1000 J; 1 MJ = 1.000.000 J.',
          'Nếu lực F hợp với hướng chuyển dịch một góc α: A = F * s * cos(α). Khi góc α = 90° (lực vuông góc với hướng chuyển động) thì A = 0.'
        ],
        keyPoints: [
          'A = F * s (khi lực cùng hướng chuyển động)',
          'Nếu lực vuông góc với phương dịch chuyển thì công của lực đó bằng 0.'
        ],
        formulas: [
          {
            latex: 'A = F \\cdot s',
            name: 'Công cơ học',
            description: 'F: lực tác dụng (N), s: quãng đường theo hướng lực (m), A: công (J)'
          }
        ],
        illustration: {
          type: 'svg-diagram',
          id: 'b4-work-concept',
          caption: 'Người đẩy xe hàng dịch chuyển quãng đường s và xe nâng đưa thùng hàng lên cao'
        },
        examples: [
          {
            id: 'ex4-1',
            title: 'Ví dụ 1: Tính công của lực kéo',
            problem: 'Một đầu tàu kéo một đoàn tàu chuyển động thẳng đều với lực kéo F = 5000 N đi được quãng đường s = 2 km. Tính công do đầu tàu thực hiện.',
            given: ['F = 5000 N', 's = 2 km = 2000 m'],
            formulaUsed: 'A = F * s',
            steps: [
              'Bước 1: Đổi đơn vị quãng đường s = 2 km = 2000 m.',
              'Bước 2: Áp dụng công thức A = F * s',
              'Bước 3: Thay số: A = 5000 * 2000 = 10.000.000 J = 10 MJ.'
            ],
            answer: 'Công thực hiện của đầu tàu là 10 MJ.',
            similarProblem: {
              problem: 'Một cần cẩu nâng thùng hàng nặng 400 kg lên cao 5 m theo phương thẳng đứng. Lấy g = 10 m/s². Công của lực nâng là bao nhiêu?',
              given: ['m = 400 kg => F = P = 4000 N', 's = h = 5 m'],
              hint: 'Lực nâng tối thiểu bằng trọng lượng vật: F = P = 10 * m. Sau đó tính A = F * h.',
              options: ['20.000 J', '2.000 J', '200.000 J', '800 J'],
              correctAnswer: '20.000 J',
              explanation: 'A = F * s = 4000 * 5 = 20.000 J = 20 kJ.'
            }
          }
        ]
      },
      {
        title: 'II. Công suất',
        content: [
          'Để đánh giá việc thực hiện công nhanh hay chậm, người ta dùng đại lượng công suất.',
          'Công suất là công thực hiện được trong một đơn vị thời gian: P = A / t',
          'Đơn vị của công suất là oát (W): 1 W = 1 J/s. Bội số: 1 kW = 1000 W; 1 MW = 10^6 W.',
          'Các đơn vị khác: Mã lực Anh/Mỹ (HP) ≈ 746 W; Mã lực Pháp (CV) ≈ 736 W.'
        ],
        keyPoints: [
          'P = A / t = F * v (khi chuyển động thẳng đều)',
          'Cùng thực hiện một công A, máy nào tốn ít thời gian hơn thì công suất lớn hơn.'
        ],
        formulas: [
          {
            latex: '\\mathcal{P} = \\frac{A}{t}',
            name: 'Công suất',
            description: 'A: công (J), t: thời gian (s), P: công suất (W)'
          }
        ],
        examples: [
          {
            id: 'ex4-2',
            title: 'Ví dụ 2: So sánh công suất hai xe nâng',
            problem: 'Xe nâng thứ nhất nâng thùng hàng 500 N lên cao 1 m trong thời gian 10 s. Xe nâng thứ hai nâng thùng hàng 700 N lên cao 1 m trong thời gian 15 s. Hỏi xe nào có công suất lớn hơn?',
            given: ['Xe 1: F1 = 500 N, s = 1 m, t1 = 10 s', 'Xe 2: F2 = 700 N, s = 1 m, t2 = 15 s'],
            formulaUsed: 'P = A / t = (F * s) / t',
            steps: [
              'Bước 1: Tính công suất xe 1: P1 = (500 * 1) / 10 = 50 W.',
              'Bước 2: Tính công suất xe 2: P2 = (700 * 1) / 15 = 46,67 W.',
              'Bước 3: So sánh: P1 (50 W) > P2 (46,67 W).'
            ],
            answer: 'Xe nâng thứ nhất có công suất lớn hơn xe nâng thứ hai.',
            similarProblem: {
              problem: 'Một động cơ thực hiện một công 36 kJ trong thời gian 1 phút. Công suất của động cơ là:',
              given: ['A = 36 kJ = 36.000 J', 't = 1 phút = 60 s'],
              hint: 'Đổi thời gian ra giây: t = 60 s. Sau đó áp dụng P = A / t.',
              options: ['600 W', '360 W', '60 W', '3600 W'],
              correctAnswer: '600 W',
              explanation: 'P = 36.000 / 60 = 600 W.'
            }
          }
        ]
      }
    ],
    summary: [
      'Công cơ học: A = F.s (J). Chỉ có công khi có lực tác dụng và có độ dịch chuyển.',
      'Công suất đặc trưng cho tốc độ sinh công: P = A/t (W).',
      '1 kW = 1000 W; 1 HP ≈ 746 W.'
    ],
    realWorldApplications: [
      'Đánh giá sức kéo và hiệu năng của động cơ xe máy, ô tô, máy xúc.',
      'Lựa chọn máy bơm nước có công suất phù hợp để tiết kiệm điện năng.'
    ]
  },
  {
    id: 5,
    chapter: 'Chương II. ÁNH SÁNG',
    chapterNumber: 2,
    title: 'Bài 5: Khúc xạ ánh sáng',
    shortDesc: 'Hiện tượng khúc xạ ánh sáng, định luật khúc xạ ánh sáng và chiết suất của môi trường trong suốt.',
    objectives: [
      'Thực hiện thí nghiệm chứng tỏ được khi truyền từ môi trường này sang môi trường khác, tia sáng có thể bị khúc xạ.',
      'Nêu được chiết suất có giá trị bằng tỉ số tốc độ ánh sáng trong chân không với tốc độ ánh sáng trong môi trường: n = c/v.',
      'Phát biểu và vận dụng được biểu thức n = sin(i)/sin(r) trong một số trường hợp đơn giản.'
    ],
    iconName: 'Sun',
    sections: [
      {
        title: 'I. Hiện tượng khúc xạ ánh sáng',
        content: [
          'Hiện tượng khúc xạ ánh sáng là hiện tượng tia sáng bị gãy khúc (bị lệch khỏi phương truyền ban đầu) tại mặt phân cách khi truyền từ môi trường trong suốt này sang môi trường trong suốt khác.',
          'Quy ước các đại lượng:',
          '- I: điểm tới; SI: tia tới; IK: tia khúc xạ.',
          '- NN\': pháp tuyến tại điểm tới (vuông góc với mặt phân cách).',
          '- i: góc tới (góc hợp bởi tia tới SI và pháp tuyến NN\').',
          '- r: góc khúc xạ (góc hợp bởi tia khúc xạ IK và pháp tuyến NN\').'
        ],
        keyPoints: [
          'Tia khúc xạ nằm trong mặt phẳng tới (mặt phẳng chứa tia tới và pháp tuyến) và ở phía bên kia pháp tuyến so với tia tới.',
          'Góc tới i và góc khúc xạ r không bằng nhau.'
        ],
        illustration: {
          type: 'svg-diagram',
          id: 'b5-refraction-diagram',
          caption: 'Đường truyền của tia sáng khi bị khúc xạ tại mặt phân cách giữa không khí và nước'
        },
        examples: [
          {
            id: 'ex5-1',
            title: 'Ví dụ 1: Giải thích chiếc đũa bị gãy trong cốc nước',
            problem: 'Khi cắm một chiếc đũa thẳng nghiêng trong cốc nước trong suốt, mắt ta quan sát thấy chiếc đũa dường như bị gãy khúc tại mặt nước. Hãy giải thích hiện tượng này.',
            given: ['Môi trường 1: Nước (n ≈ 1,33)', 'Môi trường 2: Không khí (n ≈ 1)'],
            formulaUsed: 'Định luật khúc xạ ánh sáng',
            steps: [
              'Bước 1: Các tia sáng xuất phát từ đầu chiếc đũa ngập trong nước truyền ra không khí.',
              'Bước 2: Tại mặt phân cách nước - không khí, tia sáng bị khúc xạ lệch xa pháp tuyến hơn (góc khúc xạ r > góc tới i).',
              'Bước 3: Mắt ta nhìn theo đường kéo dài của các tia khúc xạ, thấy ảnh ảo của đầu chiếc đũa nằm nông hơn so với vị trí thực tế, tạo cảm giác đũa bị gãy tại mặt nước.'
            ],
            answer: 'Do hiện tượng khúc xạ ánh sáng khiến ảnh ảo của phần chìm trong nước bị nâng lên cao hơn thực tế.',
            similarProblem: {
              problem: 'Một người đứng trên bờ nhìn xuống đáy một bể bơi chứa nước trong suốt. Người đó cảm thấy đáy bể bơi như thế nào so với độ sâu thực tế?',
              given: ['Tia sáng từ đáy bể truyền từ nước ra không khí'],
              hint: 'Tia khúc xạ lệch xa pháp tuyến làm mắt nhìn thấy ảnh ảo của đáy bể.',
              options: [
                'Nông hơn độ sâu thực tế',
                'Sâu hơn độ sâu thực tế',
                'Bằng đúng độ sâu thực tế',
                'Biến mất không nhìn thấy'
              ],
              correctAnswer: 'Nông hơn độ sâu thực tế',
              explanation: 'Hiện tượng khúc xạ ánh sáng từ nước ra không khí làm ảnh ảo của đáy bể được nâng lên cao hơn đáy thật.'
            }
          }
        ]
      },
      {
        title: 'II. Định luật khúc xạ và Chiết suất của môi trường',
        content: [
          '1. Định luật khúc xạ: Với hai môi trường trong suốt nhất định, tỉ số giữa sin của góc tới (sin i) và sin của góc khúc xạ (sin r) luôn là hằng số: sin(i) / sin(r) = n21 = n2 / n1.',
          '2. Chiết suất tuyệt đối n của một môi trường là chiết suất của môi trường đó đối với chân không: n = c / v (với c = 3.10^8 m/s là tốc độ ánh sáng trong chân không, v là tốc độ ánh sáng trong môi trường).',
          'Chiết suất của chân không bằng 1, của không khí xấp xỉ bằng 1 (1,00029), nước là 1,333, thủy tinh từ 1,5 đến 1,8.'
        ],
        keyPoints: [
          'Nếu n2 > n1 (môi trường 2 chiết quang hơn) => r < i: tia khúc xạ lệch lại gần pháp tuyến hơn.',
          'Nếu n2 < n1 (môi trường 2 kém chiết quang hơn) => r > i: tia khúc xạ lệch xa pháp tuyến hơn.'
        ],
        formulas: [
          {
            latex: '\\frac{\\sin i}{\\sin r} = \\frac{n_2}{n_1} = n_{21}',
            name: 'Định luật khúc xạ ánh sáng',
            description: 'n1, n2 là chiết suất môi trường 1 và 2'
          },
          {
            latex: 'n = \\frac{c}{v}',
            name: 'Chiết suất tuyệt đối',
            description: 'c = 3.10^8 m/s, v: tốc độ ánh sáng trong môi trường'
          }
        ]
      }
    ],
    summary: [
      'Khúc xạ ánh sáng là hiện tượng tia sáng bị đổi hướng đột ngột tại mặt phân cách giữa hai môi trường trong suốt.',
      'Tia khúc xạ nằm trong mặt phẳng tới và ở phía bên kia pháp tuyến so với tia tới.',
      'Hệ thức: sin(i) / sin(r) = n2 / n1. Chiết suất n = c / v.'
    ],
    realWorldApplications: [
      'Giải thích hiện tượng ngắm cá dưới nước (con cá thật ở sâu hơn vị trí ta nhìn thấy).',
      'Ứng dụng chế tạo thấu kính, kính hiển vi, kính thiên văn.'
    ]
  },
  {
    id: 6,
    chapter: 'Chương II. ÁNH SÁNG',
    chapterNumber: 2,
    title: 'Bài 6: Phản xạ toàn phần',
    shortDesc: 'Điều kiện xảy ra hiện tượng phản xạ toàn phần, góc tới hạn và ứng dụng trong cáp quang, nội soi y học.',
    objectives: [
      'Thực hiện thí nghiệm để rút ra được điều kiện xảy ra phản xạ toàn phần và xác định được góc tới hạn: sin(ith) = n2 / n1.',
      'Vận dụng kiến thức về phản xạ toàn phần để giải thích một số hiện tượng đơn giản thường gặp trong thực tế (ảo ảnh, cáp quang).'
    ],
    iconName: 'Sparkles',
    sections: [
      {
        title: 'I. Hiện tượng phản xạ toàn phần và góc tới hạn',
        content: [
          'Hiện tượng phản xạ toàn phần là hiện tượng phản xạ toàn bộ tia sáng tới, xảy ra ở mặt phân cách giữa hai môi trường trong suốt.',
          'Khi truyền ánh sáng từ môi trường chiết quang hơn sang môi trường chiết quang kém hơn (n1 > n2):',
          '- Khi tăng góc tới i thì góc khúc xạ r cũng tăng và luôn lớn hơn i (r > i).',
          '- Khi r = 90°, tia khúc xạ đi là là mặt phân cách. Góc tới lúc này gọi là góc tới hạn phản xạ toàn phần (kí hiệu i_th).',
          '- Công thức tính góc tới hạn: sin(i_th) = n2 / n1 (với n1 > n2).'
        ],
        keyPoints: [
          'Hai điều kiện bắt buộc để có phản xạ toàn phần:',
          '1. Ánh sáng truyền từ môi trường có chiết suất n1 tới môi trường có chiết suất n2 với n1 > n2.',
          '2. Góc tới i phải lớn hơn hoặc bằng góc tới hạn: i >= i_th.'
        ],
        formulas: [
          {
            latex: '\\sin i_{th} = \\frac{n_2}{n_1} \\quad (n_1 > n_2)',
            name: 'Góc tới hạn phản xạ toàn phần',
            description: 'i >= ith thì xảy ra phản xạ toàn phần'
          }
        ],
        illustration: {
          type: 'svg-diagram',
          id: 'b6-total-internal-reflection',
          caption: 'Quá trình chuyển từ khúc xạ sang phản xạ toàn phần khi góc tới i vượt qua góc tới hạn ith'
        },
        examples: [
          {
            id: 'ex6-1',
            title: 'Ví dụ 1: Tính góc tới hạn từ thủy tinh ra không khí',
            problem: 'Tính góc tới hạn phản xạ toàn phần khi chiếu tia sáng từ khối bán trụ thủy tinh có chiết suất n1 = 1,5 ra không khí (chiết suất n2 = 1).',
            given: ['n1 = 1,5', 'n2 = 1'],
            formulaUsed: 'sin(i_th) = n2 / n1',
            steps: [
              'Bước 1: Kiểm tra điều kiện môi trường: n1 = 1,5 > n2 = 1 (thỏa mãn).',
              'Bước 2: Áp dụng công thức sin(i_th) = n2 / n1 = 1 / 1,5 = 2/3 ≈ 0,667.',
              'Bước 3: Bấm máy tính tìm góc: i_th = arcsin(0,667) ≈ 41,8° (khoảng 41°48\').'
            ],
            answer: 'Góc tới hạn phản xạ toàn phần là i_th ≈ 41,8°.',
            similarProblem: {
              problem: 'Chiếu tia sáng từ nước (n1 = 4/3) ra không khí (n2 = 1). Góc tới hạn phản xạ toàn phần xấp xỉ bằng bao nhiêu?',
              given: ['n1 = 4/3 ≈ 1,33', 'n2 = 1'],
              hint: 'sin(i_th) = 1 / (4/3) = 3/4 = 0,75.',
              options: ['48,6°', '41,8°', '60°', '30°'],
              correctAnswer: '48,6°',
              explanation: 'sin(i_th) = 3/4 = 0,75 => i_th ≈ 48,6°.'
            }
          }
        ]
      },
      {
        title: 'II. Ứng dụng của phản xạ toàn phần trong thực tế',
        content: [
          '1. Cáp quang viễn thông: Cáp quang có lõi bằng thủy tinh hoặc nhựa trong suốt có chiết suất n1, bọc lớp vỏ có chiết suất n2 < n1. Ánh sáng truyền vào lõi bị phản xạ toàn phần liên tục dọc theo sợi quang mà hầu như không bị thất thoát.',
          '2. Nội soi trong y học: Dùng bó sợi quang để đưa ánh sáng vào nội tạng và truyền hình ảnh ra ngoài giúp bác sĩ chẩn đoán không cần phẫu thuật mở.',
          '3. Hiện tượng ảo ảnh trên đường nhựa ngày hè: Không khí sát mặt đường bị nóng lên làm chiết suất nhỏ hơn lớp khí lạnh bên trên. Tia sáng từ bầu trời đi cong dần và phản xạ toàn phần hắt ngược vào mắt người, tạo ảo giác mặt đường ướt nước.'
        ],
        keyPoints: [
          'Cáp quang không bị nhiễu điện từ và có dung lượng truyền dẫn cực lớn.',
          'Kim cương sáng lấp lánh do chiết suất rất cao (n ≈ 2,42) nên góc tới hạn nhỏ (i_th ≈ 24°), ánh sáng vào bên trong bị phản xạ nhiều lần trước khi ló ra.'
        ]
      }
    ],
    summary: [
      'Phản xạ toàn phần là hiện tượng phản xạ toàn bộ tia sáng tới ở mặt phân cách.',
      'Điều kiện: n1 > n2 và i >= i_th với sin(i_th) = n2 / n1.',
      'Ứng dụng nổi bật: cáp quang Internet, nội soi y học, giải thích ảo ảnh sa mạc và mặt đường.'
    ],
    realWorldApplications: [
      'Đường truyền cáp quang tốc độ cao kết nối Internet toàn cầu xuyên đại dương.',
      'Dụng cụ nội soi dạ dày, phế quản trong các bệnh viện hiện đại.'
    ]
  },
  {
    id: 7,
    chapter: 'Chương II. ÁNH SÁNG',
    chapterNumber: 2,
    title: 'Bài 7: Lăng kính',
    shortDesc: 'Cấu tạo lăng kính, hiện tượng tán sắc ánh sáng trắng thành quang phổ 7 sắc cầu vồng và màu sắc của các vật.',
    objectives: [
      'Vẽ được sơ đồ đường truyền của tia sáng qua lăng kính.',
      'Giải thích được một cách định tính sự tán sắc ánh sáng mặt trời qua lăng kính.',
      'Nêu được màu sắc của một vật được nhìn thấy phụ thuộc vào màu sắc của ánh sáng bị vật đó hấp thụ và phản xạ.'
    ],
    iconName: 'Triangle',
    sections: [
      {
        title: 'I. Cấu tạo của lăng kính',
        content: [
          'Lăng kính là một khối chất trong suốt, đồng chất (thủy tinh, nhựa,...), thường có dạng lăng trụ tam giác.',
          'Các yếu tố của lăng kính:',
          '- Hai mặt phẳng giới hạn ở trên là các mặt bên.',
          '- Giao tuyến của hai mặt bên là cạnh của lăng kính.',
          '- Mặt đối diện với cạnh là đáy của lăng kính.',
          '- Góc hợp bởi hai mặt bên gọi là góc chiết quang A.'
        ],
        keyPoints: [
          'Một lăng kính được đặc trưng bởi: góc chiết quang A và chiết suất n của chất làm lăng kính.',
          'Khi tia sáng đơn sắc đi qua lăng kính, tia ló luôn bị lệch về phía đáy lăng kính.'
        ],
        illustration: {
          type: 'svg-diagram',
          id: 'b7-prism-dispersion',
          caption: 'Chùm sáng trắng hẹp qua lăng kính bị tán sắc thành dải màu liên tục từ đỏ đến tím'
        },
        examples: [
          {
            id: 'ex7-1',
            title: 'Ví dụ 1: So sánh độ lệch của ánh sáng đỏ và ánh sáng tím',
            problem: 'Khi chiếu một chùm sáng trắng qua lăng kính, tại sao tia màu tím lại bị lệch nhiều nhất về phía đáy, còn tia màu đỏ bị lệch ít nhất?',
            given: ['Chùm sáng trắng gồm vô số ánh sáng đơn sắc từ đỏ đến tím', 'Lăng kính thủy tinh'],
            formulaUsed: 'Định luật khúc xạ và sự phụ thuộc chiết suất vào màu sắc',
            steps: [
              'Bước 1: Chiết suất của môi trường trong suốt đối với các ánh sáng đơn sắc khác nhau là khác nhau.',
              'Bước 2: Chiết suất có giá trị nhỏ nhất đối với ánh sáng đỏ (n_đỏ nhỏ nhất) và lớn nhất đối với ánh sáng tím (n_tím lớn nhất).',
              'Bước 3: Theo định luật khúc xạ, chiết suất càng lớn thì tia sáng bị bẻ gãy khúc càng nhiều. Do đó tia tím bị bẻ cong nhiều nhất về đáy, tia đỏ bị bẻ cong ít nhất.'
            ],
            answer: 'Do chiết suất của thủy tinh đối với ánh sáng tím lớn hơn đối với ánh sáng đỏ (n_tím > n_đỏ).',
            similarProblem: {
              problem: 'Nếu thay chùm sáng trắng bằng chùm tia laser màu đỏ hẹp chiếu qua lăng kính, ta sẽ quan sát thấy hiện tượng gì trên màn hứng?',
              given: ['Tia laser đỏ là ánh sáng đơn sắc'],
              hint: 'Ánh sáng đơn sắc có bị tán sắc khi qua lăng kính không?',
              options: [
                'Vệt sáng đỏ bị lệch về phía đáy lăng kính nhưng không bị đổi màu',
                'Tia sáng bị tách thành 7 màu cầu vồng',
                'Tia sáng đi thẳng không bị lệch',
                'Tia sáng bị lăng kính hấp thụ hoàn toàn'
              ],
              correctAnswer: 'Vệt sáng đỏ bị lệch về phía đáy lăng kính nhưng không bị đổi màu',
              explanation: 'Ánh sáng đơn sắc chỉ bị khúc xạ và lệch về phía đáy lăng kính chứ không bị tán sắc tách màu.'
            }
          }
        ]
      },
      {
        title: 'II. Sự tán sắc ánh sáng và Màu sắc của vật',
        content: [
          '1. Hiện tượng tán sắc: Ánh sáng trắng là hỗn hợp của nhiều ánh sáng đơn sắc có màu biến thiên liên tục từ đỏ đến tím (Đỏ, Da cam, Vàng, Lục, Lam, Chàm, Tím).',
          '2. Màu sắc của vật:',
          '- Vật có màu nào là do nó phản xạ ánh sáng màu đó vào mắt ta và hấp thụ các ánh sáng màu còn lại.',
          '- Vật màu trắng phản xạ tất cả các ánh sáng màu.',
          '- Vật màu đen hấp thụ tất cả các ánh sáng màu và không có ánh sáng phản xạ.'
        ],
        keyPoints: [
          'Cầu vồng sau cơn mưa hình thành do sự khúc xạ, phản xạ toàn phần và tán sắc của ánh sáng mặt trời qua hàng triệu giọt nước li ti trong khí quyển.'
        ]
      }
    ],
    summary: [
      'Lăng kính là khối chất trong suốt hình lăng trụ tam giác, đặc trưng bởi góc A và chiết suất n.',
      'Ánh sáng trắng qua lăng kính bị tán sắc thành dải màu đỏ đến tím.',
      'Màu của vật là do ánh sáng màu mà vật đó phản xạ vào mắt người quan sát.'
    ],
    realWorldApplications: [
      'Máy quang phổ lăng kính dùng để phân tích thành phần cấu tạo của các nguồn sáng ở xa (ngôi sao, Mặt Trời).',
      'Giải thích hiện tượng cầu vồng thiên nhiên sau mưa.'
    ]
  },
  {
    id: 8,
    chapter: 'Chương II. ÁNH SÁNG',
    chapterNumber: 2,
    title: 'Bài 8: Thấu kính',
    shortDesc: 'Thấu kính hội tụ, thấu kính phân kì, trục chính, quang tâm, tiêu điểm và cách dựng ảnh của một vật.',
    objectives: [
      'Nêu được các khái niệm: quang tâm, trục chính, tiêu điểm chính và tiêu cự của thấu kính.',
      'Rút ra được đường đi của một số tia sáng đặc biệt qua thấu kính (qua quang tâm, song song trục chính, qua tiêu điểm).',
      'Vẽ được ảnh của một vật qua thấu kính và phân biệt ảnh thật, ảnh ảo.'
    ],
    iconName: 'Eye',
    sections: [
      {
        title: 'I. Phân loại và các đặc trưng quang học của thấu kính',
        content: [
          'Thấu kính là một khối đồng chất trong suốt giới hạn bởi hai mặt cong hoặc một mặt cong và một mặt phẳng.',
          'Phân loại:',
          '- Thấu kính rìa mỏng (thấu kính hội tụ): chùm sáng song song tới cho chùm tia ló hội tụ.',
          '- Thấu kính rìa dày (thấu kính phân kì): chùm sáng song song tới cho chùm tia ló phân kì.',
          'Các yếu tố:',
          '- Quang tâm O: Mọi tia sáng đi qua quang tâm O đều truyền thẳng.',
          '- Trục chính: Đường thẳng vuông góc với tiết diện thấu kính đi qua quang tâm O.',
          '- Tiêu điểm chính F và F\': Nằm đối xứng nhau qua quang tâm O.',
          '- Tiêu cự f: Khoảng cách từ quang tâm đến tiêu điểm chính: OF = OF\' = f.'
        ],
        keyPoints: [
          '3 tia đặc biệt qua thấu kính hội tụ:',
          '1. Tia tới qua quang tâm O -> truyền thẳng.',
          '2. Tia tới song song trục chính -> tia ló đi qua tiêu điểm F\'.',
          '3. Tia tới đi qua tiêu điểm F -> tia ló song song trục chính.'
        ],
        illustration: {
          type: 'svg-diagram',
          id: 'b8-lens-rays',
          caption: 'Đường truyền 3 tia sáng đặc biệt qua thấu kính hội tụ và tạo ảnh của vật AB'
        },
        examples: [
          {
            id: 'ex8-1',
            title: 'Ví dụ 1: Dựng ảnh vật sáng qua thấu kính hội tụ (d > f)',
            problem: 'Một vật sáng AB cao h = 2 cm đặt vuông góc với trục chính của thấu kính hội tụ có tiêu cự f = 10 cm, cách thấu kính d = 15 cm. Xác định tính chất ảnh (thật hay ảo, cùng chiều hay ngược chiều) và tính khoảng cách từ ảnh đến thấu kính d\'.',
            given: ['h = 2 cm', 'f = 10 cm', 'd = 15 cm (d > f)'],
            formulaUsed: 'Công thức thấu kính: 1/f = 1/d + 1/d\' và tỉ lệ phóng đại h\'/h = d\'/d',
            steps: [
              'Bước 1: Vì d = 15 cm > f = 10 cm nên ảnh thu được là ảnh THẬT, ngược chiều với vật.',
              'Bước 2: Áp dụng công thức 1/f = 1/d + 1/d\' => 1/d\' = 1/f - 1/d = 1/10 - 1/15 = 1/30.',
              'Bước 3: Suy ra khoảng cách từ ảnh đến thấu kính d\' = 30 cm.',
              'Bước 4: Chiều cao ảnh h\': h\' = h * (d\' / d) = 2 * (30 / 15) = 4 cm (ảnh lớn gấp 2 lần vật).'
            ],
            answer: 'Ảnh thật, ngược chiều với vật, cách thấu kính d\' = 30 cm, cao h\' = 4 cm.',
            similarProblem: {
              problem: 'Đặt vật sáng AB trước thấu kính hội tụ có f = 12 cm, cách thấu kính d = 6 cm (d < f). Ảnh thu được có tính chất gì?',
              given: ['f = 12 cm', 'd = 6 cm < f'],
              hint: 'Khi đặt vật trong khoảng tiêu cự (d < f) của thấu kính hội tụ, chùm tia ló phân kì nên ảnh hứng được là ảnh ảo.',
              options: [
                'Ảnh ảo, cùng chiều và lớn hơn vật',
                'Ảnh thật, ngược chiều và nhỏ hơn vật',
                'Ảnh thật, cùng chiều và lớn hơn vật',
                'Ảnh ảo, ngược chiều và nhỏ hơn vật'
              ],
              correctAnswer: 'Ảnh ảo, cùng chiều và lớn hơn vật',
              explanation: 'Vật nằm trong khoảng tiêu cự của thấu kính hội tụ luôn cho ảnh ảo, cùng chiều và lớn hơn vật.'
            }
          }
        ]
      },
      {
        title: 'II. Đặc điểm tạo ảnh của thấu kính phân kì',
        content: [
          'Đối với thấu kính phân kì: vật sáng đặt ở mọi vị trí trước thấu kính luôn cho ảnh ảo, cùng chiều và nhỏ hơn vật, nằm trong khoảng tiêu cự của thấu kính.',
          'Ảnh thật là ảnh hứng được trên màn chắn. Ảnh ảo là ảnh không hứng được trên màn chắn, mắt nhìn thấy bằng cách nhìn qua thấu kính.'
        ],
        keyPoints: [
          'Thấu kính phân kì luôn cho ảnh ảo nhỏ hơn vật.',
          'Thấu kính hội tụ cho ảnh ảo lớn hơn vật (khi d < f).'
        ]
      }
    ],
    summary: [
      'Thấu kính hội tụ: rìa mỏng. Cho ảnh thật ngược chiều (khi d > f) hoặc ảnh ảo cùng chiều lớn hơn vật (khi d < f).',
      'Thấu kính phân kì: rìa dày. Luôn cho ảnh ảo cùng chiều nhỏ hơn vật.',
      'Ghi nhớ 3 tia sáng đặc biệt để dựng ảnh chính xác.'
    ],
    realWorldApplications: [
      'Ống kính máy ảnh, kính thiên văn, kính hiển vi sử dụng hệ thấu kính hội tụ.',
      'Kính đeo mắt chữa tật cận thị (dùng thấu kính phân kì) và viễn thị (dùng thấu kính hội tụ).'
    ]
  },
  {
    id: 9,
    chapter: 'Chương II. ÁNH SÁNG',
    chapterNumber: 2,
    title: 'Bài 9: Thực hành đo tiêu cự của thấu kính hội tụ',
    shortDesc: 'Quy trình thực hành đo tiêu cự thấu kính hội tụ bằng phương pháp đối xứng (phương pháp Silbermann).',
    objectives: [
      'Đo được tiêu cự của thấu kính hội tụ bằng dụng cụ thực hành.',
      'Rèn luyện kĩ năng bố trí thí nghiệm quang học đồng trục và xử lí sai số thực nghiệm.'
    ],
    iconName: 'Ruler',
    sections: [
      {
        title: 'I. Cơ sở lý thuyết phương pháp Silbermann',
        content: [
          'Dựng ảnh của vật AB có độ cao h đặt vuông góc với trục chính của thấu kính hội tụ tại khoảng cách d = 2f.',
          'Khi d = 2f, ta có:',
          '- 1/f = 1/d + 1/d\' => 1/d\' = 1/f - 1/(2f) = 1/(2f) => d\' = 2f.',
          '- Khoảng cách từ vật đến ảnh: L = d + d\' = 4f => f = L / 4 = (d + d\') / 4.',
          '- Độ cao của ảnh: h\' = h * (d\' / d) = h (ảnh thật bằng đúng vật).'
        ],
        keyPoints: [
          'Dấu hiệu nhận biết đối xứng: Ảnh thật trên màn rõ nét nhất và có kích thước bằng đúng vật (h\' = h), khoảng cách từ thấu kính đến vật bằng khoảng cách đến màn (d = d\').',
          'Công thức tính tiêu cự: f = (d + d\') / 4'
        ],
        illustration: {
          type: 'experiment-setup',
          id: 'b9-silbermann-setup',
          caption: 'Bố trí giá quang học đo tiêu cự thấu kính hội tụ bằng phương pháp đối xứng Silbermann'
        },
        examples: [
          {
            id: 'ex9-1',
            title: 'Ví dụ 1: Tính tiêu cự từ số liệu thí nghiệm',
            problem: 'Trong một thí nghiệm đo tiêu cự thấu kính hội tụ theo phương pháp Silbermann, học sinh dịch chuyển vật chữ F và màn chắn sát thấu kính rồi tách đều ra hai phía. Khi ảnh chữ F trên màn rõ nét và bằng đúng vật, đo được khoảng cách từ vật đến màn là L = 48 cm. Tính tiêu cự của thấu kính.',
            given: ['Phương pháp Silbermann: d = d\' = 2f', 'Khoảng cách vật - màn: L = d + d\' = 48 cm'],
            formulaUsed: 'f = L / 4',
            steps: [
              'Bước 1: Theo nguyên lí phương pháp Silbermann, khi ảnh rõ nét và bằng vật thì d = d\' = 2f.',
              'Bước 2: Khoảng cách từ vật đến màn L = d + d\' = 4f.',
              'Bước 3: Tiêu cự thấu kính: f = L / 4 = 48 / 4 = 12 cm.'
            ],
            answer: 'Tiêu cự thấu kính hội tụ đo được là f = 12 cm.',
            similarProblem: {
              problem: 'Khi tiến hành đo tiêu cự, đo được khoảng cách từ vật tới thấu kính d = 15 cm và thấu kính tới màn d\' = 15 cm, ảnh rõ nét bằng vật. Tiêu cự thấu kính là:',
              given: ['d = 15 cm', 'd\' = 15 cm'],
              hint: 'f = (d + d\') / 4.',
              options: ['7,5 cm', '15 cm', '30 cm', '10 cm'],
              correctAnswer: '7,5 cm',
              explanation: 'f = (15 + 15) / 4 = 30 / 4 = 7,5 cm.'
            }
          }
        ]
      }
    ],
    summary: [
      'Phương pháp Silbermann dựa trên việc đặt vật ở vị trí d = 2f thì d\' = 2f và ảnh bằng vật.',
      'Công thức tính tiêu cự: f = (d + d\') / 4.',
      'Đảm bảo các dụng cụ (nguồn sáng, vật, thấu kính, màn) phải được đặt đồng trục quang học.'
    ],
    realWorldApplications: [
      'Kiểm định chất lượng và độ tụ của các thấu kính quang học xuất xưởng.',
      'Căn chỉnh tiêu cự trong các thiết bị đo đạc quang học chính xác.'
    ]
  },
  {
    id: 10,
    chapter: 'Chương II. ÁNH SÁNG',
    chapterNumber: 2,
    title: 'Bài 10: Kính lúp. Bài tập thấu kính',
    shortDesc: 'Cấu tạo, số bội giác của kính lúp và phương pháp giải các dạng bài tập quang hình thấu kính.',
    objectives: [
      'Mô tả được cấu tạo và sử dụng được kính lúp: G = 25 / f.',
      'Vẽ được sơ đồ tỉ lệ để giải các bài tập đơn giản về thấu kính hội tụ.'
    ],
    iconName: 'Search',
    sections: [
      {
        title: 'I. Kính lúp và số bội giác',
        content: [
          'Kính lúp là dụng cụ quang bổ trợ cho mắt để quan sát các vật nhỏ.',
          'Về mặt cấu tạo, kính lúp là một thấu kính hội tụ có tiêu cự ngắn (vài xentimét, f < 25 cm).',
          'Mỗi kính lúp có một số bội giác G nhất định: 2x, 5x, 10x, 20x,...',
          'Số bội giác ước ước tính theo công thức: G = 25 / f (với tiêu cự f tính bằng cm). Số bội giác càng lớn thì ảnh quan sát được càng lớn.'
        ],
        keyPoints: [
          'G = 25 / f (với f tính bằng cm)',
          'Khi quan sát qua kính lúp, phải đặt vật trong khoảng tiêu cự (d < f) để cho ảnh ảo, cùng chiều và lớn hơn vật.'
        ],
        formulas: [
          {
            latex: 'G = \\frac{25}{f \\text{ (cm)}}',
            name: 'Số bội giác của kính lúp khi ngắm chừng ở vô cực',
            description: 'f: tiêu cự (cm), G: số bội giác'
          }
        ],
        illustration: {
          type: 'svg-diagram',
          id: 'b10-magnifier-diagram',
          caption: 'Người thợ sửa đồng hồ dùng kính lúp quan sát các chi tiết siêu nhỏ dưới góc trông phóng đại'
        },
        examples: [
          {
            id: 'ex10-1',
            title: 'Ví dụ 1: Tính tiêu cự của kính lúp có số bội giác 5x',
            problem: 'Trên vành của một kính lúp có ghi kí hiệu 5x. Hãy tính tiêu cự f của kính lúp này.',
            given: ['Số bội giác G = 5x'],
            formulaUsed: 'G = 25 / f => f = 25 / G',
            steps: [
              'Bước 1: Áp dụng công thức số bội giác: G = 25 / f (cm).',
              'Bước 2: Suy ra tiêu cự: f = 25 / G.',
              'Bước 3: Thay số: f = 25 / 5 = 5 cm.'
            ],
            answer: 'Tiêu cự của kính lúp là f = 5 cm.',
            similarProblem: {
              problem: 'Một kính lúp có tiêu cự f = 10 cm. Số bội giác G ghi trên vành kính là bao nhiêu?',
              given: ['f = 10 cm'],
              hint: 'G = 25 / f.',
              options: ['2,5x', '5x', '10x', '25x'],
              correctAnswer: '2,5x',
              explanation: 'G = 25 / 10 = 2,5x.'
            }
          }
        ]
      }
    ],
    summary: [
      'Kính lúp là thấu kính hội tụ có tiêu cự ngắn (f < 25 cm).',
      'Công thức số bội giác: G = 25 / f.',
      'Vật cần quan sát phải đặt trong khoảng tiêu cự của kính để mắt nhìn thấy ảnh ảo phóng đại.'
    ],
    realWorldApplications: [
      'Thợ sửa chữa đồng hồ, thợ kim hoàn soi đá quý, người sưu tầm tem, đọc chữ nhỏ.'
    ]
  },
  {
    id: 11,
    chapter: 'Chương III. ĐIỆN',
    chapterNumber: 3,
    title: 'Bài 11: Điện trở. Định luật Ohm',
    shortDesc: 'Tác dụng cản trở dòng điện, định luật Ohm I = U/R, công thức điện trở R = ρ.l/S và đọc điện trở 4 vòng màu.',
    objectives: [
      'Nêu được điện trở có tác dụng cản trở dòng điện trong mạch.',
      'Phát biểu và viết được hệ thức định luật Ohm: I = U / R.',
      'Nêu được công thức tính điện trở dây dẫn: R = ρ * l / S.',
      'Đọc được giá trị điện trở qua các vòng màu.'
    ],
    iconName: 'Activity',
    sections: [
      {
        title: 'I. Điện trở và Định luật Ohm',
        content: [
          '1. Điện trở của vật dẫn đặc trưng cho mức độ cản trở dòng điện của vật dẫn đó. Kí hiệu là R, đơn vị là ôm (Ω).',
          '2. Định luật Ohm: Cường độ dòng điện chạy qua một đoạn dây dẫn tỉ lệ thuận với hiệu điện thế giữa hai đầu đoạn dây và tỉ lệ nghịch với điện trở của nó.',
          'Biểu thức: I = U / R => U = I * R ; R = U / I',
          '- U là hiệu điện thế giữa hai đầu dây dẫn (V)',
          '- I là cường độ dòng điện (A)',
          '- R là điện trở của dây dẫn (Ω)'
        ],
        keyPoints: [
          'Đồ thị biểu diễn sự phụ thuộc của I vào U là một đường thẳng đi qua gốc tọa độ O(0,0).',
          'Đơn vị: 1 kΩ = 1000 Ω; 1 MΩ = 1.000.000 Ω.'
        ],
        formulas: [
          {
            latex: 'I = \\frac{U}{R}',
            name: 'Định luật Ohm cho đoạn mạch',
            description: 'U (V), R (Ω), I (A)'
          }
        ],
        illustration: {
          type: 'svg-diagram',
          id: 'b11-ohms-law',
          caption: 'Sơ đồ mạch điện đo cường độ dòng điện I theo hiệu điện thế U và đồ thị đặc trưng V-A'
        },
        examples: [
          {
            id: 'ex11-1',
            title: 'Ví dụ 1: Tính hiệu điện thế bóng đèn',
            problem: 'Một bóng đèn sợi đốt có điện trở R = 12 Ω. Khi mắc vào nguồn điện, cường độ dòng điện chạy qua bóng đèn là I = 0,5 A. Tính hiệu điện thế giữa hai đầu bóng đèn.',
            given: ['R = 12 Ω', 'I = 0,5 A'],
            formulaUsed: 'U = I * R',
            steps: [
              'Bước 1: Áp dụng hệ thức định luật Ohm: I = U / R => U = I * R.',
              'Bước 2: Thay số: U = 0,5 * 12 = 6 V.'
            ],
            answer: 'Hiệu điện thế giữa hai đầu bóng đèn là 6 V.',
            similarProblem: {
              problem: 'Mắc một điện trở R = 24 Ω vào hiệu điện thế U = 12 V. Cường độ dòng điện chạy qua điện trở là:',
              given: ['R = 24 Ω', 'U = 12 V'],
              hint: 'Áp dụng I = U / R.',
              options: ['0,5 A', '2 A', '288 A', '12 A'],
              correctAnswer: '0,5 A',
              explanation: 'I = U / R = 12 / 24 = 0,5 A.'
            }
          }
        ]
      },
      {
        title: 'II. Sự phụ thuộc của điện trở vào kích thước và bản chất dây dẫn',
        content: [
          'Điện trở của một đoạn dây dẫn tỉ lệ thuận với chiều dài l của đoạn dây, tỉ lệ nghịch với tiết diện S của dây và phụ thuộc vào bản chất chất làm dây dẫn (điện trở suất ρ):',
          'Công thức: R = ρ * l / S',
          '- R: điện trở (Ω)',
          '- l: chiều dài dây dẫn (m)',
          '- S: tiết diện dây dẫn (m²)',
          '- ρ (rô): điện trở suất của chất làm dây dẫn (Ω.m). Đồng có ρ = 1,7.10^-8 Ω.m; nhôm có ρ = 2,8.10^-8 Ω.m.'
        ],
        keyPoints: [
          'Dây càng dài thì điện trở càng lớn; dây càng to (tiết diện lớn) thì điện trở càng nhỏ.',
          'Đồng và nhôm có điện trở suất nhỏ nên thường được chọn làm lõi dây dẫn điện.'
        ],
        formulas: [
          {
            latex: 'R = \\rho \\frac{l}{S}',
            name: 'Điện trở dây dẫn theo kích thước',
            description: 'ρ: điện trở suất (Ω.m), l: chiều dài (m), S: tiết diện (m²)'
          }
        ]
      }
    ],
    summary: [
      'Định luật Ohm: I = U / R.',
      'Điện trở R = ρ.l / S.',
      'Bảng 4 vòng màu: Vòng 1 và 2 chỉ giá trị số, vòng 3 là thừa số nhân 10^n, vòng 4 chỉ sai số (vàng ánh kim ±5%, bạc ±10%).'
    ],
    realWorldApplications: [
      'Chế tạo biến trở để điều chỉnh độ sáng đèn, âm lượng loa đài.',
      'Thiết kế mạng lưới dây tải điện hạn chế hao phí toả nhiệt.'
    ]
  },
  {
    id: 12,
    chapter: 'Chương III. ĐIỆN',
    chapterNumber: 3,
    title: 'Bài 12: Đoạn mạch nối tiếp, song song',
    shortDesc: 'Đặc điểm cường độ dòng điện, hiệu điện thế và công thức điện trở tương đương của mạch nối tiếp và song song.',
    objectives: [
      'Thực hiện thí nghiệm để rút ra được đặc điểm của đoạn mạch nối tiếp và đoạn mạch song song.',
      'Nêu và vận dụng được công thức tính điện trở tương đương của đoạn mạch nối tiếp và song song.'
    ],
    iconName: 'GitMerge',
    sections: [
      {
        title: 'I. Đoạn mạch mắc nối tiếp',
        content: [
          'Trong đoạn mạch gồm hai điện trở R1 và R2 mắc nối tiếp:',
          '1. Cường độ dòng điện như nhau tại mọi điểm: I = I1 = I2',
          '2. Hiệu điện thế giữa hai đầu đoạn mạch bằng tổng các hiệu điện thế thành phần: U = U1 + U2',
          '3. Điện trở tương đương bằng tổng các điện trở thành phần: R_tđ = R1 + R2',
          '4. Mở rộng cho n điện trở nối tiếp: R_tđ = R1 + R2 + ... + Rn'
        ],
        keyPoints: [
          'Hiệu điện thế giữa hai đầu mỗi điện trở tỉ lệ thuận với điện trở đó: U1 / U2 = R1 / R2',
          'Nếu một thiết bị trong mạch nối tiếp bị đứt, toàn bộ mạch bị ngắt điện.'
        ],
        formulas: [
          {
            latex: 'R_{tđ} = R_1 + R_2, \\quad I = I_1 = I_2, \\quad U = U_1 + U_2',
            name: 'Đoạn mạch nối tiếp',
            description: 'Đặc điểm mạch điện nối tiếp'
          }
        ],
        illustration: {
          type: 'svg-diagram',
          id: 'b12-circuits',
          caption: 'Sơ đồ mạch điện mắc nối tiếp và mắc song song'
        },
        examples: [
          {
            id: 'ex12-1',
            title: 'Ví dụ 1: Tính điện trở tương đương và hiệu điện thế mạch nối tiếp',
            problem: 'Cho hai điện trở R1 = 2 Ω và R2 = 3 Ω mắc nối tiếp vào hiệu điện thế U. Biết cường độ dòng điện chạy qua mạch là I = 1 A. Tính: a) Điện trở tương đương R_tđ; b) Hiệu điện thế U giữa hai đầu đoạn mạch.',
            given: ['R1 = 2 Ω', 'R2 = 3 Ω', 'I = 1 A'],
            formulaUsed: 'R_tđ = R1 + R2 và U = I * R_tđ',
            steps: [
              'Bước 1: Tính điện trở tương đương: R_tđ = R1 + R2 = 2 + 3 = 5 Ω.',
              'Bước 2: Tính hiệu điện thế toàn mạch: U = I * R_tđ = 1 * 5 = 5 V.',
              'Bước 3: (Kiểm tra lại: U1 = I * R1 = 1 * 2 = 2 V; U2 = I * R2 = 1 * 3 = 3 V => U = 2 + 3 = 5 V).'
            ],
            answer: 'a) R_tđ = 5 Ω; b) U = 5 V.',
            similarProblem: {
              problem: 'Hai điện trở R1 = 10 Ω và R2 = 15 Ω mắc nối tiếp vào nguồn điện có U = 50 V. Cường độ dòng điện trong mạch là:',
              given: ['R1 = 10 Ω', 'R2 = 15 Ω', 'U = 50 V'],
              hint: 'R_tđ = R1 + R2 = 25 Ω. Sau đó I = U / R_tđ.',
              options: ['2 A', '5 A', '0,5 A', '1 A'],
              correctAnswer: '2 A',
              explanation: 'R_tđ = 10 + 15 = 25 Ω => I = 50 / 25 = 2 A.'
            }
          }
        ]
      },
      {
        title: 'II. Đoạn mạch mắc song song',
        content: [
          'Trong đoạn mạch gồm hai điện trở R1 và R2 mắc song song:',
          '1. Hiệu điện thế giữa hai đầu các đoạn mạch song song bằng nhau: U = U1 = U2',
          '2. Cường độ dòng điện mạch chính bằng tổng cường độ dòng điện trong các mạch nhánh: I = I1 + I2',
          '3. Nghịch đảo điện trở tương đương bằng tổng nghịch đảo các điện trở thành phần: 1 / R_tđ = 1 / R1 + 1 / R2 => R_tđ = (R1 * R2) / (R1 + R2)',
          '4. Điện trở tương đương của đoạn mạch song song luôn nhỏ hơn mỗi điện trở thành phần.'
        ],
        keyPoints: [
          'Cường độ dòng điện qua mỗi nhánh tỉ lệ nghịch với điện trở nhánh: I1 / I2 = R2 / R1',
          'Các thiết bị điện trong gia đình đều được mắc song song để hoạt động độc lập theo hiệu điện thế định mức.'
        ],
        formulas: [
          {
            latex: '\\frac{1}{R_{tđ}} = \\frac{1}{R_1} + \\frac{1}{R_2} \\implies R_{tđ} = \\frac{R_1 R_2}{R_1 + R_2}',
            name: 'Điện trở tương đương mạch song song',
            description: 'U = U1 = U2, I = I1 + I2'
          }
        ]
      }
    ],
    summary: [
      'Nối tiếp: I = I1 = I2, U = U1 + U2, Rtđ = R1 + R2.',
      'Song song: U = U1 = U2, I = I1 + I2, 1/Rtđ = 1/R1 + 1/R2.',
      'Thiết bị gia đình luôn mắc song song để có thể bật/tắt độc lập và dùng đúng điện áp.'
    ],
    realWorldApplications: [
      'Mạng lưới điện sinh hoạt dân dụng (đèn, quạt, tivi, tủ lạnh mắc song song ở 220 V).',
      'Đèn nháy trang trí cây thông Noel thường mắc nối tiếp chuỗi đèn nhỏ.'
    ]
  },
  {
    id: 13,
    chapter: 'Chương III. ĐIỆN',
    chapterNumber: 3,
    title: 'Bài 13: Năng lượng của dòng điện và công suất điện',
    shortDesc: 'Điện năng tiêu thụ W = U.I.t, công suất điện P = U.I, ý nghĩa số ghi định mức và công tơ điện gia đình.',
    objectives: [
      'Lấy ví dụ chứng tỏ được dòng điện có năng lượng.',
      'Nêu được công suất điện định mức của dụng cụ điện.',
      'Tính được năng lượng của dòng điện và công suất điện trong trường hợp đơn giản: W = U.I.t, P = U.I.'
    ],
    iconName: 'Cpu',
    sections: [
      {
        title: 'I. Năng lượng của dòng điện (Điện năng)',
        content: [
          'Dòng điện mang năng lượng vì có thể thực hiện công và cung cấp nhiệt lượng.',
          'Năng lượng điện (điện năng) tiêu thụ trên một đoạn mạch được tính bởi công thức: W = A = U * I * t',
          '- U là hiệu điện thế (V)',
          '- I là cường độ dòng điện (A)',
          '- t là thời gian dòng điện chạy qua (s)',
          '- W là điện năng tiêu thụ, đơn vị là Jun (J).'
        ],
        keyPoints: [
          'W = U * I * t = I^2 * R * t = (U^2 / R) * t',
          'Điện năng có thể chuyển hoá thành quang năng (đèn), nhiệt năng (nồi cơm, bàn là), cơ năng (quạt máy).'
        ],
        formulas: [
          {
            latex: 'W = U \\cdot I \\cdot t',
            name: 'Điện năng tiêu thụ',
            description: 'U (V), I (A), t (s), W (J)'
          }
        ],
        illustration: {
          type: 'svg-diagram',
          id: 'b13-electric-power',
          caption: 'Bóng đèn sợi đốt ghi 220V - 60W và công tơ điện đo điện năng tiêu thụ hàng tháng'
        },
        examples: [
          {
            id: 'ex13-1',
            title: 'Ví dụ 1: Tính điện năng động cơ tiêu thụ',
            problem: 'Một động cơ điện một chiều hoạt động với hiệu điện thế giữa hai đầu động cơ là 12 V và cường độ dòng điện chạy qua động cơ là 0,5 A trong thời gian 30 phút. Tính năng lượng điện mà động cơ đã tiêu thụ.',
            given: ['U = 12 V', 'I = 0,5 A', 't = 30 phút = 1800 s'],
            formulaUsed: 'W = U * I * t',
            steps: [
              'Bước 1: Đổi thời gian ra giây: t = 30 * 60 = 1800 s.',
              'Bước 2: Áp dụng công thức W = U * I * t.',
              'Bước 3: Thay số: W = 12 * 0,5 * 1800 = 10.800 J = 10,8 kJ.'
            ],
            answer: 'Năng lượng điện tiêu thụ là 10.800 J (10,8 kJ).',
            similarProblem: {
              problem: 'Một bóng đèn mắc vào hiệu điện thế 220 V có cường độ dòng điện qua đèn là 0,2 A. Điện năng bóng đèn tiêu thụ trong 10 phút là:',
              given: ['U = 220 V', 'I = 0,2 A', 't = 10 phút = 600 s'],
              hint: 'Đổi t = 600 s rồi tính W = U * I * t.',
              options: ['26.400 J', '44 J', '2.640 J', '264 kJ'],
              correctAnswer: '26.400 J',
              explanation: 'W = 220 * 0,2 * 600 = 26.400 J.'
            }
          }
        ]
      },
      {
        title: 'II. Công suất điện và Số chỉ công tơ điện',
        content: [
          '1. Công suất điện của một đoạn mạch là điện năng mà đoạn mạch đó tiêu thụ trong một đơn vị thời gian: P = W / t = U * I',
          '- Đơn vị: oát (W). 1 W = 1 J/s.',
          '2. Công suất định mức: Là công suất mà dụng cụ điện tiêu thụ khi hoạt động bình thường dưới đúng hiệu điện thế định mức.',
          '3. Đo điện năng tiêu thụ: Người ta dùng công tơ điện. Mỗi số đếm trên công tơ điện tương ứng với 1 kilôoát giờ (1 kWh): 1 kWh = 1000 W * 3600 s = 3.600.000 J = 3,6.10^6 J.'
        ],
        keyPoints: [
          'P = U * I = I^2 * R = U^2 / R',
          '1 số điện (1 kWh) = 3.600.000 J = 3,6 MJ.'
        ],
        formulas: [
          {
            latex: '\\mathcal{P} = U \\cdot I = I^2 R = \\frac{U^2}{R}',
            name: 'Công suất điện',
            description: 'U: hiệu điện thế (V), I: cường độ (A), P: công suất (W)'
          }
        ]
      }
    ],
    summary: [
      'Điện năng tiêu thụ: W = U.I.t (J).',
      'Công suất điện: P = U.I (W).',
      '1 số điện trên công tơ = 1 kWh = 3,6.10^6 J.'
    ],
    realWorldApplications: [
      'Tính tiền điện sinh hoạt hàng tháng cho gia đình.',
      'Chọn mua thiết bị dán nhãn năng lượng tiết kiệm (Inverter, đèn LED thay cho đèn sợi đốt).'
    ]
  },
  {
    id: 14,
    chapter: 'Chương IV. ĐIỆN TỪ',
    chapterNumber: 4,
    title: 'Bài 14: Cảm ứng điện từ. Nguyên tắc tạo ra dòng điện xoay chiều',
    shortDesc: 'Điều kiện xuất hiện dòng điện cảm ứng, hiện tượng cảm ứng điện từ và nguyên tắc tạo ra dòng điện xoay chiều.',
    objectives: [
      'Thực hiện thí nghiệm để rút ra được: Khi số đường sức từ xuyên qua tiết diện của cuộn dây dẫn kín biến thiên thì trong cuộn dây xuất hiện dòng điện cảm ứng.',
      'Nêu được nguyên tắc tạo ra dòng điện xoay chiều (dòng điện luân phiên đổi chiều).'
    ],
    iconName: 'Magnet',
    sections: [
      {
        title: 'I. Hiện tượng cảm ứng điện từ',
        content: [
          'Khi đưa một cực của thanh nam châm lại gần hoặc ra xa đầu một cuộn dây dẫn kín (hoặc đóng/ngắt mạch điện nam châm điện), kim điện kế bị lệch khỏi vạch 0.',
          'Dòng điện xuất hiện trong cuộn dây dẫn kín khi đó gọi là dòng điện cảm ứng.',
          'Hiện tượng xuất hiện dòng điện cảm ứng được gọi là hiện tượng cảm ứng điện từ.',
          'Điều kiện xuất hiện dòng điện cảm ứng: Khi số đường sức từ xuyên qua tiết diện của cuộn dây dẫn kín biến thiên (tăng hoặc giảm).'
        ],
        keyPoints: [
          'Nam châm đứng yên so với cuộn dây: số đường sức từ không đổi => không có dòng điện cảm ứng.',
          'Nam châm chuyển động lại gần: số đường sức từ tăng => có dòng cảm ứng.',
          'Nam châm chuyển động ra xa: số đường sức từ giảm => có dòng cảm ứng ngược chiều.'
        ],
        illustration: {
          type: 'svg-diagram',
          id: 'b14-induction-generator',
          caption: 'Thí nghiệm đưa nam châm lại gần cuộn dây và mô hình máy phát điện xoay chiều khung dây quay trong từ trường'
        },
        examples: [
          {
            id: 'ex14-1',
            title: 'Ví dụ 1: Xác định điều kiện sinh dòng cảm ứng',
            problem: 'Trong trường hợp nào dưới đây thì trong cuộn dây dẫn kín xuất hiện dòng điện cảm ứng? A) Nam châm đứng yên trước cuộn dây; B) Cuộn dây và nam châm cùng chuyển động tịnh tiến với cùng vận tốc; C) Nam châm quay tròn trước đầu cuộn dây; D) Cuộn dây đứng yên trong từ trường đều.',
            given: ['Cuộn dây dẫn kín', 'Điều kiện: Số đường sức từ xuyên qua tiết diện cuộn dây biến thiên'],
            formulaUsed: 'Định luật cảm ứng điện từ',
            steps: [
              'Bước 1: Trường hợp A, B, D số đường sức từ xuyên qua cuộn dây không đổi theo thời gian => không có dòng cảm ứng.',
              'Bước 2: Trường hợp C, khi nam châm quay, các cực N và S lần lượt đến gần rồi ra xa cuộn dây, làm số đường sức từ qua tiết diện cuộn dây luân phiên tăng giảm.',
              'Bước 3: Do đó trong cuộn dây xuất hiện dòng điện cảm ứng xoay chiều.'
            ],
            answer: 'Đáp án C: Nam châm quay tròn trước đầu cuộn dây.',
            similarProblem: {
              problem: 'Để làm xuất hiện dòng điện cảm ứng trong cuộn dây dẫn kín, ta có thể thực hiện thao tác nào sau đây?',
              given: ['Cuộn dây dẫn nối kín với bóng đèn LED'],
              hint: 'Cần làm cho số đường sức từ biến thiên (thay đổi).',
              options: [
                'Đưa một cực của nam châm chuyển động lại gần hoặc ra xa cuộn dây',
                'Đặt nam châm nằm yên vĩnh viễn bên trong cuộn dây',
                'Nung nóng cuộn dây',
                'Sơn màu đỏ lên thanh nam châm'
              ],
              correctAnswer: 'Đưa một cực của nam châm chuyển động lại gần hoặc ra xa cuộn dây',
              explanation: 'Khi di chuyển nam châm lại gần hoặc ra xa, số đường sức từ qua cuộn dây tăng hoặc giảm làm phát sinh dòng điện cảm ứng.'
            }
          }
        ]
      },
      {
        title: 'II. Nguyên tắc tạo ra dòng điện xoay chiều',
        content: [
          'Dòng điện xoay chiều là dòng điện có cường độ và chiều luân phiên thay đổi theo thời gian.',
          'Dòng điện xoay chiều trong lưới điện sinh hoạt ở Việt Nam có tần số 50 Hz, nghĩa là trong 1 giây dòng điện đổi chiều 100 lần.',
          'Nguyên tắc tạo ra dòng điện xoay chiều: Dựa trên hiện tượng cảm ứng điện từ. Người ta cho cuộn dây quay trong từ trường của nam châm (hoặc cho nam châm quay trước cuộn dây đứng yên) để số đường sức từ xuyên qua tiết diện cuộn dây luân phiên tăng giảm.'
        ],
        keyPoints: [
          'Tần số f = 50 Hz => Chu kì T = 1/50 = 0,02 s.',
          'Máy phát điện xoay chiều gồm 2 bộ phận chính: Nam châm tạo từ trường và cuộn dây dẫn sinh ra dòng điện.'
        ]
      }
    ],
    summary: [
      'Dòng điện cảm ứng xuất hiện khi số đường sức từ qua tiết diện cuộn dây dẫn kín biến thiên.',
      'Dòng điện xoay chiều có chiều luân phiên đổi chiều (50 Hz ở Việt Nam).',
      'Máy phát điện hoạt động dựa trên hiện tượng cảm ứng điện từ.'
    ],
    realWorldApplications: [
      'Máy phát điện ở các nhà máy thủy điện (Hòa Bình, Sơn La), nhiệt điện, tuabin điện gió.',
      'Đinamô xe đạp phát điện thắp sáng đèn khi bánh xe quay.'
    ]
  },
  {
    id: 15,
    chapter: 'Chương IV. ĐIỆN TỪ',
    chapterNumber: 4,
    title: 'Bài 15: Tác dụng của dòng điện xoay chiều',
    shortDesc: 'Bốn tác dụng chính của dòng điện xoay chiều: nhiệt, phát sáng, từ và sinh lí. Ứng dụng và an toàn điện.',
    objectives: [
      'Lấy được ví dụ chứng tỏ dòng điện xoay chiều có tác dụng nhiệt, phát sáng, tác dụng từ, tác dụng sinh lí.',
      'Hiểu được ứng dụng trong đời sống và các quy tắc an toàn khi sử dụng điện xoay chiều.'
    ],
    iconName: 'Flame',
    sections: [
      {
        title: 'I. Các tác dụng của dòng điện xoay chiều',
        content: [
          '1. Tác dụng nhiệt: Dòng điện xoay chiều chạy qua vật dẫn làm vật nóng lên. Ứng dụng: ấm đun nước, máy sấy tóc, bàn là điện, nồi cơm điện, bếp từ.',
          '2. Tác dụng phát sáng: Dòng điện chạy qua làm đèn phát sáng. Ứng dụng: bóng đèn sợi đốt, đèn huỳnh quang, đèn LED gia đình.',
          '3. Tác dụng từ: Dòng điện xoay chiều chạy qua cuộn dây sinh ra từ trường xoay chiều, có thể hút các vật bằng sắt thép. Ứng dụng: nam châm điện xoay chiều, rơ le tự động, động cơ điện, máy biến áp.',
          '4. Tác dụng sinh lí: Nếu chạm vào dòng điện xoay chiều có thể gây co giật cơ, tê liệt thần kinh, ngừng tim, ngừng thở, gây tử vong. Trong y tế, xung điện kiểm soát được ứng dụng trong máy sốc tim (khử rung tim) để cứu sống bệnh nhân rối loạn nhịp tim.'
        ],
        keyPoints: [
          'Khác với dòng điện một chiều, tác dụng từ của dòng xoay chiều làm cực của nam châm điện đổi chiều liên tục theo chu kì.',
          'Dòng điện xoay chiều 220 V rất nguy hiểm, tuyệt đối tuân thủ quy tắc an toàn điện.'
        ],
        illustration: {
          type: 'svg-diagram',
          id: 'b15-ac-effects',
          caption: 'Bốn tác dụng của dòng điện xoay chiều trong đời sống thường ngày và y học'
        },
        examples: [
          {
            id: 'ex15-1',
            title: 'Ví dụ 1: Phân loại tác dụng của các thiết bị điện',
            problem: 'Hãy chỉ ra tác dụng chính của dòng điện xoay chiều đối với mỗi thiết bị sau: a) Nồi cơm điện; b) Quạt bàn; c) Bóng đèn tuýp huỳnh quang; d) Máy khử rung tim trong bệnh viện.',
            given: ['Nồi cơm điện, Quạt bàn, Đèn huỳnh quang, Máy khử rung tim'],
            formulaUsed: 'Phân loại 4 tác dụng: nhiệt, phát sáng, từ, sinh lí',
            steps: [
              'a) Nồi cơm điện: biến đổi điện năng thành nhiệt lượng để làm chín cơm => Tác dụng nhiệt.',
              'b) Quạt bàn: dòng điện làm quay động cơ điện dựa vào từ trường => Tác dụng từ.',
              'c) Đèn huỳnh quang: dòng điện kích thích bột huỳnh quang phát sáng => Tác dụng phát sáng.',
              'd) Máy khử rung tim: phát xung điện kích thích tim đập lại bình thường => Tác dụng sinh lí.'
            ],
            answer: 'a) Nhiệt; b) Từ; c) Phát sáng; d) Sinh lí.',
            similarProblem: {
              problem: 'Thiết bị nào sau đây hoạt động chủ yếu dựa vào tác dụng từ của dòng điện xoay chiều?',
              given: ['Các thiết bị điện gia dụng thông dụng'],
              hint: 'Thiết bị có động cơ điện quay hoặc cuộn hút nam châm.',
              options: ['Máy bơm nước', 'Bàn là điện', 'Bình nóng lạnh', 'Bóng đèn halogen'],
              correctAnswer: 'Máy bơm nước',
              explanation: 'Máy bơm nước có động cơ điện hoạt động nhờ tác dụng từ của dòng điện.'
            }
          }
        ]
      }
    ],
    summary: [
      'Dòng điện xoay chiều có 4 tác dụng: nhiệt, quang (phát sáng), từ và sinh lí.',
      'Tác dụng từ của dòng điện xoay chiều được ứng dụng rộng rãi nhất trong động cơ điện.',
      'Cần cẩn trọng khi sử dụng điện xoay chiều ở gia đình để tránh tai nạn điện giật nguy hiểm.'
    ],
    realWorldApplications: [
      'Chế tạo các máy móc gia dụng: máy sấy tóc, bếp từ, máy giặt, quạt máy.',
      'Thiết bị y tế: máy điện tim, máy khử rung tim cấp cứu đột quỵ tim.'
    ]
  },
  {
    id: 16,
    chapter: 'Chương V. NĂNG LƯỢNG VỚI CUỘC SỐNG',
    chapterNumber: 5,
    title: 'Bài 16: Vòng năng lượng trên Trái Đất. Năng lượng hoá thạch',
    shortDesc: 'Mặt Trời là nguồn năng lượng cội nguồn, chu trình năng lượng, sự hình thành và tác động môi trường của năng lượng hoá thạch.',
    objectives: [
      'Mô tả được vòng năng lượng trên Trái Đất để rút ra được: năng lượng của Trái Đất chủ yếu đến từ Mặt Trời.',
      'Nêu được sơ lược ưu điểm và nhược điểm của năng lượng hoá thạch (than đá, dầu mỏ, khí thiên nhiên).',
      'Lấy được ví dụ chứng tỏ việc đốt cháy nhiên liệu hoá thạch gây ô nhiễm môi trường và hiệu ứng nhà kính.'
    ],
    iconName: 'Globe',
    sections: [
      {
        title: 'I. Vòng năng lượng trên Trái Đất',
        content: [
          'Năng lượng mặt trời là cội nguồn của hầu hết các dạng năng lượng trên Trái Đất.',
          '- Thực vật hấp thụ năng lượng ánh sáng mặt trời qua quang hợp để tạo chất hữu cơ, là nguồn thức ăn cho động vật.',
          '- Ánh sáng mặt trời làm nóng khí quyển và biển, gây chênh lệch nhiệt độ tạo thành gió, sóng biển, thúc đẩy vòng tuần hoàn nước (bốc hơi, mây, mưa, dòng chảy sông suối).',
          '- Xác thực vật và động vật bị vùi lấp qua hàng trăm triệu năm dưới áp suất và nhiệt độ cao tạo thành nhiên liệu hoá thạch (than đá, dầu mỏ, khí thiên nhiên).'
        ],
        keyPoints: [
          'Năng lượng sinh khối, năng lượng gió, thuỷ điện và năng lượng hoá thạch đều bắt nguồn từ năng lượng mặt trời.'
        ],
        illustration: {
          type: 'svg-diagram',
          id: 'b16-energy-cycle',
          caption: 'Sơ đồ chu trình tuần hoàn năng lượng trên Trái Đất khởi nguồn từ Mặt Trời'
        },
        examples: [
          {
            id: 'ex16-1',
            title: 'Ví dụ 1: Chứng minh nguồn gốc năng lượng gió',
            problem: 'Hãy giải thích tại sao năng lượng từ gió lại có nguồn gốc sâu xa từ Mặt Trời?',
            given: ['Gió là sự chuyển động của các khối không khí'],
            formulaUsed: 'Chu trình nhiệt của khí quyển',
            steps: [
              'Bước 1: Ánh sáng mặt trời chiếu không đều xuống bề mặt Trái Đất (xích đạo nhận nhiều nhiệt hơn vùng cực, đất hấp thụ nhiệt nhanh hơn nước).',
              'Bước 2: Sự chênh lệch nhiệt độ làm cho khối không khí nóng nở ra nhẹ hơn bay lên, tạo vùng áp suất thấp; khối không khí lạnh hơn tràn vào.',
              'Bước 3: Sự chuyển động có hướng của các luồng không khí tạo ra gió. Như vậy, năng lượng của gió chính là động năng bắt nguồn từ nhiệt lượng mặt trời.'
            ],
            answer: 'Gió sinh ra do sự chênh lệch nhiệt độ bề mặt Trái Đất do Mặt Trời chiếu sáng không đồng đều.',
            similarProblem: {
              problem: 'Nguồn năng lượng nào sau đây KHÔNG có nguồn gốc từ Mặt Trời?',
              given: ['Các dạng năng lượng trên Trái Đất'],
              hint: 'Năng lượng sinh ra từ lòng Trái Đất hoặc phản ứng hạt nhân.',
              options: ['Năng lượng địa nhiệt và hạt nhân', 'Năng lượng gió', 'Năng lượng than đá', 'Năng lượng sóng biển'],
              correctAnswer: 'Năng lượng địa nhiệt và hạt nhân',
              explanation: 'Địa nhiệt sinh ra từ phân rã phóng xạ trong lòng Trái Đất, không bắt nguồn từ bức xạ Mặt Trời.'
            }
          }
        ]
      },
      {
        title: 'II. Năng lượng hoá thạch và Biến đổi khí hậu',
        content: [
          '1. Nhiên liệu hoá thạch gồm than mỏ, dầu mỏ, khí thiên nhiên.',
          '2. Ưu điểm: Nguồn năng lượng tập trung, mật độ năng lượng cao, dễ vận chuyển và lưu trữ, công nghệ khai thác đã hoàn thiện.',
          '3. Nhược điểm:',
          '- Là nguồn năng lượng không tái tạo, đang cạn kiệt nhanh chóng.',
          '- Đốt cháy thải ra lượng khổng lồ khí CO2 (gây hiệu ứng nhà kính, biến đổi khí hậu), khí độc SO2, NOx (gây mưa acid) và bụi mịn.'
        ],
        keyPoints: [
          'Hàm lượng CO2 trong khí quyển tăng từ 0,030% lên hơn 0,042% làm nhiệt độ Trái Đất tăng lên, băng tan và nước biển dâng.'
        ]
      }
    ],
    summary: [
      'Năng lượng trên Trái Đất hầu hết bắt nguồn từ Mặt Trời.',
      'Nhiên liệu hoá thạch có nguồn gốc từ xác sinh vật cổ đại qua hàng triệu năm.',
      'Lạm dụng nhiên liệu hoá thạch gây ô nhiễm không khí và biến đổi khí hậu toàn cầu.'
    ],
    realWorldApplications: [
      'Chuyển đổi từ phương tiện xe xăng sang xe điện để giảm phát thải CO2 trong đô thị.',
      'Chiến lược chuyển dịch năng lượng xanh ở Việt Nam hướng tới Net Zero 2050.'
    ]
  },
  {
    id: 17,
    chapter: 'Chương V. NĂNG LƯỢNG VỚI CUỘC SỐNG',
    chapterNumber: 5,
    title: 'Bài 17: Một số dạng năng lượng tái tạo',
    shortDesc: 'Các nguồn năng lượng tái tạo sạch: năng lượng mặt trời, gió, thuỷ điện, sóng biển và nguyên tắc 5R bảo vệ môi trường.',
    objectives: [
      'Nêu được sơ lược ưu điểm và nhược điểm của một số dạng năng lượng tái tạo (mặt trời, gió, sóng biển, dòng sông).',
      'Thảo luận để nêu được một số biện pháp sử dụng hiệu quả năng lượng và bảo vệ môi trường.'
    ],
    iconName: 'Wind',
    sections: [
      {
        title: 'I. Các dạng năng lượng tái tạo phổ biến',
        content: [
          'Năng lượng tái tạo là năng lượng đến từ các nguồn có sẵn trong tự nhiên, liên tục được bổ sung qua các quá trình tự nhiên.',
          '1. Năng lượng mặt trời: Pin quang điện (quang điện) biến đổi trực tiếp ánh sáng thành điện; máy nước nóng năng lượng mặt trời (nhiệt mặt trời).',
          '2. Năng lượng gió: Tuabin gió biến động năng của gió thành điện năng.',
          '3. Năng lượng từ sóng biển: Sử dụng phao nổi hoặc buồng dao động áp suất cột nước để chạy tuabin máy phát.',
          '4. Năng lượng dòng sông (Thuỷ điện): Tận dụng thế năng nước trong hồ chứa xả qua tuabin phát điện.'
        ],
        keyPoints: [
          'Ưu điểm: Sạch, không cạn kiệt, giảm thiểu khí thải nhà kính.',
          'Nhược điểm: Phụ thuộc thời tiết/khí hậu, chi phí đầu tư ban đầu cao, hiệu suất chuyển đổi chưa tuyệt đối.'
        ],
        illustration: {
          type: 'svg-diagram',
          id: 'b17-renewable-energy',
          caption: 'Mô hình trang trại điện gió ngoài khơi và các tấm pin mặt trời mái nhà tại Việt Nam'
        },
        examples: [
          {
            id: 'ex17-1',
            title: 'Ví dụ 1: So sánh ưu - nhược điểm của điện mặt trời',
            problem: 'Hãy nêu 2 ưu điểm lớn và 1 hạn chế cần khắc phục của nhà máy điện mặt trời.',
            given: ['Nguồn năng lượng: Bức xạ Mặt Trời'],
            formulaUsed: 'Kiến thức về năng lượng tái tạo',
            steps: [
              'Bước 1: Ưu điểm 1 - Nguồn bức xạ vô tận, miễn phí, không phát sinh khí thải CO2 trong quá trình tạo điện.',
              'Bước 2: Ưu điểm 2 - Có thể lắp đặt linh hoạt trên mái nhà các hộ gia đình hoặc vùng đất khô cằn.',
              'Bước 3: Hạn chế - Phụ thuộc vào ngày nắng (ban đêm không có điện), cần giải pháp xử lí các tấm pin cũ khi hết hạn sử dụng (khoảng 25 năm).'
            ],
            answer: 'Ưu điểm: Vô tận, sạch; Nhược điểm: Phụ thuộc thời tiết và xử lí rác thải pin sau 25 năm.',
            similarProblem: {
              problem: 'Việt Nam có tiềm năng phát triển năng lượng gió và mặt trời rất lớn chủ yếu là do đặc điểm địa lí nào?',
              given: ['Vị trí địa lí của Việt Nam'],
              hint: 'Nằm trong vùng nhiệt đới gió mùa, bờ biển dài hơn 3260 km.',
              options: [
                'Nằm gần xích đạo, số giờ nắng cao và có đường bờ biển dài',
                'Có nhiều mỏ than đá lớn',
                'Khí hậu ôn đới quanh năm có tuyết',
                'Nằm sâu trong lục địa không tiếp giáp biển'
              ],
              correctAnswer: 'Nằm gần xích đạo, số giờ nắng cao và có đường bờ biển dài',
              explanation: 'Việt Nam có đường bờ biển dài trên 3260 km nhiều gió và miền Trung, Nam nắng quanh năm rất thuận lợi cho điện gió và điện mặt trời.'
            }
          }
        ]
      },
      {
        title: 'II. Biện pháp sử dụng hiệu quả năng lượng và bảo vệ môi trường',
        content: [
          '1. Tiết kiệm năng lượng: Tắt các thiết bị điện khi không sử dụng, tận dụng ánh sáng và thông gió tự nhiên, đặt máy điều hoà trên 26 °C.',
          '2. Thay thế thiết bị hiệu suất cao: Dùng bóng đèn LED thay đèn sợi đốt, thiết bị dán nhãn 5 sao tiết kiệm năng lượng.',
          '3. Thực hiện nguyên tắc 5R đối với vật liệu: Renew (Đổi mới công nghệ sinh học) - Refuse (Từ chối đồ nhựa dùng một lần) - Reduce (Giảm thiểu) - Reuse (Tái sử dụng) - Recycle (Tái chế).'
        ],
        keyPoints: [
          'Sử dụng năng lượng tiết kiệm và hiệu quả vừa giảm chi phí gia đình vừa góp phần bảo vệ hành tinh xanh.'
        ]
      }
    ],
    summary: [
      'Năng lượng tái tạo (mặt trời, gió, nước, sóng biển) là giải pháp tương lai thay thế năng lượng hoá thạch.',
      'Áp dụng nguyên tắc 5R và thói quen tiết kiệm điện mỗi ngày để bảo vệ môi trường.'
    ],
    realWorldApplications: [
      'Lắp đặt hệ thống điện mặt trời áp mái tại trường học và hộ gia đình.',
      'Sử dụng xe buýt điện, xe máy điện giảm khói bụi tại Hà Nội và TP. Hồ Chí Minh.'
    ]
  }
];
