/**
 * ARCHIVO: stats-preview.ts
 *
 * RESPONSABILIDAD:
 * Componente de estadísticas de Amy Developers.
 * Muestra contadores numéricos: proyectos, clientes, años y satisfacción.
 *
 * DEBE CONTENER:
 * - Signal con la lista de estadísticas.
 * - Datos de cada estadística (valor, etiqueta, prefijo/sufijo).
 *
 * NO DEBE CONTENER:
 * - Animaciones de conteo (agregar después).
 * - Llamadas HTTP para datos dinámicos.
 * - Lógica de negocio.
 *
 * MODIFICAR CUANDO:
 * - Se actualicen los números de la agencia.
 * - Se integren animaciones de conteo.
 * - Se agreguen nuevas métricas.
 *
 * EJEMPLO DE USO:
 * <app-stats-preview />
 */
import { Component, signal } from '@angular/core';

interface Stat {
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-stats-preview',
  templateUrl: './stats-preview.html',
  styleUrl: './stats-preview.css'
})
export class StatsPreview {
  readonly stats = signal<Stat[]>([
    {
      value: '+150',
      label: 'Proyectos',
      icon: '📂'
    },
    {
      value: '+50',
      label: 'Clientes',
      icon: '🤝'
    },
    {
      value: '+5',
      label: 'Años',
      icon: '📅'
    },
    {
      value: '100%',
      label: 'Satisfacción',
      icon: '⭐'
    }
  ]);
}
