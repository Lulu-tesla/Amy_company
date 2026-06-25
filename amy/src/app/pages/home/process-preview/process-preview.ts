import { Component } from '@angular/core';

@Component({
  selector: 'app-home-process-preview',
  standalone: true,
  templateUrl: './process-preview.html',
  styleUrls: ['./process-preview.css']
})
export class HomeProcessPreview {
  steps = [
    { title: 'Diagnóstico', text: 'Auditamos tu presencia, mensaje y puntos de mejora más urgentes.' },
    { title: 'Estrategia', text: 'Definimos un camino simple con prioridad en conversión y rendimiento.' },
    { title: 'Diseño y desarrollo', text: 'Creamos una experiencia usable, veloz y coherente con tu marca.' },
    { title: 'Lanzamiento', text: 'Revisamos SEO, formularios y seguimiento antes de publicar.' }
  ];
}
