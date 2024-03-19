export class Profile {
  display_name: string;
  email: string;
  profile_url: string;
  followers: number;
  following: number;
  image: string;
  id: string;


  constructor(display_name: string, email: string, profile_url: string, followers: number, following: number, image: string | null, id: string) {
    this.display_name = display_name;
    this.email = email;
    this.profile_url = profile_url;
    this.followers = followers;
    this.following = following;
    this.image = image ?? "";
    this.id = id;
  }
}
