import { Routes } from '@angular/router'

export const myDeals_ROUTES: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () => import('./my-deals/my-deals.component').then((r) => r.MyDealsComponent),
    children: [
      { path: '', redirectTo: 'my-tenders', pathMatch: 'full' },
      {
        path: 'my-tenders',
        loadComponent: () => import('./my-tenders/my-tenders.component').then((r) => r.MyTendersComponent)
      },
      {
        path: 'my-expire',
        loadComponent: () => import('./my-expir-list/my-expir-list.component').then((r) => r.MyExpirListComponent)
      },
      {
        path: 'my-agent',
        loadComponent: () => import('./my-agent-distributor/my-agent-distributor.component').then((r) => r.MyAgentDistributorComponent)
      }
    ]
  },
  {
    path: ':id/tender-control',
    loadComponent: () => import('../Tenders/tender-control/tender-control.component').then((r) => r.TenderControlComponent),
    children: [
      {
        path: 'tender-detail-form',
        loadComponent: () => import('../Tenders/tender-detail-form/tender-detail-form.component').then((r) => r.TenderDetailFormComponent)
      },
      {
        path: 'my-tender-offer',
        loadComponent: () => import('../Tenders/my-tender-offer/my-tender-offer.component').then((r) => r.MyTenderOfferComponent)
      }
    ]
  },
  {
    path: ':id/expire-control',
    loadComponent: () => import('../Expiration/expire-control/expire-control.component').then((r) => r.ExpireControlComponent),
    children: [
      {
        path: 'expire-detail-form',
        loadComponent: () => import('../Expiration/expire-details-form/expire-details-form.component').then((r) => r.TenderExpireFormComponent)
      }
    ]
  },
  {
    path: ':id/agent-control',
    loadComponent: () => import('../Agent/agent-control/agent-control.component').then((r) => r.AgentControlComponent),
    children: [
      {
        path: 'agent-detail-form',
        loadComponent: () => import('../Agent/agent-details-form/agent-details-form.component').then((r) => r.AgentDetailsFormComponent)
      },
      {
        path: 'my-agent-offer',
        loadComponent: () => import('../Agent/my-agent-offer/my-agent-offer.component').then((r) => r.MyAgentOfferComponent)
      }
    ]
  }
]
