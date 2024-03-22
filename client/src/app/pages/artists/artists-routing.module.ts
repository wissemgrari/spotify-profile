import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArtistsComponent } from "./artists.component";
import { authGuard } from "../../guards/auth.guard";


const routes: Routes = [
  {
    path: '', component: ArtistsComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ArtistsRoutingModule {
}
