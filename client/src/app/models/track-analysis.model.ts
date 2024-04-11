export class TrackAnalysis {
  key: number;
  modality: number; // 0 = minor, 1 = major
  time_signature: number;
  bars: number;
  beats: number;
  sections: number;
  segments: number;
  tempo: number;
  constructor(modality: number, time_signature: number, bars: number, beats: number, sections: number, segments: number, key: number, tempo: number) {
    this.key = key;
    this.modality = modality;
    this.time_signature = time_signature
    this.bars = bars;
    this.beats = beats;
    this.sections = sections;
    this.segments = segments;
    this.tempo = tempo;
  }
}
