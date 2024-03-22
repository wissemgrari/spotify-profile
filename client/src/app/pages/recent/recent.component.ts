import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Track } from "../../models/track.model";
import { TrackService } from "../../services/track.service";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'recent-page',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {
  isLoading: boolean = true;
  recentTracks$!: Observable<Track[] | undefined>;

  constructor(private trackService: TrackService, private ngxService: NgxUiLoaderService) {
  }

  ngOnInit(): void {
    this.ngxService.startLoader("in-app-loader");
    this.recentTracks$ = this.getRecentTracks();
    this.isLoading = false;
    this.ngxService.stopLoader("in-app-loader");
  }

  getRecentTracks(): Observable<Track[] | undefined> {
    return this.trackService.getRecentTracks();
  }

}
