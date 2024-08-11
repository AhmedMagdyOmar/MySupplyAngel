import { isPlatformBrowser } from '@angular/common'
import { inject, PLATFORM_ID } from '@angular/core'
import { ResolveFn } from '@angular/router'

export const homeResolver: ResolveFn<boolean> = () => {
  const platformId = inject(PLATFORM_ID)
  if (isPlatformBrowser(platformId) && typeof window !== 'undefined') {
    if (localStorage.getItem('userToken') != null) {
      return true
    }
  }

  return false
}
