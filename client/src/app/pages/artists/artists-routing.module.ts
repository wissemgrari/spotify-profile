import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArtistsComponent } from "./artists.component";
import { authGuard } from "../../guards/auth.guard";
import { ArtistDetailsComponent } from "./artist-details/artist-details.component";


const routes: Routes = [
  {
    path: '', component: ArtistsComponent,
    canActivate: [authGuard]
  },
  {
    path: ':id', component: ArtistDetailsComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ArtistsRoutingModule {
}
