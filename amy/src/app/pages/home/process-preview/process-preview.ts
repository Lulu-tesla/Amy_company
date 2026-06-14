/**
 * ARCHIVO: process-preview.ts
 *
 * RESPONSABILIDAD:
 * Componente de vista previa del proceso de trabajo de Amy Developers.
 * Muestra los 4 pasos principales: Descubrimiento, Diseño,
 * Desarrollo y Lanzamiento.
 *
 * DEBE CONTENER:
 * - Signal con los pasos del proceso.
 * - Datos de cada paso (número, título, descripción, ícono).
 *
 * NO DEBE CONTENER:
 * - Detalles extensos de cada fase.
 * - Lógica de negocio o llamadas HTTP.
 * - Componentes de otras secciones.
 *
 * MODIFICAR CUANDO:
 * - Se modifiquen las fases del proceso.
 * - Se agreguen o eliminen pasos.
 * - Se integren íconos o animaciones.
 *
 * EJEMPLO DE USO:
 * <app-process-preview />
 */
import { Component, signal } from '@angular/core';

interface ProcessStep {
  number: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-process-preview',
  templateUrl: './process-preview.html',
  styleUrl: './process-preview.css'
})
export class ProcessPreview {
  readonly steps = signal<ProcessStep[]>([
    {
      number: 1,
      icon: '🔍',
      title: 'Descubrimiento',
      description: 'Analizamos tus necesidades, objetivos y público objetivo para definir la estrategia ideal.'
    },
    {
      number: 2,
      icon: '🎨',
      title: 'Diseño',
      description: 'Creamos prototipos y diseños visuales que reflejan tu marca y optimizan la experiencia de usuario.'
    },
    {
      number: 3,
      icon: '⚙️',
      title: 'Desarrollo',
      description: 'Construimos tu solución con tecnologías modernas, código limpio y las mejores prácticas.'
    },
    {
      number: 4,
      icon: '🚀',
      title: 'Lanzamiento',
      description: 'Desplegamos tu proyecto, realizamos pruebas finales y te acompañamos en el crecimiento.'
    }
  ]);
}
