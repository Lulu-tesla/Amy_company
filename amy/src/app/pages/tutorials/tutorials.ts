import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tutorials',
  standalone: true,
  imports: [],
  templateUrl: './tutorials.html',
  styleUrls: ['./tutorials.css']
})
export class Tutorials {
  tutorials = [
    { title: 'Cómo gestionar tu nueva tienda', description: 'Aprende a subir productos y gestionar pedidos.', duration: '10 min', type: 'Video' },
    { title: 'Optimización SEO básica', description: 'Mejora tu posicionamiento con estos sencillos pasos.', duration: '15 min', type: 'Guía' },
    { title: 'Manejo del panel de control', description: 'Descubre todas las funciones de tu dashboard.', duration: '8 min', type: 'Video' }
  ];
}
