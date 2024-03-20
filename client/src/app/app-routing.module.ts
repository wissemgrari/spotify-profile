import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { TracksComponent } from './pages/tracks/tracks.component';
import { RecentComponent } from './pages/recent/recent.component';
import {PlaylistsComponent} from "./pages/playlists/playlists.component";
import {LoginComponent} from "./pages/login/login.component";
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
