import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-google',
  templateUrl: './button-google.component.html',
  styleUrls: ['./button-google.component.scss']
})
export class ButtonGoogleComponent {
  @Input() style = '';
  @Input() routerLink = '';

}
