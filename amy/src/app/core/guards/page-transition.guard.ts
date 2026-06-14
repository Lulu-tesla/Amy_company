/**
 * ARCHIVO: page-transition.guard.ts
 *
 * RESPONSABILIDAD:
 * Ejecutar lógica global de transición entre páginas.
 * En este caso, hacer scroll to top al cambiar de ruta exitosamente.
 * 
 * DEBE CONTENER:
 * - Un functional guard (CanActivateFn).
 * - Inyección de servicios necesarios (Router, ScrollService).
 *
 * NO DEBE CONTENER:
 * - Lógica de autenticación (crear otro guard para eso).
 *
 * EJEMPLO DE USO:
 * canActivate: [pageTransitionGuard] en app.routes.ts
 */
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

export const pageTransitionGuard: CanActivateFn = (route, state) => {
  const scrollService = inject(ScrollService);
  // Almacenar lógica o preparar transición si es necesario
  return true;
};
