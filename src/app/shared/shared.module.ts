import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../components/button/button.component';

@NgModule({
  declarations: [
    // Components, Pipes and Directives go here
    ButtonComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [CommonModule, RouterModule, FormsModule, ButtonComponent],
})
export class SharedModule {}
