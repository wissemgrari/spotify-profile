import { NgModule } from '@angular/core';
import { RecentComponent } from './recent.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecentRoutingModule } from "./recent-routing.module";

@NgModule({
  declarations: [
    RecentComponent,
  ],
  imports: [
    SharedModule,
    RecentRoutingModule
  ]
})
export class RecentModule {
}
