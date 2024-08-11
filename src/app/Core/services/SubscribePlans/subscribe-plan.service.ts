import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Enviroment } from '../../Enviroment/enviroment'
import { ApiResponse } from '../../Interface/api-response'
import { Observable, catchError } from 'rxjs'
import { Package } from '../../Interface/subscribePlan'
import { handleError } from '../../Helper/handle-error'

@Injectable({
  providedIn: 'root'
})
export class SubscribePlanService {
  apiUrl!: string
  constructor(private http: HttpClient) {
    this.apiUrl = Enviroment.BaseUrl
  }

  getPlans(): Observable<ApiResponse<Package[]>> {
    return this.http.get<ApiResponse<Package[]>>(`${this.apiUrl}/packages`).pipe(catchError(handleError))
  }
}
