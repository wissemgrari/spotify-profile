import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../components/button/button.component';
import { TrackComponent } from '../components/track/track.component';
import { TopTracksComponent } from '../components/top-tracks/top-tracks.component';
import { TopArtistsComponent } from '../components/top-artists/top-artists.component';
import { TopArtistComponent } from '../components/top-artist/top-artist.component';

@NgModule({
  declarations: [
    // Components, Pipes and Directives go here
    TopArtistsComponent,
    TopArtistComponent,
    TopTracksComponent,
    TrackComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TopArtistsComponent,
    TopArtistComponent,
    TopTracksComponent,
    TrackComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
