import { Component } from '@angular/core';

@Component({
  selector: 'app-home-stats-preview',
  standalone: true,
  templateUrl: './stats-preview.html',
  styleUrls: ['./stats-preview.css']
})
export class HomeStatsPreview {
  stats = [
    { title: 'CTA visibles', text: 'Llamadas a la acción claras y centradas en el siguiente paso.' },
    { title: 'Confianza inmediata', text: 'Mensajes claros, contacto real y señales profesionales.' },
    { title: 'Mobile first', text: 'Diseño fluido desde 320px para mejorar la experiencia móvil.' },
    { title: 'SEO técnico', text: 'Metas y estructura que ayudan a que tu sitio encuentre audiencias reales.' }
  ];
}
