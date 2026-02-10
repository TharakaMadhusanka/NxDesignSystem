// libs/ui-adapters-primeng/button-wrapper/src/lib/button-wrapper.component.ts
import { Component, EventEmitter, inject, Inject, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BUTTON_CLICKED, BUTTON_LABEL } from './button-tokens';
@Component({
  standalone: true,
  selector: 'primeng-p-button',
  imports: [CommonModule, ButtonModule],
  template: `<p-button [label]="label" (onClick)="hello()"></p-button>`,
})
export class ButtonWrapperComponent {
  // Inputs via DI token
  label = inject<string>(BUTTON_LABEL);
  clicked = inject(BUTTON_CLICKED);

  hello(): void {
    alert("hello");
  }
}
