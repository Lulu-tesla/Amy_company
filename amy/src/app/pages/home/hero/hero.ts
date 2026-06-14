/**
 * ARCHIVO: hero.ts
 *
 * RESPONSABILIDAD:
 * Componente de la sección Hero de la página de inicio.
 * Muestra el título principal, subtítulo descriptivo, botones CTA
 * y un área placeholder para imagen/animación.
 *
 * DEBE CONTENER:
 * - Título principal de la agencia.
 * - Subtítulo descriptivo de los servicios.
 * - Botones CTA (Ver Portafolio, Contactar).
 * - Área visual para imagen o animación hero.
 *
 * NO DEBE CONTENER:
 * - Lógica de negocio o llamadas HTTP.
 * - Componentes de otras secciones.
 * - Navegación global (navbar/footer).
 *
 * MODIFICAR CUANDO:
 * - Se cambie el mensaje principal de la agencia.
 * - Se actualicen los botones CTA o sus destinos.
 * - Se integre una imagen o animación real.
 *
 * EJEMPLO DE USO:
 * <app-hero />
 */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {}
