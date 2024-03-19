import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './profile.component';
import { ProfileService } from "../../services/profile.service";
import { NgOptimizedImage } from "@angular/common";

@NgModule({
  providers: [ProfileService],
  declarations: [ProfileComponent],
  imports: [SharedModule, NgOptimizedImage],
  exports: [ProfileComponent]
})
export class ProfileModule {}
