import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavigationModule } from './components/navigation/navigation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, NavigationModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
