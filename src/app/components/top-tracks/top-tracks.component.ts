import { Component } from '@angular/core';
import { Track } from 'src/app/models/track.model';

@Component({
  selector: 'top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.css'],
})
export class TopTracksComponent {
  tracks: Track[] = [
    {
      name: 'Behind Barz - Bonus',
      artist: 'Drake',
      album: 'Behind Barz - Bonus',
      duration: '2:43',
      image: 'https://i.scdn.co/image/ab67616d00004851be955a885d12b9e3ad44d122',
    },
    {
      name: 'If We Ever Broke Up',
      artist: 'Mae Stephens',
      album: 'If We Ever Broke Up',
      duration: '2:23',
      image: 'https://i.scdn.co/image/ab67616d000048511fc63c898797e3dbf04ad611',
    },
    {
      name: 'Plain Jane',
      artist: 'A$AP Ferg',
      album: 'Still Striving',
      duration: '2:54',
      image: 'https://i.scdn.co/image/ab67616d00004851d79cfa3155b50beb5dbeeb9a',
    },
    {
      name: 'Riptide',
      artist: 'Vance Joy',
      album: 'Dream Your Life Away',
      duration: '3:24',
      image: 'https://i.scdn.co/image/ab67616d00004851a9929deb093a6617d2493b03',
    },
    {
      name: 'Minefield',
      artist: 'Nic D',
      album: 'Minefield',
      duration: '2:39',
      image: 'https://i.scdn.co/image/ab67616d00004851dd87f20c5e0443fd2bd9cf8d',
    },
  ];
}
