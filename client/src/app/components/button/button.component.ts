import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() title!: string;
  @Input() variant?: 'filled' | 'outline' = 'outline';
  @Input() disabled?: boolean = false;
  @Output() onClick = new EventEmitter();

  click() {
    this.onClick.emit();
  }

}
