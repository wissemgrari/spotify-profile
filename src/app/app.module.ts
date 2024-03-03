import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavigationModule } from './components/navigation/navigation.module';
import { AppRoutingModule } from './app-routing.module';
import { ProfileModule } from './components/profile/profile.module';
import { ArtistsModule } from './components/artists/artists.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NavigationModule,
    ProfileModule,
    ArtistsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
