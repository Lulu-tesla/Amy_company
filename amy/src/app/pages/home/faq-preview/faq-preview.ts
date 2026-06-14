/**
 * ARCHIVO: faq-preview.ts
 *
 * RESPONSABILIDAD:
 * Componente de vista previa de preguntas frecuentes en la página de inicio.
 * Muestra 3-4 FAQs más comunes con funcionalidad de accordion.
 *
 * DEBE CONTENER:
 * - Signal con la lista de preguntas frecuentes.
 * - Lógica de toggle para el accordion.
 * - Enlace a la página completa de FAQ.
 *
 * NO DEBE CONTENER:
 * - Lista completa de FAQs.
 * - Llamadas HTTP.
 * - Lógica de negocio compleja.
 *
 * MODIFICAR CUANDO:
 * - Se actualicen las preguntas frecuentes destacadas.
 * - Se cambie el comportamiento del accordion.
 * - Se agreguen animaciones.
 *
 * EJEMPLO DE USO:
 * <app-faq-preview />
 */
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq-preview',
  imports: [RouterLink],
  templateUrl: './faq-preview.html',
  styleUrl: './faq-preview.css'
})
export class FaqPreview {
  readonly faqs = signal<FaqItem[]>([
    {
      question: '¿Cuánto tiempo toma desarrollar un sitio web?',
      answer: 'El tiempo varía según la complejidad del proyecto. Un sitio web corporativo puede estar listo en 4-6 semanas, mientras que un e-commerce personalizado puede tomar de 8-12 semanas. Te damos un cronograma detallado al iniciar.',
      isOpen: false
    },
    {
      question: '¿Ofrecen mantenimiento después del lanzamiento?',
      answer: 'Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, corrección de errores, optimización de rendimiento y soporte técnico prioritario.',
      isOpen: false
    },
    {
      question: '¿Qué tecnologías utilizan?',
      answer: 'Trabajamos con las tecnologías más modernas del mercado: Angular, React, Node.js, Firebase, AWS, entre otras. Seleccionamos la mejor tecnología según las necesidades de cada proyecto.',
      isOpen: false
    },
    {
      question: '¿Cómo es el proceso de cotización?',
      answer: 'Agenda una llamada o envíanos un mensaje describiendo tu proyecto. Te respondemos en menos de 24 horas con una propuesta detallada que incluye alcance, cronograma y inversión.',
      isOpen: false
    }
  ]);

  toggleFaq(index: number): void {
    this.faqs.update(items =>
      items.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false
      }))
    );
  }
}
