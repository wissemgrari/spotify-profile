import { Component, Input } from '@angular/core';
import { Track } from 'src/app/models/track.model';

@Component({
  selector: 'top-track',
  templateUrl: './top-track.component.html',
  styleUrls: ['./top-track.component.css']
})
export class TopTrackComponent {
  @Input() track!: Track;
}
