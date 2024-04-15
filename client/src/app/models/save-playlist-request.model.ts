export class SavePlayListRequest {
  userID: string;
  playlistName: string;
  uris: string[]; // Array of Spotify URIs

  constructor(userID: string, playlistName: string, uris: string[]) {
    this.userID = userID;
    this.playlistName = playlistName;
    this.uris = uris;
  }

}
