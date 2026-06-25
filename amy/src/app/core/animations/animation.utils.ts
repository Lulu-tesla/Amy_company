import gsap from 'gsap';
import {
  DURATION_BASE,
  DURATION_FAST,
  EASE_SMOOTH,
  EASE_BOUNCE,
} from './gsap.config';

// =============================================================================
// AMY Project — Animation Utilities
// =============================================================================

/**
 * Animación de entrada desde abajo con fade-in.
 * Ideal para: títulos de sección, cards, bloques de contenido.
 *
 * @param element  - Selector CSS, HTMLElement o NodeList objetivo
 * @param delay    - Retraso en segundos antes de iniciar (default: 0)
 *
 * @example
 * fadeInUp('.hero-title', 0.2);
 * fadeInUp(this.cardRef.nativeElement, 0);
 */
export function fadeInUp(
  element: gsap.TweenTarget,
  delay: number = 0
): gsap.core.Tween {
  return gsap.from(element, {
    opacity: 0,
    y: 40,
    duration: DURATION_BASE,
    delay,
    ease: EASE_SMOOTH,
    clearProps: 'all',
  });
}

/**
 * Animación encadenada (stagger) para listas de elementos.
 * Ideal para: grids de cards, listas de features, iconos.
 *
 * @param elements - Selector CSS, NodeList o array de HTMLElement
 * @param stagger  - Segundos entre cada elemento (default: 0.1)
 * @param delay    - Retraso inicial antes del primer elemento (default: 0)
 *
 * @example
 * staggerIn('.feature-card');
 * staggerIn(this.items.nativeElement.children, 0.15, 0.3);
 */
export function staggerIn(
  elements: gsap.TweenTarget,
  stagger: number = 0.1,
  delay: number = 0
): gsap.core.Tween {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: DURATION_BASE,
    delay,
    ease: EASE_SMOOTH,
    stagger,
    clearProps: 'all',
  });
}

/**
 * Animación de escala con rebote — para elementos que aparecen
 * y necesitan llamar la atención (badges, CTAs, modales).
 *
 * @param element - Selector CSS o HTMLElement
 * @param delay   - Retraso en segundos (default: 0)
 */
export function scaleIn(
  element: gsap.TweenTarget,
  delay: number = 0
): gsap.core.Tween {
  return gsap.from(element, {
    opacity: 0,
    scale: 0.85,
    duration: DURATION_FAST,
    delay,
    ease: EASE_BOUNCE,
    clearProps: 'all',
  });
}

/**
 * Fade-in simple sin movimiento — para overlays, fondos.
 *
 * @param element  - Selector CSS o HTMLElement
 * @param duration - Duración en segundos (default: DURATION_BASE)
 * @param delay    - Retraso en segundos (default: 0)
 */
export function fadeIn(
  element: gsap.TweenTarget,
  duration: number = DURATION_BASE,
  delay: number = 0
): gsap.core.Tween {
  return gsap.from(element, {
    opacity: 0,
    duration,
    delay,
    ease: EASE_SMOOTH,
  });
}
