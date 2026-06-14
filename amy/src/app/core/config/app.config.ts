/**
 * ARCHIVO: app.config.ts (del core)
 *
 * RESPONSABILIDAD:
 * Variables de entorno y configuración central de la aplicación.
 * 
 * DEBE CONTENER:
 * - Objeto environment con apiUrl, flags de production, versiones.
 *
 * NO DEBE CONTENER:
 * - Claves secretas de API que no deban exponerse en el cliente.
 *
 * MODIFICAR CUANDO:
 * - Se cambie de entorno (dev, prod, staging).
 * - Se necesiten nuevas variables de configuración global.
 *
 * EJEMPLO DE USO:
 * console.log(environment.apiUrl);
 */
export const environment = {
  production: false,
  apiUrl: 'https://api.amydevelopers.com/v1', // Placeholder API
  version: '1.0.0',
  defaultLanguage: 'es'
};
