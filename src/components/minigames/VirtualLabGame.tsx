import React, { useState, useEffect } from 'react';
import { MathView, FormattedText } from '../MathView';
import { soundManager } from '../../utils/audio';
import confetti from 'canvas-confetti';
import { getSavedMiniGameStats, saveMiniGameStats } from '../../data/miniGamesData';
import { 
  FlaskConical, 
  Play, 
  RotateCcw, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Sliders, 
  Sparkles, 
  Zap, 
  Eye, 
  Flame, 
  Activity,
  Layers,
  ArrowRight
} from 'lucide-react';

interface LabStation {
  id: string;
  title: string;
  lessonRef: string;
  icon: string;
  description: string;
  predictionQuestion: string;
  predictionOptions: { label: string; text: string }[];
  correctPredictionLabel: string;
  actualResultText: string;
  scientificExplanation: string;
}

export const VirtualLabGame: React.FC = () => {
  // Station index
  const [stationIdx, setStationIdx] = useState(0);

  // Station 1 parameters: Ohm's Law
  const [ohmU, setOhmU] = useState(12); // Volts: 2 to 24
  const [ohmR, setOhmR] = useState(6);  // Ohms: 2 to 20
  const [ohmSwitch, setOhmSwitch] = useState(true);

  // Station 2 parameters: Light Refraction & Total Internal Reflection
  const [laserAngle, setLaserAngle] = useState(30); // degrees: 0 to 80

  // Station 3 parameters: Convex Lens
  const [lensF, setLensF] = useState(12); // cm: 10 to 18
  const [lensD, setLensD] = useState(24); // cm: 5 to 35
  const [lensH, setLensH] = useState(10); // cm: 5 to 15

  // Station 4 parameters: Energy Conservation (Car slope)
  const [slopeH, setSlopeH] = useState(5); // m: 1 to 10
  const [carM, setCarM] = useState(2);    // kg: 1 to 5
  const [carRunning, setCarRunning] = useState(false);
  const [carProgress, setCarProgress] = useState(0); // 0 to 1

  // Prediction flow state
  // 'predicting' -> user must select a prediction option
  // 'revealed'   -> user ran simulation, sees result vs prediction
  const [labState, setLabState] = useState<'predicting' | 'revealed'>('predicting');
  const [selectedPrediction, setSelectedPrediction] = useState<string | null>(null);

  // Saved stats
  const [stats, setStats] = useState(() => getSavedMiniGameStats());

  const stations: LabStation[] = [
    {
      id: 'ohm-law',
      title: 'Trạm 1: Đoạn Mạch Định Luật Ôm & Công Suất',
      lessonRef: 'Bài 9 & 12: Định luật Ôm & Công suất điện',
      icon: '⚡',
      description: 'Điều chỉnh hiệu điện thế nguồn U và biến trở R để quan sát sự thay đổi của dòng điện I và độ sáng bóng đèn.',
      predictionQuestion: 'Dự đoán: Nếu ta tăng hiệu điện thế U từ 6V lên 12V trong khi giữ nguyên điện trở R = 6Ω, cường độ dòng điện I và độ sáng bóng đèn sẽ thay đổi như thế nào?',
      predictionOptions: [
        { label: 'A', text: 'Cường độ I tăng gấp đôi (từ 1A lên 2A) và bóng đèn sáng rực rỡ hơn nhiều.' },
        { label: 'B', text: 'Cường độ I giảm đi một nửa và bóng đèn tối dần.' },
        { label: 'C', text: 'Cường độ I không đổi vì điện trở R không đổi.' },
        { label: 'D', text: 'Bóng đèn tắt hẳn do quá tải.' }
      ],
      correctPredictionLabel: 'A',
      actualResultText: 'Khi U tăng gấp 2 lần (6V -> 12V), dòng điện I = U / R tăng đúng 2 lần (1A -> 2A). Công suất đèn P = U·I = 12·2 = 24W tăng gấp 4 lần so với lúc 6V (6W), làm đèn sáng rực!',
      scientificExplanation: 'Theo định luật Ôm: I = U/R (cường độ dòng điện tỉ lệ thuận với hiệu điện thế). Đồng thời công suất P = U²/R tỉ lệ với bình phương hiệu điện thế, nên khi U tăng gấp 2 thì công suất tỏa nhiệt và quang thông tăng gấp 4 lần.'
    },
    {
      id: 'light-refraction',
      title: 'Trạm 2: Khúc Xạ Ánh Sáng & Phản Xạ Toàn Phần',
      lessonRef: 'Bài 5: Hiện tượng khúc xạ ánh sáng',
      icon: '💡',
      description: 'Chiếu tia laser từ trong khối nước (n = 1.33) ra không khí (n = 1.0) với góc tới i biến thiên từ 0° đến 80°.',
      predictionQuestion: 'Dự đoán: Góc tới giới hạn của nước là i_gh ≈ 48.5°. Nếu ta tăng góc tới của tia laser lên i = 60° (lớn hơn 48.5°), điều gì sẽ xảy ra tại mặt nước?',
      predictionOptions: [
        { label: 'A', text: 'Tia sáng tiếp tục khúc xạ ra ngoài không khí với góc khúc xạ lớn hơn 60°.' },
        { label: 'B', text: 'Tia khúc xạ hoàn toàn biến mất, toàn bộ tia sáng bị phản xạ trở lại vào trong nước (Phản xạ toàn phần).' },
        { label: 'C', text: 'Tia laser bị nước hấp thụ hoàn toàn và biến mất.' },
        { label: 'D', text: 'Tia sáng bị đổi màu từ đỏ sang xanh lá cây.' }
      ],
      correctPredictionLabel: 'B',
      actualResultText: 'Tại góc tới i = 60° > 48.5°, tia khúc xạ không còn tồn tại trong không khí nữa! 100% chùm sáng bị phản xạ ngược trở lại trong nước với góc phản xạ đúng bằng 60°.',
      scientificExplanation: 'Khi ánh sáng truyền từ môi trường chiết quang hơn sang môi trường kém chiết quang (nước sang không khí) với góc tới i ≥ i_gh (sin i_gh = 1/n = 1/1.33 => i_gh ≈ 48.5°), hiện tượng phản xạ toàn phần xảy ra. Đây là nguyên lý cốt lõi của sợi quang truyền internet hiện đại.'
    },
    {
      id: 'convex-lens',
      title: 'Trạm 3: Dựng Ảnh Qua Thấu Kính Hội Tụ',
      lessonRef: 'Bài 6: Thấu kính hội tụ & cách dựng ảnh',
      icon: '🔍',
      description: 'Dịch chuyển ngọn nến dọc theo trục chính trước thấu kính hội tụ để quan sát tính chất ảnh thật hay ảnh ảo.',
      predictionQuestion: 'Dự đoán: Nếu tiêu cự thấu kính f = 12cm, khi ta dịch chuyển ngọn nến lại rất gần thấu kính ở vị trí d = 8cm (d < f), ảnh thu được trên màn hoặc trong mắt có đặc điểm gì?',
      predictionOptions: [
        { label: 'A', text: 'Thu được ảnh thật ngược chiều, hứng được trên màn chắn phía sau.' },
        { label: 'B', text: 'Thu được ảnh ảo cùng chiều, lớn hơn ngọn nến và không hứng được trên màn.' },
        { label: 'C', text: 'Không thu được bất kỳ ảnh nào vì ngọn nến đặt quá gần.' },
        { label: 'D', text: 'Thu được ảnh thật cùng chiều nhỏ hơn ngọn nến.' }
      ],
      correctPredictionLabel: 'B',
      actualResultText: 'Khi d = 8cm < f = 12cm, chùm tia ló bị phân kỳ. Đường kéo dài của chúng cắt nhau trước thấu kính tạo ảnh ảo A\'B\' cùng chiều, phóng đại lớn hơn vật (k = d\'/d = 24/8 = 3 lần)!',
      scientificExplanation: 'Khi đặt vật trong khoảng tiêu cự của thấu kính hội tụ (d < f), thấu kính hoạt động như một chiếc Kính Lúp: chùm tia ló không thể cắt nhau thật sự mà chỉ có đường kéo dài cắt nhau tạo ảnh ảo, cùng chiều và lớn hơn vật.'
    },
    {
      id: 'energy-slope',
      title: 'Trạm 4: Xe Trượt Dốc & Bảo Toàn Cơ Năng',
      lessonRef: 'Bài 4: Định luật bảo toàn và chuyển hóa năng lượng',
      icon: '🏎️',
      description: 'Thả một chiếc xe trượt tự do từ độ cao h trên dốc trơn nhẵn để đo sự chuyển hóa từ thế năng sang động năng tại chân dốc.',
      predictionQuestion: 'Dự đoán: Nếu tăng độ cao đỉnh dốc h lên gấp 4 lần (ví dụ từ h = 2m lên h = 8m), vận tốc của xe tại chân dốc v sẽ thay đổi như thế nào? (Bỏ qua ma sát)',
      predictionOptions: [
        { label: 'A', text: 'Vận tốc tại chân dốc tăng lên gấp 2 lần (do v tỉ lệ với căn bậc hai của h).' },
        { label: 'B', text: 'Vận tốc tại chân dốc tăng lên gấp 4 lần.' },
        { label: 'C', text: 'Vận tốc tại chân dốc tăng lên gấp 16 lần.' },
        { label: 'D', text: 'Vận tốc không thay đổi vì khối lượng xe không đổi.' }
      ],
      correctPredictionLabel: 'A',
      actualResultText: 'Tại chân dốc, toàn bộ thế năng W_t = mgh chuyển hóa thành động năng W_đ = 1/2 m v². Ta có v = √(2gh). Khi h tăng 4 lần thì vận tốc v tăng đúng √4 = 2 lần!',
      scientificExplanation: 'Theo định luật bảo toàn cơ năng trong trọng trường (bỏ qua ma sát): W_t(đỉnh) = W_đ(chân) <=> mgh = 1/2 mv² => v = √(2gh). Vận tốc chân dốc chỉ phụ thuộc vào căn bậc hai của độ cao h mà không phụ thuộc vào khối lượng của xe.'
    }
  ];

  const curStation = stations[stationIdx];

  // Handle car slope animation
  const handleRunCar = () => {
    if (carRunning) return;
    setCarRunning(true);
    setCarProgress(0);

    let p = 0;
    const interval = setInterval(() => {
      p += 0.05;
      if (p >= 1) {
        p = 1;
        clearInterval(interval);
        setCarRunning(false);
      }
      setCarProgress(p);
    }, 40);
  };

  // Submit prediction and reveal simulation result
  const handleVerifyPrediction = () => {
    if (!selectedPrediction) return;
    setLabState('revealed');

    const isCorrect = selectedPrediction === curStation.correctPredictionLabel;
    if (isCorrect) {
      soundManager.playCorrect();
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } else {
      soundManager.playWrong();
    }

    // Save stats
    const currentStats = getSavedMiniGameStats();
    const updatedStats = {
      ...currentStats,
      virtualLab: {
        experimentsCompleted: currentStats.virtualLab.experimentsCompleted + 1,
        correctPredictions: currentStats.virtualLab.correctPredictions + (isCorrect ? 1 : 0),
        totalRuns: currentStats.virtualLab.totalRuns + 1
      }
    };
    saveMiniGameStats(updatedStats);
    setStats(updatedStats);
  };

  // Reset station state on change
  const handleSelectStation = (idx: number) => {
    setStationIdx(idx);
    setLabState('predicting');
    setSelectedPrediction(null);
    setCarProgress(0);
    setCarRunning(false);
  };

  // -------------------------------------------------------------
  // CALCULATIONS FOR SIMULATIONS
  // -------------------------------------------------------------
  // 1. Ohm's Law calculations
  const ohmI = ohmSwitch ? Number((ohmU / ohmR).toFixed(2)) : 0;
  const ohmP = ohmSwitch ? Number((ohmI * ohmU).toFixed(1)) : 0;
  const bulbBrightness = Math.min(100, Math.round((ohmP / 30) * 100));

  // 2. Refraction calculations
  // n1 = 1.333 (water), n2 = 1.0 (air)
  // sin(r) = 1.333 * sin(i)
  const iRad = (laserAngle * Math.PI) / 180;
  const sinR = 1.333 * Math.sin(iRad);
  const criticalAngleDeg = (Math.asin(1.0 / 1.333) * 180) / Math.PI; // 48.61°
  const isGrazing = Math.abs(laserAngle - Math.round(criticalAngleDeg)) < 0.2 || (sinR >= 0.999 && sinR <= 1.001);
  const isTIR = laserAngle > criticalAngleDeg && sinR > 1.001; // Total Internal Reflection occurs strictly when i > i_gh
  const rAngleDeg = isTIR ? 90 : (isGrazing ? 90 : Math.round((Math.asin(Math.min(1.0, sinR)) * 180) / Math.PI));

  // 3. Convex Lens calculations
  // 1/f = 1/d + 1/d' => d' = (d * f) / (d - f)
  const isVirtual = lensD < lensF;
  const lensDPrime = lensD === lensF ? 9999 : Number(((lensD * lensF) / (lensD - lensF)).toFixed(1));
  const lensMag = Number(Math.abs(lensDPrime / lensD).toFixed(2));
  const lensHPrime = Number((lensH * lensMag).toFixed(1));

  // 4. Slope Car calculations
  const g = 10;
  const carV = Number(Math.sqrt(2 * g * slopeH).toFixed(2)); // v = sqrt(2gh)
  const carWtMax = carM * g * slopeH;
  const carCurrentH = slopeH * (1 - carProgress);
  const carCurrentWt = Number((carM * g * carCurrentH).toFixed(0));
  const carCurrentWd = Number((carWtMax - carCurrentWt).toFixed(0));

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-indigo-500/15 via-sky-500/10 to-teal-500/15 rounded-3xl p-6 sm:p-8 border border-sky-300 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-3xl shadow-md shadow-indigo-200">
              🔬
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-2xs font-extrabold uppercase tracking-wider bg-indigo-200 text-indigo-950 rounded-full">
                  Mini Game 3
                </span>
                <span className="text-xs font-bold text-indigo-900">
                  Phòng Thí Nghiệm Ảo
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Phòng Thí Nghiệm Vật Lý Tương Tác
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Tự tay thay đổi thông số, đưa ra dự đoán khoa học, kích hoạt mô phỏng thời gian thực và kiểm chứng quy luật Vật lý!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-sky-200 shadow-2xs">
            <FlaskConical className="w-5 h-5 text-indigo-600" />
            <div className="text-left">
              <span className="text-2xs text-slate-400 font-bold uppercase block">Dự đoán đúng</span>
              <span className="text-sm font-black text-slate-900">
                {stats.virtualLab.correctPredictions} / {stats.virtualLab.experimentsCompleted} thí nghiệm
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Station Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        {stations.map((st, idx) => (
          <button
            key={st.id}
            onClick={() => handleSelectStation(idx)}
            className={`p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
              stationIdx === idx
                ? 'border-indigo-600 bg-indigo-50/70 shadow-xs ring-2 ring-indigo-300/40'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{st.icon}</span>
              <span className="text-2xs font-black uppercase text-indigo-900 truncate">
                Trạm {idx + 1}
              </span>
            </div>
            <h4 className="text-xs font-bold text-slate-800 line-clamp-1">
              {st.title.split(':')[1] || st.title}
            </h4>
          </button>
        ))}
      </div>

      {/* Main Interactive Experiment & Prediction Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Simulation Stage (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{curStation.icon}</span>
                <h3 className="font-black text-base text-slate-900">
                  {curStation.title}
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded-md text-2xs font-extrabold bg-slate-100 text-slate-600">
                {curStation.lessonRef}
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              {curStation.description}
            </p>

            {/* SIMULATION CANVAS AREA */}
            <div className="w-full bg-slate-950 rounded-2xl p-4 text-white overflow-hidden relative border border-slate-800 min-h-[260px] flex items-center justify-center">
              {/* STATION 1: OHM'S LAW CANVAS */}
              {stationIdx === 0 && (
                <div className="w-full space-y-4 text-center">
                  <div className="flex items-center justify-center gap-8 py-2">
                    {/* Voltage Source */}
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 flex flex-col items-center">
                      <span className="text-3xs text-slate-400 font-bold">NGUỒN ĐIỆN</span>
                      <span className="text-xl font-black text-sky-400">{ohmU}V</span>
                      <span className="text-3xs text-slate-500">(1 chiều DC)</span>
                    </div>

                    {/* Resistor */}
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 flex flex-col items-center">
                      <span className="text-3xs text-slate-400 font-bold">BIẾN TRỞ R</span>
                      <span className="text-xl font-black text-amber-400">{ohmR} Ω</span>
                      <span className="text-3xs text-slate-500">Con chạy</span>
                    </div>

                    {/* Ammeter */}
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 flex flex-col items-center">
                      <span className="text-3xs text-slate-400 font-bold">AMPE KẾ (I)</span>
                      <span className="text-xl font-black text-emerald-400">{ohmI} A</span>
                      <span className="text-3xs text-slate-500">I = U / R</span>
                    </div>
                  </div>

                  {/* Visual Light Bulb & Circuit Glow */}
                  <div className="relative py-4 flex flex-col items-center justify-center">
                    <div 
                      className="w-16 h-16 rounded-full transition-all duration-300 flex items-center justify-center text-2xl shadow-2xl"
                      style={{
                        backgroundColor: ohmSwitch && ohmI > 0 ? `rgba(251, 191, 36, ${Math.max(0.2, bulbBrightness / 100)})` : '#334155',
                        boxShadow: ohmSwitch && ohmI > 0 ? `0 0 ${bulbBrightness * 0.8}px rgba(251, 191, 36, 0.9)` : 'none',
                        color: ohmSwitch && ohmI > 0 ? '#fff' : '#64748b'
                      }}
                    >
                      💡
                    </div>
                    <span className="text-xs font-bold text-slate-300 mt-2">
                      Công suất đèn: <strong className="text-amber-400">{ohmP} W</strong> ({bulbBrightness}% độ sáng)
                    </span>
                  </div>
                </div>
              )}

              {/* STATION 2: REFRACTION & TIR CANVAS */}
              {stationIdx === 1 && (
                <div className="w-full space-y-2">
                  <svg className="w-full h-48" viewBox="0 0 300 160">
                    {/* Air section top, Water section bottom */}
                    <rect x="0" y="0" width="300" height="80" fill="#0f172a" />
                    <rect x="0" y="80" width="300" height="80" fill="#0369a1" opacity="0.6" />
                    
                    {/* Interface line */}
                    <line x1="0" y1="80" x2="300" y2="80" stroke="#38bdf8" strokeWidth="2" />
                    <text x="10" y="70" fill="#94a3b8" fontSize="10">Không khí (n2 = 1.0)</text>
                    <text x="10" y="100" fill="#bae6fd" fontSize="10">Nước (n1 = 1.33)</text>

                    {/* Normal line (dash) */}
                    <line x1="150" y1="10" x2="150" y2="150" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Incident Ray (from bottom water at laserAngle) */}
                    {(() => {
                      const len = 70;
                      const rad = (laserAngle * Math.PI) / 180;
                      const startX = 150 - len * Math.sin(rad);
                      const startY = 80 + len * Math.cos(rad);
                      return (
                        <>
                          <line x1={startX} y1={startY} x2="150" y2="80" stroke="#f43f5e" strokeWidth="3" />
                          <circle cx={startX} cy={startY} r="4" fill="#fb7185" />
                          <text x={startX - 10} y={startY + 15} fill="#f43f5e" fontSize="10" fontWeight="bold">Laser (i={laserAngle}°)</text>
                        </>
                      );
                    })()}

                    {/* Refracted or Reflected Ray */}
                    {isTIR ? (
                      // Total Internal Reflection ray in water
                      (() => {
                        const len = 70;
                        const rad = (laserAngle * Math.PI) / 180;
                        const endX = 150 + len * Math.sin(rad);
                        const endY = 80 + len * Math.cos(rad);
                        return (
                          <>
                            <line x1="150" y1="80" x2={endX} y2={endY} stroke="#f43f5e" strokeWidth="3" />
                            <text x="170" y="120" fill="#f43f5e" fontSize="10" fontWeight="bold">Phản Xạ Toàn Phần!</text>
                          </>
                        );
                      })()
                    ) : (
                      // Refracted ray into air
                      (() => {
                        const len = 70;
                        const rad = (rAngleDeg * Math.PI) / 180;
                        const endX = 150 + len * Math.sin(rad);
                        const endY = 80 - len * Math.cos(rad);
                        return (
                          <>
                            <line x1="150" y1="80" x2={endX} y2={endY} stroke="#f43f5e" strokeWidth="2.5" />
                            <text x={endX - 10} y={endY - 5} fill="#f43f5e" fontSize="10">Tia khúc xạ (r={rAngleDeg}°)</text>
                          </>
                        );
                      })()
                    )}
                  </svg>

                  <div className="text-center text-xs text-slate-300">
                    {isTIR ? (
                      <span className="text-rose-400 font-bold">
                        ⚡ i = {laserAngle}° &gt; i_gh (48.6°): Toàn bộ tia sáng bị Phản Xạ Toàn Phần trong nước (100% phản xạ, không có tia khúc xạ)!
                      </span>
                    ) : isGrazing ? (
                      <span className="text-amber-400 font-bold">
                        📐 i ≈ i_gh = 48.6°: Tia khúc xạ đi là là sát mặt phân cách (góc khúc xạ r = 90.0°)!
                      </span>
                    ) : (
                      <span>
                        Góc tới i = {laserAngle}° &lt; 48.6° ➜ Có tia khúc xạ ra không khí với r = <strong className="text-sky-400">{rAngleDeg}°</strong>
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* STATION 3: CONVEX LENS CANVAS */}
              {stationIdx === 2 && (
                <div className="w-full space-y-2">
                  <svg className="w-full h-48" viewBox="0 0 300 160">
                    {/* Principal axis */}
                    <line x1="10" y1="80" x2="290" y2="80" stroke="#64748b" strokeWidth="1" />
                    
                    {/* Lens line & symbols */}
                    <line x1="150" y1="15" x2="150" y2="145" stroke="#38bdf8" strokeWidth="3" />
                    <polygon points="150,10 145,20 155,20" fill="#38bdf8" />
                    <polygon points="150,150 145,140 155,140" fill="#38bdf8" />
                    <text x="153" y="25" fill="#38bdf8" fontSize="10">O</text>

                    {/* Focal points F and F' */}
                    {(() => {
                      const scale = 3; // pixels per cm
                      const fPx = lensF * scale;
                      const fX1 = 150 - fPx;
                      const fX2 = 150 + fPx;
                      return (
                        <>
                          <circle cx={fX1} cy="80" r="2.5" fill="#e2e8f0" />
                          <text x={fX1 - 4} y="95" fill="#cbd5e1" fontSize="9">F</text>

                          <circle cx={fX2} cy="80" r="2.5" fill="#e2e8f0" />
                          <text x={fX2 - 4} y="95" fill="#cbd5e1" fontSize="9">F'</text>

                          {/* Object Candle (Arrow) */}
                          {(() => {
                            const objX = 150 - lensD * scale;
                            const objTopY = 80 - lensH * 2.5;
                            return (
                              <>
                                <line x1={objX} y1="80" x2={objX} y2={objTopY} stroke="#fbbf24" strokeWidth="3" />
                                <text x={objX - 6} y={objTopY - 5} fill="#fbbf24" fontSize="12">🕯️</text>
                                <text x={objX - 10} y="95" fill="#fbbf24" fontSize="8">Vật ({lensD}cm)</text>

                                {/* Ray 1: Parallel to axis then through F' */}
                                <line x1={objX} y1={objTopY} x2="150" y2={objTopY} stroke="#ef4444" strokeWidth="1.5" />
                                <line x1="150" y1={objTopY} x2={280} y2={objTopY + ((80 - objTopY) / fPx) * (280 - 150)} stroke="#ef4444" strokeWidth="1.5" />

                                {/* Ray 2: Through optical center O */}
                                <line x1={objX} y1={objTopY} x2="280" y2={80 + ((80 - objTopY) / (150 - objX)) * (280 - 150)} stroke="#22c55e" strokeWidth="1.5" />
                              </>
                            );
                          })()}
                        </>
                      );
                    })()}
                  </svg>

                  <div className="text-center text-xs text-slate-300">
                    {isVirtual ? (
                      <span className="text-amber-400 font-bold">
                        Vật trong khoảng tiêu cự (d = {lensD}cm &lt; f = {lensF}cm) ➜ Cho Ảnh Ảo cùng chiều lớn hơn vật!
                      </span>
                    ) : (
                      <span className="text-emerald-400 font-bold">
                        Vật ngoài khoảng tiêu cự (d = {lensD}cm &gt; f = {lensF}cm) ➜ Cho Ảnh Thật ngược chiều! (d' ≈ {lensDPrime}cm)
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* STATION 4: SLOPE CAR CANVAS */}
              {stationIdx === 3 && (
                <div className="w-full space-y-3">
                  <svg className="w-full h-44" viewBox="0 0 300 150">
                    {/* Slope ground line */}
                    <polygon points="40,30 260,130 40,130" fill="#1e293b" />
                    <line x1="40" y1="30" x2="260" y2="130" stroke="#94a3b8" strokeWidth="3" />
                    
                    {/* Height indicator */}
                    <line x1="30" y1="30" x2="30" y2="130" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
                    <text x="5" y="85" fill="#f59e0b" fontSize="10" fontWeight="bold">h={slopeH}m</text>

                    {/* Car moving along the slope */}
                    {(() => {
                      const carX = 40 + carProgress * (260 - 40);
                      const carY = 30 + carProgress * (130 - 30);
                      return (
                        <g transform={`translate(${carX - 10}, ${carY - 15})`}>
                          <rect x="0" y="0" width="22" height="12" rx="3" fill="#38bdf8" />
                          <circle cx="5" cy="12" r="3" fill="#e2e8f0" />
                          <circle cx="17" cy="12" r="3" fill="#e2e8f0" />
                          <text x="4" y="9" fill="#0f172a" fontSize="7" fontWeight="bold">XE</text>
                        </g>
                      );
                    })()}
                  </svg>

                  {/* Energy meters */}
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-3xs text-slate-400 block font-bold">THẾ NĂNG W_t</span>
                      <span className="font-black text-amber-400">{carCurrentWt} J</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-3xs text-slate-400 block font-bold">ĐỘNG NĂNG W_đ</span>
                      <span className="font-black text-sky-400">{carCurrentWd} J</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-3xs text-slate-400 block font-bold">VẬN TỐC CHÂN DỐC</span>
                      <span className="font-black text-emerald-400">{carV} m/s</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* PARAMETER CONTROLS */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-slate-700 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-indigo-600" />
                Bảng Điều Khiển Tham Số Thí Nghiệm:
              </span>

              {stationIdx === 3 && (
                <button
                  onClick={handleRunCar}
                  disabled={carRunning}
                  className="py-1 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-2xs flex items-center gap-1 transition-all cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-white" />
                  <span>{carRunning ? 'Đang trượt...' : 'Thả Xe Trượt Dốc'}</span>
                </button>
              )}
            </div>

            {/* Controls for Station 1 */}
            {stationIdx === 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>Hiệu điện thế U:</span>
                    <span className="text-sky-600">{ohmU} V</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="24"
                    step="1"
                    value={ohmU}
                    onChange={(e) => setOhmU(Number(e.target.value))}
                    className="w-full accent-sky-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>Biến trở R:</span>
                    <span className="text-amber-600">{ohmR} Ω</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="20"
                    step="1"
                    value={ohmR}
                    onChange={(e) => setOhmR(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                </div>
              </div>
            )}

            {/* Controls for Station 2 */}
            {stationIdx === 1 && (
              <div className="text-xs">
                <div className="flex justify-between font-bold text-slate-700 mb-1">
                  <span>Góc tới của tia laser i (trong nước):</span>
                  <span className="text-rose-600 font-black">{laserAngle}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  step="1"
                  value={laserAngle}
                  onChange={(e) => setLaserAngle(Number(e.target.value))}
                  className="w-full accent-rose-600 cursor-pointer"
                />
                <div className="flex justify-between text-3xs text-slate-400 mt-1">
                  <span>0° (Vuông góc)</span>
                  <span className="text-rose-500 font-bold">i_gh ≈ 48.5° (Giới hạn)</span>
                  <span>80° (Xiên góc hẹp)</span>
                </div>
              </div>
            )}

            {/* Controls for Station 3 */}
            {stationIdx === 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>Khoảng cách vật d:</span>
                    <span className="text-amber-600 font-black">{lensD} cm</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="35"
                    step="1"
                    value={lensD}
                    onChange={(e) => setLensD(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>Tiêu cự thấu kính f:</span>
                    <span className="text-sky-600 font-black">{lensF} cm</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="18"
                    step="1"
                    value={lensF}
                    onChange={(e) => setLensF(Number(e.target.value))}
                    className="w-full accent-sky-600 cursor-pointer"
                  />
                </div>
              </div>
            )}

            {/* Controls for Station 4 */}
            {stationIdx === 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>Độ cao đỉnh dốc h:</span>
                    <span className="text-amber-600 font-black">{slopeH} m</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={slopeH}
                    onChange={(e) => {
                      setSlopeH(Number(e.target.value));
                      setCarProgress(0);
                    }}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>Khối lượng xe m:</span>
                    <span className="text-sky-600 font-black">{carM} kg</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={carM}
                    onChange={(e) => setCarM(Number(e.target.value))}
                    className="w-full accent-sky-600 cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Prediction Challenge & Verification Flow (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black text-xs">
                ?
              </span>
              <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wide">
                Thử Thách Dự Đoán Khoa Học
              </h4>
            </div>

            {/* Prediction Question Text */}
            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 text-xs sm:text-sm font-semibold text-indigo-950 leading-relaxed">
              <FormattedText text={curStation.predictionQuestion} />
            </div>

            {/* Prediction Options */}
            <div className="space-y-2">
              {curStation.predictionOptions.map((opt) => {
                const isSelected = selectedPrediction === opt.label;
                const isCorrect = opt.label === curStation.correctPredictionLabel;

                let btnStyle = 'border-slate-200 hover:border-indigo-300 bg-white text-slate-800';
                if (labState === 'revealed') {
                  if (isCorrect) {
                    btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-300';
                  } else if (isSelected) {
                    btnStyle = 'border-rose-400 bg-rose-50 text-rose-950 ring-2 ring-rose-300';
                  } else {
                    btnStyle = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                  }
                } else if (isSelected) {
                  btnStyle = 'border-indigo-600 bg-indigo-50 text-indigo-950 font-bold ring-2 ring-indigo-300';
                }

                return (
                  <button
                    key={opt.label}
                    disabled={labState === 'revealed'}
                    onClick={() => setSelectedPrediction(opt.label)}
                    className={`w-full p-3 rounded-xl border-2 text-left text-xs transition-all flex items-start gap-2.5 cursor-pointer ${btnStyle}`}
                  >
                    <span className={`w-5 h-5 rounded-md text-2xs font-black flex items-center justify-center shrink-0 mt-0.5 ${
                      labState === 'revealed' && isCorrect
                        ? 'bg-emerald-600 text-white'
                        : isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {opt.label}
                    </span>
                    <span className="leading-snug">
                      <FormattedText text={opt.text} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action button & Results */}
          <div className="space-y-3 pt-2">
            {labState === 'predicting' ? (
              <button
                disabled={!selectedPrediction}
                onClick={handleVerifyPrediction}
                className="w-full py-3.5 px-5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-200 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Kiểm Chứng Bằng Thực Nghiệm Mô Phỏng</span>
              </button>
            ) : (
              <div className="space-y-3">
                {/* Result Feedback Banner */}
                <div className={`p-4 rounded-2xl border text-xs ${
                  selectedPrediction === curStation.correctPredictionLabel
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : 'bg-rose-50 border-rose-300 text-rose-950'
                }`}>
                  <div className="font-extrabold flex items-center gap-1.5 mb-1.5">
                    {selectedPrediction === curStation.correctPredictionLabel ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Dự đoán hoàn toàn chính xác! 🎯</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600" />
                        <span>Dự đoán chưa chính xác! Hãy quan sát kết quả:</span>
                      </>
                    )}
                  </div>
                  <p className="leading-relaxed font-semibold">
                    {curStation.actualResultText}
                  </p>
                </div>

                {/* Scientific Explanation */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-2xs text-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 block">📚 Bản chất Vật lý:</span>
                  <p className="leading-relaxed">
                    {curStation.scientificExplanation}
                  </p>
                </div>

                {/* Next Station button */}
                <button
                  onClick={() => {
                    const nextStation = (stationIdx + 1) % stations.length;
                    handleSelectStation(nextStation);
                  }}
                  className="w-full py-3 px-5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Chuyển Sang Trạm Tiếp Theo ({stationIdx + 1 < stations.length ? `Trạm ${stationIdx + 2}` : 'Trạm 1'})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
