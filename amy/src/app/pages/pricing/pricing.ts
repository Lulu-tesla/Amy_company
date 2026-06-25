import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css']
})
export class Pricing {
  plans = [
    { label: 'Inicio', name: 'Presencia', text: 'Para validar o profesionalizar una marca rapidamente.', items: ['Landing o sitio simple', 'Copy base', 'Formulario y WhatsApp'], featured: false },
    { label: 'Recomendado', name: 'Crecimiento', text: 'Para empresas que necesitan una web comercial completa.', items: ['Hasta 6 secciones', 'SEO tecnico', 'Diseño responsive avanzado'], featured: true },
    { label: 'Escala', name: 'Commerce', text: 'Para negocios con catalogo, campañas o automatizaciones.', items: ['Ecommerce o flujos de venta', 'Medicion', 'Optimización continua'], featured: false }
  ];
}
