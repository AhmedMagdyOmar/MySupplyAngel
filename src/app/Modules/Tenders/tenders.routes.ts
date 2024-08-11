import { Routes } from '@angular/router'
import { authGuard } from '../../Core/Guards/auth/auth.guard'

export const tenders_ROUTES: Routes = [
  { path: '', redirectTo: 'add-tenders', pathMatch: 'full' },
  {
    path: 'all-tenders',
    loadComponent: () => import('./all-tenders/all-tenders.component').then((r) => r.AllTendersComponent)
  },
  {
    path: 'add-tenders',
    canActivate: [authGuard],
    loadComponent: () => import('./add-tenders/add-tenders.component').then((r) => r.AddTendersComponent)
  },
  {
    path: ':id/tender-details',
    canActivate: [authGuard],
    loadComponent: () => import('./tender-details/tender-details.component').then((r) => r.TenderDetailsComponent)
  }
]
