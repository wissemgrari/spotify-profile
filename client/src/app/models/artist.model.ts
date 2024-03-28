export class Artist {
  id: string;
  name: string;
  image: string;
  url: string;
  followers?: number;
  popularity?: number;
  genres?: string[];
  constructor(id: string, name: string, image: string, url: string, followers?: number, popularity?: number, genres?: string[]) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.url = url;
    this.followers = followers;
    this.popularity = popularity;
    this.genres = genres;
  }

}
