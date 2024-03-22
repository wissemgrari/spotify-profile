import { NgModule } from '@angular/core';
import { RecentComponent } from './recent.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RecentComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class RecentModule {
}
