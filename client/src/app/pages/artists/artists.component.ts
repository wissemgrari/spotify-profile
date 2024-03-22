import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Artist } from "../../models/artist.model";
import { ArtistService, TimeRange } from "../../services/artist.service";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'artists-page',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})

export class ArtistsComponent implements OnInit {
  protected readonly TimeRange = TimeRange;

  selectedTimeRange: TimeRange = TimeRange.LONG_TERM;
  isLoading: boolean = true;
  topArtists$!: Observable<Artist[] | undefined>;

  constructor(private artistService: ArtistService, private ngxService: NgxUiLoaderService) {
  }

  ngOnInit(): void {
    this.ngxService.startLoader("in-app-loader");
    this.topArtists$ = this.getTopArtists();
    this.isLoading = false;
    this.ngxService.stopLoader("in-app-loader");
  }

  getTopArtists(): Observable<Artist[] | undefined> {
    return this.artistService.getTopArtists(this.selectedTimeRange);
  }

  onTabSelect(term: TimeRange) {
    this.selectedTimeRange = term;
    this.topArtists$ = this.artistService.getTopArtists(term);
  }

}
