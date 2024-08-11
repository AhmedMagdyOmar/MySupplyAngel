import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, catchError } from 'rxjs'
import { Enviroment } from '../../Enviroment/enviroment'
import { CategoryList } from '../../Interface/category'
import { ApiResponse } from '../../Interface/api-response'
import { handleError } from '../../Helper/handle-error'
import { Tender } from '../../Interface/home'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl: string
  categorySearch: any

  constructor(private http: HttpClient) {
    this.apiUrl = Enviroment.BaseUrl
  }
  getCategoryList(searchObj?: any): Observable<ApiResponse<CategoryList[]>> {
    return this.http
      .get<ApiResponse<CategoryList[]>>(`${this.apiUrl}/categories`, {
        params: {
          ...searchObj
        }
      })
      .pipe(catchError(handleError))
  }
  getCategoryTender(searchObj: any, current_page: number): Observable<ApiResponse<Tender[]>> {
    return this.http
      .get<ApiResponse<Tender[]>>(`${this.apiUrl}/tenders`, {
        params: {
          ...searchObj,
          page: current_page
        }
      })
      .pipe(catchError(handleError))
  }
}
