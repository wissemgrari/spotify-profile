import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavigationModule } from './components/navigation/navigation.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { NgxUiLoaderConfig, NgxUiLoaderModule, SPINNER } from "ngx-ui-loader";


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: "#1db954",
  hasProgressBar: false,
  overlayColor: "#181818",
  fgsType: SPINNER.rectangleBouncePulseOut,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    NavigationModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
