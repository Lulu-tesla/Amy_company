import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-portfolio-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio-preview.html',
  styleUrls: ['./portfolio-preview.css']
})
export class HomePortfolioPreview {
  projects = [
    { title: 'Landing de servicios', text: 'Comunica valor claro y convierte con un formulario simple.' },
    { title: 'Ecommerce comercial', text: 'Catálogo optimizado para venta móvil y tráfico pagado.' },
    { title: 'Marca digital', text: 'Identidad visual consistente para sitio y redes sociales.' }
  ];
}
