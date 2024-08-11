import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class headerInterptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const updateRequest = request.clone({
      headers: request.headers.set('accept-language', 'ar')
    })

    return next.handle(updateRequest)
  }
}
