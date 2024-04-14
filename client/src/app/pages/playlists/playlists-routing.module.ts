import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlaylistsComponent } from "./playlists.component";
import { authGuard } from "../../guards/auth.guard";
import { PlaylistDetailsComponent } from "./playlist-details/playlist-details.component";

const routes: Routes = [
  {
    path: '', component: PlaylistsComponent,
    canActivate: [authGuard]
  },
  {
    path: ':id', component: PlaylistDetailsComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PlaylistsRoutingModule {
}
