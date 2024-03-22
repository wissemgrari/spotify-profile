import { Component, OnInit } from '@angular/core';
import { Playlist } from "../../models/playlist.model";
import { Observable } from "rxjs";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { PlaylistService } from "../../services/playlist.service";

@Component({
  selector: 'playlists-page',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  isLoading: boolean = true;
  playlists$!: Observable<Playlist[] | undefined>;

  constructor(private playlistService: PlaylistService, private ngxService: NgxUiLoaderService) {
  }

  ngOnInit(): void {
    this.ngxService.startLoader("in-app-loader");
    this.playlists$ = this.getPlaylists();
    this.isLoading = false;
    this.ngxService.stopLoader("in-app-loader");
  }

  getPlaylists(): Observable<Playlist[] | undefined> {
    return this.playlistService.getPlaylists();
  }
}
