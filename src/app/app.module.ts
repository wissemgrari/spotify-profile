import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {NavigationModule} from './components/navigation/navigation.module';
import {AppRoutingModule} from './app-routing.module';
import {ProfileModule} from './components/profile/profile.module';
import {ArtistsModule} from './components/artists/artists.module';
import {TracksModule} from './components/tracks/tracks.module';
import {RecentModule} from './components/recent/recent.module';
import {PlaylistsModule} from "./components/playlists/playlists.module";
import {LoginModule} from "./components/login/login.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NavigationModule,
    ProfileModule,
    ArtistsModule,
    TracksModule,
    RecentModule,
    PlaylistsModule,
    LoginModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
