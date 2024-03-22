import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'artists',
    loadChildren: () => import('./pages/artists/artists.module').then(m => m.ArtistsModule)
  },
  {
    path: 'tracks',
    loadChildren: () => import('./pages/tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path: 'recent',
    loadChildren: () => import('./pages/recent/recent.module').then(m => m.RecentModule)
  },
  {
    path: 'playlists',
    loadChildren: () => import('./pages/playlists/playlists.module').then(m => m.PlaylistsModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
