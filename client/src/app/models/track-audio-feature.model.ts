export class TrackAudioFeature {
  acousticness: number;
  danceability: number;
  energy: number;
  instrumentalness: number;
  liveness: number;
  speechiness: number;
  valence: number;
  constructor(acousticness: number, danceability: number, energy: number, instrumentalness: number, liveness: number, speechiness: number, valence: number) {
    this.acousticness = acousticness;
    this.danceability = danceability;
    this.energy = energy;
    this.instrumentalness = instrumentalness;
    this.liveness = liveness;
    this.speechiness = speechiness;
    this.valence = valence;
  }
}
