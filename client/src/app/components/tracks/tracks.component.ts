import { Component, Input } from '@angular/core';
import { Track } from 'src/app/models/track.model';

@Component({
  selector: 'tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css'],
})
export class TracksComponent {
  @Input() tracks: Track[] | undefined | null;

}
