import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// =============================================================================
// GSAP Plugin Registration
// =============================================================================

/**
 * Registers all GSAP plugins used in the AMY project.
 * Call this once from AppComponent constructor or APP_INITIALIZER.
 */
export function initGSAP(): void {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

// =============================================================================
// AMY Project — Animation Constants
// =============================================================================

/** Suave y natural — ideal para entradas de elementos */
export const EASE_SMOOTH   = 'power2.out';

/** Con rebote — para modales, tooltips, micro-interacciones */
export const EASE_BOUNCE   = 'back.out(1.7)';

/** Elástico — para efectos de atención, badges, CTAs */
export const EASE_ELASTIC  = 'elastic.out(1, 0.5)';

/** Duración rápida — hovers, micro-animaciones (0.3s) */
export const DURATION_FAST = 0.3;

/** Duración base — entradas de sección, cards (0.6s) */
export const DURATION_BASE = 0.6;

/** Duración lenta — hero, transiciones de página (1.2s) */
export const DURATION_SLOW = 1.2;

// Re-export gsap instance for convenience
export { gsap, ScrollTrigger, ScrollToPlugin };
