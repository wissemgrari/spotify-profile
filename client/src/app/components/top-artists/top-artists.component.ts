import { Component } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';

@Component({
  selector: 'top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.css']
})
export class TopArtistsComponent {
  artists: Artist[] = [
    {
      name: 'Fairuz',
      image: 'https://i.scdn.co/image/ab6761610000f17863b2323e94f912f0f7be4051'
    },
    {
      name: 'Drake',
      image: 'https://i.scdn.co/image/ab6761610000f1784293385d324db8558179afd9'
    },
    {
      name: 'Eminem',
      image: 'https://i.scdn.co/image/ab6761610000f178a00b11c129b27a88fc72f36b'
    },
    {
      name: 'The weekend',
      image: 'https://i.scdn.co/image/ab6761610000f178214f3cf1cbe7139c1e26ffbb'
    },
    {
      name: 'J. Cole',
      image: 'https://i.scdn.co/image/ab6761610000f178add503b411a712e277895c8a'
    },
  ];
}
