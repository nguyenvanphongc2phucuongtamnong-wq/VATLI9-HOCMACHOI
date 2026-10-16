import React, { useState, useEffect, useRef } from 'react';
import { 
  FlaskConical, 
  Sun, 
  Zap, 
  Layers, 
  Scale, 
  Magnet, 
  Play, 
  Pause, 
  RotateCcw,
  Sparkles,
  Info,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { soundManager } from '../utils/audio';
import { SimulationTestSuiteModal, SIM_VERIFICATION_KEY } from './SimulationTestSuiteModal';

export const Simulations: React.FC = () => {
  const [activeSim, setActiveSim] = useState<'refraction' | 'lens' | 'circuit' | 'lever' | 'magnet'>('refraction');
  const [isTestModalOpen, setIsTestModalOpen] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(() => {
    return localStorage.getItem(SIM_VERIFICATION_KEY) === 'true';
  });

  const handleVerificationComplete = (passed: boolean) => {
    setIsVerified(passed);
    if (passed) {
      localStorage.setItem(SIM_VERIFICATION_KEY, 'true');
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Simulation Hub Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-800">
                Phòng Thí Nghiệm Vật Lý Ảo
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Tương tác trực quan với các định luật quang học, điện học và cơ học 9
              </p>
            </div>
          </div>

          {/* Verification Badge & Auto-test Action */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            {isVerified ? (
              <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-2xl border border-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-2xs font-extrabold text-emerald-800 uppercase tracking-wider">
                  Đã kiểm chứng chuẩn khoa học
                </span>
                <button
                  onClick={() => setIsTestModalOpen(true)}
                  className="ml-1 text-3xs font-bold text-sky-700 hover:underline cursor-pointer"
                >
                  (Xem 8 tests)
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded-2xl border border-amber-200">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span className="text-2xs font-bold text-amber-800">
                  Chưa chạy kiểm thử tự động
                </span>
                <button
                  onClick={() => setIsTestModalOpen(true)}
                  className="px-2.5 py-1 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-3xs cursor-pointer shadow-2xs"
                >
                  Chạy Ngay
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Sim Tabs */}
        <div className="flex gap-2 overflow-x-auto pt-4 border-t border-slate-100 mt-4 scrollbar-none">
          <button
            onClick={() => setActiveSim('refraction')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all ${
              activeSim === 'refraction'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>1. Khúc Xạ & Phản Xạ Toàn Phần</span>
          </button>

          <button
            onClick={() => setActiveSim('lens')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all ${
              activeSim === 'lens'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>2. Thấu Kính Quang Học</span>
          </button>

          <button
            onClick={() => setActiveSim('circuit')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all ${
              activeSim === 'circuit'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>3. Định Luật Ohm & Mạch Điện</span>
          </button>

          <button
            onClick={() => setActiveSim('lever')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all ${
              activeSim === 'lever'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>4. Đòn Bẩy & Cân Bằng Lực</span>
          </button>

          <button
            onClick={() => setActiveSim('magnet')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all ${
              activeSim === 'magnet'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Magnet className="w-4 h-4" />
            <span>5. Nam Châm Điện Ống Dây</span>
          </button>
        </div>
      </div>

      {/* Simulation Screen Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        {activeSim === 'refraction' && <RefractionSim />}
        {activeSim === 'lens' && <LensSim />}
        {activeSim === 'circuit' && <CircuitSim />}
        {activeSim === 'lever' && <LeverSim />}
        {activeSim === 'magnet' && <MagnetSim />}
      </div>

      {/* Verification Test Suite Modal */}
      <SimulationTestSuiteModal
        isOpen={isTestModalOpen}
        onClose={() => setIsTestModalOpen(false)}
        onVerificationComplete={handleVerificationComplete}
      />
    </div>
  );
};

/* ========================================================
   SIMULATION 1: REFRACTION & TOTAL INTERNAL REFLECTION
   ======================================================== */
const RefractionSim: React.FC = () => {
  const [angleI, setAngleI] = useState<number>(45);
  const [n1, setN1] = useState<number>(1.33); // e.g. Water
  const [n2, setN2] = useState<number>(1.00); // e.g. Air

  const radI = (angleI * Math.PI) / 180;
  
  // Critical angle when light travels from denser to rarer medium: sin(i_gh) = n2 / n1 (n1 > n2)
  const criticalAngle = n1 > n2 ? (Math.asin(n2 / n1) * 180) / Math.PI : null;

  // Snell formula: n1 * sin(i) = n2 * sin(r) => sin(r) = (n1 / n2) * sin(i)
  const sinR = (n1 / n2) * Math.sin(radI);

  // Distinguish cases according to physics principles
  const isNormal = angleI === 0;
  // Boundary case: ray grazes the boundary at r = 90° when angle equals critical angle
  const isGrazing = criticalAngle !== null && Math.abs(angleI - criticalAngle) <= 0.15;
  // Total internal reflection strictly requires n1 > n2 AND angleI strictly greater than critical angle
  const isTIR = criticalAngle !== null && angleI > criticalAngle + 0.15 && sinR >= 1.0;

  let angleR = 0;
  if (isTIR) {
    angleR = 90; // When TIR occurs, no light transmits into medium 2
  } else if (isGrazing) {
    angleR = 90; // Ray grazes the boundary (r = 90°)
  } else if (isNormal) {
    angleR = 0; // Transmits straight
  } else {
    const clampedSinR = Math.min(1.0, Math.max(-1.0, sinR));
    angleR = (Math.asin(clampedSinR) * 180) / Math.PI;
  }

  // Canvas coordinates
  const cx = 250;
  const cy = 200;
  const rayLen = 160;

  // Incident ray (coming from top-left into center)
  const incX = cx - rayLen * Math.sin(radI);
  const incY = cy - rayLen * Math.cos(radI);

  // Reflected ray (top-right)
  const refX = cx + rayLen * Math.sin(radI);
  const refY = cy - rayLen * Math.cos(radI);

  // Refracted ray (bottom-right)
  const radR = (angleR * Math.PI) / 180;
  const rfrX = isGrazing ? cx + rayLen : cx + rayLen * Math.sin(radR);
  const rfrY = isGrazing ? cy : cy + rayLen * Math.cos(radR);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold text-slate-800">
            Khúc Xạ Ánh Sáng & Phản Xạ Toàn Phần
          </h2>
          <p className="text-xs text-slate-500 font-mono">
            Định luật Snell: n₁ · sin(i) = n₂ · sin(r) {criticalAngle ? `• Góc tới hạn i_gh = ${criticalAngle.toFixed(1)}°` : ''}
          </p>
        </div>

        {isTIR ? (
          <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold animate-pulse">
            ⚡ Phản xạ toàn phần! (i &gt; i_gh: 100% phản xạ)
          </span>
        ) : isGrazing ? (
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
            📐 Tia khúc xạ đi là là mặt phân cách (r = 90.0°)
          </span>
        ) : isNormal ? (
          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
            ⬇️ Tia sáng truyền thẳng (i = 0° =&gt; r = 0°)
          </span>
        ) : (
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            ✅ Có tia khúc xạ (r = {angleR.toFixed(1)}°)
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visual SVG Stage */}
        <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden min-h-[380px]">
          <svg viewBox="0 0 500 400" className="w-full max-w-lg h-auto select-none">
            {/* Top medium background */}
            <rect x="0" y="0" width="500" height="200" fill="#0f172a" />
            <text x="20" y="30" fill="#94a3b8" fontSize="12" fontWeight="bold">
              Môi trường 1 (n₁ = {n1})
            </text>

            {/* Bottom medium background */}
            <rect x="0" y="200" width="500" height="200" fill="#1e293b" />
            <text x="20" y="230" fill="#94a3b8" fontSize="12" fontWeight="bold">
              Môi trường 2 (n₂ = {n2})
            </text>

            {/* Interface line */}
            <line x1="0" y1="200" x2="500" y2="200" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />

            {/* Normal line (Pháp tuyến NN') */}
            <line x1="250" y1="20" x2="250" y2="380" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="255" y="40" fill="#64748b" fontSize="11">N (Pháp tuyến)</text>
            <text x="255" y="375" fill="#64748b" fontSize="11">N'</text>

            {/* Incident ray (Tia tới - Vàng cam) */}
            <line x1={incX} y1={incY} x2={cx} y2={cy} stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            <circle cx={incX} cy={incY} r="4" fill="#f59e0b" />
            {/* Arrow on incident ray */}
            <polygon 
              points={`${cx - 40 * Math.sin(radI)},${cy - 40 * Math.cos(radI)} ${cx - 50 * Math.sin(radI) - 4},${cy - 50 * Math.cos(radI) + 6} ${cx - 50 * Math.sin(radI) + 4},${cy - 50 * Math.cos(radI) - 6}`} 
              fill="#f59e0b" 
            />

            {/* Reflected ray (Tia phản xạ) */}
            <line 
              x1={cx} 
              y1={cy} 
              x2={refX} 
              y2={refY} 
              stroke={isTIR ? '#ef4444' : '#f59e0b'} 
              strokeWidth={isTIR ? '3.5' : '1.5'} 
              strokeOpacity={isTIR ? '1' : '0.4'} 
              strokeLinecap="round" 
            />

            {/* Refracted ray (Tia khúc xạ - Xanh ngọc) - NOT rendered if Total Internal Reflection */}
            {!isTIR && (
              <line 
                x1={cx} 
                y1={cy} 
                x2={rfrX} 
                y2={rfrY} 
                stroke={isGrazing ? '#fbbf24' : '#38bdf8'} 
                strokeWidth={isGrazing ? '3.5' : '3'} 
                strokeLinecap="round" 
              />
            )}

            {/* Center incident point I */}
            <circle cx={cx} cy={cy} r="5" fill="#ffffff" />
            <text x={cx + 8} y={cy - 8} fill="#ffffff" fontSize="12" fontWeight="bold">I</text>

            {/* Angle Labels */}
            <text x={cx - 45} y={cy - 30} fill="#f59e0b" fontSize="12" fontWeight="bold">
              i = {angleI}°
            </text>
            {!isTIR ? (
              <text x={isGrazing ? cx + 60 : cx + 35} y={isGrazing ? cy - 10 : cy + 40} fill={isGrazing ? '#fbbf24' : '#38bdf8'} fontSize="12" fontWeight="bold">
                {isGrazing ? 'r = 90° (Là là mặt nước)' : `r = ${angleR.toFixed(1)}°`}
              </text>
            ) : (
              <text x={cx + 30} y={cy + 40} fill="#ef4444" fontSize="11" fontWeight="bold">
                (Phản xạ toàn phần: Không có tia khúc xạ)
              </text>
            )}
          </svg>
        </div>

        {/* Controls Column */}
        <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">
              Góc tới i: <span className="text-sky-600 font-mono text-base font-black">{angleI}°</span>
            </label>
            <input
              type="range"
              min="0"
              max="89"
              value={angleI}
              onChange={e => setAngleI(Number(e.target.value))}
              className="w-full accent-sky-600"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">
              Môi trường 1 (n₁ chứa tia tới):
            </label>
            <select
              value={n1}
              onChange={e => setN1(Number(e.target.value))}
              className="w-full p-2 text-xs bg-white border border-slate-200 rounded-xl"
            >
              <option value="1.00">Không khí (n = 1.00)</option>
              <option value="1.33">Nước (n = 1.33)</option>
              <option value="1.50">Thủy tinh crown (n = 1.50)</option>
              <option value="2.42">Kim cương (n = 2.42)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">
              Môi trường 2 (n₂ khúc xạ):
            </label>
            <select
              value={n2}
              onChange={e => setN2(Number(e.target.value))}
              className="w-full p-2 text-xs bg-white border border-slate-200 rounded-xl"
            >
              <option value="1.00">Không khí (n = 1.00)</option>
              <option value="1.33">Nước (n = 1.33)</option>
              <option value="1.50">Thủy tinh crown (n = 1.50)</option>
              <option value="2.42">Kim cương (n = 2.42)</option>
            </select>
          </div>

          {/* Quick info sheet */}
          <div className="pt-3 border-t border-slate-200 text-xs text-slate-600 space-y-1.5">
            <div className="flex justify-between">
              <span>Góc khúc xạ r:</span>
              <span className="font-bold text-slate-800">
                {isTIR ? 'Phản xạ toàn phần' : `${angleR.toFixed(1)}°`}
              </span>
            </div>
            {criticalAngle !== null && (
              <div className="flex justify-between">
                <span>Góc giới hạn i_gh:</span>
                <span className="font-bold text-amber-600">{criticalAngle.toFixed(1)}°</span>
              </div>
            )}
            <div className="p-3 bg-white rounded-xl border border-slate-200 mt-2 text-slate-500 leading-relaxed">
              💡 <strong>Lưu ý:</strong> Hiện tượng phản xạ toàn phần chỉ xảy ra khi truyền từ môi trường chiết quang hơn sang kém hơn (n₁ &gt; n₂) và góc tới i ≥ i_gh.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ========================================================
   SIMULATION 2: OPTICAL LENS (THẤU KÍNH)
   ======================================================== */
const LensSim: React.FC = () => {
  const [lensType, setLensType] = useState<'converging' | 'diverging'>('converging');
  const [f, setF] = useState<number>(70); // Focal length
  const [d, setD] = useState<number>(140); // Object distance
  const [h, setH] = useState<number>(50); // Object height

  // Optical formulas: 1/f = 1/d + 1/d'
  // For diverging lens, f is negative (-f)
  const actualF = lensType === 'converging' ? f : -f;
  const dPrime = (actualF * d) / (d - actualF);
  const k = -dPrime / d;
  const hPrime = Math.abs(k * h);

  const isReal = dPrime > 0;
  const isUpright = k > 0;

  const cx = 250;
  const cy = 180;

  // Object position
  const objX = cx - d;
  const objY = cy - h;

  // Image position
  const imgX = cx + dPrime;
  const imgY = isUpright ? cy - hPrime : cy + hPrime;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold text-slate-800">
            Giá Quang Học: Khảo Sát Tạo Ảnh Qua Thấu Kính
          </h2>
          <p className="text-xs text-slate-500">
            Công thức: 1/f = 1/d + 1/d' | Độ phóng đại: k = -d'/d = h'/h
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setLensType('converging')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
              lensType === 'converging'
                ? 'bg-sky-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Hội tụ (Rìa mỏng)
          </button>
          <button
            onClick={() => setLensType('diverging')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
              lensType === 'diverging'
                ? 'bg-sky-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Phân kì (Rìa dày)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Canvas Visual Stage */}
        <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden min-h-[380px]">
          <svg viewBox="0 0 500 360" className="w-full max-w-lg h-auto select-none">
            {/* Principal Axis (Trục chính delta) */}
            <line x1="10" y1={cy} x2="490" y2={cy} stroke="#475569" strokeWidth="1.5" />
            <text x="475" y={cy - 6} fill="#64748b" fontSize="11">Δ</text>

            {/* Lens Line */}
            <line x1={cx} y1="30" x2={cx} y2="330" stroke="#38bdf8" strokeWidth="3" />
            {lensType === 'converging' ? (
              <>
                {/* Converging arrowheads */}
                <polygon points={`${cx},20 ${cx - 6},35 ${cx + 6},35`} fill="#38bdf8" />
                <polygon points={`${cx},340 ${cx - 6},325 ${cx + 6},325`} fill="#38bdf8" />
              </>
            ) : (
              <>
                {/* Diverging inverted arrowheads */}
                <polygon points={`${cx},35 ${cx - 6},20 ${cx + 6},20`} fill="#38bdf8" />
                <polygon points={`${cx},325 ${cx - 6},340 ${cx + 6},340`} fill="#38bdf8" />
              </>
            )}

            {/* Optical Centre O */}
            <circle cx={cx} cy={cy} r="4" fill="#ffffff" />
            <text x={cx + 6} y={cy + 14} fill="#ffffff" fontSize="11" fontWeight="bold">O</text>

            {/* Focal Points F and F' */}
            <circle cx={cx - f} cy={cy} r="3" fill="#f59e0b" />
            <text x={cx - f - 6} y={cy + 14} fill="#f59e0b" fontSize="11" fontWeight="bold">F</text>

            <circle cx={cx + f} cy={cy} r="3" fill="#f59e0b" />
            <text x={cx + f - 6} y={cy + 14} fill="#f59e0b" fontSize="11" fontWeight="bold">F'</text>

            {/* Object Arrow AB (Vật sáng đỏ) */}
            <line x1={objX} y1={cy} x2={objX} y2={objY} stroke="#ef4444" strokeWidth="3.5" />
            <polygon points={`${objX},${objY - 4} ${objX - 4},${objY + 6} ${objX + 4},${objY + 6}`} fill="#ef4444" />
            <text x={objX - 10} y={objY - 8} fill="#ef4444" fontSize="11" fontWeight="bold">B</text>
            <text x={objX - 10} y={cy + 14} fill="#ef4444" fontSize="11" fontWeight="bold">A</text>

            {/* Image Arrow A'B' */}
            {isFinite(dPrime) && Math.abs(dPrime) < 240 && (
              <>
                <line 
                  x1={imgX} 
                  y1={cy} 
                  x2={imgX} 
                  y2={imgY} 
                  stroke={isReal ? '#10b981' : '#a855f7'} 
                  strokeWidth="3.5" 
                  strokeDasharray={isReal ? '' : '4 3'} 
                />
                <polygon 
                  points={`${imgX},${isUpright ? imgY - 4 : imgY + 4} ${imgX - 4},${isUpright ? imgY + 6 : imgY - 6} ${imgX + 4},${isUpright ? imgY + 6 : imgY - 6}`} 
                  fill={isReal ? '#10b981' : '#a855f7'} 
                />
                <text x={imgX + 6} y={isUpright ? imgY - 4 : imgY + 12} fill={isReal ? '#10b981' : '#a855f7'} fontSize="11" fontWeight="bold">
                  B'
                </text>
              </>
            )}

            {/* Ray 1: Parallel to axis -> Passes through F' */}
            <line x1={objX} y1={objY} x2={cx} y2={objY} stroke="#e2e8f0" strokeWidth="1.5" strokeOpacity="0.8" />
            {lensType === 'converging' ? (
              <line x1={cx} y1={objY} x2={cx + 220} y2={cy + (objY - cy) * (-220 / f + 1)} stroke="#e2e8f0" strokeWidth="1.5" strokeOpacity="0.8" />
            ) : (
              <line x1={cx} y1={objY} x2={cx + 220} y2={cy - (cy - objY) * (220 / f + 1)} stroke="#e2e8f0" strokeWidth="1.5" strokeOpacity="0.8" />
            )}

            {/* Ray 2: Through optical centre O */}
            <line x1={objX} y1={objY} x2={cx + 220} y2={cy + ((cy - objY) / d) * 220} stroke="#facc15" strokeWidth="1.5" strokeOpacity="0.8" />
          </svg>
        </div>

        {/* Controls */}
        <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Khoảng cách vật d: <span className="text-sky-600 font-mono text-sm font-bold">{d} mm</span>
            </label>
            <input
              type="range"
              min="30"
              max="220"
              value={d}
              onChange={e => setD(Number(e.target.value))}
              className="w-full accent-sky-600"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Tiêu cự f: <span className="text-sky-600 font-mono text-sm font-bold">{f} mm</span>
            </label>
            <input
              type="range"
              min="40"
              max="110"
              value={f}
              onChange={e => setF(Number(e.target.value))}
              className="w-full accent-sky-600"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Chiều cao vật h: <span className="text-sky-600 font-mono text-sm font-bold">{h} mm</span>
            </label>
            <input
              type="range"
              min="20"
              max="80"
              value={h}
              onChange={e => setH(Number(e.target.value))}
              className="w-full accent-sky-600"
            />
          </div>

          {/* Real-time Calculation Result */}
          <div className="pt-3 border-t border-slate-200 text-xs space-y-1.5">
            <div className="flex justify-between">
              <span>Khoảng cách ảnh d':</span>
              <span className="font-bold font-mono text-slate-800">
                {isFinite(dPrime) ? `${dPrime.toFixed(1)} mm` : 'Ở vô cực'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Chiều cao ảnh h':</span>
              <span className="font-bold font-mono text-slate-800">
                {isFinite(hPrime) ? `${hPrime.toFixed(1)} mm` : '∞'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Tính chất ảnh:</span>
              <span className={`font-bold ${isReal ? 'text-emerald-600' : 'text-purple-600'}`}>
                {isReal ? 'Ảnh THẬT, ngược chiều' : 'Ảnh ẢO, cùng chiều'}
              </span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 mt-2 text-slate-600 text-xs">
              {d === 2 * f && lensType === 'converging' && (
                <span className="text-sky-700 font-bold">
                  🎯 Trường hợp Silbermann: d = 2f thì d' = 2f và h' = h (dùng để đo tiêu cự bài 9).
                </span>
              )}
              {d < f && lensType === 'converging' && (
                <span className="text-purple-700 font-bold">
                  🔍 Nguyên lí kính lúp (Bài 10): Đặt vật trong khoảng tiêu cự (d &lt; f) thu được ảnh ảo phóng đại!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ========================================================
   SIMULATION 3: OHM'S LAW & CIRCUITS
   ======================================================== */
const CircuitSim: React.FC = () => {
  const [circuitType, setCircuitType] = useState<'single' | 'series' | 'parallel'>('series');
  const [voltage, setVoltage] = useState<number>(12);
  const [r1, setR1] = useState<number>(10);
  const [r2, setR2] = useState<number>(20);

  // Calculations
  let rEquiv = r1;
  let current = 0;
  let pTotal = 0;
  let u1 = voltage;
  let u2 = 0;
  let i1 = 0;
  let i2 = 0;

  if (circuitType === 'single') {
    rEquiv = r1;
    current = voltage / r1;
    u1 = voltage;
    i1 = current;
  } else if (circuitType === 'series') {
    rEquiv = r1 + r2;
    current = voltage / rEquiv;
    u1 = current * r1;
    u2 = current * r2;
    i1 = current;
    i2 = current;
  } else {
    rEquiv = (r1 * r2) / (r1 + r2);
    current = voltage / rEquiv;
    u1 = voltage;
    u2 = voltage;
    i1 = voltage / r1;
    i2 = voltage / r2;
  }

  pTotal = voltage * current;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold text-slate-800">
            Mô Phỏng Đoạn Mạch & Định Luật Ohm
          </h2>
          <p className="text-xs text-slate-500">
            I = U / R | Công suất toả nhiệt P = U · I = I² · R
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCircuitType('single')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
              circuitType === 'single' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'
            }`}
          >
            Mạch đơn (1 R)
          </button>
          <button
            onClick={() => setCircuitType('series')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
              circuitType === 'series' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'
            }`}
          >
            Mắc Nối Tiếp
          </button>
          <button
            onClick={() => setCircuitType('parallel')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
              circuitType === 'parallel' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'
            }`}
          >
            Mắc Song Song
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Schematic Circuit Stage */}
        <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-4 flex flex-col items-center justify-center relative min-h-[380px]">
          <svg viewBox="0 0 500 320" className="w-full max-w-lg h-auto select-none">
            {/* Wires */}
            <rect x="60" y="50" width="380" height="220" fill="none" stroke="#64748b" strokeWidth="4" rx="16" />

            {/* Battery / DC Source */}
            <rect x="210" y="38" width="80" height="24" fill="#0f172a" />
            <line x1="230" y1="36" x2="230" y2="64" stroke="#f59e0b" strokeWidth="4" />
            <line x1="250" y1="44" x2="250" y2="56" stroke="#94a3b8" strokeWidth="5" />
            <text x="210" y="28" fill="#f59e0b" fontSize="12" fontWeight="bold">
              + U = {voltage} V -
            </text>

            {/* Ammeter */}
            <circle cx="90" cy="160" r="18" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            <text x="85" y="165" fill="#38bdf8" fontSize="14" fontWeight="bold">A</text>
            <text x="50" y="195" fill="#38bdf8" fontSize="11" fontWeight="bold">
              I = {current.toFixed(2)} A
            </text>

            {/* Resistor 1 */}
            {circuitType === 'single' ? (
              <g transform="translate(300, 140)">
                <rect x="0" y="0" width="80" height="40" fill="#334155" stroke="#f59e0b" strokeWidth="2" rx="6" />
                <text x="20" y="24" fill="#ffffff" fontSize="12" fontWeight="bold">R₁ = {r1}Ω</text>
                <text x="15" y="55" fill="#94a3b8" fontSize="10">U₁ = {u1.toFixed(1)}V</text>
              </g>
            ) : circuitType === 'series' ? (
              <>
                <g transform="translate(240, 140)">
                  <rect x="0" y="0" width="70" height="36" fill="#334155" stroke="#f59e0b" strokeWidth="2" rx="6" />
                  <text x="12" y="22" fill="#ffffff" fontSize="11" fontWeight="bold">R₁={r1}Ω</text>
                  <text x="12" y="48" fill="#94a3b8" fontSize="10">U₁={u1.toFixed(1)}V</text>
                </g>
                <g transform="translate(340, 140)">
                  <rect x="0" y="0" width="70" height="36" fill="#334155" stroke="#10b981" strokeWidth="2" rx="6" />
                  <text x="12" y="22" fill="#ffffff" fontSize="11" fontWeight="bold">R₂={r2}Ω</text>
                  <text x="12" y="48" fill="#94a3b8" fontSize="10">U₂={u2.toFixed(1)}V</text>
                </g>
              </>
            ) : (
              /* Parallel */
              <>
                {/* Branch wires */}
                <line x1="260" y1="100" x2="260" y2="220" stroke="#64748b" strokeWidth="4" />
                <line x1="400" y1="100" x2="400" y2="220" stroke="#64748b" strokeWidth="4" />
                <line x1="260" y1="110" x2="400" y2="110" stroke="#64748b" strokeWidth="4" />
                <line x1="260" y1="210" x2="400" y2="210" stroke="#64748b" strokeWidth="4" />

                <g transform="translate(295, 92)">
                  <rect x="0" y="0" width="70" height="36" fill="#334155" stroke="#f59e0b" strokeWidth="2" rx="6" />
                  <text x="10" y="22" fill="#ffffff" fontSize="11" fontWeight="bold">R₁={r1}Ω</text>
                  <text x="75" y="22" fill="#94a3b8" fontSize="10">I₁={i1.toFixed(2)}A</text>
                </g>

                <g transform="translate(295, 192)">
                  <rect x="0" y="0" width="70" height="36" fill="#334155" stroke="#10b981" strokeWidth="2" rx="6" />
                  <text x="10" y="22" fill="#ffffff" fontSize="11" fontWeight="bold">R₂={r2}Ω</text>
                  <text x="75" y="22" fill="#94a3b8" fontSize="10">I₂={i2.toFixed(2)}A</text>
                </g>
              </>
            )}

            {/* Glowing power dissipation pill */}
            <g transform="translate(180, 240)">
              <rect x="0" y="0" width="140" height="26" fill="#1e293b" stroke="#f43f5e" strokeWidth="1.5" rx="13" />
              <text x="18" y="17" fill="#f43f5e" fontSize="11" fontWeight="bold">
                🔥 P = {pTotal.toFixed(1)} Watt
              </text>
            </g>
          </svg>
        </div>

        {/* Controls */}
        <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Hiệu điện thế nguồn U: <span className="text-sky-600 font-mono text-sm font-bold">{voltage} V</span>
            </label>
            <input
              type="range"
              min="1"
              max="24"
              value={voltage}
              onChange={e => setVoltage(Number(e.target.value))}
              className="w-full accent-sky-600"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Điện trở R₁: <span className="text-sky-600 font-mono text-sm font-bold">{r1} Ω</span>
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={r1}
              onChange={e => setR1(Number(e.target.value))}
              className="w-full accent-sky-600"
            />
          </div>

          {circuitType !== 'single' && (
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Điện trở R₂: <span className="text-sky-600 font-mono text-sm font-bold">{r2} Ω</span>
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={r2}
                onChange={e => setR2(Number(e.target.value))}
                className="w-full accent-sky-600"
              />
            </div>
          )}

          {/* Results Summary */}
          <div className="pt-3 border-t border-slate-200 text-xs space-y-2">
            <div className="flex justify-between">
              <span>Điện trở tương đương R_tđ:</span>
              <span className="font-bold font-mono text-slate-800">{rEquiv.toFixed(2)} Ω</span>
            </div>
            <div className="flex justify-between">
              <span>Cường độ dòng mạch chính I:</span>
              <span className="font-bold font-mono text-sky-600">{current.toFixed(2)} A</span>
            </div>
            <div className="flex justify-between">
              <span>Tổng công suất tiêu thụ P:</span>
              <span className="font-bold font-mono text-rose-600">{pTotal.toFixed(1)} W</span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 text-slate-600 text-xs leading-relaxed">
              {circuitType === 'series' && (
                <span>
                  📌 <strong>Nối tiếp:</strong> R_tđ = R₁ + R₂ ({r1} + {r2} = {r1 + r2}Ω). Dòng điện I như nhau qua từng điện trở.
                </span>
              )}
              {circuitType === 'parallel' && (
                <span>
                  📌 <strong>Song song:</strong> R_tđ = (R₁·R₂)/(R₁+R₂) = {rEquiv.toFixed(1)}Ω &lt; R nhỏ nhất. Hiệu điện thế hai đầu nhánh bằng nhau!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ========================================================
   SIMULATION 4: LEVER & TORQUE EQUILIBRIUM (ĐÒN BẨY)
   ======================================================== */
const LeverSim: React.FC = () => {
  const [m1, setM1] = useState<number>(4); // kg on left
  const [d1, setD1] = useState<number>(15); // distance left (cm)
  const [m2, setM2] = useState<number>(6); // kg on right
  const [d2, setD2] = useState<number>(10); // distance right (cm)

  const torque1 = m1 * d1; // Moment lực trái
  const torque2 = m2 * d2; // Moment lực phải
  const diff = torque2 - torque1;

  // Rotation angle in degrees (capped between -15 and 15)
  const tiltAngle = Math.max(-15, Math.min(15, diff * 0.8));
  const isBalanced = Math.abs(diff) < 0.1;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">
            Quy Tắc Đòn Bẩy & Cân Bằng Moment Lực
          </h2>
          <p className="text-xs text-slate-500">
            Điều kiện cân bằng: F₁ · d₁ = F₂ · d₂ (hay m₁ · d₁ = m₂ · d₂)
          </p>
        </div>
        {isBalanced && (
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold animate-bounce">
            ⚖️ Trạng thái Cân Bằng Hoàn Hảo!
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[380px] overflow-hidden">
          <svg viewBox="0 0 500 320" className="w-full max-w-lg h-auto select-none">
            {/* Ground */}
            <line x1="50" y1="280" x2="450" y2="280" stroke="#334155" strokeWidth="4" />

            {/* Fulcrum (Điểm tựa tam giác O) */}
            <polygon points="250,180 230,280 270,280" fill="#64748b" />
            <circle cx="250" cy="180" r="5" fill="#f8fafc" />
            <text x="245" y="170" fill="#ffffff" fontSize="12" fontWeight="bold">O</text>

            {/* Tilting Lever Beam */}
            <g transform={`rotate(${tiltAngle}, 250, 180)`}>
              {/* Wooden beam */}
              <rect x="50" y="174" width="400" height="12" rx="4" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
              {/* Ruler ticks on beam */}
              {[-20, -15, -10, -5, 0, 5, 10, 15, 20].map((t, idx) => (
                <line 
                  key={idx} 
                  x1={250 + t * 9} 
                  y1="174" 
                  x2={250 + t * 9} 
                  y2="186" 
                  stroke="#78350f" 
                  strokeWidth="1.5" 
                />
              ))}

              {/* Weight 1 on left */}
              <rect 
                x={250 - d1 * 9 - 18} 
                y={174 - (20 + m1 * 4)} 
                width="36" 
                height={20 + m1 * 4} 
                rx="4" 
                fill="#ef4444" 
              />
              <text 
                x={250 - d1 * 9 - 14} 
                y={174 - 10} 
                fill="#ffffff" 
                fontSize="11" 
                fontWeight="bold"
              >
                {m1}kg
              </text>

              {/* Weight 2 on right */}
              <rect 
                x={250 + d2 * 9 - 18} 
                y={174 - (20 + m2 * 4)} 
                width="36" 
                height={20 + m2 * 4} 
                rx="4" 
                fill="#3b82f6" 
              />
              <text 
                x={250 + d2 * 9 - 14} 
                y={174 - 10} 
                fill="#ffffff" 
                fontSize="11" 
                fontWeight="bold"
              >
                {m2}kg
              </text>
            </g>

            {/* Bottom Live Moment Indicators */}
            <text x="70" y="50" fill="#ef4444" fontSize="13" fontWeight="bold">
              Trái: M₁ = {m1}kg × {d1}cm = {torque1}
            </text>
            <text x="300" y="50" fill="#3b82f6" fontSize="13" fontWeight="bold">
              Phải: M₂ = {m2}kg × {d2}cm = {torque2}
            </text>
          </svg>
        </div>

        {/* Controls */}
        <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
          <div>
            <label className="text-xs font-bold text-red-700 block mb-1">
              Khối lượng bên trái (m₁): <span className="font-mono text-sm">{m1} kg</span>
            </label>
            <input
              type="range"
              min="1"
              max="15"
              value={m1}
              onChange={e => setM1(Number(e.target.value))}
              className="w-full accent-rose-600"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-red-700 block mb-1">
              Khoảng cách bên trái (d₁): <span className="font-mono text-sm">{d1} cm</span>
            </label>
            <input
              type="range"
              min="5"
              max="20"
              value={d1}
              onChange={e => setD1(Number(e.target.value))}
              className="w-full accent-rose-600"
            />
          </div>

          <div className="pt-2 border-t border-slate-200">
            <label className="text-xs font-bold text-blue-700 block mb-1">
              Khối lượng bên phải (m₂): <span className="font-mono text-sm">{m2} kg</span>
            </label>
            <input
              type="range"
              min="1"
              max="15"
              value={m2}
              onChange={e => setM2(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-blue-700 block mb-1">
              Khoảng cách bên phải (d₂): <span className="font-mono text-sm">{d2} cm</span>
            </label>
            <input
              type="range"
              min="5"
              max="20"
              value={d2}
              onChange={e => setD2(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <button
            onClick={() => {
              // Auto-balance
              setD2(Math.round((m1 * d1) / m2));
            }}
            className="w-full py-2 bg-sky-600 text-white rounded-xl text-xs font-semibold hover:bg-sky-700 transition-colors"
          >
            Tự Động Tìm Vị Trí Cân Bằng d₂
          </button>
        </div>
      </div>
    </div>
  );
};

/* ========================================================
   SIMULATION 5: ELECTROMAGNET (NAM CHÂM ĐIỆN)
   ======================================================== */
const MagnetSim: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(true);
  const [current, setCurrent] = useState<number>(2.0); // Amperes
  const [turns, setTurns] = useState<number>(500); // Turns
  const [hasIronCore, setHasIronCore] = useState<boolean>(true);

  // Magnetic force strength ~ I * N * coreMultiplier
  const coreMultiplier = hasIronCore ? 10 : 1;
  const strength = isOn ? current * turns * coreMultiplier : 0;
  // Number of paperclips lifted
  const paperclips = Math.min(30, Math.floor(strength / 150));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">
            Từ Trường Của Ống Dây & Nam Châm Điện
          </h2>
          <p className="text-xs text-slate-500">
            Quy tắc nắm tay phải: Khum 4 ngón theo chiều I, ngón cái chỉ cực Bắc N
          </p>
        </div>
        <button
          onClick={() => setIsOn(!isOn)}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            isOn
              ? 'bg-rose-500 text-white hover:bg-rose-600 shadow-md shadow-rose-200'
              : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-200'
          }`}
        >
          {isOn ? 'Ngắt Công Tắc (Tắt)' : 'Đóng Công Tắc (Bật)'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[380px] overflow-hidden">
          <svg viewBox="0 0 500 320" className="w-full max-w-lg h-auto select-none">
            {/* Magnetic field lines if turned on */}
            {isOn && (
              <g opacity="0.6">
                <ellipse cx="250" cy="140" rx="160" ry="80" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="6 4" />
                <ellipse cx="250" cy="140" rx="200" ry="110" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 4" />
                <polygon points="410,135 410,145 420,140" fill="#38bdf8" />
                <polygon points="90,145 90,135 80,140" fill="#38bdf8" />
              </g>
            )}

            {/* Iron core cylinder */}
            {hasIronCore && (
              <rect x="150" y="115" width="200" height="50" rx="8" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="2" />
            )}

            {/* Solenoid wire loops */}
            <g>
              {[160, 180, 200, 220, 240, 260, 280, 300, 320].map((x, i) => (
                <path
                  key={i}
                  d={`M ${x} 105 C ${x + 10} 95, ${x + 10} 185, ${x} 175`}
                  fill="none"
                  stroke={isOn ? '#f59e0b' : '#78350f'}
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              ))}
            </g>

            {/* North / South poles labels */}
            {isOn && (
              <>
                <rect x="110" y="125" width="30" height="30" rx="6" fill="#ef4444" />
                <text x="118" y="146" fill="#ffffff" fontSize="16" fontWeight="bold">N</text>

                <rect x="360" y="125" width="30" height="30" rx="6" fill="#3b82f6" />
                <text x="370" y="146" fill="#ffffff" fontSize="16" fontWeight="bold">S</text>
              </>
            )}

            {/* Picked up paperclips below magnet */}
            <g transform="translate(180, 200)">
              {Array.from({ length: paperclips }).map((_, idx) => (
                <rect
                  key={idx}
                  x={(idx % 6) * 24}
                  y={Math.floor(idx / 6) * 16}
                  width="20"
                  height="8"
                  rx="3"
                  fill="#e2e8f0"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                />
              ))}
            </g>

            <text x="160" y="300" fill="#f8fafc" fontSize="12" fontWeight="bold">
              📎 Hút được: {paperclips} chiếc kẹp sắt
            </text>
          </svg>
        </div>

        {/* Controls */}
        <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Cường độ dòng điện (I): <span className="font-mono text-sm text-sky-600 font-bold">{current} A</span>
            </label>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.5"
              value={current}
              onChange={e => setCurrent(Number(e.target.value))}
              className="w-full accent-sky-600"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Số vòng quấn ống dây (N): <span className="font-mono text-sm text-sky-600 font-bold">{turns} vòng</span>
            </label>
            <input
              type="range"
              min="100"
              max="1000"
              step="100"
              value={turns}
              onChange={e => setTurns(Number(e.target.value))}
              className="w-full accent-sky-600"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="iron-core"
              checked={hasIronCore}
              onChange={e => setHasIronCore(e.target.checked)}
              className="w-4 h-4 accent-sky-600 rounded-sm"
            />
            <label htmlFor="iron-core" className="text-xs font-bold text-slate-700 cursor-pointer">
              Gắn lõi sắt non (tăng lực từ gấp 10 lần)
            </label>
          </div>

          <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1 mt-3">
            <p>
              💡 <strong>Lực từ của nam châm điện</strong> phụ thuộc vào:
            </p>
            <ul className="list-disc pl-4 space-y-0.5 text-slate-500">
              <li>Cường độ dòng điện I chạy qua cuộn dây</li>
              <li>Số vòng dây N quấn quanh lõi</li>
              <li>Sự có mặt của lõi sắt non từ tính mềm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
