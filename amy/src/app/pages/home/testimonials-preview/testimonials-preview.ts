import { Component } from '@angular/core';

@Component({
  selector: 'app-home-testimonials-preview',
  standalone: true,
  templateUrl: './testimonials-preview.html',
  styleUrls: ['./testimonials-preview.css']
})
export class HomeTestimonialsPreview {
  testimonials = [
    { quote: 'Nos ayudaron a lanzar rápido y con una web que realmente refleja nuestro servicio.', author: 'Ana, consultora' },
    { quote: 'El proceso fue directo y el resultado se ve profesional en móvil y desktop.', author: 'Luis, emprendimiento' }
  ];
}
