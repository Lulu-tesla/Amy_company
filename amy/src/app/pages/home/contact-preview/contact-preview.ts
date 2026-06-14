/**
 * ARCHIVO: contact-preview.ts
 *
 * RESPONSABILIDAD:
 * Componente CTA de contacto en la página de inicio.
 * Muestra un título motivacional y un botón para contactar.
 *
 * DEBE CONTENER:
 * - Título CTA 'Hablemos de tu proyecto'.
 * - Texto motivacional breve.
 * - Botón/enlace a la página de contacto.
 *
 * NO DEBE CONTENER:
 * - Formulario de contacto completo.
 * - Lógica de envío de mensajes.
 * - Componentes de otras secciones.
 *
 * MODIFICAR CUANDO:
 * - Se cambie el mensaje CTA.
 * - Se modifique el destino del botón.
 * - Se integre un formulario breve.
 *
 * EJEMPLO DE USO:
 * <app-contact-preview />
 */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-preview',
  imports: [RouterLink],
  templateUrl: './contact-preview.html',
  styleUrl: './contact-preview.css'
})
export class ContactPreview {}
