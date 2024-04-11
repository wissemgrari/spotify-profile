import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TracksComponent } from "./tracks.component";
import { authGuard } from "../../guards/auth.guard";
import { TrackDetailsComponent } from "./track-details/track-details.component";


const routes: Routes = [
  {
    path: '', component: TracksComponent,
    canActivate: [authGuard]
  },
  {
    path: ':id', component: TrackDetailsComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TracksRoutingModule {
}
