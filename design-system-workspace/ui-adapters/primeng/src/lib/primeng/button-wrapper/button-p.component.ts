// libs/ui-adapters-primeng/button-wrapper/src/lib/button-wrapper.component.ts
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'primeng-p-button',
  imports: [CommonModule, ButtonModule],
  template: `<p-button [label]="label" (onClick)="onclick.emit()"></p-button>`,
})
export class ButtonPComponent {
  // Inputs via DI token
  @Input() label!: string;
  @Output() onclick = new EventEmitter<void>();

}
