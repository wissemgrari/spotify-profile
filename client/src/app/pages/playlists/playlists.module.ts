import { NgModule } from '@angular/core';
import { PlaylistsComponent } from './playlists.component';
import { SharedModule } from "../../shared/shared.module";
import { PlaylistComponent } from '../../components/playlist/playlist.component';
import { PlaylistsRoutingModule } from "./playlists-routing.module";
import { PlaylistDetailsComponent } from "./playlist-details/playlist-details.component";
import { RecommendationComponent } from "./recommendation/recommendation.component";

@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistComponent,
    PlaylistDetailsComponent,
    RecommendationComponent
  ],
  imports: [
    SharedModule,
    PlaylistsRoutingModule
  ]
})
export class PlaylistsModule {
}
