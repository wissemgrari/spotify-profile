import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { ArtistsComponent } from './components/artists/artists.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'artists', component: ArtistsComponent },
  // { path: 'tracks', component: TracksComponent },
  // { path: 'recent', component: RecentComponent },
  // { path: 'playlists', component: PlaylistsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
