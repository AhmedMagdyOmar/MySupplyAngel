import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'
import { provideToastr } from 'ngx-toastr'
import { provideAnimations } from '@angular/platform-browser/animations'
import { NgxSpinnerModule } from 'ngx-spinner'
import { SpinnerInterceptor } from './Core/interceptor/spinner/spinner.interceptor'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { headerInterptor } from './Core/interceptor/Header/header.interceptor'
import { headerTokenInterceptor } from './Core/interceptor/Header/header-token.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withFetch(), withInterceptors([headerTokenInterceptor])),
    provideToastr(),
    importProvidersFrom(HttpClientModule, NgxSpinnerModule.forRoot(/*config*/)),
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: headerInterptor,
      multi: true
    }
  ]
}
