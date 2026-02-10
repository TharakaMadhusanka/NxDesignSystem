import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { BUTTON_COMPONENT, ButtonHostComponent } from '@dso/ui-components/button';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true, // required for inject()
  imports: [NxWelcome, RouterModule, CommonModule, ButtonHostComponent],
  selector: 'dso-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'], // correct property
})
export class App {
  protected title = 'design-system';

  onClick() {
    console.log('sdsf');
    alert('Button clicked!');
  }
}
