export class Playlist {
  cover: string;
  name: string;
  tracks: number;
  url: string;

  constructor(name: string, tracks: number, cover: string, url: string) {
    this.name = name;
    this.tracks = tracks;
    this.cover = cover;
    this.url = url;
  }
}
