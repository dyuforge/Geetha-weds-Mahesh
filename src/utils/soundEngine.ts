// Indian Wedding Sound Engine
// Plays the custom wedding song (./audio/wedding-song.mp3) with Play/Pause and Mute/Unmute controls.

class IndianWeddingSoundEngine {
  private ctx: AudioContext | null = null;
  private audioEl: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private listeners: Set<() => void> = new Set();

  private ensureAudioElement() {
    if (!this.audioEl && typeof window !== 'undefined') {
      const audio = new Audio('./audio/wedding-song.mp3');
      audio.loop = true;
      audio.preload = 'auto';
      audio.volume = 0.65;
      audio.muted = this.isMuted;
      audio.addEventListener('ended', () => {
        if (this.isPlaying) {
          audio.currentTime = 0;
          audio.play().catch(() => {});
        }
      });
      this.audioEl = audio;
    }
    return this.audioEl;
  }

  public subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn());
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public getState() {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
    };
  }

  // Subtle paper rustle when opening the 3D envelope
  public playEnvelopeOpenSound() {
    try {
      this.initContext();
      if (!this.ctx || this.isMuted) return;

      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.35;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(900, now);
      filter.Q.setValueAtTime(1.8, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.01, now);
      noiseGain.gain.linearRampToValueAtTime(0.06, now + 0.1);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.34);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);
      whiteNoise.start(now);
    } catch {
      // Ignore audio errors if blocked by browser policy
    }
  }

  // Gentle temple bell chime
  public playTempleBellChime() {
    try {
      this.initContext();
      if (!this.ctx || this.isMuted) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1174.66, now);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 1.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 1.4);
    } catch {
      // Ignore
    }
  }

  public startMusic() {
    try {
      const audio = this.ensureAudioElement();
      if (!audio) return;

      audio.muted = this.isMuted;
      const playPromise = audio.play();
      this.isPlaying = true;
      this.notify();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          this.isPlaying = false;
          this.notify();
        });
      }
    } catch {
      // Ignore if blocked
    }
  }

  public pauseMusic() {
    this.isPlaying = false;
    if (this.audioEl) {
      this.audioEl.pause();
    }
    this.notify();
  }

  public togglePlay() {
    if (this.isPlaying) {
      this.pauseMusic();
    } else {
      this.startMusic();
    }
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.audioEl) {
      this.audioEl.muted = this.isMuted;
    }
    this.notify();
  }
}

export const soundEngine = new IndianWeddingSoundEngine();
