import { Component } from '@angular/core';
import {Playlist} from "../../models/playlist.model";

@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent {
  playlists: Playlist[] = [
    {name: 'WOOOSH', tracks: 230, cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb7c4c623cd18255d1e9e6bf8c' },
    {name: 'DJ Music 2024 🔥 Remixes & Mashups Party', tracks: 111, cover: 'https://image-cdn-fa.spotifycdn.com/image/ab67706c0000bebb82d90dbad44c5dcb67d21e78' },
    {name: 'Your Top Songs 2023', tracks: 101, cover: 'https://wrapped-images.spotifycdn.com/image/yts-2023/large/your-top-songs-2023_LARGE_en.jpg' },
    {name: 'This is G.G.A', tracks: 50, cover: 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2dFLRC-large.jpg' },
    {name: 'Ba3', tracks: 37, cover: 'https://mosaic.scdn.co/640/ab67616d0000b27307b0080795e52292af989e4bab67616d0000b273603c2d427f4a652aa5d1f81bab67616d0000b2736f29609c55dae5e4163d370dab67616d0000b273a330dbf3d5c153c19cc7059b' },
    {name: 'Tarik playlist', tracks: 75, cover: 'https://mosaic.scdn.co/640/ab67616d0000b2737005885df706891a3c182a57ab67616d0000b273a5c7151899ae5da4f4382d54ab67616d0000b273c6e0948bbb0681ff29cdbae8ab67616d0000b273d4d4929a3a86fe2f9fadbd42' },
  ]
}
