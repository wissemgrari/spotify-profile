import { NgModule } from '@angular/core';
import { PlaylistsComponent } from './playlists.component';
import { SharedModule } from "../../shared/shared.module";
import { PlaylistComponent } from '../../components/playlist/playlist.component';
import { PlaylistsRoutingModule } from "./playlists-routing.module";


@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistComponent
  ],
  imports: [
    SharedModule,
    PlaylistsRoutingModule
  ]
})
export class PlaylistsModule {
}
