export class Playlist {
  cover: string;
  name: string;
  tracks: number;

  constructor(name: string, tracks: number, cover: string) {
    this.name = name;
    this.tracks = tracks;
    this.cover = cover;
  }
}
