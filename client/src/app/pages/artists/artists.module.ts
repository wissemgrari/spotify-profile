import { NgModule } from '@angular/core';
import { ArtistsComponent } from './artists.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArtistsRoutingModule } from "./artists-routing.module";

@NgModule({
  declarations: [ArtistsComponent],
  imports: [SharedModule, ArtistsRoutingModule],
  exports: [ArtistsComponent]
})
export class ArtistsModule {}
