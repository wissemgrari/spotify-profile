import { NgModule } from '@angular/core';
import { TracksComponent } from './tracks.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TracksComponent],
  imports: [SharedModule],
  exports: [TracksComponent],
})
export class TracksModule {}
