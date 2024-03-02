import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', component: ProfileComponent },
  // { path: 'artists', component: ArtistsComponent },
  // { path: 'tracks', component: TracksComponent },
  // { path: 'recent', component: RecentComponent },
  // { path: 'playlists', component: PlaylistsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
