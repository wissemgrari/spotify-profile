import {NgModule} from '@angular/core';
import {PlaylistsComponent} from './playlists.component';
import {SharedModule} from "../../shared/shared.module";
import { PlaylistComponent } from '../../components/playlist/playlist.component';


@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PlaylistsModule {
}
