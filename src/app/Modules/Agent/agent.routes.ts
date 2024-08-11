import { Routes } from '@angular/router'
import { AgentComponent } from './agent/agent.component'
import { authGuard } from '../../Core/Guards/auth/auth.guard'

export const AGENT_ROUTES: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },

  {
    path: '',
    component: AgentComponent,
    children: [
      { path: '', redirectTo: 'require-agent', pathMatch: 'full' },
      {
        path: 'require-agent',
        loadComponent: () => import('./require-agent/require-agent.component').then((r) => r.RequireAgentComponent)
      },
      {
        path: 'optional-agent',
        loadComponent: () => import('./optional-agent/optional-agent.component').then((r) => r.OptionalAgentComponent)
      }
    ]
  },
  {
    path: 'add-agent-or-distrebutor',
    canActivate: [authGuard],
    loadComponent: () => import('./add-agent/add-agent.component').then((r) => r.AddAgentComponent)
  },
  {
    path: 'search-agent-or-distrebutor',
    loadComponent: () => import('./add-agent/add-agent.component').then((r) => r.AddAgentComponent)
  },
  {
    path: ':id/agent-details',
    canActivate: [authGuard],
    loadComponent: () => import('./agent-details/agent-details.component').then((r) => r.AgentDetailsComponent)
  }
]
