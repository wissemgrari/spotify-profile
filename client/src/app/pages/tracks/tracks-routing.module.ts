import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TracksComponent } from "./tracks.component";
import { authGuard } from "../../guards/auth.guard";


const routes: Routes = [
  {
    path: '', component: TracksComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TracksRoutingModule {
}
