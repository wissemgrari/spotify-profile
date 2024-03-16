import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { RecentComponent } from './components/recent/recent.component';
import {PlaylistsComponent} from "./components/playlists/playlists.component";
import {LoginComponent} from "./components/login/login.component";
import { authGuard } from "./guards/auth.guard";
import { loggedInAuthGuard } from "./guards/logged-in.auth.guard";

const routes: Routes = [
  { path: '', component: ProfileComponent, canActivate: [authGuard]},
  { path: 'login', component: LoginComponent, canActivate: [loggedInAuthGuard] },
  { path: 'artists', component: ArtistsComponent, canActivate: [authGuard] },
  { path: 'tracks', component: TracksComponent, canActivate: [authGuard] },
  { path: 'recent', component: RecentComponent, canActivate: [authGuard] },
  { path: 'playlists', component: PlaylistsComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
