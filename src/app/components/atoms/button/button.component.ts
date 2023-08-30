import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() style: string = '';
  @Input() routerLink: string = '';
  @Input() buttonType: string = '';
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();
  handleClick() {
    this.clicked.emit(); // Emitir el evento cuando se hace clic en el botón
  }

}
