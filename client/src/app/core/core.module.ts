// Core Module only dealing with services and other core functionality of the application.

import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "../interceptors/token.interceptor";
import { AuthService } from "../services/auth.service";
import { ProfileService } from "../services/profile.service";
import { ArtistService } from "../services/artist.service";

@NgModule({
  providers: [
    AuthService,
    ArtistService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})

export class CoreModule {
}
