import { Injectable } from '@angular/core'
import { NgxSpinnerService } from 'ngx-spinner'

import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { Observable, finalize } from 'rxjs'

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private NgxSpinnerService: NgxSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.NgxSpinnerService.show()
    return next.handle(request).pipe(
      finalize(() => {
        this.NgxSpinnerService.hide()
      })
    )
  }
}
