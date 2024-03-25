import { NgModule } from '@angular/core';
import { ArtistsComponent } from './artists.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArtistsRoutingModule } from "./artists-routing.module";
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

@NgModule({
  declarations: [ArtistsComponent, ArtistDetailsComponent],
  imports: [SharedModule, ArtistsRoutingModule],
  exports: [ArtistsComponent]
})
export class ArtistsModule {}
