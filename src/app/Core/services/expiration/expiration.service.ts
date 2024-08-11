import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Enviroment } from '../../Enviroment/enviroment'
import { Observable, catchError } from 'rxjs'
import { ApiResponse } from '../../Interface/api-response'
import { expireItem } from '../../Interface/expire'
import { SearchObj } from '../../Interface/search-obj'
import { handleError } from '../../Helper/handle-error'
import { objectBaseApi } from '../../Interface/public.model'

@Injectable({
  providedIn: 'root'
})
export class ExpirationService {
  apiUrl!: string
  constructor(private http: HttpClient) {
    this.apiUrl = Enviroment.BaseUrl
  }

  getExpireList(searchObj: SearchObj, current_page: number): Observable<ApiResponse<expireItem[]>> {
    return this.http
      .get<ApiResponse<expireItem[]>>(`${this.apiUrl}/expirations`, {
        params: {
          ...searchObj,
          page: current_page
        }
      })
      .pipe(catchError(handleError))
  }

  addexpireToWishlist(id: number): Observable<ApiResponse<{ is_favorite: boolean }>> {
    return this.http.post<ApiResponse<{ is_favorite: boolean }>>(`${this.apiUrl}/expiration/${id}/favorite`, id).pipe(catchError(handleError))
  }
  getFavouriteExpire(current_page: number): Observable<ApiResponse<expireItem[]>> {
    return this.http
      .get<ApiResponse<expireItem[]>>(`${this.apiUrl}/expiration/favorites`, {
        params: {
          page: current_page
        }
      })
      .pipe(catchError(handleError))
  }
  addExpireItem(form: any): Observable<ApiResponse<expireItem[]>> {
    return this.http.post<ApiResponse<expireItem[]>>(`${this.apiUrl}/expirations`, form).pipe(catchError(handleError))
  }
  updateExpireItem(form: any, id: number): Observable<ApiResponse<expireItem[]>> {
    return this.http.put<ApiResponse<expireItem[]>>(`${this.apiUrl}/expirations/${id}`, form).pipe(catchError(handleError))
  }
  getExpireDetails(id: number): Observable<objectBaseApi<expireItem>> {
    return this.http.get<objectBaseApi<expireItem>>(`${this.apiUrl}/expirations/${id}`).pipe(catchError(handleError))
  }
  getMyexpire(current_page: number): Observable<ApiResponse<expireItem[]>> {
    return this.http
      .get<ApiResponse<expireItem[]>>(`${this.apiUrl}/my-expiration?filter=all `, {
        params: {
          page: current_page
        }
      })
      .pipe(catchError(handleError))
  }
  addexpireOffer(offerForm: FormData, expireId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/expirations/${expireId}/offers`, offerForm).pipe(catchError(handleError))
  }
}
