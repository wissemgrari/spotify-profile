export class Track {
  id: string;
  name: string;
  artist: string;
  album: string;
  duration: number;
  image: string;
  url: string;
  year?: string;
  popularity?: number;
  constructor(id: string, name: string, artist: string, album: string, duration: number, image: string, url: string, year?: string, popularity?: number) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.album = album;
    this.duration = duration;
    this.image = image;
    this.url = url;
    this.year = year;
    this.popularity = popularity;
  }
}
