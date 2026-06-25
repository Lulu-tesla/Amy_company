import { Routes } from '@angular/router';

export const SERVICES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./services').then(m => m.Services),
    title: 'Servicios | AMY COMPANY'
  },
  {
    path: 'web-development',
    redirectTo: '/services',
    pathMatch: 'full'
  },
  {
    path: 'ecommerce',
    redirectTo: '/services',
    pathMatch: 'full'
  },
  {
    path: 'ui-ux-design',
    redirectTo: '/services',
    pathMatch: 'full'
  },
  {
    path: 'digital-marketing',
    redirectTo: '/services',
    pathMatch: 'full'
  },
  {
    path: 'branding',
    redirectTo: '/services',
    pathMatch: 'full'
  },
  {
    path: 'social-media-management',
    redirectTo: '/services',
    pathMatch: 'full'
  }
];
