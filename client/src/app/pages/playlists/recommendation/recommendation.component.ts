import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from "ngx-ui-loader";
import { finalize, Observable, of, switchMap } from "rxjs";
import { Track } from "../../../models/track.model";
import { ActivatedRoute } from "@angular/router";
import { Playlist } from "../../../models/playlist.model";
import { PlaylistService } from "../../../services/playlist.service";
import { Profile } from "../../../models/profile.model";
import { ProfileService } from "../../../services/profile.service";
import { SavePlayListRequest } from "../../../models/save-playlist-request.model";

@Component({
  selector: 'recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  id = '';
  isLoading: boolean = true;
  userProfile: Profile | undefined;
  playlist: Playlist | undefined;
  tracks: Track[] = [];
  isPlaylistSaved: boolean = false;
  newPlaylistURL: string = '';

  constructor(private route: ActivatedRoute, private profileService: ProfileService, private playListService: PlaylistService, private ngxService: NgxUiLoaderService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.ngxService.startLoader("in-app-loader");
    this.isLoading = true;

    this.getProfile().subscribe((data) => {
      if (data) {
        this.userProfile = data;
      }
    })

    this.getPlaylist().pipe(
      switchMap((data) => {
        if (data) {
          this.playlist = data.playlist;
          let playListTracksIDs = data.tracks.map(track => track.id);
          // get random ids from the playlist
          let randomIDs = playListTracksIDs.sort(() => Math.random() - Math.random()).slice(0, 5).join(',');
          return this.getRecommendations(randomIDs);
        }
        // If data is not available, return an empty Observable
        return of([]);
      }),
      finalize(() => {
        this.isLoading = false;
        this.ngxService.stopLoader("in-app-loader");
      })
    ).subscribe({
      next: (tracks) => {
        if (tracks) {
          this.tracks = tracks;
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  getProfile(): Observable<Profile | undefined> {
    return this.profileService.getProfile();
  }

  getPlaylist(): Observable<{ playlist: Playlist, tracks: Track[] } | undefined> {
    return this.playListService.getPlaylist(this.id);
  }

  getRecommendations(playlistTracksIDs: string): Observable<Track[] | undefined> {
    return this.playListService.getRecommendations(playlistTracksIDs);
  }

  savePlaylist() {
    this.isLoading = true;

    if (this.userProfile) {
      const savePlaylistRequest: SavePlayListRequest = {
        userID: this.userProfile.id,
        playlistName: this.playlist?.name ?? "",
        uris: this.tracks.map(track => track.uri) as string[]
      }
      this.playListService.savePlaylist(savePlaylistRequest).subscribe((response) => {
        if (response) {
          this.newPlaylistURL = response.external_urls.spotify;
          this.isPlaylistSaved = true;
        }
        this.isLoading = false;
      })
    }
  }

}
