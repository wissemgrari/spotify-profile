import { Component, OnInit } from '@angular/core';
import { PlaylistService } from "../../../services/playlist.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Playlist } from "../../../models/playlist.model";
import { Track } from "../../../models/track.model";

@Component({
  selector: 'playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css']
})
export class PlaylistDetailsComponent implements OnInit {
  id = '';
  isLoading: boolean = true;
  // playlist$!: Observable<{ playlist: Playlist, tracks: Track[] } | undefined>;
  playlist: Playlist | undefined;
  tracks: Track[] = [];

  constructor(private route: ActivatedRoute, private playListService: PlaylistService, private ngxService: NgxUiLoaderService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.ngxService.startLoader("in-app-loader");
    this.getPlaylist().subscribe((data) => {
      if (data) {
        this.playlist = data.playlist;
        this.tracks = data.tracks;
      }
    });
    this.isLoading = false;
    this.ngxService.stopLoader("in-app-loader");
  }

  getPlaylist(): Observable<{ playlist: Playlist, tracks: Track[] } | undefined> {
    return this.playListService.getPlaylist(this.id);
  }

}
