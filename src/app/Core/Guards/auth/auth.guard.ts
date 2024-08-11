import { isPlatformBrowser } from '@angular/common'
import { PLATFORM_ID, inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'

export const authGuard: CanActivateFn = () => {
  const router = inject(Router)
  const platformId = inject(PLATFORM_ID)
  if (isPlatformBrowser(platformId) && typeof window !== 'undefined') {
    if (localStorage.getItem('userToken') != null) {
      return true
    } else {
      router.navigate(['/auth'])
      return false
    }
  }
  return false
}
