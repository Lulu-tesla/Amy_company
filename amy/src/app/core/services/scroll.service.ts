/**
 * ARCHIVO: scroll.service.ts
 *
 * RESPONSABILIDAD:
 * Manejar el comportamiento de scroll y la inicialización de AOS (Animate On Scroll).
 * 
 * DEBE CONTENER:
 * - Lógica de inicialización de librerías dependientes del scroll.
 * - Métodos auxiliares para hacer scroll a elementos específicos.
 *
 * NO DEBE CONTENER:
 * - Modificaciones directas al DOM de componentes individuales.
 *
 * MODIFICAR CUANDO:
 * - Se cambie la librería de animaciones o se agreguen nuevos comportamientos globales de scroll.
 *
 * EJEMPLO DE USO:
 * scrollService.scrollToTop();
 */
import { Injectable } from '@angular/core';
// @ts-ignore
import * as AOS from 'aos';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  initAOS(): void {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-in-out'
    });
  }

  scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
    window.scrollTo({ top: 0, behavior });
  }

  scrollToElement(elementId: string, offset: number = 0): void {
    const element = document.getElementById(elementId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
