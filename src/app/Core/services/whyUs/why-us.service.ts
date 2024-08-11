import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Enviroment } from '../../Enviroment/enviroment'
import { Observable, catchError } from 'rxjs'
import { ApiResponse } from '../../Interface/api-response'
import { WhyUsData } from '../../Interface/whyUs'
import { handleError } from '../../Helper/handle-error'

@Injectable({
  providedIn: 'root'
})
export class WhyUsService {
  apiUrl!: string
  constructor(private http: HttpClient) {
    this.apiUrl = Enviroment.BaseUrl
  }

  whyUs(): Observable<ApiResponse<WhyUsData>> {
    return this.http.get<ApiResponse<WhyUsData>>(`${this.apiUrl}/why-us`).pipe(catchError(handleError))
  }
}
