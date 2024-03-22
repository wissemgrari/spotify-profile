import { Component, Input } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  @Input() artist!: Artist;
}
