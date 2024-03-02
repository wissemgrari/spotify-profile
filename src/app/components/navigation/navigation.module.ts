import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationRoutingModule } from './navigation-routing.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    SharedModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
