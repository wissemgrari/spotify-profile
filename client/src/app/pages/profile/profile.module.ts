import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './profile.component';
import { ProfileService } from "../../services/profile.service";
import { ProfileRoutingModule } from "./profile-routing.module";

@NgModule({
  providers: [ProfileService],
  declarations: [ProfileComponent],
  imports: [SharedModule, ProfileRoutingModule],
  exports: [ProfileComponent]
})
export class ProfileModule {}
