/**
 * ARCHIVO: services-preview.ts
 *
 * RESPONSABILIDAD:
 * Componente de vista previa de servicios en la página de inicio.
 * Muestra una cuadrícula de 6 servicios principales con íconos
 * y descripciones cortas, con enlace a la página de servicios.
 *
 * DEBE CONTENER:
 * - Lista de servicios principales con ícono y descripción.
 * - Signal con los datos de los servicios.
 * - Enlace a la página completa de servicios.
 *
 * NO DEBE CONTENER:
 * - Detalles extensos de cada servicio.
 * - Lógica de negocio compleja.
 * - Llamadas HTTP.
 *
 * MODIFICAR CUANDO:
 * - Se agreguen o eliminen servicios principales.
 * - Se actualicen las descripciones de los servicios.
 * - Se integren íconos reales (SVG/icon library).
 *
 * EJEMPLO DE USO:
 * <app-services-preview />
 */
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services-preview',
  imports: [RouterLink],
  templateUrl: './services-preview.html',
  styleUrl: './services-preview.css'
})
export class ServicesPreview {
  readonly services = signal<ServiceItem[]>([
    {
      icon: '💻',
      title: 'Desarrollo Web',
      description: 'Sitios web modernos, rápidos y optimizados con las últimas tecnologías.'
    },
    {
      icon: '🛒',
      title: 'E-commerce',
      description: 'Tiendas online que convierten visitantes en clientes fieles.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Interfaces intuitivas y experiencias de usuario memorables.'
    },
    {
      icon: '✨',
      title: 'Branding',
      description: 'Identidad visual que refleja la esencia de tu marca.'
    },
    {
      icon: '🔍',
      title: 'SEO',
      description: 'Posicionamiento orgánico para que te encuentren en Google.'
    },
    {
      icon: '📱',
      title: 'Marketing Digital',
      description: 'Estrategias digitales que generan resultados medibles.'
    }
  ]);
}
