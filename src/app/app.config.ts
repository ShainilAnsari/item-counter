import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { itemCounterReducer } from './counter-state/item-counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({ counter: itemCounterReducer })]
};
