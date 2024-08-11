import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Enviroment } from '../../Enviroment/enviroment'
import { Observable, catchError } from 'rxjs'
import { homeResponse } from '../../Interface/home'
import { SearchObj } from '../../Interface/search-obj'
import { handleError } from '../../Helper/handle-error'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl: string
  constructor(private http: HttpClient) {
    this.apiUrl = Enviroment.BaseUrl
  }
  getHomeList(searchObj?: SearchObj): Observable<homeResponse> {
    return this.http
      .get<homeResponse>(`${this.apiUrl}/home`, {
        params: {
          ...searchObj
        }
      })
      .pipe(catchError(handleError))
  }
}
