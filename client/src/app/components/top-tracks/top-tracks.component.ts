import { Component, Input } from '@angular/core';
import { Track } from 'src/app/models/track.model';

@Component({
  selector: 'top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.css'],
})
export class TopTracksComponent {
  @Input() tracks: Track[] | undefined | null;

}
