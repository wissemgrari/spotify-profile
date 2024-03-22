import {NgModule} from '@angular/core';
import {PlaylistsComponent} from './playlists.component';
import {SharedModule} from "../../shared/shared.module";
import { PlaylistComponent } from '../../components/playlist/playlist.component';
import { NgOptimizedImage } from "@angular/common";


@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistComponent
  ],
    imports: [
        SharedModule,
        NgOptimizedImage
    ]
})
export class PlaylistsModule {
}
