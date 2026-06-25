import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-faq-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './faq-preview.html',
  styleUrls: ['./faq-preview.css']
})
export class HomeFaqPreview {
  faqs = [
    { question: '¿Cuánto tarda un sitio web?', answer: 'Depende del alcance, pero las landing pages pueden estar listas rápido y los proyectos más grandes se planifican por fases.' },
    { question: '¿Puedo sumar ecommerce después?', answer: 'Sí, muchas webs se diseñan con una base escalable para agregar tienda o automatizaciones después.' }
  ];
}
