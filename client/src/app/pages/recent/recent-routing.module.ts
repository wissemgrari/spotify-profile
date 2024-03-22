import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecentComponent } from "./recent.component";
import { authGuard } from "../../guards/auth.guard";


const routes: Routes = [
  {
    path: '', component: RecentComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecentRoutingModule {}
