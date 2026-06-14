/**
 * ARCHIVO: analytics.service.ts
 *
 * RESPONSABILIDAD:
 * Centralizar el rastreo de eventos y páginas vistas para herramientas de analítica.
 * 
 * DEBE CONTENER:
 * - Métodos abstractos para tracking (trackPageView, trackEvent).
 *
 * NO DEBE CONTENER:
 * - Implementación acoplada fuerte a un solo proveedor (Google Analytics, Mixpanel, etc.) sin abstracción.
 *
 * MODIFICAR CUANDO:
 * - Se integre una herramienta real de analítica.
 *
 * EJEMPLO DE USO:
 * analyticsService.trackEvent('Button', 'Click', 'Contact Us');
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  trackPageView(url: string): void {
    // TODO: Integrar Google Analytics, Plausible, etc.
    console.log(`[Analytics] Page View: ${url}`);
  }

  trackEvent(category: string, action: string, label?: string, value?: number): void {
    // TODO: Integrar tracking de eventos
    console.log(`[Analytics] Event: ${category} - ${action}`, { label, value });
  }
}
