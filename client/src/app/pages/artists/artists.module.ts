import { NgModule } from '@angular/core';
import { ArtistsComponent } from './artists.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgOptimizedImage } from "@angular/common";

@NgModule({
  declarations: [ArtistsComponent],
  imports: [SharedModule, NgOptimizedImage],
  exports: [ArtistsComponent]
})
export class ArtistsModule {}
