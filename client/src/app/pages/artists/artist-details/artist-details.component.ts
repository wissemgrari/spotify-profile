import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Artist } from "../../../models/artist.model";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ArtistService } from "../../../services/artist.service";

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  id = '';
  isLoading: boolean = true;
  artist$!: Observable<Artist | undefined>;

  constructor(private route: ActivatedRoute, private artistService: ArtistService, private ngxService: NgxUiLoaderService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.ngxService.startLoader("in-app-loader");
    this.artist$ = this.getArtist();
    this.isLoading = false;
    this.ngxService.stopLoader("in-app-loader");
  }

  getArtist(): Observable<Artist | undefined> {
    return this.artistService.getArtist(this.id);
  }

}
