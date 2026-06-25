import { Component } from '@angular/core';

interface WhyUsItem {
  title: string;
  summary: string;
  details: string;
}

@Component({
  selector: 'app-home-why-us',
  standalone: true,
  templateUrl: './why-us.html',
  styleUrls: ['./why-us.css']
})
export class HomeWhyUs {
  activeIndex = 0;

  readonly advantages: WhyUsItem[] = [
    {
      title: 'Estrategia clara',
      summary: 'Alineamos cada paso con tus objetivos comerciales.',
      details: 'No hacemos trabajos aislados: proponemos soluciones que conectan con tu mensaje, tu público y tus metas de conversión.'
    },
    {
      title: 'Entrega rápida',
      summary: 'Prototipos e iteraciones ágiles para avanzar sin interrupciones.',
      details: 'Priorizamos entregables claros y fechas reales para que el proyecto no quede detenido en la fase de planeación.'
    },
    {
      title: 'Técnica sólida',
      summary: 'Estructuras web limpias, accesibles y optimizadas desde la base.',
      details: 'Construimos con buenas prácticas de rendimiento, SEO técnico y experiencia móvil que realmente funcionan.'
    },
    {
      title: 'Diseño que vende',
      summary: 'Interfaces pensadas para que el usuario avance con confianza.',
      details: 'Cada pantalla tiene un objetivo: mostrar valor, reducir dudas y facilitar la acción que quieres del visitante.'
    },
    {
      title: 'Soporte cercano',
      summary: 'Atención directa y comunicación transparente en cada etapa.',
      details: 'Trabajamos con feedback puntual para evitar malentendidos y entregar resultados que se alinean con tu visión.'
    },
    {
      title: 'Resultados medibles',
      summary: 'No trabajamos por intuición: medimos lo que importa.',
      details: 'Definimos indicadores claros y te entregamos soluciones que pueden compararse con tus objetivos reales de negocio.'
    }
  ];

  toggle(index: number): void {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
}
