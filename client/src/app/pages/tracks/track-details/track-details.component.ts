import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Track } from "../../../models/track.model";
import { ActivatedRoute } from "@angular/router";
import { TrackService } from "../../../services/track.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { TrackAnalysis } from "../../../models/track-analysis.model";

@Component({
  selector: 'track-details',
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.css']
})
export class TrackDetailsComponent implements OnInit {
  id = '';
  isLoading: boolean = true;
  track$!: Observable<Track | undefined>;
  trackAnalysis$!: Observable<TrackAnalysis | undefined>;

  constructor(private route: ActivatedRoute, private trackService: TrackService, private ngxService: NgxUiLoaderService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.ngxService.startLoader("in-app-loader");
    this.track$ = this.getTrack();
    this.trackAnalysis$ = this.getTrackAnalysis();
    this.isLoading = false;
    this.ngxService.stopLoader("in-app-loader");
  }

  getTrack(): Observable<Track | undefined> {
    return this.trackService.getTrack(this.id);
  }

  getTrackAnalysis(): Observable<TrackAnalysis | undefined> {
    return this.trackService.getTrackAnalysis(this.id);
  }


}
