import { QuestionDifficulty } from '../types';

export interface SpeedQuestion {
  id: string;
  category: 'khai_niem' | 'cong_thuc' | 'don_vi' | 'hien_tuong' | 'tinh_nhanh';
  categoryLabel: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface TreasureStage {
  stageNumber: number;
  stageName: string;
  stageIcon: string;
  question: string;
  difficulty: QuestionDifficulty;
  options: string[];
  correctAnswer: string;
  hint: string;
  explanation: string;
  points: number;
}

export interface TreasureTopic {
  id: string;
  title: string;
  desc: string;
  icon: string;
  stages: {
    de: TreasureStage[];
    kho: TreasureStage[];
    cuc_kho: TreasureStage[];
  };
}

// -------------------------------------------------------------
// SPEED QUIZ BANK (Snappy, high-velocity physics questions)
// -------------------------------------------------------------
export const SPEED_QUESTIONS_BANK: SpeedQuestion[] = [
  // 1. Công thức
  {
    id: 'sq-f-1',
    category: 'cong_thuc',
    categoryLabel: '📐 Công thức',
    question: 'Hệ thức của định luật Ôm cho đoạn mạch là gì?',
    options: ['$I = \\frac{U}{R}$', '$I = U \\cdot R$', '$R = \\frac{I}{U}$', '$U = \\frac{I}{R}$'],
    correctAnswer: '$I = \\frac{U}{R}$',
    explanation: 'Định luật Ôm: Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây và tỉ lệ nghịch với điện trở của dây ($I = \\frac{U}{R}$).'
  },
  {
    id: 'sq-f-2',
    category: 'cong_thuc',
    categoryLabel: '📐 Công thức',
    question: 'Công thức tính công của lực F làm vật dịch chuyển quãng đường s là?',
    options: ['$A = F \\cdot s$', '$A = \\frac{F}{s}$', '$A = \\frac{s}{F}$', '$A = F + s$'],
    correctAnswer: '$A = F \\cdot s$',
    explanation: 'Công cơ học tính theo công thức $A = F \\cdot s$ (khi lực tác dụng cùng hướng với hướng chuyển động).'
  },
  {
    id: 'sq-f-3',
    category: 'cong_thuc',
    categoryLabel: '📐 Công thức',
    question: 'Công suất P đặc trưng cho tốc độ thực hiện công được tính bằng:',
    options: ['$\\mathcal{P} = \\frac{A}{t}$', '$\\mathcal{P} = A \\cdot t$', '$\\mathcal{P} = \\frac{t}{A}$', '$\\mathcal{P} = A - t$'],
    correctAnswer: '$\\mathcal{P} = \\frac{A}{t}$',
    explanation: 'Công suất bằng công thực hiện được trong một đơn vị thời gian: $\\mathcal{P} = \\frac{A}{t}$.'
  },
  {
    id: 'sq-f-4',
    category: 'cong_thuc',
    categoryLabel: '📐 Công thức',
    question: 'Động năng của một vật có khối lượng m chuyển động với vận tốc v là:',
    options: ['$W_đ = \\frac{1}{2}mv^2$', '$W_đ = mv^2$', '$W_đ = 2mv^2$', '$W_đ = mgh$'],
    correctAnswer: '$W_đ = \\frac{1}{2}mv^2$',
    explanation: 'Động năng tính bằng một nửa tích khối lượng và bình phương vận tốc: $W_đ = \\frac{1}{2}mv^2$.'
  },
  {
    id: 'sq-f-5',
    category: 'cong_thuc',
    categoryLabel: '📐 Công thức',
    question: 'Thế năng trọng trường của một vật khối lượng m ở độ cao h là:',
    options: ['$W_t = mgh$', '$W_t = \\frac{1}{2}mgh$', '$W_t = mh$', '$W_t = \\frac{1}{2}mv^2$'],
    correctAnswer: '$W_t = mgh$',
    explanation: 'Thế năng trọng trường được tính bằng tích khối lượng, gia tốc trọng trường và độ cao: $W_t = mgh$.'
  },
  {
    id: 'sq-f-6',
    category: 'cong_thuc',
    categoryLabel: '📐 Công thức',
    question: 'Nhiệt lượng tỏa ra trên dây dẫn theo định luật Joule - Lenz là:',
    options: ['$Q = I^2Rt$', '$Q = IRt$', '$Q = I^2R$', '$Q = UIt^2$'],
    correctAnswer: '$Q = I^2Rt$',
    explanation: 'Định luật Joule - Lenz: $Q = I^2Rt$ (nhiệt lượng tỉ lệ với bình phương cường độ dòng điện, điện trở và thời gian).'
  },
  {
    id: 'sq-f-7',
    category: 'cong_thuc',
    categoryLabel: '📐 Công thức',
    question: 'Công thức tính điện trở của dây dẫn hình trụ đồng chất là:',
    options: ['$R = \\rho \\frac{l}{S}$', '$R = \\rho \\frac{S}{l}$', '$R = \\frac{\\rho}{l \\cdot S}$', '$R = \\rho \\cdot l \\cdot S$'],
    correctAnswer: '$R = \\rho \\frac{l}{S}$',
    explanation: 'Điện trở tỉ lệ thuận với chiều dài $l$, tỉ lệ nghịch với tiết diện $S$ và phụ thuộc vào điện trở suất $\\rho$: $R = \\rho \\frac{l}{S}$.'
  },
  {
    id: 'sq-f-8',
    category: 'cong_thuc',
    categoryLabel: '📐 Công thức',
    question: 'Công thức liên hệ giữa điện áp và số vòng dây của máy biến áp là:',
    options: ['$\\frac{U_1}{U_2} = \\frac{N_1}{N_2}$', '$\\frac{U_1}{U_2} = \\frac{N_2}{N_1}$', '$U_1 \\cdot U_2 = N_1 \\cdot N_2$', '$\\frac{U_1}{N_2} = \\frac{U_2}{N_1}$'],
    correctAnswer: '$\\frac{U_1}{U_2} = \\frac{N_1}{N_2}$',
    explanation: 'Tỉ số hiệu điện thế ở hai đầu cuộn dây máy biến áp bằng tỉ số giữa số vòng dây tương ứng: $\\frac{U_1}{U_2} = \\frac{N_1}{N_2}$.'
  },

  // 2. Đơn vị
  {
    id: 'sq-u-1',
    category: 'don_vi',
    categoryLabel: '🏷️ Đơn vị',
    question: 'Đơn vị đo điện trở trong hệ SI là gì?',
    options: ['Ôm ($\\Omega$)', 'Ampe (A)', 'Vôn (V)', 'Oát (W)'],
    correctAnswer: 'Ôm ($\\Omega$)',
    explanation: 'Đơn vị của điện trở là Ôm, ký hiệu là $\\Omega$ (lấy theo tên nhà vật lý Georg Ohm).'
  },
  {
    id: 'sq-u-2',
    category: 'don_vi',
    categoryLabel: '🏷️ Đơn vị',
    question: 'Đơn vị đo công suất trong hệ SI là:',
    options: ['Oát (W)', 'Jun (J)', 'Mã lực (HP)', 'Calo (cal)'],
    correctAnswer: 'Oát (W)',
    explanation: 'Đơn vị của công suất là Oát (W), $1\\text{ W} = 1\\text{ J/s}$.'
  },
  {
    id: 'sq-u-3',
    category: 'don_vi',
    categoryLabel: '🏷️ Đơn vị',
    question: 'Đơn vị của công cơ học và nhiệt lượng trong hệ SI là:',
    options: ['Jun (J)', 'Oát (W)', 'Newton (N)', 'Ampe (A)'],
    correctAnswer: 'Jun (J)',
    explanation: 'Cả công cơ học, năng lượng và nhiệt lượng đều dùng đơn vị là Jun (J).'
  },
  {
    id: 'sq-u-4',
    category: 'don_vi',
    categoryLabel: '🏷️ Đơn vị',
    question: 'Đơn vị đo điện trở suất $\\rho$ là gì?',
    options: ['$\\Omega \\cdot \\text{m}$', '$\\Omega / \\text{m}$', '$\\Omega \\cdot \\text{cm}$', '$\\Omega$'],
    correctAnswer: '$\\Omega \\cdot \\text{m}$',
    explanation: 'Đơn vị của điện trở suất $\\rho$ trong hệ SI là Ôm mét ($\\Omega \\cdot \\text{m}$).'
  },
  {
    id: 'sq-u-5',
    category: 'don_vi',
    categoryLabel: '🏷️ Đơn vị',
    question: '$1\\text{ kWh}$ (1 số điện gia đình) tương đương với bao nhiêu Jun?',
    options: ['$3\\,600\\,000\\text{ J}$', '$360\\,000\\text{ J}$', '$1\\,000\\text{ J}$', '$3\\,600\\text{ J}$'],
    correctAnswer: '$3\\,600\\,000\\text{ J}$',
    explanation: '$1\\text{ kWh} = 1000\\text{ W} \\times 3600\\text{ s} = 3\\,600\\,000\\text{ J} = 3{,}6\\cdot 10^6\\text{ J}$.'
  },

  // 3. Khái niệm
  {
    id: 'sq-k-1',
    category: 'khai_niem',
    categoryLabel: '🧠 Khái niệm',
    question: 'Cơ năng của một vật là tổng của:',
    options: ['Động năng và thế năng', 'Nhiệt năng và điện năng', 'Thế năng và hóa năng', 'Quang năng và cơ năng'],
    correctAnswer: 'Động năng và thế năng',
    explanation: 'Cơ năng của vật chuyển động dưới tác dụng của trọng lực bằng tổng động năng và thế năng của vật ($W = W_đ + W_t$).'
  },
  {
    id: 'sq-k-2',
    category: 'khai_niem',
    categoryLabel: '🧠 Khái niệm',
    question: 'Quy tắc bàn tay trái dùng để xác định điều gì?',
    options: [
      'Chiều của lực điện từ tác dụng lên dây dẫn',
      'Chiều đường sức từ của ống dây',
      'Chiều dòng điện cảm ứng',
      'Độ lớn của điện trở'
    ],
    correctAnswer: 'Chiều của lực điện từ tác dụng lên dây dẫn',
    explanation: 'Quy tắc bàn tay trái dùng để xác định chiều của lực điện từ tác dụng lên một đoạn dây dẫn có dòng điện đặt trong từ trường.'
  },
  {
    id: 'sq-k-3',
    category: 'khai_niem',
    categoryLabel: '🧠 Khái niệm',
    question: 'Điều kiện để xuất hiện dòng điện cảm ứng trong cuộn dây dẫn kín là:',
    options: [
      'Số đường sức từ xuyên qua tiết diện cuộn dây biến thiên',
      'Đặt cuộn dây trong từ trường mạnh không đổi',
      'Nối cuộn dây với nguồn điện một chiều',
      'Cuộn dây phải làm bằng kim loại sắt'
    ],
    correctAnswer: 'Số đường sức từ xuyên qua tiết diện cuộn dây biến thiên',
    explanation: 'Hiện tượng cảm ứng điện từ chỉ xảy ra khi số đường sức từ xuyên qua tiết diện $S$ của cuộn dây kín biến thiên theo thời gian (tăng hoặc giảm).'
  },
  {
    id: 'sq-k-4',
    category: 'khai_niem',
    categoryLabel: '🧠 Khái niệm',
    question: 'Đặc điểm của chùm sáng song song truyền qua thấu kính phân kỳ là:',
    options: [
      'Chùm tia ló bị loe rộng ra (phân kỳ)',
      'Chùm tia ló hội tụ tại một điểm',
      'Chùm tia ló bị phản xạ ngược lại',
      'Chùm tia ló đổi màu thành ánh sáng đỏ'
    ],
    correctAnswer: 'Chùm tia ló bị loe rộng ra (phân kỳ)',
    explanation: 'Thấu kính phân kỳ có phần rìa dày hơn phần giữa, làm chùm sáng tới song song bị loe rộng ra (chùm tia ló phân kỳ).'
  },
  {
    id: 'sq-k-5',
    category: 'khai_niem',
    categoryLabel: '🧠 Khái niệm',
    question: 'Trong đoạn mạch gồm hai điện trở mắc nối tiếp, đại lượng nào có giá trị như nhau tại mọi điểm?',
    options: ['Cường độ dòng điện ($I$)', 'Hiệu điện thế ($U$)', 'Điện trở ($R$)', 'Công suất tỏa nhiệt ($\\mathcal{P}$)'],
    correctAnswer: 'Cường độ dòng điện ($I$)',
    explanation: 'Trong mạch nối tiếp: $I = I_1 = I_2$.'
  },
  {
    id: 'sq-k-6',
    category: 'khai_niem',
    categoryLabel: '🧠 Khái niệm',
    question: 'Trong đoạn mạch gồm hai điện trở mắc song song, đại lượng nào có giá trị bằng nhau ở hai nhánh?',
    options: ['Hiệu điện thế ($U$)', 'Cường độ dòng điện ($I$)', 'Điện trở ($R$)', 'Nhiệt lượng tỏa ra ($Q$)'],
    correctAnswer: 'Hiệu điện thế ($U$)',
    explanation: 'Trong mạch song song: $U = U_1 = U_2$.'
  },

  // 4. Hiện tượng
  {
    id: 'sq-h-1',
    category: 'hien_tuong',
    categoryLabel: '🔍 Hiện tượng',
    question: 'Đặt một chiếc đũa vào cốc nước trong suốt thấy đũa như bị gãy khúc tại mặt nước, đó là do:',
    options: ['Hiện tượng khúc xạ ánh sáng', 'Hiện tượng phản xạ ánh sáng', 'Hiện tượng tán sắc ánh sáng', 'Hiện tượng hấp thụ ánh sáng'],
    correctAnswer: 'Hiện tượng khúc xạ ánh sáng',
    explanation: 'Ánh sáng truyền từ nước ra không khí bị đổi phương truyền đột ngột tại mặt phân cách (khúc xạ), khiến mắt ta thấy chiếc đũa bị gãy.'
  },
  {
    id: 'sq-h-2',
    category: 'hien_tuong',
    categoryLabel: '🔍 Hiện tượng',
    question: 'Ánh sáng Mặt Trời (ánh sáng trắng) sau khi đi qua lăng kính bị phân tách thành dải nhiều màu là do:',
    options: ['Hiện tượng tán sắc ánh sáng', 'Hiện tượng giao thoa ánh sáng', 'Hiện tượng nhiễm xạ', 'Do lăng kính có phẩm nhuộm màu'],
    correctAnswer: 'Hiện tượng tán sắc ánh sáng',
    explanation: 'Ánh sáng trắng là tập hợp của vô số ánh sáng đơn sắc từ đỏ đến tím. Do chiết suất của lăng kính với các màu khác nhau nên các tia bị lệch khác nhau, tạo dải màu cầu vồng.'
  },
  {
    id: 'sq-h-3',
    category: 'hien_tuong',
    categoryLabel: '🔍 Hiện tượng',
    question: 'Tác dụng nhiệt của dòng điện được ứng dụng trực tiếp trong thiết bị nào?',
    options: ['Bàn là, ấm đun nước điện', 'Quạt điện làm mát', 'Chuông điện', 'Ắc quy khi nạp điện'],
    correctAnswer: 'Bàn là, ấm đun nước điện',
    explanation: 'Bàn là và ấm điện biến đổi trực tiếp toàn bộ điện năng thành nhiệt năng trên dây mayxo.'
  },
  {
    id: 'sq-h-4',
    category: 'hien_tuong',
    categoryLabel: '🔍 Hiện tượng',
    question: 'Một quả bóng được ném thẳng đứng lên cao. Trong quá trình bay lên:',
    options: [
      'Động năng giảm dần, thế năng tăng dần',
      'Động năng tăng dần, thế năng giảm dần',
      'Cả động năng và thế năng đều tăng',
      'Cả động năng và thế năng đều giảm'
    ],
    correctAnswer: 'Động năng giảm dần, thế năng tăng dần',
    explanation: 'Khi bay lên cao, độ cao $h$ tăng nên thế năng $W_t = mgh$ tăng; vận tốc $v$ giảm dần do trọng lực cản trở nên động năng $W_đ$ giảm.'
  },
  {
    id: 'sq-h-5',
    category: 'hien_tuong',
    categoryLabel: '🔍 Hiện tượng',
    question: 'Dụng cụ nào sau đây dùng để nhận biết từ trường?',
    options: ['Kim nam châm tự do', 'Ampe kế', 'Vôn kế', 'Nhiệt kế'],
    correctAnswer: 'Kim nam châm tự do',
    explanation: 'Nơi nào có từ trường thì sẽ tác dụng lực từ làm kim nam châm định hướng theo một phương xác định.'
  },

  // 5. Tính nhanh
  {
    id: 'sq-t-1',
    category: 'tinh_nhanh',
    categoryLabel: '🧮 Tính nhanh',
    question: 'Hiệu điện thế $U = 12\\text{ V}$, điện trở $R = 6\\,\\Omega$. Cường độ dòng điện $I$ là:',
    options: ['$2\\text{ A}$', '$0{,}5\\text{ A}$', '$72\\text{ A}$', '$18\\text{ A}$'],
    correctAnswer: '$2\\text{ A}$',
    explanation: 'Áp dụng định luật Ôm: $I = \\frac{U}{R} = \\frac{12}{6} = 2\\text{ A}$.'
  },
  {
    id: 'sq-t-2',
    category: 'tinh_nhanh',
    categoryLabel: '🧮 Tính nhanh',
    question: 'Hai điện trở $R_1 = 10\\,\\Omega$ và $R_2 = 15\\,\\Omega$ mắc nối tiếp. Điện trở tương đương là:',
    options: ['$25\\,\\Omega$', '$6\\,\\Omega$', '$5\\,\\Omega$', '$150\\,\\Omega$'],
    correctAnswer: '$25\\,\\Omega$',
    explanation: 'Đoạn mạch nối tiếp: $R_{tđ} = R_1 + R_2 = 10 + 15 = 25\\,\\Omega$.'
  },
  {
    id: 'sq-t-3',
    category: 'tinh_nhanh',
    categoryLabel: '🧮 Tính nhanh',
    question: 'Hai điện trở $R_1 = 6\\,\\Omega$ và $R_2 = 3\\,\\Omega$ mắc song song. Điện trở tương đương là:',
    options: ['$2\\,\\Omega$', '$9\\,\\Omega$', '$18\\,\\Omega$', '$0{,}5\\,\\Omega$'],
    correctAnswer: '$2\\,\\Omega$',
    explanation: 'Đoạn mạch song song: $R_{tđ} = \\frac{R_1 \\cdot R_2}{R_1 + R_2} = \\frac{6 \\cdot 3}{6 + 3} = \\frac{18}{9} = 2\\,\\Omega$.'
  },
  {
    id: 'sq-t-4',
    category: 'tinh_nhanh',
    categoryLabel: '🧮 Tính nhanh',
    question: 'Một bóng đèn có ghi $220\\text{ V} - 100\\text{ W}$ dùng ở hiệu điện thế $220\\text{ V}$ trong $2\\text{ giờ}$. Điện năng tiêu thụ là:',
    options: ['$0{,}2\\text{ kWh}$', '$200\\text{ kWh}$', '$2\\text{ kWh}$', '$0{,}05\\text{ kWh}$'],
    correctAnswer: '$0{,}2\\text{ kWh}$',
    explanation: '$A = \\mathcal{P} \\cdot t = 100\\text{ W} \\times 2\\text{ h} = 200\\text{ Wh} = 0{,}2\\text{ kWh}$.'
  },
  {
    id: 'sq-t-5',
    category: 'tinh_nhanh',
    categoryLabel: '🧮 Tính nhanh',
    question: 'Một vật có khối lượng $m = 2\\text{ kg}$ chuyển động với vận tốc $v = 4\\text{ m/s}$. Động năng của vật là:',
    options: ['$16\\text{ J}$', '$8\\text{ J}$', '$32\\text{ J}$', '$4\\text{ J}$'],
    correctAnswer: '$16\\text{ J}$',
    explanation: '$W_đ = \\frac{1}{2}mv^2 = \\frac{1}{2} \\cdot 2 \\cdot 4^2 = 16\\text{ J}$.'
  }
];

// -------------------------------------------------------------
// TREASURE HUNT STAGES & TOPICS
// -------------------------------------------------------------
export const TREASURE_TOPICS: TreasureTopic[] = [
  {
    id: 'co-nang',
    title: 'Năng Lượng Cơ Học & Công Suất',
    desc: 'Bài 1 - 4: Công cơ học, công suất, động năng, thế năng & bảo toàn cơ năng',
    icon: '⚡',
    stages: {
      de: [
        {
          stageNumber: 1,
          stageName: 'Cổng Thạch Bích: Lực & Quãng đường',
          stageIcon: '⛩️',
          question: 'Trường hợp nào dưới đây có công cơ học theo định nghĩa Vật lý?',
          difficulty: 'de',
          options: [
            'Lực kéo con bò làm chiếc xe chở lúa chuyển động trên đường',
            'Một người lực sĩ đang gồng mình giữ tạ đứng yên trên vai',
            'Một hòn đá nằm yên bất động trên đỉnh núi cao',
            'Một người đẩy vào bức tường bê tông nhưng tường không suy suyển'
          ],
          correctAnswer: 'Lực kéo con bò làm chiếc xe chở lúa chuyển động trên đường',
          hint: 'Công cơ học chỉ sinh ra khi có lực tác dụng và vật chuyển dời theo hướng của lực.',
          explanation: 'Chỉ khi vật dịch chuyển quãng đường s dưới tác dụng của lực F thì mới có công cơ học: $A = F \\cdot s$.',
          points: 100
        },
        {
          stageNumber: 2,
          stageName: 'Dốc Năng Lượng: Tốc độ sinh công',
          stageIcon: '⛰️',
          question: 'Đại lượng nào cho biết khả năng thực hiện công nhanh hay chậm của một máy móc?',
          difficulty: 'de',
          options: ['Công suất', 'Cơ năng', 'Hiệu suất', 'Điện trở'],
          correctAnswer: 'Công suất',
          hint: 'Công suất là công thực hiện được trong 1 giây: $\\mathcal{P} = A / t$.',
          explanation: 'Công suất đặc trưng cho tốc độ sinh công của máy hoặc người.',
          points: 120
        },
        {
          stageNumber: 3,
          stageName: 'Động Năng & Khối Lượng',
          stageIcon: '🏎️',
          question: 'Khi vận tốc của một chiếc ô tô tăng gấp 2 lần, động năng của nó thay đổi như thế nào?',
          difficulty: 'de',
          options: ['Tăng lên gấp 4 lần', 'Tăng lên gấp 2 lần', 'Không thay đổi', 'Giảm đi 2 lần'],
          correctAnswer: 'Tăng lên gấp 4 lần',
          hint: 'Công thức động năng là $W_đ = \\frac{1}{2}mv^2$ (tỉ lệ thuận với bình phương vận tốc).',
          explanation: 'Vì $W_đ \\sim v^2$, khi $v$ tăng 2 lần thì $v^2$ tăng $2^2 = 4$ lần, do đó động năng tăng 4 lần.',
          points: 140
        },
        {
          stageNumber: 4,
          stageName: 'Đỉnh Thác Nước: Thế năng',
          stageIcon: '🌊',
          question: 'Thế năng trọng trường của một giọt nước trên đỉnh thác phụ thuộc vào:',
          difficulty: 'de',
          options: [
            'Khối lượng và độ cao của giọt nước so với mặt đất',
            'Vận tốc bay ngang của giọt nước',
            'Nhiệt độ của nước trong thác',
            'Thể tích và hình dạng của dòng thác'
          ],
          correctAnswer: 'Khối lượng và độ cao của giọt nước so với mặt đất',
          hint: 'Công thức thế năng trọng trường $W_t = mgh$.',
          explanation: 'Thế năng trọng trường tỉ lệ thuận với khối lượng $m$ và độ cao $h$ của vật so với mốc thế năng.',
          points: 160
        },
        {
          stageNumber: 5,
          stageName: 'Đền Thờ Vàng: Bảo toàn cơ năng',
          stageIcon: '👑',
          question: 'Trong quá trình một con lắc chuyển động từ vị trí cao nhất về vị trí cân bằng (bỏ qua ma sát), có sự chuyển hóa năng lượng nào?',
          difficulty: 'de',
          options: [
            'Thế năng chuyển hóa dần thành động năng',
            'Động năng chuyển hóa dần thành thế năng',
            'Cơ năng bị tiêu hao hoàn toàn thành nhiệt',
            'Nhiệt năng chuyển thành quang năng'
          ],
          correctAnswer: 'Thế năng chuyển hóa dần thành động năng',
          hint: 'Khi đi xuống, độ cao giảm (thế năng giảm) và vận tốc tăng (động năng tăng).',
          explanation: 'Khi rơi hoặc đi xuống, thế năng giảm bao nhiêu thì động năng tăng bấy nhiêu, cơ năng được bảo toàn.',
          points: 200
        }
      ],
      kho: [
        {
          stageNumber: 1,
          stageName: 'Hầm Mỏ Đá: Kéo vật nặng',
          stageIcon: '⛏️',
          question: 'Cần cẩu nâng một khối đá nặng $500\\text{ kg}$ lên cao $6\\text{ m}$ trong thời gian $15\\text{ giây}$. Lấy $g = 10\\text{ m/s}^2$. Công suất của cần cẩu là:',
          difficulty: 'kho',
          options: ['$2000\\text{ W}$', '$3000\\text{ W}$', '$1500\\text{ W}$', '$500\\text{ W}$'],
          correctAnswer: '$2000\\text{ W}$',
          hint: 'Tính công $A = P \\cdot h = mgh = 500 \\cdot 10 \\cdot 6 = 30000\\text{ J}$, rồi chia cho thời gian $15\\text{ s}$.',
          explanation: '$A = 500 \\cdot 10 \\cdot 6 = 30000\\text{ J}$. Công suất $\\mathcal{P} = \\frac{A}{t} = \\frac{30000}{15} = 2000\\text{ W} = 2\\text{ kW}$.',
          points: 250
        },
        {
          stageNumber: 2,
          stageName: 'Đèo Hải Vân: Ô tô leo dốc',
          stageIcon: '🚙',
          question: 'Một xe máy có công suất không đổi $\\mathcal{P}$. Khi xe bắt đầu lên dốc nghiêng cao, người lái xe phải về số thấp để:',
          difficulty: 'kho',
          options: [
            'Tăng lực kéo $F$ của động cơ khi vận tốc $v$ giảm',
            'Làm cho xe chạy nhanh hơn trên dốc',
            'Tiết kiệm điện cho ắc quy',
            'Giảm bớt khối lượng của xe máy'
          ],
          correctAnswer: 'Tăng lực kéo $F$ của động cơ khi vận tốc $v$ giảm',
          hint: 'Từ công thức $\\mathcal{P} = F \\cdot v$, khi công suất $\\mathcal{P}$ cố định, lực $F$ và vận tốc $v$ tỉ lệ nghịch.',
          explanation: 'Vì $\\mathcal{P} = F \\cdot v$, khi giảm vận tốc $v$ (về số thấp), lực kéo $F$ của động cơ tăng lên giúp xe leo dốc khỏe hơn.',
          points: 280
        },
        {
          stageNumber: 3,
          stageName: 'Đạn Pháo Cao Xạ: Đỉnh quỹ đạo',
          stageIcon: '🎯',
          question: 'Một vật được bắn nghiêng lên không trung. Tại điểm cao nhất của quỹ đạo, cơ năng của vật bằng:',
          difficulty: 'kho',
          options: [
            'Tổng thế năng cực đại và động năng theo phương ngang',
            'Bằng không vì vật đã dừng lại ở đỉnh',
            'Chỉ có thế năng mà không có chút động năng nào',
            'Gấp đôi cơ năng lúc bắt đầu bắn'
          ],
          correctAnswer: 'Tổng thế năng cực đại và động năng theo phương ngang',
          hint: 'Khi bay xiên, ở đỉnh cao nhất vận tốc theo phương thẳng đứng bằng 0 nhưng vẫn còn vận tốc theo phương ngang.',
          explanation: 'Ở đỉnh cao nhất của chuyển động ném xiên, vật vẫn có vận tốc ngang $v_x > 0$ nên có động năng $W_đ > 0$ cùng thế năng $W_t$. Cơ năng bảo toàn.',
          points: 300
        },
        {
          stageNumber: 4,
          stageName: 'Rơi Tự Do: Điểm giữa dốc',
          stageIcon: '🪂',
          question: 'Một vật rơi tự do từ độ cao $h$ so với mặt đất. Ở độ cao nào thì động năng của vật bằng thế năng của nó?',
          difficulty: 'kho',
          options: ['$h/2$', '$h/4$', '$h/3$', '$2h/3$'],
          correctAnswer: '$h/2$',
          hint: 'Cơ năng $W = W_đ + W_t = 2W_t$. Mà ban đầu $W = mgh$, khi đó $2mgh\' = mgh \\Rightarrow h\' = h/2$.',
          explanation: 'Vì $W_đ = W_t$ nên cơ năng $W = 2W_t = 2mgh\'$. Do cơ năng bảo toàn $W = mgh \\Rightarrow 2mgh\' = mgh \\Rightarrow h\' = h/2$.',
          points: 320
        },
        {
          stageNumber: 5,
          stageName: 'Rương Thần Bí: Tàu lượn siêu tốc',
          stageIcon: '👑',
          question: 'Một xe trượt từ độ cao $h = 20\\text{ m}$ xuống một vòng xiếc thẳng đứng bán kính $R = 8\\text{ m}$ (bỏ qua ma sát, $g = 10\\text{ m/s}^2$). Vận tốc của xe tại điểm cao nhất của vòng xiếc là:',
          difficulty: 'kho',
          options: [
            '$8\\sqrt{5}\\text{ m/s} \\approx 8{,}9\\text{ m/s}$',
            '$20\\text{ m/s}$',
            '$0\\text{ m/s}$',
            '$4\\text{ m/s}$'
          ],
          correctAnswer: '$8\\sqrt{5}\\text{ m/s} \\approx 8{,}9\\text{ m/s}$',
          hint: 'Độ cao đỉnh vòng xiếc là $2R = 16\\text{ m}$. Độ cao giảm $\\Delta h = 20 - 16 = 4\\text{ m}$. Vận tốc $v = \\sqrt{2g\\Delta h} = \\sqrt{2 \\cdot 10 \\cdot 4} = \\sqrt{80} = 4\\sqrt{5} \\approx 8{,}9\\text{ m/s}$.',
          explanation: 'Áp dụng bảo toàn cơ năng: $mgh = mg(2R) + \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2g(h - 2R)} = \\sqrt{2 \\cdot 10 \\cdot (20 - 16)} = \\sqrt{80} \\approx 8{,}9\\text{ m/s}$.',
          points: 400
        }
      ],
      cuc_kho: [
        {
          stageNumber: 1,
          stageName: 'Đấu Trường Cực Hàn: Công của ma sát',
          stageIcon: '❄️',
          question: 'Một xe có khối lượng $m = 1000\\text{ kg}$ đang chạy với vận tốc $20\\text{ m/s}$ thì hãm phanh trượt trên đường một đoạn $s = 40\\text{ m}$ rồi dừng hẳn. Lực hãm trung bình tác dụng lên xe là:',
          difficulty: 'cuc_kho',
          options: ['$5000\\text{ N}$', '$2500\\text{ N}$', '$10000\\text{ N}$', '$4000\\text{ N}$'],
          correctAnswer: '$5000\\text{ N}$',
          hint: 'Độ biến thiên động năng bằng công của lực ma sát: $0 - \\frac{1}{2}mv^2 = -F_h \\cdot s$.',
          explanation: '$\\frac{1}{2} \\cdot 1000 \\cdot 20^2 = F_h \\cdot 40 \\Rightarrow 200\\,000 = 40F_h \\Rightarrow F_h = 5000\\text{ N}$.',
          points: 500
        },
        {
          stageNumber: 2,
          stageName: 'Hố Sâu Trọng Lực: Con lắc lò xo',
          stageIcon: '🌀',
          question: 'Kéo một vật nặng gắn vào lò xo làm lò xo dãn $x_1 = 4\\text{ cm}$ thì thế năng đàn hồi là $W_1$. Muốn thế năng đàn hồi tăng lên gấp 9 lần thì phải kéo lò xo dãn một đoạn $x_2$ bằng:',
          difficulty: 'cuc_kho',
          options: ['$12\\text{ cm}$', '$36\\text{ cm}$', '$16\\text{ cm}$', '$8\\text{ cm}$'],
          correctAnswer: '$12\\text{ cm}$',
          hint: 'Thế năng đàn hồi tỉ lệ với bình phương độ dãn: $W_t = \\frac{1}{2}kx^2$. Khi $W_t$ tăng 9 lần thì $x$ tăng $\\sqrt{9} = 3$ lần.',
          explanation: '$W_t \\sim x^2 \\Rightarrow \\frac{W_2}{W_1} = \\left(\\frac{x_2}{x_1}\\right)^2 = 9 \\Rightarrow \\frac{x_2}{x_1} = 3 \\Rightarrow x_2 = 3 \\cdot 4 = 12\\text{ cm}$.',
          points: 550
        },
        {
          stageNumber: 3,
          stageName: 'Đỉnh Everest: Hiệu suất động cơ',
          stageIcon: '🏔️',
          question: 'Một máy bơm nước chạy bằng động cơ điện có công suất tiêu thụ $2\\text{ kW}$, hiệu suất $80\\%$. Trong 1 giờ máy bơm được bao nhiêu lít nước lên bể ở độ cao $12\\text{ m}$? (Lấy $g = 10\\text{ m/s}^2, D = 1000\\text{ kg/m}^3$).',
          difficulty: 'cuc_kho',
          options: ['$48\\,000\\text{ lít}$', '$60\\,000\\text{ lít}$', '$38\\,400\\text{ lít}$', '$24\\,000\\text{ lít}$'],
          correctAnswer: '$48\\,000\\text{ lít}$',
          hint: 'Công có ích $A_{ci} = H \\cdot \\mathcal{P} \\cdot t = 0{,}8 \\cdot 2000 \\cdot 3600 = 5\\,760\\,000\\text{ J}$. Khối lượng nước $m = \\frac{A_{ci}}{gh} = \\frac{5760000}{10 \\cdot 12} = 48000\\text{ kg} = 48000\\text{ lít}$.',
          explanation: 'Công có ích $A_{ci} = 0{,}8 \\cdot 2000\\text{ W} \\cdot 3600\\text{ s} = 5{,}76 \\cdot 10^6\\text{ J}$. Khối lượng nước $m = \\frac{A_{ci}}{gh} = \\frac{5{,}76 \\cdot 10^6}{10 \\cdot 12} = 48\\,000\\text{ kg} = 48\\,000\\text{ lít}$.',
          points: 600
        },
        {
          stageNumber: 4,
          stageName: 'Hầm Thử Khí Động Học',
          stageIcon: '🌪️',
          question: 'Một xe ô tô chạy trên đường bằng với vận tốc không đổi $v_1 = 54\\text{ km/h}$ thì công suất động cơ là $\\mathcal{P}_1$. Nếu tăng vận tốc lên $v_2 = 108\\text{ km/h}$ (biết lực cản không khí tỉ lệ với bình phương vận tốc $F_c \\sim v^2$), thì công suất động cơ phải tăng:',
          difficulty: 'cuc_kho',
          options: ['Gấp 8 lần', 'Gấp 4 lần', 'Gấp 2 lần', 'Gấp 16 lần'],
          correctAnswer: 'Gấp 8 lần',
          hint: 'Công suất $\\mathcal{P} = F \\cdot v = (k \\cdot v^2) \\cdot v = k \\cdot v^3$. Vận tốc tăng 2 lần ($108/54 = 2$) thì công suất tăng $2^3 = 8$ lần!',
          explanation: 'Vì $\\mathcal{P} = F_c \\cdot v = k v^2 \\cdot v = k v^3$. Khi vận tốc tăng $2$ lần thì công suất tăng $2^3 = 8$ lần.',
          points: 700
        },
        {
          stageNumber: 5,
          stageName: 'Ngai Vàng Cơ Học Lượng Tử',
          stageIcon: '👑',
          question: 'Một quả cầu thép nhỏ khối lượng $m$ buộc vào sợi dây nhẹ dài $L = 1\\text{ m}$. Kéo quả cầu lệch góc $\\alpha_0 = 60^\\circ$ rồi buông nhẹ. Lực căng của sợi dây khi quả cầu đi qua vị trí cân bằng là (lấy $g = 10\\text{ m/s}^2$):',
          difficulty: 'cuc_kho',
          options: ['$2mg$', '$3mg$', '$mg$', '$1{,}5mg$'],
          correctAnswer: '$2mg$',
          hint: 'Tại vị trí thấp nhất, lực căng $T = mg + \\frac{mv^2}{L}$. Mà $v^2 = 2gL(1 - \\cos 60^\\circ) = 2gL(0{,}5) = gL$. Do đó $T = mg + \\frac{m(gL)}{L} = 2mg$.',
          explanation: 'Bảo toàn cơ năng: $v^2 = 2gL(1 - \\cos \\alpha_0) = gL$. Tại vị trí cân bằng: $T - mg = \\frac{mv^2}{L} \\Rightarrow T = mg + \\frac{m(gL)}{L} = 2mg$.',
          points: 800
        }
      ]
    }
  },

  {
    id: 'dien-hoc',
    title: 'Điện Học & Định Luật Ôm',
    desc: 'Bài 9 - 13: Định luật Ôm, mạch nối tiếp - song song, điện trở suất, công suất & định luật Joule - Lenz',
    icon: '💡',
    stages: {
      de: [
        {
          stageNumber: 1,
          stageName: 'Cổng Mạch Điện: Dây dẫn & Ôm',
          stageIcon: '🔌',
          question: 'Khi hiệu điện thế giữa hai đầu dây dẫn tăng 3 lần thì cường độ dòng điện chạy qua nó:',
          difficulty: 'de',
          options: ['Tăng lên 3 lần', 'Giảm đi 3 lần', 'Không đổi', 'Tăng lên 9 lần'],
          correctAnswer: 'Tăng lên 3 lần',
          hint: 'Theo định luật Ôm $I = U/R$, $I$ tỉ lệ thuận với $U$.',
          explanation: 'Cường độ dòng điện tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây dẫn: khi $U$ tăng 3 lần thì $I$ cũng tăng 3 lần.',
          points: 100
        },
        {
          stageNumber: 2,
          stageName: 'Đường Hầm Nối Tiếp',
          stageIcon: '⛓️',
          question: 'Hai điện trở $R_1 = 4\\,\\Omega$ và $R_2 = 6\\,\\Omega$ mắc nối tiếp vào nguồn $U = 20\\text{ V}$. Cường độ dòng điện trong mạch là:',
          difficulty: 'de',
          options: ['$2\\text{ A}$', '$5\\text{ A}$', '$10\\text{ A}$', '$1\\text{ A}$'],
          correctAnswer: '$2\\text{ A}$',
          hint: '$R_{tđ} = R_1 + R_2 = 4 + 6 = 10\\,\\Omega$. Dòng điện $I = U / R_{tđ}$.',
          explanation: '$R_{tđ} = 4 + 6 = 10\\,\\Omega \\Rightarrow I = \\frac{20}{10} = 2\\text{ A}$.',
          points: 120
        },
        {
          stageNumber: 3,
          stageName: 'Ngã Ba Song Song',
          stageIcon: '🔀',
          question: 'Hai bóng đèn giống hệt nhau mắc song song vào mạng điện. Nếu một bóng bị đứt tóc, bóng còn lại sẽ:',
          difficulty: 'de',
          options: [
            'Vẫn sáng bình thường',
            'Bị tắt ngóm theo',
            'Bị nổ tung ngay lập tức',
            'Sáng mờ hẳn đi một nửa'
          ],
          correctAnswer: 'Vẫn sáng bình thường',
          hint: 'Trong mạch song song, mỗi nhánh hoạt động độc lập dưới cùng một hiệu điện thế $U$.',
          explanation: 'Mỗi nhánh trong mạch song song nhận đủ hiệu điện thế $U$ của nguồn độc lập, do đó bóng còn lại vẫn sáng bình thường.',
          points: 140
        },
        {
          stageNumber: 4,
          stageName: 'Lò Nướng Mayxo: Nhiệt Joule - Lenz',
          stageIcon: '🔥',
          question: 'Nếu tăng cường độ dòng điện qua dây điện trở lên gấp đôi trong cùng một khoảng thời gian, nhiệt lượng tỏa ra sẽ:',
          difficulty: 'de',
          options: ['Tăng lên gấp 4 lần', 'Tăng lên gấp 2 lần', 'Giảm đi một nửa', 'Không thay đổi'],
          correctAnswer: 'Tăng lên gấp 4 lần',
          hint: 'Định luật Joule - Lenz: $Q = I^2Rt$ (tỉ lệ với bình phương cường độ dòng điện).',
          explanation: 'Vì $Q \\sim I^2$, khi $I$ tăng 2 lần thì $I^2$ tăng $2^2 = 4$ lần, nhiệt lượng tỏa ra tăng 4 lần.',
          points: 160
        },
        {
          stageNumber: 5,
          stageName: 'Rương Điện Quang: Công suất bóng đèn',
          stageIcon: '👑',
          question: 'Một bàn là có công suất ghi $1000\\text{ W}$. Khi hoạt động bình thường trong 1 giờ, điện năng bàn là tiêu thụ là:',
          difficulty: 'de',
          options: ['$1\\text{ kWh}$', '$1000\\text{ kWh}$', '$0{,}5\\text{ kWh}$', '$3600\\text{ kWh}$'],
          correctAnswer: '$1\\text{ kWh}$',
          hint: '$A = \\mathcal{P} \\cdot t = 1\\text{ kW} \\times 1\\text{ h} = 1\\text{ kWh}$.',
          explanation: '$A = 1000\\text{ W} \\times 1\\text{ h} = 1\\text{ kWh} = 3{,}6 \\cdot 10^6\\text{ J}$.',
          points: 200
        }
      ],
      kho: [
        {
          stageNumber: 1,
          stageName: 'Dây Kim Loại: Thay đổi hình học',
          stageIcon: '📏',
          question: 'Một dây dẫn bằng đồng có điện trở $R = 8\\,\\Omega$. Kéo dãn đều sợi dây để chiều dài tăng gấp đôi nhưng thể tích không đổi. Điện trở sợi dây sau khi kéo dãn là:',
          difficulty: 'kho',
          options: ['$32\\,\\Omega$', '$16\\,\\Omega$', '$8\\,\\Omega$', '$4\\,\\Omega$'],
          correctAnswer: '$32\\,\\Omega$',
          hint: 'Khi dài tăng 2 lần, tiết diện phải giảm 2 lần để thể tích không đổi. $R\' = \\rho \\frac{2l}{S/2} = 4R$.',
          explanation: 'Vì thể tích $V = l \\cdot S$ không đổi, khi $l$ tăng 2 lần thì $S$ giảm 2 lần. Do đó điện trở mới $R\' = 4R = 4 \\cdot 8 = 32\\,\\Omega$.',
          points: 250
        },
        {
          stageNumber: 2,
          stageName: 'Mạch Hỗn Hợp: Cầu thang điện áp',
          stageIcon: '🪜',
          question: 'Cho mạch điện: $R_1 = 3\\,\\Omega$ nối tiếp với ($R_2 = 6\\,\\Omega$ song song $R_3 = 6\\,\\Omega$). Đặt vào hai đầu đoạn mạch $U = 18\\text{ V}$. Hiệu điện thế hai đầu $R_1$ là:',
          difficulty: 'kho',
          options: ['$9\\text{ V}$', '$6\\text{ V}$', '$12\\text{ V}$', '$3\\text{ V}$'],
          correctAnswer: '$9\\text{ V}$',
          hint: '$R_{23} = 6/2 = 3\\,\\Omega$. Đoạn mạch gồm $R_1 = 3\\,\\Omega$ nối tiếp $R_{23} = 3\\,\\Omega$, nên $U_1 = U_{23} = U / 2$.',
          explanation: '$R_{23} = \\frac{6 \\cdot 6}{6 + 6} = 3\\,\\Omega$. $R_{tđ} = 3 + 3 = 6\\,\\Omega \\Rightarrow I = 18/6 = 3\\text{ A}$. $U_1 = I \\cdot R_1 = 3 \\cdot 3 = 9\\text{ V}$.',
          points: 300
        },
        {
          stageNumber: 3,
          stageName: 'Biến Trở Cực Đại',
          stageIcon: '🎚️',
          question: 'Một nguồn $U = 12\\text{ V}$ có điện trở trong không đáng kể nối với biến trở con chạy $R_b$. Khi điều chỉnh con chạy từ vị trí có điện trở $2\\,\\Omega$ đến $10\\,\\Omega$, công suất tiêu thụ trên biến trở:',
          difficulty: 'kho',
          options: [
            'Giảm liên tục từ $72\\text{ W}$ xuống $14{,}4\\text{ W}$',
            'Tăng liên tục',
            'Không thay đổi',
            'Đạt cực đại rồi giảm'
          ],
          correctAnswer: 'Giảm liên tục từ $72\\text{ W}$ xuống $14{,}4\\text{ W}$',
          hint: 'Công thức công suất khi chỉ có biến trở nối với nguồn $U$ không đổi là $\\mathcal{P} = U^2 / R_b$.',
          explanation: 'Vì $\\mathcal{P} = \\frac{U^2}{R_b}$, khi $R_b$ tăng từ $2$ lên $10\\,\\Omega$ thì $\\mathcal{P}$ giảm từ $144/2 = 72\\text{ W}$ xuống $144/10 = 14{,}4\\text{ W}$.',
          points: 320
        },
        {
          stageNumber: 4,
          stageName: 'Dây Mayxo Cắt Ngắn',
          stageIcon: '✂️',
          question: 'Một bếp điện có một sợi dây mayxo hoạt động ở $220\\text{ V}$. Nếu cắt bớt một nửa chiều dài sợi dây rồi dùng ở hiệu điện thế cũ $220\\text{ V}$, thì công suất của bếp:',
          difficulty: 'kho',
          options: ['Tăng lên gấp 2 lần', 'Giảm đi một nửa', 'Tăng lên gấp 4 lần', 'Không đổi'],
          correctAnswer: 'Tăng lên gấp 2 lần',
          hint: 'Cắt nửa dây thì điện trở giảm một nửa ($R\' = R/2$). Công suất $\\mathcal{P} = U^2/R$.',
          explanation: 'Điện trở giảm 2 lần nên $\\mathcal{P}\' = \\frac{U^2}{R/2} = 2 \\frac{U^2}{R} = 2\\mathcal{P}$ (công suất tăng gấp đôi, bếp đun nhanh sôi hơn).',
          points: 350
        },
        {
          stageNumber: 5,
          stageName: 'Rương Pha Lê: Hiệu suất truyền tải',
          stageIcon: '👑',
          question: 'Công suất hao phí trên đường dây tải điện tỉ lệ nghịch với:',
          difficulty: 'kho',
          options: [
            'Bình phương hiệu điện thế giữa hai đầu đường dây tải điện ($U^2$)',
            'Hiệu điện thế ($U$)',
            'Chiều dài đường dây ($l$)',
            'Điện trở dây dẫn ($R$)'
          ],
          correctAnswer: 'Bình phương hiệu điện thế giữa hai đầu đường dây tải điện ($U^2$)',
          hint: 'Công thức công suất hao phí do tỏa nhiệt là $\\mathcal{P}_{hp} = \\frac{R \\cdot \\mathcal{P}^2}{U^2}$.',
          explanation: '$\\mathcal{P}_{hp} = \\frac{R \\cdot \\mathcal{P}^2}{U^2}$, do đó muốn giảm hao phí thì biện pháp tốt nhất là tăng hiệu điện thế $U$.',
          points: 400
        }
      ],
      cuc_kho: [
        {
          stageNumber: 1,
          stageName: 'Định Lý Công Suất Cực Đại',
          stageIcon: '⚡',
          question: 'Một mạch điện gồm điện trở cố định $R_0 = 4\\,\\Omega$ mắc nối tiếp với một biến trở $R_x$ và đặt vào nguồn $U = 12\\text{ V}$. Công suất tiêu thụ trên biến trở $R_x$ đạt cực đại khi $R_x$ bằng:',
          difficulty: 'cuc_kho',
          options: ['$4\\,\\Omega$', '$0\\,\\Omega$', '$8\\,\\Omega$', '$2\\,\\Omega$'],
          correctAnswer: '$4\\,\\Omega$',
          hint: 'Công suất trên biến trở $\\mathcal{P}_x = I^2 R_x = \\frac{U^2 R_x}{(R_0 + R_x)^2}$. Theo bất đẳng thức Cauchy, $\\mathcal{P}_x$ đạt max khi $R_x = R_0$.',
          explanation: 'Theo bất đẳng thức Cauchy, công suất trên một phần tử biến trở đạt giá trị cực đại khi điện trở của nó bằng tổng trở của phần mạch còn lại: $R_x = R_0 = 4\\,\\Omega$.',
          points: 500
        },
        {
          stageNumber: 2,
          stageName: 'Mạch Cầu Cân Bằng',
          stageIcon: '🌉',
          question: 'Cho mạch cầu với 4 điện trở $R_1, R_2, R_3, R_4$ và một điện kế $G$ mắc ở nhánh giữa. Điều kiện để mạch cầu cân bằng (dòng qua điện kế $I_G = 0$) là:',
          difficulty: 'cuc_kho',
          options: [
            '$R_1 \\cdot R_4 = R_2 \\cdot R_3$',
            '$R_1 + R_4 = R_2 + R_3$',
            '$R_1 \\cdot R_2 = R_3 \\cdot R_4$',
            '$\\frac{R_1}{R_4} = \\frac{R_2}{R_3}$'
          ],
          correctAnswer: '$R_1 \\cdot R_4 = R_2 \\cdot R_3$',
          hint: 'Điều kiện cân bằng cầu Wheatstone: tỉ số hai nhánh $\\frac{R_1}{R_2} = \\frac{R_3}{R_4} \\Leftrightarrow R_1 R_4 = R_2 R_3$.',
          explanation: 'Cầu Wheatstone cân bằng khi tích các cặp điện trở đối diện bằng nhau: $R_1 \\cdot R_4 = R_2 \\cdot R_3$.',
          points: 550
        },
        {
          stageNumber: 3,
          stageName: 'Đèn Sáng Bình Thường',
          stageIcon: '💡',
          question: 'Hai bóng đèn $\\text{Đ}_1(110\\text{ V} - 40\\text{ W})$ và $\\text{Đ}_2(110\\text{ V} - 100\\text{ W})$. Muốn mắc cả hai đèn vào nguồn $220\\text{ V}$ sao cho cả hai đèn đều sáng bình thường thì phải dùng thêm phụ kiện nào?',
          difficulty: 'cuc_kho',
          options: [
            'Mắc $\\text{Đ}_1$ song song với một điện trở phụ $R_p$, rồi cả cụm nối tiếp với $\\text{Đ}_2$',
            'Chỉ cần mắc nối tiếp hai đèn trực tiếp',
            'Mắc song song hai đèn trực tiếp vào $220\\text{ V}$',
            'Không thể thực hiện được'
          ],
          correctAnswer: 'Mắc $\\text{Đ}_1$ song song với một điện trở phụ $R_p$, rồi cả cụm nối tiếp với $\\text{Đ}_2$',
          hint: 'Dòng định mức của $\\text{Đ}_1$ nhỏ hơn $\\text{Đ}_2$ ($I_1 = 40/110 < I_2 = 100/110$). Cần mắc thêm $R_p$ song song với $\\text{Đ}_1$ để gánh bớt dòng điện thừa.',
          explanation: 'Vì $I_{1\\text{đm}} = 0{,}36\\text{ A} < I_{2\\text{đm}} = 0{,}91\\text{ A}$, để hai đèn cùng nhận $110\\text{ V}$ khi mắc vào $220\\text{ V}$, ta phải mắc $R_p$ song song với $\\text{Đ}_1$ để dòng điện qua cụm này bằng đúng $I_{2\\text{đm}}$.',
          points: 650
        },
        {
          stageNumber: 4,
          stageName: 'Thử Thách Mạng Điện Hỗn Hợp',
          stageIcon: '🕸️',
          question: 'Một khối lập phương gồm 12 cạnh, mỗi cạnh là một điện trở $R = 12\\,\\Omega$. Điện trở tương đương giữa hai đỉnh đối diện nhau qua đường chéo không gian của khối lập phương là:',
          difficulty: 'cuc_kho',
          options: ['$10\\,\\Omega$', '$12\\,\\Omega$', '$15\\,\\Omega$', '$6\\,\\Omega$'],
          correctAnswer: '$10\\,\\Omega$',
          hint: 'Điện trở tương đương qua đường chéo lập phương là $R_{tđ} = \\frac{5}{6}R$. Với $R = 12\\,\\Omega \\Rightarrow R_{tđ} = \\frac{5}{6} \\cdot 12 = 10\\,\\Omega$.',
          explanation: 'Bằng phương pháp tách nút đối xứng, điện trở tương đương giữa hai đỉnh chéo của lập phương 12 cạnh bằng $R_{tđ} = \\frac{5}{6}R = \\frac{5}{6} \\cdot 12 = 10\\,\\Omega$.',
          points: 750
        },
        {
          stageNumber: 5,
          stageName: 'Ngai Vàng Tesla: Máy biến thế cao thế',
          stageIcon: '👑',
          question: 'Đầu đường dây tải điện đặt máy tăng thế có tỉ số vòng dây $\\frac{N_2}{N_1} = 20$. Nếu giữ nguyên công suất truyền tải $\\mathcal{P}$ và dây dẫn, công suất hao phí trên đường dây tải điện sẽ giảm bao nhiêu lần so với khi chưa dùng máy biến áp?',
          difficulty: 'cuc_kho',
          options: ['400 lần', '20 lần', '40 lần', '200 lần'],
          correctAnswer: '400 lần',
          hint: '$U$ tăng 20 lần $\\Rightarrow \\mathcal{P}_{hp} \\sim 1/U^2$ giảm $20^2 = 400$ lần!',
          explanation: 'Tỉ số $N_2/N_1 = 20 \\Rightarrow U_2 = 20 U_1$. Do $\\mathcal{P}_{hp} \\sim 1/U^2$, khi $U$ tăng 20 lần thì công suất hao phí giảm $20^2 = 400$ lần.',
          points: 850
        }
      ]
    }
  },

  {
    id: 'quang-hoc',
    title: 'Ánh Sáng & Thấu Kính',
    desc: 'Bài 5 - 8: Khúc xạ ánh sáng, thấu kính hội tụ, thấu kính phân kỳ & tán sắc ánh sáng',
    icon: '🔍',
    stages: {
      de: [
        {
          stageNumber: 1,
          stageName: 'Mặt Nước Phẳng: Góc tới & khúc xạ',
          stageIcon: '🌊',
          question: 'Khi tia sáng truyền xiên góc từ không khí vào nước, mối quan hệ giữa góc tới $i$ và góc khúc xạ $r$ là:',
          difficulty: 'de',
          options: ['$r < i$', '$r > i$', '$r = i$', '$r = 90^\\circ$'],
          correctAnswer: '$r < i$',
          hint: 'Nước chiết quang hơn không khí nên tia sáng bị bẻ cong lại gần pháp tuyến hơn.',
          explanation: 'Khi ánh sáng truyền từ môi trường kém chiết quang (không khí) sang môi trường chiết quang hơn (nước), góc khúc xạ luôn nhỏ hơn góc tới ($r < i$).',
          points: 100
        },
        {
          stageNumber: 2,
          stageName: 'Quang Tâm & Tiêu Điểm',
          stageIcon: '🎯',
          question: 'Một tia sáng đi qua quang tâm O của thấu kính hội tụ sẽ:',
          difficulty: 'de',
          options: [
            'Tiếp tục truyền thẳng không đổi hướng',
            'Bị bẻ cong đi qua tiêu điểm',
            'Bị phản xạ ngược trở lại',
            'Bị hấp thụ hoàn toàn'
          ],
          correctAnswer: 'Tiếp tục truyền thẳng không đổi hướng',
          hint: 'Tia sáng đi qua quang tâm O luôn truyền thẳng.',
          explanation: 'Theo đặc điểm của thấu kính, mọi tia sáng đi qua quang tâm O đều tiếp tục truyền thẳng theo phương cũ.',
          points: 120
        },
        {
          stageNumber: 3,
          stageName: 'Vật Xa Vô Cực: Tiêu điểm F\'',
          stageIcon: '🔭',
          question: 'Chiếu chùm sáng Mặt Trời (chùm tia song song) vuông góc với mặt thấu kính hội tụ. Chùm tia ló sẽ:',
          difficulty: 'de',
          options: [
            'Hội tụ tại tiêu điểm của thấu kính',
            'Loãng rộng ra thành hình nón',
            'Giữ nguyên tính chất song song',
            'Biến thành ánh sáng tím'
          ],
          correctAnswer: 'Hội tụ tại tiêu điểm của thấu kính',
          hint: 'Chùm tia song song với trục chính của thấu kính hội tụ cho chùm tia ló đi qua tiêu điểm.',
          explanation: 'Chùm tia tới song song với trục chính sau khi qua thấu kính hội tụ sẽ giao nhau tại tiêu điểm chính $F\'$.',
          points: 140
        },
        {
          stageNumber: 4,
          stageName: 'Kính Lúp: Quan sát vật nhỏ',
          stageIcon: '🔍',
          question: 'Kính lúp thực chất là một:',
          difficulty: 'de',
          options: [
            'Thấu kính hội tụ có tiêu cự ngắn',
            'Thấu kính phân kỳ có tiêu cự dài',
            'Gương cầu lồi',
            'Tấm thủy tinh phẳng'
          ],
          correctAnswer: 'Thấu kính hội tụ có tiêu cự ngắn',
          hint: 'Kính lúp dùng để quan sát các vật nhỏ, là thấu kính hội tụ có tiêu cự vài cm.',
          explanation: 'Kính lúp là thấu kính hội tụ có tiêu cự ngắn (thường nhỏ hơn 25cm), dùng để quan sát ảnh ảo lớn hơn vật.',
          points: 160
        },
        {
          stageNumber: 5,
          stageName: 'Cầu Vồng Bảy Sắc: Lăng kính',
          stageIcon: '🌈',
          question: 'Ánh sáng nào sau đây là ánh sáng đơn sắc?',
          difficulty: 'de',
          options: [
            'Ánh sáng phát ra từ đèn laser màu đỏ',
            'Ánh sáng Mặt Trời ban ngày',
            'Ánh sáng đèn huỳnh quang trắng',
            'Ánh sáng đèn pha ô tô'
          ],
          correctAnswer: 'Ánh sáng phát ra từ đèn laser màu đỏ',
          hint: 'Ánh sáng đơn sắc là ánh sáng có một màu xác định và không bị tán sắc khi đi qua lăng kính.',
          explanation: 'Tia laser màu đỏ là ánh sáng đơn sắc có bước sóng xác định, khi đi qua lăng kính chỉ bị khúc xạ lệch hướng chứ không bị đổi màu hay phân tách.',
          points: 200
        }
      ],
      kho: [
        {
          stageNumber: 1,
          stageName: 'Ảo Ảnh Dưới Đáy Chậu: Độ sâu biểu kiến',
          stageIcon: '🐟',
          question: 'Một con cá bơi ở độ sâu thực tế $h = 1\\text{ m}$ dưới nước trong suốt. Người đứng trên bờ nhìn gần như vuông góc xuống mặt nước sẽ thấy con cá ở độ sâu biểu kiến:',
          difficulty: 'kho',
          options: [
            'Khoảng $0{,}75\\text{ m}$ (gần mặt nước hơn so với thực tế)',
            'Khoảng $1{,}33\\text{ m}$ (xa mặt nước hơn so với thực tế)',
            'Đúng bằng $1\\text{ m}$',
            'Không thấy được con cá vì phản xạ'
          ],
          correctAnswer: 'Khoảng $0{,}75\\text{ m}$ (gần mặt nước hơn so với thực tế)',
          hint: 'Độ sâu biểu kiến $h\' = h / n = 1 / 1{,}33 \\approx 0{,}75\\text{ m}$.',
          explanation: 'Do hiện tượng khúc xạ ánh sáng từ nước ra không khí, mắt ta nhìn thấy ảnh ảo của con cá nhô cao hơn thực tế ($h\' = h/n \\approx 1/1{,}33 \\approx 0{,}75\\text{ m}$).',
          points: 260
        },
        {
          stageNumber: 2,
          stageName: 'Dựng Ảnh Ngược Chiều: $d = 2f$',
          stageIcon: '🕯️',
          question: 'Đặt ngọn nến vuông góc với trục chính của một thấu kính hội tụ cách thấu kính một đoạn $d = 2f$. Ảnh thu được có đặc điểm:',
          difficulty: 'kho',
          options: [
            'Ảnh thật, ngược chiều, có kích thước bằng đúng ngọn nến',
            'Ảnh ảo, cùng chiều, lớn gấp đôi ngọn nến',
            'Ảnh thật, ngược chiều, nhỏ hơn ngọn nến',
            'Không tạo được ảnh'
          ],
          correctAnswer: 'Ảnh thật, ngược chiều, có kích thước bằng đúng ngọn nến',
          hint: 'Khi $d = 2f$, ta có $d\' = 2f$ và độ phóng đại $k = d\'/d = 1$.',
          explanation: 'Vị trí đặc biệt $d = 2f$ cho ảnh thật ngược chiều cách thấu kính đúng $d\' = 2f$ và chiều cao ảnh bằng đúng chiều cao vật ($A\'B\' = AB$).',
          points: 300
        },
        {
          stageNumber: 3,
          stageName: 'Ảnh Ảo Kính Lúp: $d < f$',
          stageIcon: '🔬',
          question: 'Một người dùng kính lúp có tiêu cự $f = 10\\text{ cm}$ để quan sát một con kiến đặt cách kính $d = 6\\text{ cm}$. Ảnh của con kiến có tính chất:',
          difficulty: 'kho',
          options: [
            'Ảnh ảo, cùng chiều, lớn hơn con kiến',
            'Ảnh thật, ngược chiều, nhỏ hơn con kiến',
            'Ảnh thật, cùng chiều, bằng con kiến',
            'Không tạo được ảnh vì đặt quá gần'
          ],
          correctAnswer: 'Ảnh ảo, cùng chiều, lớn hơn con kiến',
          hint: 'Đặt vật trong khoảng tiêu cự thấu kính hội tụ ($d < f$) luôn tạo ảnh ảo cùng chiều lớn hơn vật.',
          explanation: 'Khi $d < f$, chùm tia ló phân kỳ, phần kéo dài gặp nhau trước thấu kính tạo ảnh ảo, cùng chiều và phóng đại lớn hơn vật.',
          points: 320
        },
        {
          stageNumber: 4,
          stageName: 'Phản Xạ Toàn Phần Cáp Quang',
          stageIcon: '🌐',
          question: 'Cáp quang truyền tín hiệu internet hoạt động dựa trên ứng dụng của hiện tượng quang học nào?',
          difficulty: 'kho',
          options: [
            'Hiện tượng phản xạ toàn phần',
            'Hiện tượng tán sắc ánh sáng',
            'Hiện tượng quang điện',
            'Hiện tượng bay hơi của ánh sáng'
          ],
          correctAnswer: 'Hiện tượng phản xạ toàn phần',
          hint: 'Ánh sáng truyền dọc theo lõi thủy tinh của cáp quang nhờ liên tục phản xạ toàn phần tại thành cáp.',
          explanation: 'Tia sáng laser truyền bên trong sợi quang với góc tới lớn hơn góc tới giới hạn, bị phản xạ toàn phần liên tiếp mà không bị thoát ra ngoài.',
          points: 350
        },
        {
          stageNumber: 5,
          stageName: 'Rương Quang Học: Máy ảnh & Mắt',
          stageIcon: '👑',
          question: 'Bộ phận nào của mắt người đóng vai trò tương tự như thấu kính hội tụ trong máy ảnh?',
          difficulty: 'kho',
          options: ['Thể thủy tinh', 'Màng lưới (võng mạc)', 'Màng giác', 'Lòng đen (con ngươi)'],
          correctAnswer: 'Thể thủy tinh',
          hint: 'Thể thủy tinh là một thấu kính hội tụ mềm trong suốt, có thể phồng lên hoặc dẹt xuống để điều tiết.',
          explanation: 'Thể thủy tinh đóng vai trò như thấu kính hội tụ tạo ảnh thật nhỏ hơn vật trên màng lưới (đóng vai trò như cảm biến phim trong máy ảnh).',
          points: 400
        }
      ],
      cuc_kho: [
        {
          stageNumber: 1,
          stageName: 'Công Thức Thấu Kính Định Lượng',
          stageIcon: '📐',
          question: 'Một vật sáng $AB$ đặt vuông góc với trục chính của thấu kính hội tụ cho ảnh thật cao gấp 3 lần vật và cách vật một khoảng $L = 80\\text{ cm}$. Tiêu cự $f$ của thấu kính là:',
          difficulty: 'cuc_kho',
          options: ['$15\\text{ cm}$', '$20\\text{ cm}$', '$10\\text{ cm}$', '$25\\text{ cm}$'],
          correctAnswer: '$15\\text{ cm}$',
          hint: 'Ảnh thật $k = d\'/d = 3 \\Rightarrow d\' = 3d$. Khoảng cách $L = d + d\' = 4d = 80 \\Rightarrow d = 20\\text{ cm}, d\' = 60\\text{ cm}$. Tiêu cự $f = \\frac{d \\cdot d\'}{d + d\'} = \\frac{20 \\cdot 60}{80} = 15\\text{ cm}$.',
          explanation: '$d\' = 3d$. $d + d\' = 80 \\Rightarrow d = 20\\text{ cm}, d\' = 60\\text{ cm}$. Tiêu cự $f = \\frac{d \\cdot d\'}{d + d\'} = \\frac{1200}{80} = 15\\text{ cm}$.',
          points: 500
        },
        {
          stageNumber: 2,
          stageName: 'Dời Vật Trên Trục Chính',
          stageIcon: '↔️',
          question: 'Một vật đặt trước thấu kính hội tụ cho ảnh thật $A_1\'B_1\'$. Dịch chuyển vật lại gần thấu kính một đoạn $5\\text{ cm}$ thì ảnh dịch chuyển một đoạn $10\\text{ cm}$ và vẫn là ảnh thật. Chiều dịch chuyển của ảnh là:',
          difficulty: 'cuc_kho',
          options: [
            'Dịch ra xa thấu kính hơn và kích thước ảnh lớn hơn',
            'Dịch lại gần thấu kính hơn và kích thước ảnh nhỏ đi',
            'Đứng yên tại chỗ',
            'Biến thành ảnh ảo'
          ],
          correctAnswer: 'Dịch ra xa thấu kính hơn và kích thước ảnh lớn hơn',
          hint: 'Đối với thấu kính hội tụ, khi vật và ảnh cùng thật thì vật và ảnh luôn dịch chuyển cùng chiều!',
          explanation: 'Khi vật lại gần thấu kính (trong miền ngoài $F$), khoảng cách ảnh $d\'$ tăng lên (ảnh dịch ra xa thấu kính) và độ phóng đại của ảnh tăng lên.',
          points: 600
        },
        {
          stageNumber: 3,
          stageName: 'Hệ Hai Thấu Kính Ghép Sát',
          stageIcon: '🔬',
          question: 'Ghép sát một thấu kính hội tụ tiêu cự $f_1 = 20\\text{ cm}$ với một thấu kính phân kỳ tiêu cự $f_2 = -50\\text{ cm}$. Tiêu cự tương đương của hệ thấu kính ghép là:',
          difficulty: 'cuc_kho',
          options: ['$\\frac{100}{3}\\text{ cm} \\approx 33{,}3\\text{ cm}$', '$30\\text{ cm}$', '$-30\\text{ cm}$', '$70\\text{ cm}$'],
          correctAnswer: '$\\frac{100}{3}\\text{ cm} \\approx 33{,}3\\text{ cm}$',
          hint: 'Công thức thấu kính ghép sát: $\\frac{1}{f} = \\frac{1}{f_1} + \\frac{1}{f_2} = \\frac{1}{20} - \\frac{1}{50} = \\frac{3}{100}$.',
          explanation: '$\\frac{1}{f} = \\frac{1}{20} - \\frac{1}{50} = \\frac{5 - 2}{100} = \\frac{3}{100} \\Rightarrow f = \\frac{100}{3} \\approx 33{,}3\\text{ cm}$ (hệ vẫn là thấu kính hội tụ).',
          points: 700
        },
        {
          stageNumber: 4,
          stageName: 'Đốm Sáng Đáy Bể Nước',
          stageIcon: '💡',
          question: 'Một nguồn sáng điểm $S$ đặt ở đáy một bể nước sâu $h = 60\\text{ cm}$. Chiết suất của nước $n = 4/3$. Để không có tia sáng nào thoát ra ngoài không khí, người ta thả một tấm gỗ tròn nổi trên mặt nước. Bán kính tối thiểu của tấm gỗ là:',
          difficulty: 'cuc_kho',
          options: ['$68\\text{ cm}$', '$45\\text{ cm}$', '$80\\text{ cm}$', '$60\\text{ cm}$'],
          correctAnswer: '$68\\text{ cm}$',
          hint: 'Góc giới hạn phản xạ toàn phần: $\\sin i_{gh} = 1/n = 3/4 \\Rightarrow \\tan i_{gh} = \\frac{3}{\\sqrt{16-9}} = \\frac{3}{\\sqrt{7}}$. Bán kính $R = h \\cdot \\tan i_{gh} = 60 \\cdot \\frac{3}{\\sqrt{7}} \\approx 68\\text{ cm}$.',
          explanation: 'Tia sáng ở mép tấm gỗ ứng với góc tới bằng $i_{gh}$. Ta có $\\sin i_{gh} = 1/n = 3/4 \\Rightarrow \\tan i_{gh} = 3/\\sqrt{7}$. Bán kính $R = h \\tan i_{gh} = 60 \\times 3 / \\sqrt{7} \\approx 68\\text{ cm}$.',
          points: 800
        },
        {
          stageNumber: 5,
          stageName: 'Vương Miện Ánh Sáng Hoàn Vũ',
          stageIcon: '👑',
          question: 'Một lăng kính có góc chiết quang $A = 60^\\circ$ làm bằng thủy tinh chiết suất $n = \\sqrt{2}$. Chiếu một tia sáng đơn sắc vào một mặt bên dưới góc tới $i_1 = 45^\\circ$. Góc lệch $D$ của tia sáng sau khi qua lăng kính là:',
          difficulty: 'cuc_kho',
          options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$15^\\circ$'],
          correctAnswer: '$30^\\circ$',
          hint: '$\\sin r_1 = \\frac{\\sin 45^\\circ}{\\sqrt{2}} = 0{,}5 \\Rightarrow r_1 = 30^\\circ$. Vì $r_1 + r_2 = A = 60^\\circ \\Rightarrow r_2 = 30^\\circ$. Do đó $i_2 = 45^\\circ$. Góc lệch $D = i_1 + i_2 - A = 45 + 45 - 60 = 30^\\circ$.',
          explanation: 'Góc khúc xạ ở mặt thứ nhất $r_1 = 30^\\circ$. Góc tới mặt thứ hai $r_2 = A - r_1 = 30^\\circ$. Góc ló $i_2 = 45^\\circ$ (tia sáng đối xứng, góc lệch cực tiểu). $D = i_1 + i_2 - A = 45^\\circ + 45^\\circ - 60^\\circ = 30^\\circ$.',
          points: 900
        }
      ]
    }
  }
];

// -------------------------------------------------------------
// LOCAL STORAGE KEYS & INTERFACES FOR ACHIEVEMENTS
// -------------------------------------------------------------
export interface MiniGameStats {
  speedQuiz: {
    highScore: number;
    gamesPlayed: number;
    totalCorrect: number;
    bestStreak: number;
  };
  treasureHunt: {
    treasuresUnlocked: number;
    totalStars: number;
    highScore: number;
    completedTopics: string[];
  };
  virtualLab: {
    experimentsCompleted: number;
    correctPredictions: number;
    totalRuns: number;
  };
}

export const INITIAL_MINIGAME_STATS: MiniGameStats = {
  speedQuiz: {
    highScore: 0,
    gamesPlayed: 0,
    totalCorrect: 0,
    bestStreak: 0
  },
  treasureHunt: {
    treasuresUnlocked: 0,
    totalStars: 0,
    highScore: 0,
    completedTopics: []
  },
  virtualLab: {
    experimentsCompleted: 0,
    correctPredictions: 0,
    totalRuns: 0
  }
};

export function getSavedMiniGameStats(): MiniGameStats {
  try {
    const saved = localStorage.getItem('vatly9_minigame_stats');
    if (saved) {
      return { ...INITIAL_MINIGAME_STATS, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error('Error reading minigame stats', e);
  }
  return INITIAL_MINIGAME_STATS;
}

export function saveMiniGameStats(stats: MiniGameStats): void {
  try {
    localStorage.setItem('vatly9_minigame_stats', JSON.stringify(stats));
  } catch (e) {
    console.error('Error saving minigame stats', e);
  }
}
