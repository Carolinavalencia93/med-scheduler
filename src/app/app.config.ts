import { provideAppInitializer, inject, ApplicationConfig } from '@angular/core';
import { AuthService } from './features/auth/services/AuthService';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    provideAppInitializer(() => {
      inject(AuthService).restoreSession();
    }),
  ],
};
