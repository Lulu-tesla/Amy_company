/**
 * ARCHIVO: navigation.interface.ts
 *
 * RESPONSABILIDAD:
 * Definir la estructura de la navegación de la aplicación.
 * 
 * DEBE CONTENER:
 * - Interfaz para los items del menú (NavItem).
 *
 * NO DEBE CONTENER:
 * - Datos reales del menú (usar constantes para eso).
 */
export interface NavItem {
  label: string;
  path: string;
  icon?: string;
  children?: NavItem[];
}

export interface NavConfig {
  items: NavItem[];
  logo: string;
}
