import { InjectionToken } from '@angular/core';

export const BUTTON_LABEL = new InjectionToken<string>('BUTTON_LABEL');
export const BUTTON_CLICKED = new InjectionToken<() => void>('BUTTON_CLICKED');
