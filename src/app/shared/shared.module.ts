import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // Components, Pipes and Directives go here
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [CommonModule, RouterModule, FormsModule],
})
export class SharedModule {}
