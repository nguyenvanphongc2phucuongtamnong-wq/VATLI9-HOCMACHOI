/**
 * Web Audio API synthesizer for sound effects (applause, correct chime, gentle retry tone)
 * Works reliably without external audio files!
 */

class SoundController {
  private audioCtx: AudioContext | null = null;
  private soundEnabled: boolean = true;

  constructor() {
    const saved = localStorage.getItem('vatly9_sound_enabled');
    if (saved !== null) {
      this.soundEnabled = saved === 'true';
    }
  }

  public isEnabled(): boolean {
    return this.soundEnabled;
  }

  public setEnabled(enabled: boolean): void {
    this.soundEnabled = enabled;
    localStorage.setItem('vatly9_sound_enabled', String(enabled));
  }

  public setMuted(muted: boolean): void {
    this.setEnabled(!muted);
  }

  public playCorrect(): void {
    this.playCorrectSound();
  }

  public playApplause(): void {
    this.playCorrectSound();
  }

  public playWrong(): void {
    this.playWrongSound();
  }

  private getContext(): AudioContext | null {
    if (!this.soundEnabled) return null;
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  /**
   * Sound effect for CORRECT answer: Joyful chime + applause (tiếng vỗ tay)
   */
  public playCorrectSound(): void {
    if (!this.soundEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // 1. Play musical major chord celebration (C5 -> E5 -> G5 -> C6)
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.4);
    });

    // 2. Synthesize applause (vỗ tay) with randomized filtered noise bursts
    this.generateApplause(ctx, now + 0.25, 1.4);
  }

  /**
   * Generates realistic clapping / applause sounds using bandpass filtered noise bursts
   */
  private generateApplause(ctx: AudioContext, startTime: number, duration: number): void {
    const clapCount = 28; // Multiple simulated hands clapping

    for (let i = 0; i < clapCount; i++) {
      const clapTime = startTime + Math.random() * duration;
      const bufferSize = ctx.sampleRate * 0.06; // 60ms noise clap
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let j = 0; j < bufferSize; j++) {
        data[j] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      // Bandpass filter to sound like hands clapping (around 1000Hz - 1600Hz)
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(900 + Math.random() * 800, clapTime);
      filter.Q.setValueAtTime(2.5, clapTime);

      const gain = ctx.createGain();
      const volume = 0.08 + Math.random() * 0.07;
      gain.gain.setValueAtTime(volume, clapTime);
      gain.gain.exponentialRampToValueAtTime(0.001, clapTime + 0.05);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(clapTime);
      noise.stop(clapTime + 0.06);
    }
  }

  /**
   * Sound effect for WRONG answer: Gentle notification "Bạn sai rồi làm lại đi nào"
   */
  public playWrongSound(): void {
    if (!this.soundEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Play a gentle two-tone "uh-oh" soft sine wave
    const freqs = [330, 260];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.14);

      gain.gain.setValueAtTime(0, now + idx * 0.14);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.14 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.14 + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.14);
      osc.stop(now + idx * 0.14 + 0.22);
    });
  }

  /**
   * Click / Tap UI sound
   */
  public playClickSound(): void {
    if (!this.soundEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  }
}

export const soundManager = new SoundController();
