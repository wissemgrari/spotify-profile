import { NgModule } from '@angular/core';
import { RecentComponent } from './recent.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecentTracksComponent } from '../../components/recent-tracks/recent-tracks.component';
import { RecentTrackComponent } from '../../components/recent-track/recent-track.component';



@NgModule({
  declarations: [
    RecentComponent,
    RecentTracksComponent,
    RecentTrackComponent
  ],
  imports: [
    SharedModule
  ]
})
export class RecentModule { }
