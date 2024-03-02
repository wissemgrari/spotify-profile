import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const navigationRoutes: Routes = [
  // { path: '', component: ProfileComponent },
  // { path: 'artists', component: ArtistsComponent },
  // { path: 'tracks', component: TracksComponent },
  // { path: 'recent', component: RecentComponent },
  // { path: 'playlists', component: PlaylistsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(navigationRoutes)],
  exports: [RouterModule],
})
export class NavigationRoutingModule {}
