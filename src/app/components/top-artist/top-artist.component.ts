import { Component, Input } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';

@Component({
  selector: 'top-artist',
  templateUrl: './top-artist.component.html',
  styleUrls: ['./top-artist.component.css']
})
export class TopArtistComponent {
  @Input() artist!: Artist;
}
