import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { RecentComponent } from './components/recent/recent.component';
import {PlaylistsComponent} from "./components/playlists/playlists.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'tracks', component: TracksComponent },
  { path: 'recent', component: RecentComponent },
  { path: 'playlists', component: PlaylistsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
