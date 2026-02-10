import { CommonModule } from '@angular/common';
import { InjectionToken, Type, Injector, Component, Input, Output, EventEmitter } from '@angular/core';
import { BUTTON_CLICKED, BUTTON_LABEL, ButtonWrapperComponent } from '@dso/ui-adapters-primeng';

export const BUTTON_COMPONENT: InjectionToken<Type<any>> =
  new InjectionToken<Type<any>>('BUTTON_COMPONENT');

export const COMPONENTS = {
  button: ButtonWrapperComponent
};

@Component({
  standalone: true,
  selector: 'lib-button',
  imports: [CommonModule],
  template: `<ng-container *ngComponentOutlet="buttonComp; injector: buttonInjector"></ng-container>`
})
export class ButtonHostComponent {
  buttonComp = COMPONENTS.button;

  @Input() label!: string;
  @Output() clicked = new EventEmitter<void>();

  // Injector for the dynamic component
  get buttonInjector(): Injector {
    return Injector.create({
      providers: [
        { provide: BUTTON_LABEL, useValue: this.label },
        { provide: BUTTON_CLICKED, useValue: () => this.clicked.emit() }
      ]
    });
  }
}
