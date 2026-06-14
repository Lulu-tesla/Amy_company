/**
 * ARCHIVO: routes.constants.ts
 *
 * RESPONSABILIDAD:
 * Centralizar las rutas públicas de la aplicación para evitar "magic strings".
 * 
 * DEBE CONTENER:
 * - Constantes exportadas con los paths.
 *
 * NO DEBE CONTENER:
 * - Configuración del Router de Angular.
 */
export const APP_ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  PORTFOLIO: '/portfolio',
  PRICING: '/pricing',
  CONTACT: '/contact',
  FAQ: '/faq',
  NOT_FOUND: '/404'
};
