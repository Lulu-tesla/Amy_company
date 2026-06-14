/**
 * ARCHIVO: services.routes.ts
 *
 * RESPONSABILIDAD:
 * Definir las rutas hijas para el módulo de Servicios.
 */
import { Routes } from '@angular/router';

export const SERVICES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./services').then(m => m.Services),
    title: 'Servicios — Amy Developers'
  }
];
