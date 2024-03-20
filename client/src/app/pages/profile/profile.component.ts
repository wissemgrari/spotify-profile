import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ProfileService } from "../../services/profile.service";
import { Profile } from "../../models/profile.model";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ArtistService } from "../../services/artist.service";
import { Artist } from "../../models/artist.model";
import { Observable } from "rxjs";
import { Track } from "../../models/track.model";
import { TrackService } from "../../services/track.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLoading: boolean = true;
  userProfile$!: Observable<Profile | undefined>;
  topArtists$!: Observable<Artist[] | undefined>;
  topTracks$!: Observable<Track[] | undefined>;

  constructor(private authService: AuthService, private profileService: ProfileService, private artistService: ArtistService, private trackService: TrackService, private ngxService: NgxUiLoaderService) {
  }

  ngOnInit(): void {
    this.ngxService.startLoader("in-app-loader");
    this.userProfile$ = this.getProfile();
    this.topArtists$ = this.getTopArtists();
    this.topTracks$ = this.getTopTracks();
    this.isLoading = false;
    this.ngxService.stopLoader("in-app-loader");
  }

  logout() {
    this.authService.logout();
  }

  getProfile(): Observable<Profile | undefined> {
    return this.profileService.getProfile();
  }

  getTopArtists(): Observable<Artist[] | undefined> {
    return this.artistService.getTop10Artists()
  }

  getTopTracks(): Observable<Track[] | undefined> {
    return this.trackService.getTop10Tracks()
  }

}
