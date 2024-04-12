import { NgModule } from '@angular/core';
import { TracksComponent } from './tracks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TracksRoutingModule } from "./tracks-routing.module";
import { TrackDetailsComponent } from "./track-details/track-details.component";
import { AudioFeature } from "../../components/audio-feature/audio-feature";

@NgModule({
  declarations: [TracksComponent, TrackDetailsComponent, AudioFeature],
  imports: [SharedModule, TracksRoutingModule],
  exports: [TracksComponent],
})
export class TracksModule {
}
