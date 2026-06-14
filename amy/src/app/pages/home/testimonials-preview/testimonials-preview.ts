/**
 * ARCHIVO: testimonials-preview.ts
 *
 * RESPONSABILIDAD:
 * Componente de vista previa de testimonios de clientes.
 * Muestra 2-3 testimonios con nombre, rol, empresa y cita.
 *
 * DEBE CONTENER:
 * - Signal con la lista de testimonios.
 * - Datos de cada testimonio (nombre, rol, empresa, cita, avatar).
 *
 * NO DEBE CONTENER:
 * - Carousel o slider complejo.
 * - Llamadas HTTP para cargar testimonios.
 * - Lógica de negocio.
 *
 * MODIFICAR CUANDO:
 * - Se actualicen los testimonios de clientes.
 * - Se integren fotos reales de los clientes.
 * - Se agregue un carousel interactivo.
 *
 * EJEMPLO DE USO:
 * <app-testimonials-preview />
 */
import { Component, signal } from '@angular/core';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

@Component({
  selector: 'app-testimonials-preview',
  templateUrl: './testimonials-preview.html',
  styleUrl: './testimonials-preview.css'
})
export class TestimonialsPreview {
  readonly testimonials = signal<Testimonial[]>([
    {
      quote: 'Amy Developers transformó completamente nuestra presencia digital. El nuevo sitio web incrementó nuestras ventas en un 200% en solo tres meses.',
      name: 'María García',
      role: 'CEO',
      company: 'ModaStyle',
      avatar: '👩‍💼'
    },
    {
      quote: 'Su equipo entendió nuestra visión desde el primer día. El diseño UX de nuestra app superó todas las expectativas de nuestros usuarios.',
      name: 'Carlos Rodríguez',
      role: 'CTO',
      company: 'Finanzas Pro',
      avatar: '👨‍💻'
    },
    {
      quote: 'La estrategia de marketing digital nos posicionó como líderes en nuestro sector. Un equipo profesional y comprometido con los resultados.',
      name: 'Ana Martínez',
      role: 'Directora de Marketing',
      company: 'GreenLife',
      avatar: '👩‍🔬'
    }
  ]);
}
