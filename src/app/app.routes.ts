import { Routes } from '@angular/router'
import { BlankLayoutComponent } from './Layout/blank-layout/blank-layout.component'
import { authGuard } from './Core/Guards/auth/auth.guard'
import { loginpageGuard } from './Core/Guards/auth/loginpage.guard'
import { homeResolver } from './Core/Guards/Home/home.resolver'

export const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'auth',
        canActivate: [loginpageGuard],
        loadChildren: () => import('./Modules/Authentication/auth.routes').then((r) => r.Auth_ROUTES)
      },
      {
        path: 'tenders',
        loadChildren: () => import('./Modules/Tenders/tenders.routes').then((r) => r.tenders_ROUTES)
      },
      {
        path: 'favorite',
        canActivate: [authGuard],
        loadChildren: () => import('./Modules/Favorite/favorite.routes').then((r) => r.favourite_ROUTES)
      },
      {
        path: 'myDeals',
        canActivate: [authGuard],
        loadChildren: () => import('./Modules/MyDeals/myDeal.routes').then((r) => r.myDeals_ROUTES)
      },
      {
        path: 'agent',
        loadChildren: () => import('./Modules/Agent/agent.routes').then((r) => r.AGENT_ROUTES)
      },
      {
        path: 'expiration',
        loadChildren: () => import('./Modules/Expiration/expire.route').then((r) => r.EXPIRE_ROUTES)
      },
      {
        path: 'home',
        resolve: { server: homeResolver },
        loadComponent: () => import('./Component/home/home.component').then((r) => r.HomeComponent)
      },
      {
        path: 'whyUs',
        loadComponent: () => import('./Component/why-us/why-us.component').then((r) => r.WhyUsComponent)
      },
      {
        path: 'contactUs',
        loadComponent: () => import('./Component/contact-us/contact-us.component').then((r) => r.ContactUsComponent)
      },
      {
        path: 'pricePlans',
        loadComponent: () => import('./Component/price-plans/price-plans.component').then((r) => r.PricePlansComponent)
      },
      {
        path: 'categories',
        loadComponent: () => import('./Component/categories/categories.component').then((r) => r.CategoriesComponent)
      },
      {
        path: 'categories/:id/tender',
        loadComponent: () => import('./Component/list-category-tender/list-category-tender.component').then((r) => r.ListCategoryTenderComponent)
      },
      {
        path: 'acccount-info',
        canActivate: [authGuard],
        loadComponent: () => import('./Component/account-info/account-info.component').then((r) => r.AccountInfoComponent)
      },
      {
        path: 'notification',
        canActivate: [authGuard],
        loadComponent: () => import('./Component/notification/notification.component').then((r) => r.NotificationComponent)
      },
      {
        path: '**',
        loadComponent: () => import('./Component/not-found/not-found.component').then((r) => r.NotFoundComponent)
      }
    ]
  }
]
