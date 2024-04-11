import { NgModule } from '@angular/core';
import { TracksComponent } from './tracks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TracksRoutingModule } from "./tracks-routing.module";
import { TrackDetailsComponent } from "./track-details/track-details.component";

@NgModule({
  declarations: [TracksComponent, TrackDetailsComponent],
  imports: [SharedModule, TracksRoutingModule],
  exports: [TracksComponent],
})
export class TracksModule {}
