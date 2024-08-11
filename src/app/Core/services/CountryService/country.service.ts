import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Enviroment } from '../../Enviroment/enviroment'
import { Observable, catchError } from 'rxjs'
import { ApiResponse } from '../../Interface/api-response'
import { Country, cities } from '../../Interface/countries'
import { handleError } from '../../Helper/handle-error'

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  apiUrl: string
  constructor(private http: HttpClient) {
    this.apiUrl = Enviroment.BaseUrl
  }
  getCountries(): Observable<ApiResponse<Country[]>> {
    return this.http.get<ApiResponse<Country[]>>(`${this.apiUrl}/countries`).pipe(catchError(handleError))
  }
  getcities(): Observable<ApiResponse<cities[]>> {
    return this.http.get<ApiResponse<cities[]>>(`${this.apiUrl}/cities`).pipe(catchError(handleError))
  }
}
