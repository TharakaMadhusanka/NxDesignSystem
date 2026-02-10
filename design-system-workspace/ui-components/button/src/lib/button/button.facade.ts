// libs/ui-components/src/lib/button-facade.ts
import { InjectionToken, Type } from '@angular/core';
import { ButtonWrapperComponent } from '@dso/ui-adapters-primeng';

export const BUTTON_COMPONENT: InjectionToken<Type<any>> = new InjectionToken<
  Type<any>
>('BUTTON_COMPONENT');

export const COMPONENTS = {
  button: ButtonWrapperComponent,
};
