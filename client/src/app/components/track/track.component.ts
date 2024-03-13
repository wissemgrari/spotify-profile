import { Component, Input } from '@angular/core';
import { Track } from 'src/app/models/track.model';

@Component({
  selector: 'track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {
  @Input() track!: Track;
}
