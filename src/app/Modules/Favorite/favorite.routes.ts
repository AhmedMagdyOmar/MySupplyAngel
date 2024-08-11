import { Routes } from '@angular/router'
import { WhishListTenderComponent } from './whish-list-tender/whish-list-tender.component'
import { WishListExpirationComponent } from './wish-list-expiration/wish-list-expiration.component'
import { WishlistAgentComponent } from './wishlist-agent/wishlist-agent.component'

export const favourite_ROUTES: Routes = [
  { path: '', redirectTo: 'wishList', pathMatch: 'full' },
  {
    path: 'wishList',
    loadComponent: () => import('./favourite/favourite.component').then((r) => r.FavouriteComponent),
    children: [
      { path: '', redirectTo: 'wishListTender', pathMatch: 'full' },
      { path: 'wishListTender', component: WhishListTenderComponent },
      { path: 'WishListExpire', component: WishListExpirationComponent },
      { path: 'WishListagent', component: WishlistAgentComponent }
    ]
  }
]
