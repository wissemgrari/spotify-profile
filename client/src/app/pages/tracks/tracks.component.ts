import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { Track } from "../../models/track.model";
import { TimeRange, TrackService } from "../../services/track.service";

@Component({
  selector: 'tracks-page',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  protected readonly TimeRange = TimeRange;

  selectedTimeRange: TimeRange = TimeRange.LONG_TERM;
  isLoading: boolean = true;
  topTracks$!: Observable<Track[] | undefined>;

  constructor(private trackService: TrackService, private ngxService: NgxUiLoaderService) {}
  ngOnInit(): void {
    this.ngxService.startLoader("in-app-loader");
    this.topTracks$ = this.getTopTracks();
    this.isLoading = false;
    this.ngxService.stopLoader("in-app-loader");
  }
  getTopTracks(): Observable<Track[] | undefined> {
    return this.trackService.getTopTracks(this.selectedTimeRange);
  }
  onTabSelect(term: TimeRange) {
    this.selectedTimeRange = term;
    this.topTracks$ = this.trackService.getTopTracks(term);
  }
}
