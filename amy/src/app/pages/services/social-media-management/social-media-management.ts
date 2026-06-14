/**
 * ARCHIVO: social-media-management.ts
 *
 * RESPONSABILIDAD:
 * Componente de la página del servicio de Administración de Redes Sociales.
 *
 * DEBE CONTENER:
 * - Hero, características del servicio y CTA.
 *
 * NO DEBE CONTENER:
 * - Lógica de negocio o formularios.
 *
 * MODIFICAR CUANDO:
 * - Se actualicen las redes sociales o servicios ofrecidos.
 *
 * EJEMPLO DE USO:
 * Ruta: /services/social-media-management
 */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-social-media-management',
  imports: [RouterLink],
  templateUrl: './social-media-management.html',
  styleUrl: './social-media-management.css'
})
export class SocialMediaManagement {}
