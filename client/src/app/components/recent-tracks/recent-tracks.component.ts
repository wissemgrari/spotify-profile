import { Component } from '@angular/core';
import { Track } from 'src/app/models/track.model';

@Component({
  selector: 'recent-tracks',
  templateUrl: './recent-tracks.component.html',
  styleUrls: ['./recent-tracks.component.css']
})
export class RecentTracksComponent {
  tracks: Track[] = []
}
