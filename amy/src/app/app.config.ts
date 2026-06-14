/**
 * ARCHIVO: app.config.ts
 *
 * RESPONSABILIDAD:
 * Configuración central de la aplicación Angular.
 * Provee todos los servicios globales necesarios para el funcionamiento del app.
 *
 * DEBE CONTENER:
 * - provideRouter con features (viewTransitions, scrolling).
 * - provideAnimations para @angular/animations.
 * - provideHttpClient con interceptors.
 * - Cualquier provider global de terceros.
 *
 * NO DEBE CONTENER:
 * - Lógica de componentes.
 * - Importaciones de componentes.
 * - Configuración de entorno (usar environment files).
 *
 * MODIFICAR CUANDO:
 * - Se agregue un nuevo provider global.
 * - Se configure un nuevo interceptor.
 * - Se cambie la estrategia de routing.
 *
 * EJEMPLO DE USO:
 * Se usa automáticamente en main.ts: bootstrapApplication(App, appConfig)
 */
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  withViewTransitions,
  withInMemoryScrolling
} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withViewTransitions(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })
    ),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([])
    )
  ]
};
