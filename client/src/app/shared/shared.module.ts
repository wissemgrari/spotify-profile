import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../components/button/button.component';
import { TrackComponent } from '../components/track/track.component';
import { TracksComponent } from '../components/tracks/tracks.component';
import { ArtistsComponent } from '../components/artists/artists.component';
import { ArtistComponent } from '../components/artist/artist.component';
import { DurationPipe } from "../pipes/duration.pipe";

@NgModule({
  declarations: [
    // Components, Pipes and Directives go here
    ArtistsComponent,
    ArtistComponent,
    TracksComponent,
    TrackComponent,
    ButtonComponent,
    DurationPipe,
  ],
    imports: [CommonModule, RouterModule, FormsModule, NgOptimizedImage],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ArtistsComponent,
    ArtistComponent,
    TracksComponent,
    TrackComponent,
    ButtonComponent,
    DurationPipe
  ],
})
export class SharedModule {}
