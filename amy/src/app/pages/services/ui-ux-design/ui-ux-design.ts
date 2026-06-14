/**
 * ARCHIVO: ui-ux-design.ts
 *
 * RESPONSABILIDAD:
 * Componente de la página del servicio de Diseño UI/UX.
 *
 * DEBE CONTENER:
 * - Hero, proceso de diseño, herramientas y CTA.
 *
 * NO DEBE CONTENER:
 * - Lógica de negocio o formularios.
 *
 * MODIFICAR CUANDO:
 * - Se actualice el proceso o herramientas de diseño.
 *
 * EJEMPLO DE USO:
 * Ruta: /services/ui-ux-design
 */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ui-ux-design',
  imports: [RouterLink],
  templateUrl: './ui-ux-design.html',
  styleUrl: './ui-ux-design.css'
})
export class UiUxDesign {}
