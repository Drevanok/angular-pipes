import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LocaleService } from './services/locale';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);
registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    {
      provide: LOCALE_ID,
      //useValue: 'en'
      deps: [LocaleService],
      useFactory: (localService: LocaleService) => localService.getLocale,
    }
  ]
};
