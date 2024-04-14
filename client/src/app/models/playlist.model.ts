export class Playlist {
  id: string;
  name: string;
  tracks: number;
  owner: string;
  cover: string;
  url: string;

  constructor(id: string, name: string, tracks: number, owner: string, cover: string, url: string) {
    this.id = id;
    this.name = name;
    this.tracks = tracks;
    this.owner = owner;
    this.cover = cover;
    this.url = url;
  }
}
