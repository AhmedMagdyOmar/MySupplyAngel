import { isPlatformBrowser } from '@angular/common'
import { HttpInterceptorFn } from '@angular/common/http'
import { PLATFORM_ID, inject } from '@angular/core'

export const headerTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID)
  if (isPlatformBrowser(platformId) && typeof window !== 'undefined') {
    const token = localStorage.getItem('userToken')
    window.scrollTo({ top: 0, behavior: 'smooth' })

    const updateRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    })
    if (req.url.includes('register') || req.url.includes('verify') || req.url.includes('resendCode') || req.url.includes('login')) {
      return next(req)
    } else {
      return next(updateRequest)
    }
  }

  return next(req)
}
