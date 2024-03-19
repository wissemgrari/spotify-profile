export class Track {
  name: string;
  artist: string;
  album: string;
  duration: number;
  image: string;
  url: string;
  constructor(name: string, artist: string, album: string, duration: number, image: string, url: string) {
    this.name = name;
    this.artist = artist;
    this.album = album;
    this.duration = duration;
    this.image = image;
    this.url = url;
  }
}
