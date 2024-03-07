import { Component, Input } from '@angular/core';
import { Track } from 'src/app/models/track.model';

@Component({
  selector: 'recent-track',
  templateUrl: './recent-track.component.html',
  styleUrls: ['./recent-track.component.css']
})
export class RecentTrackComponent {
  @Input() track!: Track
}
