export class Track {
  name: string;
  artist: string;
  album: string;
  duration: string;
  image: string;
  constructor(name: string, artist: string, album: string, duration: string, image: string) {
    this.name = name;
    this.artist = artist;
    this.album = album;
    this.duration = duration;
    this.image = image;
  }
}
