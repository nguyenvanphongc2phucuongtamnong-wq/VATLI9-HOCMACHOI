import { LessonMiniGamesSet } from '../types';

export const LESSON_MINI_GAMES: Record<number, LessonMiniGamesSet> = {
  1: {
    lessonId: 1,
    speedGame: {
      id: 'speed_1',
      title: '⚡ Ai Nhanh Hơn: Động Năng',
      timeLimit: 20,
      question: 'Khi tốc độ của một vật tăng lên gấp 3 lần và khối lượng không đổi thì động năng $W_đ$ của vật sẽ thay đổi như thế nào?',
      options: [
        'Tăng lên 9 lần',
        'Tăng lên 3 lần',
        'Tăng lên 6 lần',
        'Không thay đổi'
      ],
      correctAnswer: 'Tăng lên 9 lần',
      explanation: 'Theo công thức $W_đ = \\frac{1}{2}mv^2$, động năng tỉ lệ thuận với bình phương tốc độ $v^2$. Khi $v$ tăng 3 lần thì $(3)^2 = 9$ lần.'
    },
    matchGame: {
      id: 'match_1',
      title: '🧩 Ghép Đúng: Đại Lượng & Đơn Vị Động Năng',
      pairs: [
        { id: 'p1_1', left: 'Động năng ($W_đ$)', right: 'Joule (J)', category: 'Đại lượng - Đơn vị', explanation: 'Động năng là một dạng năng lượng, có đơn vị là Joule (J).' },
        { id: 'p1_2', left: 'Khối lượng ($m$)', right: 'Kilôgam (kg)', category: 'Đại lượng - Đơn vị', explanation: 'Khối lượng trong công thức động năng bắt buộc phải đổi về kg.' },
        { id: 'p1_3', left: 'Tốc độ chuyển động ($v$)', right: 'Mét trên giây (m/s)', category: 'Đại lượng - Đơn vị', explanation: 'Tốc độ trong công thức chuẩn SI là m/s ($1\\text{ m/s} = 3{,}6\\text{ km/h}$).' },
        { id: 'p1_4', left: 'Công thức động năng', right: '$W_đ = \\frac{1}{2}mv^2$', category: 'Đại lượng - Công thức', explanation: 'Biểu thức xác định động năng của vật có khối lượng $m$ chuyển động với tốc độ $v$.' }
      ]
    },
    predictGame: {
      id: 'predict_1',
      title: '🔬 Dự Đoán Thí Nghiệm: Va Chạm Của Viên Bi Thép',
      setupDescription: 'Thả viên bi thép khối lượng $m$ lăn từ máng nghiêng ở độ cao $h$ va chạm vào miếng gỗ trên máng nằm ngang. Miếng gỗ bị đẩy dịch chuyển một đoạn $s_1$.',
      visualType: 'kinetic',
      question: 'Điều gì sẽ xảy ra với quãng đường dịch chuyển của miếng gỗ nếu ta thả một viên bi thép khác có khối lượng $2m$ từ cùng độ cao $h$?',
      options: [
        'Miếng gỗ dịch chuyển đoạn đường lớn hơn gấp khoảng 2 lần',
        'Miếng gỗ đứng yên không dịch chuyển',
        'Miếng gỗ dịch chuyển đoạn đường ngắn hơn một nửa',
        'Quãng đường dịch chuyển của miếng gỗ vẫn giữ nguyên'
      ],
      correctAnswer: 'Miếng gỗ dịch chuyển đoạn đường lớn hơn gấp khoảng 2 lần',
      actualOutcome: 'Viên bi khối lượng $2m$ làm miếng gỗ văng đi xa gấp khoảng 2 lần so với viên bi ban đầu.',
      explanation: 'Ở cùng độ cao $h$, cả 2 viên bi đạt cùng tốc độ $v$ ở chân máng. Vì $W_đ = \\frac{1}{2}mv^2$, viên bi có khối lượng $2m$ có động năng lớn gấp đôi, do đó sinh công đẩy miếng gỗ đi xa gấp 2 lần.'
    }
  },

  2: {
    lessonId: 2,
    speedGame: {
      id: 'speed_2',
      title: '⚡ Ai Nhanh Hơn: Thế Năng Trọng Trường',
      timeLimit: 20,
      question: 'Một vật được đưa lên độ cao tăng gấp đôi so với mốc thế năng mặt đất thì thế năng trọng trường $W_t$ của vật sẽ:',
      options: [
        'Tăng lên 2 lần',
        'Tăng lên 4 lần',
        'Giảm đi một nửa',
        'Không thay đổi'
      ],
      correctAnswer: 'Tăng lên 2 lần',
      explanation: 'Theo công thức $W_t = P \\cdot h = m \\cdot g \\cdot h$, thế năng trọng trường tỉ lệ bậc nhất với độ cao $h$ so với mốc chọn.'
    },
    matchGame: {
      id: 'match_2',
      title: '🧩 Ghép Đúng: Thế Năng Trọng Trường',
      pairs: [
        { id: 'p2_1', left: 'Thế năng trọng trường ($W_t$)', right: '$W_t = P \\cdot h = mgh$', category: 'Đại lượng - Công thức', explanation: 'Thế năng phụ thuộc trọng lượng $P$ (hoặc khối lượng $m$) và độ cao $h$.' },
        { id: 'p2_2', left: 'Trọng lượng vật ($P$)', right: 'Newton (N)', category: 'Đại lượng - Đơn vị', explanation: 'Trọng lượng của vật được đo bằng đơn vị Newton (N).' },
        { id: 'p2_3', left: 'Độ cao so với mốc ($h$)', right: 'Mét (m)', category: 'Đại lượng - Đơn vị', explanation: 'Độ cao được tính bằng mét theo phương thẳng đứng từ mốc thế năng.' },
        { id: 'p2_4', left: 'Vật nằm tại mốc thế năng', right: '$W_t = 0\\text{ J}$', category: 'Hiện tượng - Giải thích', explanation: 'Tại vị trí chọn làm gốc tính độ cao thì $h = 0$ nên $W_t = 0$.' }
      ]
    },
    predictGame: {
      id: 'predict_2',
      title: '🔬 Dự Đoán Thí Nghiệm: Thả Quả Nặng Đóng Cọc',
      setupDescription: 'Thí nghiệm thả rơi quả nặng $m$ từ độ cao $h_1 = 30\\text{ cm}$ xuống một chiếc cọc gỗ cắm trên mặt cát. Cọc lún sâu $2\\text{ cm}$ vào cát.',
      visualType: 'potential',
      question: 'Điều gì sẽ xảy ra nếu ta nâng quả nặng lên độ cao $h_2 = 60\\text{ cm}$ rồi mới thả rơi?',
      options: [
        'Chiếc cọc gỗ bị lún sâu hơn vào cát (khoảng 4 cm)',
        'Chiếc cọc gỗ bị bật ngược lên khỏi cát',
        'Độ lún của cọc gỗ giảm đi một nửa',
        'Độ lún của cọc gỗ vẫn đúng bằng 2 cm'
      ],
      correctAnswer: 'Chiếc cọc gỗ bị lún sâu hơn vào cát (khoảng 4 cm)',
      actualOutcome: 'Khi rơi từ độ cao 60 cm, quả nặng đóng cọc gỗ lún sâu khoảng 4 cm vào cát.',
      explanation: 'Khi nâng lên độ cao gấp đôi ($h_2 = 2h_1$), thế năng trọng trường tăng gấp đôi. Năng lượng này chuyển hóa thành công đóng cọc $A = F_{cản} \\cdot s$, làm độ lún $s$ tăng gấp 2 lần.'
    }
  },

  3: {
    lessonId: 3,
    speedGame: {
      id: 'speed_3',
      title: '⚡ Ai Nhanh Hơn: Cơ Năng & Định Luật Bảo Toàn',
      timeLimit: 20,
      question: 'Một quả bóng được ném thẳng đứng lên cao từ mặt đất. Tại điểm cao nhất của quỹ đạo:',
      options: [
        'Động năng bằng 0, thế năng đạt cực đại',
        'Thế năng bằng 0, động năng đạt cực đại',
        'Cả động năng và thế năng đều bằng 0',
        'Cơ năng của vật bị triệt tiêu hoàn toàn'
      ],
      correctAnswer: 'Động năng bằng 0, thế năng đạt cực đại',
      explanation: 'Tại điểm cao nhất, vận tốc vật tức thời bằng $0$ ($W_đ = 0$), toàn bộ động năng ban đầu đã chuyển hóa thành thế năng cực đại ($W_t = W_{max}$).'
    },
    matchGame: {
      id: 'match_3',
      title: '🧩 Ghép Đúng: Chuyển Hóa Cơ Năng',
      pairs: [
        { id: 'p3_1', left: 'Cơ năng ($W$)', right: '$W = W_đ + W_t$', category: 'Đại lượng - Công thức', explanation: 'Cơ năng là tổng động năng và thế năng của vật.' },
        { id: 'p3_2', left: 'Vật đang rơi tự do từ trên cao xuống', right: 'Thế năng chuyển hóa thành động năng', category: 'Hiện tượng - Giải thích', explanation: 'Độ cao $h$ giảm dần, tốc độ $v$ tăng dần nên $W_t \\to W_đ$.' },
        { id: 'p3_3', left: 'Vật được ném thẳng đứng lên cao', right: 'Động năng chuyển hóa thành thế năng', category: 'Hiện tượng - Giải thích', explanation: 'Tốc độ $v$ giảm dần, độ cao $h$ tăng dần nên $W_đ \\to W_t$.' },
        { id: 'p3_4', left: 'Bỏ qua lực cản của không khí', right: 'Cơ năng được bảo toàn không đổi', category: 'Hiện tượng - Giải thích', explanation: 'Khi chỉ có trọng lực tác dụng, cơ năng $W = W_đ + W_t = \\text{const}$.' }
      ]
    },
    predictGame: {
      id: 'predict_3',
      title: '🔬 Dự Đoán Thí Nghiệm: Con Lắc Đơn Dao Động',
      setupDescription: 'Kéo một con lắc đơn lệch khỏi vị trí cân bằng một góc $45^\\circ$ tới vị trí biên A rồi buông tay nhẹ nhàng (không vận tốc đầu). Con lắc chuyển động qua vị trí thấp nhất O rồi tiến về phía bên kia vị trí biên B.',
      visualType: 'mechanical',
      question: 'Điều gì sẽ xảy ra với vị trí biên B so với biên A nếu bỏ qua hoàn toàn ma sát và lực cản không khí?',
      options: [
        'Vị trí biên B có cùng độ cao với vị trí ban đầu A',
        'Vị trí B sẽ cao hơn vị trí ban đầu A rất nhiều',
        'Vị trí B thấp hơn vị trí A một nửa',
        'Con lắc dừng lại ngay ở vị trí cân bằng O'
      ],
      correctAnswer: 'Vị trí biên B có cùng độ cao với vị trí ban đầu A',
      actualOutcome: 'Con lắc vung sang phía bên kia và dừng lại đúng ở độ cao bằng với độ cao ban đầu tại A.',
      explanation: 'Theo định luật bảo toàn cơ năng, tại 2 biên A và B vận tốc đều bằng $0$ ($W_đ = 0$). Toàn bộ năng lượng là thế năng: $mgh_A = mgh_B \\implies h_B = h_A$.'
    }
  },

  4: {
    lessonId: 4,
    speedGame: {
      id: 'speed_4',
      title: '⚡ Ai Nhanh Hơn: Công & Công Suất',
      timeLimit: 20,
      question: 'Đơn vị Oát (Watt - kí hiệu W) là đơn vị đo của đại lượng nào sau đây?',
      options: [
        'Công suất ($\mathcal{P}$)',
        'Công cơ học ($A$)',
        'Lực tác dụng ($F$)',
        'Quãng đường đi được ($s$)'
      ],
      correctAnswer: 'Công suất ($\mathcal{P}$)',
      explanation: 'Oát (W) là đơn vị chuẩn của công suất, $1\\text{ W} = 1\\text{ J/s}$. Đơn vị của công cơ học là Joule (J).'
    },
    matchGame: {
      id: 'match_4',
      title: '🧩 Ghép Đúng: Công Cơ Học & Công Suất',
      pairs: [
        { id: 'p4_1', left: 'Công cơ học ($A$)', right: '$A = F \\cdot s$', category: 'Đại lượng - Công thức', explanation: 'Công bằng tích của lực tác dụng và quãng đường dịch chuyển theo hướng lực.' },
        { id: 'p4_2', left: 'Công suất ($\mathcal{P}$)', right: '$\\mathcal{P} = \\frac{A}{t}$', category: 'Đại lượng - Công thức', explanation: 'Công suất đặc trưng cho tốc độ thực hiện công trong một đơn vị thời gian.' },
        { id: 'p4_3', left: 'Đơn vị công suất ($1\\text{ kW}$)', right: '$1000\\text{ W}$', category: 'Đại lượng - Đơn vị', explanation: 'Tiền tố kilo nghĩa là nhân với 1000.' },
        { id: 'p4_4', left: 'Lực vuông góc phương dịch chuyển', right: 'Không sinh công cơ học ($A = 0$)', category: 'Hiện tượng - Giải thích', explanation: 'Khi lực vuông góc với phương chuyển dời thì công sinh ra bằng 0.' }
      ]
    },
    predictGame: {
      id: 'predict_4',
      title: '🔬 Dự Đoán Thí Nghiệm: Cần Cẩu Nâng Hàng',
      setupDescription: 'Cần cẩu A nâng kiện hàng $500\\text{ kg}$ lên cao $10\\text{ m}$ hết $20\\text{ giây}$. Cần cẩu B cũng nâng kiện hàng $500\\text{ kg}$ lên cao $10\\text{ m}$ nhưng chỉ mất $10\\text{ giây}$.',
      visualType: 'power',
      question: 'Điều gì khẳng định đúng về công và công suất của hai cần cẩu?',
      options: [
        'Cả hai thực hiện công như nhau, nhưng công suất cần cẩu B gấp 2 lần cần cẩu A',
        'Cần cẩu B thực hiện công lớn gấp đôi cần cẩu A',
        'Cần cẩu A có công suất lớn hơn vì hoạt động lâu hơn',
        'Cả công và công suất của cần cẩu B đều lớn hơn cần cẩu A'
      ],
      correctAnswer: 'Cả hai thực hiện công như nhau, nhưng công suất cần cẩu B gấp 2 lần cần cẩu A',
      actualOutcome: 'Cả hai cần cẩu đều sinh công $A = 50000\\text{ J}$, nhưng cần cẩu B có công suất $5000\\text{ W}$ so với cần cẩu A là $2500\\text{ W}$.',
      explanation: 'Vì cùng nâng vật $500\\text{ kg}$ lên $10\\text{ m}$ nên công bằng nhau: $A = P \\cdot h$. Vì thời gian $t_B = \\frac{1}{2}t_A$ nên công suất $\\mathcal{P}_B = \\frac{A}{t_B} = 2\\mathcal{P}_A$.'
    }
  },

  5: {
    lessonId: 5,
    speedGame: {
      id: 'speed_5',
      title: '⚡ Ai Nhanh Hơn: Khúc Xạ Ánh Sáng',
      timeLimit: 20,
      question: 'Khi tia sáng truyền nghiêng góc từ không khí vào nước thì góc khúc xạ $r$ so với góc tới $i$ như thế nào?',
      options: [
        'Góc khúc xạ $r$ nhỏ hơn góc tới $i$ ($r < i$)',
        'Góc khúc xạ $r$ lớn hơn góc tới $i$ ($r > i$)',
        'Góc khúc xạ $r$ luôn bằng góc tới $i$ ($r = i$)',
        'Tia sáng truyền thẳng không bị lệch'
      ],
      correctAnswer: 'Góc khúc xạ $r$ nhỏ hơn góc tới $i$ ($r < i$)',
      explanation: 'Nước có chiết suất lớn hơn không khí ($n_2 > n_1$) nên tia sáng bị bẻ gãy lại gần pháp tuyến hơn, nghĩa là $r < i$.'
    },
    matchGame: {
      id: 'match_5',
      title: '🧩 Ghép Đúng: Khúc Xạ Ánh Sáng',
      pairs: [
        { id: 'p5_1', left: 'Góc tới ($i$)', right: 'Góc giữa tia tới và pháp tuyến', category: 'Hiện tượng - Giải thích', explanation: 'Được đo từ tia tới tới đường pháp tuyến vuông góc với mặt phân cách.' },
        { id: 'p5_2', left: 'Góc khúc xạ ($r$)', right: 'Góc giữa tia khúc xạ và pháp tuyến', category: 'Hiện tượng - Giải thích', explanation: 'Được đo từ tia khúc xạ tới đường pháp tuyến.' },
        { id: 'p5_3', left: 'Định luật khúc xạ ánh sáng', right: '$n_1 \\sin i = n_2 \\sin r$', category: 'Đại lượng - Công thức', explanation: 'Biểu thức của định luật khúc xạ ánh sáng (định luật Snell).' },
        { id: 'p5_4', left: 'Chiếu tia sáng vuông góc ($i = 0^\\circ$)', right: 'Tia sáng truyền thẳng không khúc xạ ($r = 0^\\circ$)', category: 'Hiện tượng - Giải thích', explanation: 'Khi góc tới $i = 0^\\circ$ thì góc khúc xạ $r = 0^\\circ$.' }
      ]
    },
    predictGame: {
      id: 'predict_5',
      title: '🔬 Dự Đoán Thí Nghiệm: Nhìn Đồng Xu Dưới Đáy Chậu Nước',
      setupDescription: 'Đặt một đồng xu dưới đáy một chiếc bát rỗng. Lùi mắt ra xa đến vị trí mép bát vừa vặn che khuất tầm nhìn thấy đồng xu. Giữ nguyên vị trí mắt quan sát và từ từ rót nước vào bát.',
      visualType: 'refraction',
      question: 'Điều gì sẽ xảy ra khi rót nước gần đầy chiếc bát?',
      options: [
        'Mắt nhìn thấy lại đồng xu như thể đồng xu được nâng nổi lên cao hơn',
        'Đồng xu chìm biến mất hoàn toàn không thấy nữa',
        'Đồng xu bị chia làm hai hình ảnh song song',
        'Đồng xu bị méo thành hình elip đen'
      ],
      correctAnswer: 'Mắt nhìn thấy lại đồng xu như thể đồng xu được nâng nổi lên cao hơn',
      actualOutcome: 'Mắt người quan sát nhìn thấy lại đồng xu ở vị trí nâng cao hơn so với đáy thật.',
      explanation: 'Tia sáng từ đồng xu đi từ nước ra không khí bị khúc xạ lệch xa pháp tuyến ($r > i$), đi vào mắt người quan sát làm cho mắt nhìn thấy ảnh ảo của đồng xu nằm cao hơn đáy thật.'
    }
  },

  6: {
    lessonId: 6,
    speedGame: {
      id: 'speed_6',
      title: '⚡ Ai Nhanh Hơn: Phản Xạ Toàn Phần',
      timeLimit: 20,
      question: 'Hiện tượng phản xạ toàn phần CHỈ có thể xảy ra khi nào?',
      options: [
        'Ánh sáng đi từ môi trường chiết quang hơn sang kém hơn và $i \\ge i_{gh}$',
        'Ánh sáng đi từ môi trường chiết quang kém sang môi trường chiết quang hơn',
        'Ánh sáng chiếu vuông góc với mặt phân cách',
        'Góc tới luôn nhỏ hơn góc giới hạn ($i < i_{gh}$)'
      ],
      correctAnswer: 'Ánh sáng đi từ môi trường chiết quang hơn sang kém hơn và $i \\ge i_{gh}$',
      explanation: 'Điều kiện cần và đủ: Ánh sáng truyền từ môi trường có $n_1 > n_2$ và góc tới phải thỏa mãn $i \\ge i_{gh}$ với $\\sin i_{gh} = \\frac{n_2}{n_1}$.'
    },
    matchGame: {
      id: 'match_6',
      title: '🧩 Ghép Đúng: Phản Xạ Toàn Phần',
      pairs: [
        { id: 'p6_1', left: 'Góc giới hạn phản xạ ($i_{gh}$)', right: '$\\sin i_{gh} = \\frac{n_2}{n_1}$', category: 'Đại lượng - Công thức', explanation: 'Công thức tính góc giới hạn khi ánh sáng đi từ môi trường $n_1$ sang $n_2$ ($n_1 > n_2$).' },
        { id: 'p6_2', left: 'Cáp quang dẫn sáng Internet', right: 'Ứng dụng phản xạ toàn phần', category: 'Thiết bị - Công dụng', explanation: 'Tín hiệu ánh sáng truyền trong lõi sợi quang nhờ phản xạ toàn phần liên tục.' },
        { id: 'p6_3', left: 'Ảo ảnh trên đường nhựa nắng gắt', right: 'Khúc xạ và phản xạ toàn phần', category: 'Hiện tượng - Giải thích', explanation: 'Lớp không khí sát mặt đường nóng nhẹ hơn lớp trên làm tia sáng bị phản xạ toàn phần.' },
        { id: 'p6_4', left: 'Khi góc tới $i > i_{gh}$', right: 'Toàn bộ tia sáng bị phản xạ trở lại', category: 'Hiện tượng - Giải thích', explanation: 'Không còn tia khúc xạ sang môi trường thứ hai.' }
      ]
    },
    predictGame: {
      id: 'predict_6',
      title: '🔬 Dự Đoán Thí Nghiệm: Chiếu Laser Trong Dòng Nước Chảy',
      setupDescription: 'Khoét một lỗ nhỏ ở thành chai nhựa chứa nước để tạo thành một tia nước cong chảy ra ngoài chậu. Chiếu thẳng chùm tia laser đỏ từ phía sau chai xuyên qua lỗ theo dòng tia nước.',
      visualType: 'total-reflection',
      question: 'Điều gì sẽ xảy ra với đường truyền của tia laser?',
      options: [
        'Tia laser bị bẫy uốn cong theo dòng nước chảy nhờ phản xạ toàn phần',
        'Tia laser truyền thẳng ra ngoài không gian bỏ qua dòng nước',
        'Tia laser bị nước dập tắt và biến mất ngay tại lỗ chai',
        'Tia laser bị đổi màu từ đỏ sang xanh lam'
      ],
      correctAnswer: 'Tia laser bị bẫy uốn cong theo dòng nước chảy nhờ phản xạ toàn phần',
      actualOutcome: 'Tia laser phản xạ liên tục giữa thành dòng nước và không khí, uốn cong theo dòng nước rơi vào chậu.',
      explanation: 'Tia sáng laser truyền từ nước ra không khí với góc tới lớn hơn góc giới hạn $i_{gh}$, nên bị phản xạ toàn phần liên tục dọc theo vệt tia nước cong (nguyên lý của sợi cáp quang).'
    }
  },

  7: {
    lessonId: 7,
    speedGame: {
      id: 'speed_7',
      title: '⚡ Ai Nhanh Hơn: Thấu Kính Hội Tụ',
      timeLimit: 20,
      question: 'Chùm tia sáng song song với trục chính của thấu kính hội tụ sau khi đi qua thấu kính sẽ:',
      options: [
        'Hội tụ tại tiêu điểm ảnh chính $F\'$ của thấu kính',
        'Phân kì loe rộng ra xa trục chính',
        'Truyền thẳng không bị đổi hướng',
        'Phản xạ ngược trở lại nguồn sáng'
      ],
      correctAnswer: 'Hội tụ tại tiêu điểm ảnh chính $F\'$ của thấu kính',
      explanation: 'Đây là tính chất đặc trưng của thấu kính hội tụ: tia tới song song với trục chính cho tia ló đi qua tiêu điểm $F\'$.'
    },
    matchGame: {
      id: 'match_7',
      title: '🧩 Ghép Đúng: Tia Sáng Qua Thấu Kính Hội Tụ',
      pairs: [
        { id: 'p7_1', left: 'Tia tới đi qua quang tâm O', right: 'Tiếp tục truyền thẳng không đổi hướng', category: 'Hiện tượng - Giải thích', explanation: 'Mọi tia sáng đi qua quang tâm O của thấu kính đều truyền thẳng.' },
        { id: 'p7_2', left: 'Tia tới song song trục chính', right: 'Tia ló đi qua tiêu điểm $F\'$', category: 'Hiện tượng - Giải thích', explanation: 'Tia song song trục chính hội tụ tại tiêu điểm $F\'$.' },
        { id: 'p7_3', left: 'Tia tới đi qua tiêu điểm vật F', right: 'Tia ló song song với trục chính', category: 'Hiện tượng - Giải thích', explanation: 'Theo tính thuận nghịch của chiều truyền ánh sáng.' },
        { id: 'p7_4', left: 'Đặc điểm hình dạng thấu kính hội tụ', right: 'Phần rìa mỏng hơn phần giữa', category: 'Thiết bị - Công dụng', explanation: 'Thấu kính hội tụ bằng thủy tinh trong suốt có phần rìa mỏng.' }
      ]
    },
    predictGame: {
      id: 'predict_7',
      title: '🔬 Dự Đoán Thí Nghiệm: Đốt Mảnh Giấy Bằng Ánh Nắng Mặt Trời',
      setupDescription: 'Vào buổi trưa nắng to, đặt một thấu kính hội tụ vuông góc với ánh sáng mặt trời và đặt một mẩu giấy khô phía sau thấu kính. Dịch chuyển mẩu giấy đến đúng vị trí tiêu cự $f$.',
      visualType: 'converging-lens',
      question: 'Điều gì sẽ xảy ra tại điểm vệt sáng trên mẩu giấy?',
      options: [
        'Vệt sáng thu nhỏ thành một điểm rất chói và mẩu giấy bốc khói cháy',
        'Mẩu giấy bị ướt sũng nước do ánh sáng hội tụ',
        'Không có hiện tượng gì xảy ra, mẩu giấy vẫn bình thường',
        'Mẩu giấy bị đẩy bay ra xa thấu kính'
      ],
      correctAnswer: 'Vệt sáng thu nhỏ thành một điểm rất chói và mẩu giấy bốc khói cháy',
      actualOutcome: 'Toàn bộ nhiệt lượng từ chùm sáng mặt trời song song hội tụ tại tiêu điểm, nhiệt độ tăng cao làm giấy bốc cháy.',
      explanation: 'Mặt trời ở rất xa nên chùm sáng tới là chùm song song. Thấu kính hội tụ tập trung toàn bộ năng lượng ánh sáng tại tiêu điểm $F\'$, làm nhiệt độ tại điểm đó tăng vọt đủ để đốt cháy giấy.'
    }
  },

  8: {
    lessonId: 8,
    speedGame: {
      id: 'speed_8',
      title: '⚡ Ai Nhanh Hơn: Thấu Kính Phân Kì',
      timeLimit: 20,
      question: 'Vật sáng đặt tại mọi vị trí trước thấu kính phân kì luôn luôn cho ảnh có tính chất gì?',
      options: [
        'Ảnh ảo, cùng chiều và nhỏ hơn vật',
        'Ảnh thật, ngược chiều và lớn hơn vật',
        'Ảnh thật, cùng chiều và bằng vật',
        'Ảnh ảo, ngược chiều và lớn hơn vật'
      ],
      correctAnswer: 'Ảnh ảo, cùng chiều và nhỏ hơn vật',
      explanation: 'Thấu kính phân kì luôn luôn cho ảnh ảo, cùng chiều và nhỏ hơn vật, nằm trong khoảng tiêu cự của thấu kính.'
    },
    matchGame: {
      id: 'match_8',
      title: '🧩 Ghép Đúng: Thấu Kính Phân Kì',
      pairs: [
        { id: 'p8_1', left: 'Đặc điểm hình dạng thấu kính phân kì', right: 'Phần rìa dày hơn phần giữa', category: 'Thiết bị - Công dụng', explanation: 'Thấu kính phân kì có phần mép rìa dày hơn tâm giữa.' },
        { id: 'p8_2', left: 'Tia tới song song trục chính', right: 'Tia ló loe rộng, đường kéo dài qua $F$', category: 'Hiện tượng - Giải thích', explanation: 'Đường kéo dài của tia ló đi qua tiêu điểm $F$ cùng phía với tia tới.' },
        { id: 'p8_3', left: 'Ảnh tạo bởi thấu kính phân kì', right: 'Luôn là ảnh ảo, nhỏ hơn vật', category: 'Hiện tượng - Giải thích', explanation: 'Dù đặt vật ở bất kì vị trí nào trước thấu kính phân kì.' },
        { id: 'p8_4', left: 'Ứng dụng trong y học thị giác', right: 'Làm kính cận cho mắt cận thị', category: 'Thiết bị - Công dụng', explanation: 'Kính cận là thấu kính phân kì giúp đưa ảnh về đúng màng lưới.' }
      ]
    },
    predictGame: {
      id: 'predict_8',
      title: '🔬 Dự Đoán Thí Nghiệm: Chiếu Chùm Sáng Song Song Qua TK Phân Kì',
      setupDescription: 'Chiếu một chùm sáng hẹp song song với trục chính xuyên qua một thấu kính phân kì. Đặt một màn chắn hứng sáng phía sau thấu kính và từ từ dịch chuyển màn chắn ra xa thấu kính.',
      visualType: 'diverging-lens',
      question: 'Điều gì sẽ xảy ra với kích thước vệt sáng thu được trên màn chắn?',
      options: [
        'Vệt sáng loe rộng ra ngày càng lớn khi màn chắn ra xa thấu kính',
        'Vệt sáng co nhỏ lại thành một điểm tụ duy nhất',
        'Vệt sáng giữ nguyên kích thước không thay đổi',
        'Vệt sáng biến mất hoàn toàn'
      ],
      correctAnswer: 'Vệt sáng loe rộng ra ngày càng lớn khi màn chắn ra xa thấu kính',
      actualOutcome: 'Chùm tia ló phân kì loe rộng ra, tạo vệt sáng hình tròn có diện tích ngày càng lớn trên màn chắn.',
      explanation: 'Đúng như tên gọi thấu kính phân kì, chùm tia ló bị khúc xạ bẻ ra xa trục chính, càng đi xa thấu kính thì chùm tia càng loe rộng.'
    }
  },

  9: {
    lessonId: 9,
    speedGame: {
      id: 'speed_9',
      title: '⚡ Ai Nhanh Hơn: Tạo Ảnh Qua Thấu Kính',
      timeLimit: 20,
      question: 'Đặt vật sáng AB trước thấu kính hội tụ tại khoảng cách $d > 2f$. Ảnh $A\'B\'$ thu được trên màn là:',
      options: [
        'Ảnh thật, ngược chiều và nhỏ hơn vật',
        'Ảnh thật, ngược chiều và lớn hơn vật',
        'Ảnh ảo, cùng chiều và lớn hơn vật',
        'Ảnh thật, cùng chiều và bằng vật'
      ],
      correctAnswer: 'Ảnh thật, ngược chiều và nhỏ hơn vật',
      explanation: 'Khi $d > 2f$, thấu kính hội tụ cho ảnh thật ngược chiều nhỏ hơn vật, nằm trong khoảng $f < d\' < 2f$ (nguyên lý của máy ảnh).'
    },
    matchGame: {
      id: 'match_9',
      title: '🧩 Ghép Đúng: Vị Trí & Tính Chất Ảnh Qua TKHT',
      pairs: [
        { id: 'p9_1', left: 'Vật đặt rất xa ($d > 2f$)', right: 'Ảnh thật, ngược chiều, nhỏ hơn vật', category: 'Hiện tượng - Giải thích', explanation: 'Ứng dụng trong máy chụp ảnh để thu cảnh vật lớn lên cảm biến nhỏ.' },
        { id: 'p9_2', left: 'Vật đặt tại vị trí $d = 2f$', right: 'Ảnh thật, ngược chiều, bằng vật ($d\' = 2f$)', category: 'Hiện tượng - Giải thích', explanation: 'Trường hợp đối xứng đặc biệt của thấu kính hội tụ.' },
        { id: 'p9_3', left: 'Vật đặt trong khoảng $f < d < 2f$', right: 'Ảnh thật, ngược chiều, lớn hơn vật', category: 'Hiện tượng - Giải thích', explanation: 'Ứng dụng trong máy chiếu phim, phóng đại hình ảnh lên màn lớn.' },
        { id: 'p9_4', left: 'Vật đặt trong tiêu cự ($d < f$)', right: 'Ảnh ảo, cùng chiều, lớn hơn vật', category: 'Hiện tượng - Giải thích', explanation: 'Ứng dụng của kính lúp dùng để quan sát chi tiết nhỏ.' }
      ]
    },
    predictGame: {
      id: 'predict_9',
      title: '🔬 Dự Đoán Thí Nghiệm: Che Khuất Nửa Thấu Kính Hội Tụ',
      setupDescription: 'Một ngọn nến đặt trước thấu kính hội tụ đang cho một ảnh thật rõ nét trên màn hứng. Lấy một tấm bìa đen mờ che kín hoàn toàn nửa trên của thấu kính.',
      visualType: 'converging-lens',
      question: 'Điều gì sẽ xảy ra với hình ảnh của ngọn nến trên màn hứng?',
      options: [
        'Ảnh vẫn đầy đủ toàn bộ ngọn nến nhưng độ sáng bị mờ đi',
        'Mất đi nửa trên của ngọn nến',
        'Mất đi nửa dưới của ngọn nến',
        'Ảnh biến mất hoàn toàn không còn gì'
      ],
      correctAnswer: 'Ảnh vẫn đầy đủ toàn bộ ngọn nến nhưng độ sáng bị mờ đi',
      actualOutcome: 'Ảnh trên màn vẫn nguyên vẹn hình dáng cả cây nến nhưng ánh sáng thu được tối hơn một nửa.',
      explanation: 'Từ mỗi điểm trên ngọn nến phát ra vô số tia sáng truyền tới thấu kính. Nửa dưới của thấu kính vẫn hứng được các tia sáng và hội tụ tạo nên toàn bộ ảnh của ngọn nến, chỉ là số lượng tia sáng giảm đi làm ảnh bớt sáng.'
    }
  },

  10: {
    lessonId: 10,
    speedGame: {
      id: 'speed_10',
      title: '⚡ Ai Nhanh Hơn: Kính Lúp',
      timeLimit: 20,
      question: 'Số bội giác của kính lúp có tiêu cự $f = 5\\text{ cm}$ (khi ngắm chừng ở vô cực) là:',
      options: [
        '$G = 5\\times$',
        '$G = 25\\times$',
        '$G = 2{,}5\\times$',
        '$G = 50\\times$'
      ],
      correctAnswer: '$G = 5\\times$',
      explanation: 'Áp dụng công thức số bội giác chuẩn SGK: $G = \\frac{25}{f\\text{ (cm)}} = \\frac{25}{5} = 5\\times$.'
    },
    matchGame: {
      id: 'match_10',
      title: '🧩 Ghép Đúng: Kính Lúp',
      pairs: [
        { id: 'p10_1', left: 'Bản chất của kính lúp', right: 'Thấu kính hội tụ có tiêu cự ngắn', category: 'Thiết bị - Công dụng', explanation: 'Kính lúp là thấu kính hội tụ có tiêu cự thường chỉ vài xentimét.' },
        { id: 'p10_2', left: 'Công thức số bội giác', right: '$G = \\frac{25}{f\\text{ (cm)}}$', category: 'Đại lượng - Công thức', explanation: 'Với khoảng cực cận của mắt thường chuẩn là $25\\text{ cm}$.' },
        { id: 'p10_3', left: 'Vị trí đặt vật khi quan sát', right: 'Trong khoảng tiêu cự của kính ($d < f$)', category: 'Hiện tượng - Giải thích', explanation: 'Để kính lúp tạo ra ảnh ảo lớn hơn vật cho mắt quan sát.' },
        { id: 'p10_4', left: 'Ảnh tạo bởi kính lúp', right: 'Ảnh ảo, cùng chiều, lớn hơn vật', category: 'Hiện tượng - Giải thích', explanation: 'Ảnh ảo cùng phía với vật, giúp mắt nhìn thấy rõ nét dưới góc trông lớn.' }
      ]
    },
    predictGame: {
      id: 'predict_10',
      title: '🔬 Dự Đoán Thí Nghiệm: So Sánh Hai Chiếc Kính Lúp',
      setupDescription: 'Có hai chiếc kính lúp: Kính (1) có tiêu cự $f_1 = 5\\text{ cm}$, Kính (2) có tiêu cự $f_2 = 10\\text{ cm}$. Dùng lần lượt từng kính để quan sát một dòng chữ in li ti trên con tem.',
      visualType: 'magnifier',
      question: 'Chiếc kính lúp nào sẽ phóng đại dòng chữ to hơn (có số bội giác lớn hơn)?',
      options: [
        'Kính (1) phóng to hơn vì có tiêu cự ngắn hơn ($G_1 = 5\\times > G_2 = 2{,}5\\times$)',
        'Kính (2) phóng to hơn vì có tiêu cự dài hơn',
        'Hai kính phóng to như nhau',
        'Cả hai kính đều không phóng to được dòng chữ'
      ],
      correctAnswer: 'Kính (1) phóng to hơn vì có tiêu cự ngắn hơn ($G_1 = 5\\times > G_2 = 2{,}5\\times$)',
      actualOutcome: 'Dòng chữ nhìn qua Kính (1) to gấp đôi so với khi nhìn qua Kính (2).',
      explanation: 'Theo công thức $G = \\frac{25}{f}$, số bội giác tỉ lệ nghịch với tiêu cự $f$. Kính có tiêu cự càng ngắn thì số bội giác càng lớn, hình ảnh phóng đại càng to.'
    }
  },

  11: {
    lessonId: 11,
    speedGame: {
      id: 'speed_11',
      title: '⚡ Ai Nhanh Hơn: Mắt & Tật Của Mắt',
      timeLimit: 20,
      question: 'Để khắc phục tật cận thị, người bị cận thị cần phải đeo loại kính nào?',
      options: [
        'Kính phân kì có tiêu điểm $F$ trùng với điểm cực viễn $C_v$',
        'Kính hội tụ có tiêu cự rất ngắn',
        'Kính hai mặt phẳng song song',
        'Kính màu chống lóa ánh sáng'
      ],
      correctAnswer: 'Kính phân kì có tiêu điểm $F$ trùng với điểm cực viễn $C_v$',
      explanation: 'Kính cận là thấu kính phân kì, giúp tạo ảnh ảo của vật ở vô cực về đúng điểm cực viễn $C_v$ của mắt cận để mắt nhìn rõ.'
    },
    matchGame: {
      id: 'match_11',
      title: '🧩 Ghép Đúng: Mắt & Tật Khúc Xạ',
      pairs: [
        { id: 'p11_1', left: 'Thể thủy tinh của mắt', right: 'Đóng vai trò như thấu kính hội tụ', category: 'Thiết bị - Công dụng', explanation: 'Thể thủy tinh phồng lên xẹp xuống để điều tiết tiêu cự của mắt.' },
        { id: 'p11_2', left: 'Màng lưới (võng mạc)', right: 'Đóng vai trò như màn hứng ảnh', category: 'Thiết bị - Công dụng', explanation: 'Nơi tập trung các tế bào thị giác cảm nhận ánh sáng và truyền về não.' },
        { id: 'p11_3', left: 'Mắt cận thị', right: 'Điểm cực viễn $C_v$ ở gần mắt, đeo kính phân kì', category: 'Hiện tượng - Giải thích', explanation: 'Mắt cận chỉ nhìn rõ vật ở gần, không nhìn rõ vật ở xa.' },
        { id: 'p11_4', left: 'Mắt viễn thị (hoặc mắt lão)', right: 'Điểm cực cận $C_c$ ở xa mắt, đeo kính hội tụ', category: 'Hiện tượng - Giải thích', explanation: 'Người viễn thị nhìn gần mờ, cần đeo kính hội tụ để đọc sách.' }
      ]
    },
    predictGame: {
      id: 'predict_11',
      title: '🔬 Dự Đoán Thí Nghiệm: Mắt Cận Nhìn Vật Ở Xa',
      setupDescription: 'Một học sinh bị cận thị không đeo kính, cố gắng nhìn một bảng chữ cái đặt ở khoảng cách $5\\text{ mét}$. Bạn ấy phải nheo mắt lại.',
      visualType: 'eye',
      question: 'Hình ảnh chữ cái do thể thủy tinh của mắt bạn học sinh cận thị tạo ra sẽ hội tụ ở vị trí nào?',
      options: [
        'Hội tụ ở phía TRƯỚC màng lưới võng mạc',
        'Hội tụ chính xác trên màng lưới võng mạc',
        'Hội tụ ở phía SAU màng lưới võng mạc',
        'Không thể tạo thành ảnh trong mắt'
      ],
      correctAnswer: 'Hội tụ ở phía TRƯỚC màng lưới võng mạc',
      actualOutcome: 'Chùm sáng hội tụ phía trước màng lưới, tạo ra một vệt nhòe không rõ nét trên màng lưới.',
      explanation: 'Mắt cận có trục nhãn cầu dài hơn bình thường hoặc thể thủy tinh quá cong, làm chùm sáng từ vật ở xa hội tụ trước màng lưới, khiến vật bị nhòe.'
    }
  },

  12: {
    lessonId: 12,
    speedGame: {
      id: 'speed_12',
      title: '⚡ Ai Nhanh Hơn: Ánh Sáng Trắng & Ánh Sáng Màu',
      timeLimit: 20,
      question: 'Khi chiếu một chùm ánh sáng trắng hẹp qua một lăng kính thủy tinh, chùm tia ló bị tách ra thành dải màu liên tục từ:',
      options: [
        'Đỏ đến tím',
        'Tím đến đỏ',
        'Chỉ có màu đỏ và màu xanh lam',
        'Không bị đổi màu, vẫn là ánh sáng trắng'
      ],
      correctAnswer: 'Đỏ đến tím',
      explanation: 'Đây là hiện tượng tán sắc ánh sáng của Newton: Ánh sáng trắng gồm vô số ánh sáng đơn sắc biến thiên liên tục từ đỏ đến tím, trong đó tia đỏ lệch ít nhất, tia tím lệch nhiều nhất.'
    },
    matchGame: {
      id: 'match_12',
      title: '🧩 Ghép Đúng: Tán Sắc & Màu Sắc Ánh Sáng',
      pairs: [
        { id: 'p12_1', left: 'Ánh sáng mặt trời', right: 'Ánh sáng trắng (tổng hợp nhiều màu)', category: 'Hiện tượng - Giải thích', explanation: 'Bao gồm vô số ánh sáng màu đơn sắc từ đỏ đến tím.' },
        { id: 'p12_2', left: 'Cầu vồng sau cơn mưa', right: 'Tán sắc ánh sáng qua giọt nước mưa', category: 'Hiện tượng - Giải thích', explanation: 'Các giọt nước mưa li ti đóng vai trò như các lăng kính tán sắc ánh sáng mặt trời.' },
        { id: 'p12_3', left: 'Tấm lọc màu đỏ', right: 'Chỉ cho ánh sáng đỏ truyền qua', category: 'Thiết bị - Công dụng', explanation: 'Hấp thụ hầu hết các màu khác và cho màu đỏ đi qua.' },
        { id: 'p12_4', left: 'Vật màu xanh lục dưới ánh sáng trắng', right: 'Tán xạ tốt ánh sáng màu xanh lục', category: 'Hiện tượng - Giải thích', explanation: 'Vật hấp thụ các màu khác và tán xạ màu lục vào mắt ta.' }
      ]
    },
    predictGame: {
      id: 'predict_12',
      title: '🔬 Dự Đoán Thí Nghiệm: Chiếu Đèn Xanh Lên Quả Táo Đỏ',
      setupDescription: 'Trong một phòng tối hoàn toàn, đặt một quả táo chín đỏ tươi trên bàn. Bật một chiếc đèn pin phát ra ánh sáng đơn sắc màu xanh lục chiếu thẳng vào quả táo.',
      visualType: 'dispersion',
      question: 'Mắt người trong phòng tối sẽ nhìn thấy quả táo có màu gì?',
      options: [
        'Quả táo có màu gần như đen (tối sẫm)',
        'Quả táo phát sáng rực rỡ màu đỏ chói',
        'Quả táo biến đổi thành màu vàng chanh',
        'Quả táo phát sáng màu trắng tinh'
      ],
      correctAnswer: 'Quả táo có màu gần như đen (tối sẫm)',
      actualOutcome: 'Quả táo đỏ hấp thụ gần như toàn bộ ánh sáng xanh lục và không có ánh sáng phản xạ vào mắt nên trông đen sẫm.',
      explanation: 'Vật có màu đỏ chỉ tán xạ tốt ánh sáng đỏ và hấp thụ các ánh sáng màu khác. Chiếu ánh sáng xanh lục vào, quả táo hấp thụ hết ánh sáng này, không có tia sáng nào hắt vào mắt ta nên mắt thấy quả táo có màu đen.'
    }
  },

  13: {
    lessonId: 13,
    speedGame: {
      id: 'speed_13',
      title: '⚡ Ai Nhanh Hơn: Định Luật Ohm',
      timeLimit: 20,
      question: 'Theo định luật Ohm, cường độ dòng điện $I$ chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế $U$ và:',
      options: [
        'Tỉ lệ nghịch với điện trở $R$ của dây dẫn',
        'Tỉ lệ thuận với điện trở $R$ của dây dẫn',
        'Bằng bình phương điện trở $R$',
        'Không phụ thuộc vào điện trở $R$'
      ],
      correctAnswer: 'Tỉ lệ nghịch với điện trở $R$ của dây dẫn',
      explanation: 'Định luật Ohm: $I = \\frac{U}{R}$. Cường độ dòng điện tỉ lệ thuận với $U$ và tỉ lệ nghịch với điện trở $R$.'
    },
    matchGame: {
      id: 'match_13',
      title: '🧩 Ghép Đúng: Định Luật Ohm & Đơn Vị',
      pairs: [
        { id: 'p13_1', left: 'Công thức định luật Ohm', right: '$I = \\frac{U}{R}$', category: 'Đại lượng - Công thức', explanation: 'Hệ thức định luật Ohm cho đoạn mạch điện.' },
        { id: 'p13_2', left: 'Cường độ dòng điện ($I$)', right: 'Ampe (A)', category: 'Đại lượng - Đơn vị', explanation: 'Đo bằng ampe kế mắc nối tiếp vào đoạn mạch.' },
        { id: 'p13_3', left: 'Hiệu điện thế ($U$)', right: 'Vôn (V)', category: 'Đại lượng - Đơn vị', explanation: 'Đo bằng vôn kế mắc song song vào hai đầu đoạn mạch.' },
        { id: 'p13_4', left: 'Điện trở ($R$)', right: 'Ôm ($\\Omega$)', category: 'Đại lượng - Đơn vị', explanation: 'Đặc trưng cho mức độ cản trở dòng điện của vật dẫn.' }
      ]
    },
    predictGame: {
      id: 'predict_13',
      title: '🔬 Dự Đoán Thí Nghiệm: Tăng Hiệu Điện Thế Đặt Vào Điện Trở',
      setupDescription: 'Mắc một điện trở $R = 10\\,\\Omega$ vào nguồn điện có hiệu điện thế $U = 6\\text{ V}$. Ampe kế trong mạch chỉ giá trị $I_1 = 0{,}6\\text{ A}$. Tăng hiệu điện thế của nguồn lên $U = 12\\text{ V}$.',
      visualType: 'ohm',
      question: 'Kim ampe kế trong mạch sẽ chỉ giá trị mới bằng bao nhiêu?',
      options: [
        'Chỉ đúng $1{,}2\\text{ A}$ (tăng gấp đôi)',
        'Vẫn giữ nguyên ở mức $0{,}6\\text{ A}$',
        'Giảm xuống còn $0{,}3\\text{ A}$',
        'Kim chỉ vọt lên vô cực làm nổ mạch'
      ],
      correctAnswer: 'Chỉ đúng $1{,}2\\text{ A}$ (tăng gấp đôi)',
      actualOutcome: 'Kim ampe kế lệch sang phải và dừng lại chính xác tại giá trị 1,2 A.',
      explanation: 'Theo định luật Ohm: $I = \\frac{U}{R}$. Khi điện trở $R$ không đổi, hiệu điện thế $U$ tăng gấp 2 lần ($12\\text{ V} / 6\\text{ V} = 2$) thì cường độ dòng điện $I$ cũng tăng gấp đôi: $I_2 = \\frac{12}{10} = 1{,}2\\text{ A}$.'
    }
  },

  14: {
    lessonId: 14,
    speedGame: {
      id: 'speed_14',
      title: '⚡ Ai Nhanh Hơn: Điện Trở Của Dây Dẫn',
      timeLimit: 20,
      question: 'Khi tăng chiều dài dây dẫn $l$ lên 3 lần và giảm tiết diện $S$ đi 2 lần thì điện trở của dây sẽ:',
      options: [
        'Tăng lên 6 lần',
        'Tăng lên 3 lần',
        'Giảm đi 6 lần',
        'Không thay đổi'
      ],
      correctAnswer: 'Tăng lên 6 lần',
      explanation: 'Theo công thức $R = \\rho \\frac{l}{S}$, $R$ tỉ lệ thuận với $l$ và tỉ lệ nghịch với $S$. Khi $l$ tăng 3 và $S$ giảm 2 thì $R$ tăng: $3 \\times 2 = 6$ lần.'
    },
    matchGame: {
      id: 'match_14',
      title: '🧩 Ghép Đúng: Điện Trở Dây Dẫn',
      pairs: [
        { id: 'p14_1', left: 'Công thức điện trở theo kích thước', right: '$R = \\rho \\frac{l}{S}$', category: 'Đại lượng - Công thức', explanation: 'Phụ thuộc vào vật liệu ($\\rho$), chiều dài ($l$) và tiết diện ($S$).' },
        { id: 'p14_2', left: 'Điện trở suất ($\\rho$)', right: '$\\Omega \\cdot \\text{m}$ (Ôm mét)', category: 'Đại lượng - Đơn vị', explanation: 'Đặc trưng cho vật liệu làm dây dẫn ở nhiệt độ xác định.' },
        { id: 'p14_3', left: 'Chiều dài dây dẫn ($l$)', right: 'Mét (m)', category: 'Đại lượng - Đơn vị', explanation: 'Điện trở tỉ lệ thuận với chiều dài dây.' },
        { id: 'p14_4', left: 'Tiết diện dây dẫn ($S$)', right: 'Mét vuông ($\\text{m}^2$)', category: 'Đại lượng - Đơn vị', explanation: 'Dây càng to tiết diện càng lớn thì cản trở dòng điện càng ít.' }
      ]
    },
    predictGame: {
      id: 'predict_14',
      title: '🔬 Dự Đoán Thí Nghiệm: Cắt Đôi Sợi Dây Điện Trở',
      setupDescription: 'Có một sợi dây mayso đồng chất dài $1\\text{ m}$ có điện trở đo được là $R = 20\\,\\Omega$. Dùng kìm cắt đôi sợi dây thành 2 đoạn bằng nhau dài $0{,}5\\text{ m}$.',
      visualType: 'wire',
      question: 'Điện trở của mỗi đoạn dây $0{,}5\\text{ m}$ sau khi cắt sẽ bằng bao nhiêu?',
      options: [
        'Mỗi đoạn có điện trở bằng $10\\,\\Omega$ (giảm một nửa)',
        'Mỗi đoạn vẫn có điện trở bằng $20\\,\\Omega$',
        'Mỗi đoạn có điện trở vọt lên $40\\,\\Omega$',
        'Điện trở của mỗi đoạn giảm về $0\\,\\Omega$'
      ],
      correctAnswer: 'Mỗi đoạn có điện trở bằng $10\\,\\Omega$ (giảm một nửa)',
      actualOutcome: 'Mắc từng đoạn ngắn vào cầu đo điện trở, đồng hồ hiển thị chính xác 10 Ω.',
      explanation: 'Vì điện trở tỉ lệ thuận với chiều dài dây dẫn ($R = \\rho \\frac{l}{S}$), khi chiều dài giảm đi một nửa ($l\' = \\frac{l}{2}$) thì điện trở cũng giảm đi một nửa: $R\' = \\frac{20}{2} = 10\\,\\Omega$.'
    }
  },

  15: {
    lessonId: 15,
    speedGame: {
      id: 'speed_15',
      title: '⚡ Ai Nhanh Hơn: Đoạn Mạch Nối Tiếp & Song Song',
      timeLimit: 20,
      question: 'Hai điện trở $R_1 = 6\\,\\Omega$ và $R_2 = 12\\,\\Omega$ mắc song song với nhau. Điện trở tương đương của đoạn mạch là:',
      options: [
        '$R_{tđ} = 4\\,\\Omega$',
        '$R_{tđ} = 18\\,\\Omega$',
        '$R_{tđ} = 9\\,\\Omega$',
        '$R_{tđ} = 2\\,\\Omega$'
      ],
      correctAnswer: '$R_{tđ} = 4\\,\\Omega$',
      explanation: 'Công thức mạch song song: $R_{tđ} = \\frac{R_1 R_2}{R_1 + R_2} = \\frac{6 \\times 12}{6 + 12} = \\frac{72}{18} = 4\\,\\Omega$.'
    },
    matchGame: {
      id: 'match_15',
      title: '🧩 Ghép Đúng: Đoạn Mạch Nối Tiếp & Song Song',
      pairs: [
        { id: 'p15_1', left: 'Điện trở mạch nối tiếp', right: '$R_{tđ} = R_1 + R_2$', category: 'Đại lượng - Công thức', explanation: 'Điện trở tương đương bằng tổng các điện trở thành phần.' },
        { id: 'p15_2', left: 'Cường độ trong mạch nối tiếp', right: '$I = I_1 = I_2$', category: 'Đại lượng - Công thức', explanation: 'Dòng điện đi qua lần lượt từng phần tử không bị rẽ nhánh.' },
        { id: 'p15_3', left: 'Hiệu điện thế mạch song song', right: '$U = U_1 = U_2$', category: 'Đại lượng - Công thức', explanation: 'Hai đầu các nhánh song song chung cùng một cặp điểm nút.' },
        { id: 'p15_4', left: 'Cường độ mạch chính song song', right: '$I = I_1 + I_2$', category: 'Đại lượng - Công thức', explanation: 'Dòng mạch chính bằng tổng dòng điện trong các nhánh rẽ.' }
      ]
    },
    predictGame: {
      id: 'predict_15',
      title: '🔬 Dự Đoán Thí Nghiệm: Tháo Một Bóng Đèn Trong Mạch Nối Tiếp',
      setupDescription: 'Mắc nối tiếp hai bóng đèn Đ1 và Đ2 vào một nguồn điện pin. Cả hai bóng đèn đều đang sáng bình thường. Tháo rời bóng đèn Đ1 ra khỏi đui đèn.',
      visualType: 'series',
      question: 'Điều gì sẽ xảy ra với bóng đèn Đ2 còn lại trong mạch?',
      options: [
        'Bóng đèn Đ2 tắt ngay lập tức vì mạch bị hở',
        'Bóng đèn Đ2 sáng rực rỡ gấp đôi',
        'Bóng đèn Đ2 vẫn sáng bình thường như cũ',
        'Bóng đèn Đ2 bị nổ dây tóc'
      ],
      correctAnswer: 'Bóng đèn Đ2 tắt ngay lập tức vì mạch bị hở',
      actualOutcome: 'Dòng điện ngừng chạy trong toàn bộ mạch nối tiếp, bóng Đ2 lập tức vụt tắt.',
      explanation: 'Trong mạch nối tiếp, các thiết bị mắc nối đuôi nhau thành một vòng khép kín duy nhất. Khi tháo một bóng đèn, mạch bị hở tại điểm đó, dòng điện trong mạch giảm về 0 làm bóng còn lại tắt.'
    }
  },

  16: {
    lessonId: 16,
    speedGame: {
      id: 'speed_16',
      title: '⚡ Ai Nhanh Hơn: Năng Lượng Điện & Công Suất Điện',
      timeLimit: 20,
      question: 'Một bóng đèn có ghi $220\\text{ V} - 100\\text{ W}$. Con số $100\\text{ W}$ cho biết:',
      options: [
        'Công suất định mức của đèn khi dùng ở điện áp $220\\text{ V}$',
        'Cường độ dòng điện tối đa đèn chịu được',
        'Điện năng đèn tiêu thụ trong 1 ngày',
        'Điện trở của đèn là $100\\,\\Omega$'
      ],
      correctAnswer: 'Công suất định mức của đèn khi dùng ở điện áp $220\\text{ V}$',
      explanation: 'Số oát ghi trên đồ dùng điện là công suất định mức, tức là công suất tiêu thụ khi thiết bị hoạt động bình thường ở hiệu điện thế định mức.'
    },
    matchGame: {
      id: 'match_16',
      title: '🧩 Ghép Đúng: Công Suất & Điện Năng Tiêu Thụ',
      pairs: [
        { id: 'p16_1', left: 'Công suất điện ($\mathcal{P}$)', right: '$\\mathcal{P} = U \\cdot I$', category: 'Đại lượng - Công thức', explanation: 'Công suất điện bằng tích hiệu điện thế và cường độ dòng điện.' },
        { id: 'p16_2', left: 'Điện năng tiêu thụ ($A$)', right: '$A = \\mathcal{P} \\cdot t = U \\cdot I \\cdot t$', category: 'Đại lượng - Công thức', explanation: 'Năng lượng điện tiêu thụ trong khoảng thời gian $t$.' },
        { id: 'p16_3', left: 'Định luật Joule – Lenz ($Q$)', right: '$Q = I^2 \\cdot R \\cdot t$', category: 'Đại lượng - Công thức', explanation: 'Nhiệt lượng tỏa ra trên dây dẫn tỉ lệ với bình phương cường độ dòng điện.' },
        { id: 'p16_4', left: '1 số điện ($1\\text{ kWh}$)', right: '$3\\,600\\,000\\text{ J}$', category: 'Đại lượng - Đơn vị', explanation: 'Đơn vị đo lượng điện năng tiêu thụ thực tế trên công tơ điện gia đình.' }
      ]
    },
    predictGame: {
      id: 'predict_16',
      title: '🔬 Dự Đoán Thí Nghiệm: Đun Nước Bằng Ấm Điện',
      setupDescription: 'Dùng một ấm điện $220\\text{ V} - 1000\\text{ W}$ đun sôi $1\\text{ lít}$ nước mất $6\\text{ phút}$. Nếu đổi sang dùng ấm điện có công suất $220\\text{ V} - 2000\\text{ W}$ (ở cùng hiệu điện thế $220\\text{ V}$)',
      visualType: 'power',
      question: 'Thời gian đun sôi cùng $1\\text{ lít}$ nước đó sẽ thay đổi như thế nào?',
      options: [
        'Thời gian giảm đi một nửa (chỉ mất khoảng 3 phút)',
        'Thời gian tăng lên gấp đôi (mất 12 phút)',
        'Thời gian đun sôi không thay đổi (vẫn mất 6 phút)',
        'Nước không thể sôi được'
      ],
      correctAnswer: 'Thời gian giảm đi một nửa (chỉ mất khoảng 3 phút)',
      actualOutcome: 'Đồng hồ bấm giờ chỉ khoảng 3 phút khi nước trong ấm 2000 W bắt đầu sôi sùng sục.',
      explanation: 'Nhiệt lượng cần cung cấp để đun sôi $1\\text{ lít}$ nước là không đổi ($Q = A = \\mathcal{P} \\cdot t$). Khi công suất ấm tăng gấp 2 lần ($\\mathcal{P} = 2000\\text{ W}$ so với $1000\\text{ W}$) thì thời gian đun giảm đi một nửa: $t = \\frac{6}{2} = 3\\text{ phút}$.'
    }
  },

  17: {
    lessonId: 17,
    speedGame: {
      id: 'speed_17',
      title: '⚡ Ai Nhanh Hơn: Từ Trường & Cảm Ứng Điện Từ',
      timeLimit: 20,
      question: 'Điều kiện xuất hiện dòng điện cảm ứng trong một cuộn dây dẫn kín là:',
      options: [
        'Số đường sức từ xuyên qua tiết diện của cuộn dây biến thiên',
        'Đặt cuộn dây cố định bên cạnh một nam châm đứng yên',
        'Đặt cuộn dây trong một từ trường đều không đổi',
        'Cuộn dây phải làm bằng chất sắt từ'
      ],
      correctAnswer: 'Số đường sức từ xuyên qua tiết diện của cuộn dây biến thiên',
      explanation: 'Hiện tượng cảm ứng điện từ: Dòng điện cảm ứng chỉ xuất hiện trong cuộn dây kín khi số đường sức từ xuyên qua tiết diện $S$ của cuộn dây tăng hoặc giảm (biến thiên theo thời gian).'
    },
    matchGame: {
      id: 'match_17',
      title: '🧩 Ghép Đúng: Từ Trường & Cảm Ứng Điện Từ',
      pairs: [
        { id: 'p17_1', left: 'Quy tắc bàn tay phải', right: 'Xác định chiều đường sức từ trong lòng ống dây', category: 'Hiện tượng - Giải thích', explanation: 'Nắm bàn tay phải sao cho 4 ngón tay chỉ chiều dòng điện, ngón cái choãi ra chỉ chiều đường sức từ.' },
        { id: 'p17_2', left: 'Quy ước chiều đường sức từ', right: 'Vào cực Nam (S), ra cực Bắc (N)', category: 'Hiện tượng - Giải thích', explanation: 'Bên ngoài nam châm: Đường sức từ đi ra từ cực Bắc và đi vào cực Nam.' },
        { id: 'p17_3', left: 'Máy phát điện xoay chiều', right: 'Ứng dụng hiện tượng cảm ứng điện từ', category: 'Thiết bị - Công dụng', explanation: 'Biến đổi cơ năng thành điện năng bằng cách quay cuộn dây trong từ trường.' },
        { id: 'p17_4', left: 'Nam châm điện', right: 'Cuộn dây có lõi sắt non khi có dòng điện', category: 'Thiết bị - Công dụng', explanation: 'Lõi sắt non làm tăng mạnh từ tính của ống dây, ngắt điện thì mất từ tính.' }
      ]
    },
    predictGame: {
      id: 'predict_17',
      title: '🔬 Dự Đoán Thí Nghiệm: Đưa Nam Châm Lại Gần Cuộn Dây',
      setupDescription: 'Nối hai đầu một cuộn dây dẫn kín với một miliampe kế nhạy. Cầm một thanh nam châm thẳng đưa cực Bắc (N) chuyển động nhanh lại gần đầu cuộn dây.',
      visualType: 'induction',
      question: 'Điều gì sẽ xảy ra với kim của miliampe kế?',
      options: [
        'Kim miliampe kế bị lệch đi, chứng tỏ có dòng điện cảm ứng xuất hiện',
        'Kim miliampe kế đứng yên bất động',
        'Kim miliampe kế quay tròn liên tục không dừng',
        'Cuộn dây bị nóng chảy ngay lập tức'
      ],
      correctAnswer: 'Kim miliampe kế bị lệch đi, chứng tỏ có dòng điện cảm ứng xuất hiện',
      actualOutcome: 'Kim miliampe kế lập tức lệch sang một bên khi nam châm chuyển động, và trở về số 0 khi nam châm dừng lại.',
      explanation: 'Khi đưa nam châm lại gần, số đường sức từ xuyên qua cuộn dây tăng lên (biến thiên), tạo ra dòng điện cảm ứng trong cuộn dây làm kim miliampe kế lệch.'
    }
  }
};
