import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TopArtistsComponent } from './top-artists/top-artists.component';
import { TopArtistComponent } from './top-artist/top-artist.component';
import { TopTracksComponent } from './top-tracks/top-tracks.component';
import { TopTrackComponent } from './top-track/top-track.component';

@NgModule({
  declarations: [ProfileComponent, TopArtistsComponent, TopArtistComponent, TopTracksComponent, TopTrackComponent],
  imports: [SharedModule],
  exports: [ProfileComponent]
})
export class ProfileModule {}
