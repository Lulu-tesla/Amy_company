/**
 * ARCHIVO: web-development.ts
 *
 * RESPONSABILIDAD:
 * Componente de la página del servicio de Desarrollo Web.
 * Presenta información detallada sobre desarrollo de aplicaciones web.
 *
 * DEBE CONTENER:
 * - Sección hero con título y descripción del servicio.
 * - Lista de características y tecnologías.
 * - CTA hacia la página de contacto.
 *
 * NO DEBE CONTENER:
 * - Lógica de negocio o formularios.
 * - Información de otros servicios.
 *
 * MODIFICAR CUANDO:
 * - Se actualicen las tecnologías o características del servicio.
 * - Se cambie el diseño de la página de servicio.
 *
 * EJEMPLO DE USO:
 * Se carga via lazy loading desde services.routes.ts
 * Ruta: /services/web-development
 */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-web-development',
  imports: [RouterLink],
  templateUrl: './web-development.html',
  styleUrl: './web-development.css'
})
export class WebDevelopment {}
