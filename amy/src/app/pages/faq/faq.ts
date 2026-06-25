import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faq',
  imports: [RouterLink],
  template: `
    <section class="hero-section">
      <div class="container">
        <span class="section-kicker">FAQ</span>
        <h1>Preguntas frecuentes antes de empezar.</h1>
        <p class="lead">Respuestas rapidas para tomar una decision con menos incertidumbre.</p>
      </div>
    </section>
    <section class="section soft-band">
      <div class="container faq-list">
        @for (item of faqs; track item.question) {
          <details class="card faq-item">
            <summary>{{ item.question }}</summary>
            <p>{{ item.answer }}</p>
          </details>
        }
      </div>
    </section>
    <section class="section">
      <div class="container section-head center">
        <h2>¿Tienes una pregunta especifica?</h2>
        <div class="button-row" style="justify-content:center">
          <a routerLink="/contact" class="btn primary">Escribir a AMY COMPANY</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .faq-list { display: grid; gap: .8rem; max-width: 880px; }
    .faq-item { padding: 1rem 1.15rem; }
    summary { cursor: pointer; font-weight: 900; }
  `
})
export class Faq {
  faqs = [
    { question: '¿Trabajan sitios responsive?', answer: 'Si. La experiencia se revisa desde 320px hasta escritorio amplio para evitar cortes, desbordes y botones incomodos.' },
    { question: '¿Incluyen SEO?', answer: 'Incluimos SEO tecnico base: jerarquia, meta tags, sitemap, robots, textos claros y estructura preparada para crecer.' },
    { question: '¿Puedo pedir solo una auditoria?', answer: 'Si. Podemos revisar tu sitio actual y entregar prioridades de mejora en UX, CRO, rendimiento y accesibilidad.' },
    { question: '¿Como se inicia un proyecto?', answer: 'Con un diagnostico breve para entender objetivo, publico, contenidos, presupuesto y plazo.' }
  ];
}
