/**
 * ARCHIVO: portfolio-preview.ts
 *
 * RESPONSABILIDAD:
 * Componente de vista previa del portafolio en la página de inicio.
 * Muestra 3-4 proyectos destacados con imagen placeholder, título,
 * categoría y enlace al portafolio completo.
 *
 * DEBE CONTENER:
 * - Lista de proyectos destacados con signal.
 * - Datos placeholder de cada proyecto (título, categoría, descripción).
 * - Enlace a la página completa del portafolio.
 *
 * NO DEBE CONTENER:
 * - Galería completa de proyectos.
 * - Llamadas HTTP para cargar proyectos.
 * - Lógica de filtrado o paginación.
 *
 * MODIFICAR CUANDO:
 * - Se actualicen los proyectos destacados.
 * - Se integren imágenes reales de los proyectos.
 * - Se cambie la estructura de la tarjeta de proyecto.
 *
 * EJEMPLO DE USO:
 * <app-portfolio-preview />
 */
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Project {
  title: string;
  category: string;
  description: string;
  imagePlaceholder: string;
}

@Component({
  selector: 'app-portfolio-preview',
  imports: [RouterLink],
  templateUrl: './portfolio-preview.html',
  styleUrl: './portfolio-preview.css'
})
export class PortfolioPreview {
  readonly projects = signal<Project[]>([
    {
      title: 'E-commerce ModaStyle',
      category: 'E-commerce · Desarrollo Web',
      description: 'Tienda online completa con sistema de pagos, inventario y panel de administración.',
      imagePlaceholder: '🛍️'
    },
    {
      title: 'App Finanzas Pro',
      category: 'UI/UX Design · Desarrollo Web',
      description: 'Dashboard financiero interactivo con visualización de datos en tiempo real.',
      imagePlaceholder: '📊'
    },
    {
      title: 'Branding GreenLife',
      category: 'Branding · Marketing Digital',
      description: 'Identidad visual completa para marca de productos sustentables.',
      imagePlaceholder: '🌿'
    },
    {
      title: 'Portal TechEdu',
      category: 'Desarrollo Web · SEO',
      description: 'Plataforma educativa con cursos online, foro y sistema de certificaciones.',
      imagePlaceholder: '🎓'
    }
  ]);
}
