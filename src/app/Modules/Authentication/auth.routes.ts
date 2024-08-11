import { Routes } from '@angular/router'

export const Auth_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./component/login/login.component').then((r) => r.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./component/register/register.component').then((r) => r.RegisterComponent)
  }
]
