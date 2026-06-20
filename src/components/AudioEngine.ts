/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

class AudioEngine {
  private ctx: AudioContext | null = null;
  private droneOsc: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private droneFilter: BiquadFilterNode | null = null;
  private droneGain: GainNode | null = null;
  private lfo: OscillatorNode | null = null;
  private lfoGain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private isMuted: boolean = true;
  private isStarted: boolean = false;

  constructor() {
    // Lazy initialization triggered on user gesture
  }

  public init() {
    if (this.isStarted) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.analyser.connect(this.ctx.destination);

      this.setupBackgroundDrone();
      this.isStarted = true;
      this.isMuted = false;
      this.setVolume(this.isMuted ? 0 : 0.4);
    } catch (e) {
      console.warn("Web Audio API not supported or blocked: ", e);
    }
  }

  private setupBackgroundDrone() {
    if (!this.ctx || !this.analyser) return;

    // Filter to make it a warm, dark background rumble
    this.droneFilter = this.ctx.createBiquadFilter();
    this.droneFilter.type = 'lowpass';
    this.droneFilter.frequency.value = 160;
    this.droneFilter.Q.value = 4.0;

    // Gain node for general drone volume
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.value = 0.08;

    // Harmonic Osc 1 (Low rumble)
    this.droneOsc = this.ctx.createOscillator();
    this.droneOsc.type = 'sawtooth';
    this.droneOsc.frequency.value = 55; // A1 Note

    // Harmonic Osc 2 (Fifth above)
    this.droneOsc2 = this.ctx.createOscillator();
    this.droneOsc2.type = 'triangle';
    this.droneOsc2.frequency.value = 82.4; // E2 Note

    // Dynamic filter modulation (LFO)
    this.lfo = this.ctx.createOscillator();
    this.lfo.frequency.value = 0.15; // Extremely slow sweep (0.15 Hz)
    this.lfoGain = this.ctx.createGain();
    this.lfoGain.gain.value = 80; // Modulate filter between 80Hz and 240Hz

    // Connections
    this.lfo.connect(this.lfoGain);
    if (this.droneFilter.frequency) {
      this.lfoGain.connect(this.droneFilter.frequency);
    }

    this.droneOsc.connect(this.droneFilter);
    this.droneOsc2.connect(this.droneFilter);
    this.droneFilter.connect(this.droneGain);
    this.droneGain.connect(this.analyser);

    // Start oscillators
    this.droneOsc.start(0);
    this.droneOsc2.start(0);
    this.lfo.start(0);
  }

  public toggleMute(): boolean {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isMuted = !this.isMuted;
    this.setVolume(this.isMuted ? 0 : 0.4);
    return this.isMuted;
  }

  private setVolume(volume: number) {
    if (this.droneGain && this.ctx) {
      this.droneGain.gain.linearRampToValueAtTime(volume * 0.12, this.ctx.currentTime + 0.5);
    }
  }

  public playHoverChime() {
    if (this.isMuted || !this.ctx || !this.analyser) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Soft beautiful high chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(659.25, now); // E5 Note
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.1); 

      filter.type = 'bandpass';
      filter.frequency.value = 1200;
      filter.Q.value = 1.0;

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.analyser);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {
      // Audio might be suspended or context closed
    }
  }

  public playClickChime() {
    if (this.isMuted || !this.ctx || !this.analyser) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now); // A4
      osc.frequency.setValueAtTime(220, now + 0.05); // Drop block click

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(this.analyser);

      osc.start(now);
      osc.stop(now + 0.2);
    } catch (e) {
      // Audio might be suspended
    }
  }

  public playCelebrationArpeggio() {
    if (this.isMuted || !this.ctx || !this.analyser) return;

    try {
      const now = this.ctx.currentTime;
      // Synthesize an ascending E major chord with cascading delays
      const notes = [329.63, 415.30, 493.88, 659.25, 830.61, 987.77]; // E4, G#4, B4, E5, G#5, B5
      
      notes.forEach((freq, idx) => {
        const timeOffset = idx * 0.06;
        const noteOsc = this.ctx!.createOscillator();
        const noteGain = this.ctx!.createGain();
        
        noteOsc.type = 'sine';
        noteOsc.frequency.setValueAtTime(freq, now + timeOffset);
        
        noteGain.gain.setValueAtTime(0.08, now + timeOffset);
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + timeOffset + 0.6);
        
        noteOsc.connect(noteGain);
        noteGain.connect(this.analyser!);
        
        noteOsc.start(now + timeOffset);
        noteOsc.stop(now + timeOffset + 0.61);
      });
    } catch (e) {
      // Audio suspended
    }
  }

  public getVisualizerData(): number[] {
    if (!this.analyser || this.isMuted) {
      // Return beautiful idle artificial waveform data to keep the UI vibrating elegantly
      const mockData = [];
      const time = Date.now() * 0.004;
      for (let i = 0; i < 20; i++) {
        mockData.push((Math.sin(time + i * 0.3) + 1.2) * 20 + Math.random() * 5);
      }
      return mockData;
    }

    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(dataArray);
    
    // Standardize to numerical array of 20 elements
    const result: number[] = [];
    const step = Math.floor(dataArray.length / 20) || 1;
    for (let i = 0; i < 20; i++) {
      result.push(dataArray[i * step] || 0);
    }
    return result;
  }

  public getMuted() {
    return this.isMuted;
  }
}

export const audioEngine = new AudioEngine();
