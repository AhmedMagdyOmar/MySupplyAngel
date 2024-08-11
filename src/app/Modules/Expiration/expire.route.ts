import { Routes } from '@angular/router'

import { authGuard } from '../../Core/Guards/auth/auth.guard'

export const EXPIRE_ROUTES: Routes = [
  { path: '', redirectTo: 'expire', pathMatch: 'full' },
  {
    path: 'expire',
    loadComponent: () => import('./expire-list/expire-list.component').then((r) => r.ExpireListComponent)
  },
  {
    path: 'add-expire-item',
    canActivate: [authGuard],
    loadComponent: () => import('./add-expire-item/add-expire-item.component').then((r) => r.AddExpireItemComponent)
  },
  {
    path: 'add-liquidation-item',
    canActivate: [authGuard],
    loadComponent: () => import('./add-expire-item/add-expire-item.component').then((r) => r.AddExpireItemComponent)
  },
  {
    path: ':id/details',
    canActivate: [authGuard],
    loadComponent: () => import('./expire-details/expire-details.component').then((r) => r.ExpireDetailsComponent)
  }
]
