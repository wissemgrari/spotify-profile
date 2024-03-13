import { NgModule } from '@angular/core';
import { ArtistsComponent } from './artists.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ArtistsComponent],
  imports: [SharedModule],
  exports: [ArtistsComponent]
})
export class ArtistsModule {}
