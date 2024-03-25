import { Component, Input } from '@angular/core';
import { Playlist } from "../../models/playlist.model";

@Component({
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  @Input() playlist!: Playlist;

}
