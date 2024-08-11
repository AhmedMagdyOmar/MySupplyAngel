import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, catchError } from 'rxjs'
import { Enviroment } from '../../Enviroment/enviroment'
import { ApiResponse } from '../../Interface/api-response'
import { Person } from '../../Interface/profile'
import { handleError } from '../../Helper/handle-error'

@Injectable({
  providedIn: 'root'
})
export class profileService {
  apiUrl: string
  constructor(private http: HttpClient) {
    this.apiUrl = Enviroment.BaseUrl
  }
  getUserProfile(): Observable<ApiResponse<Person>> {
    return this.http.get<ApiResponse<Person>>(`${this.apiUrl}/profile`, {}).pipe(catchError(handleError))
  }
  updateUserProfile(form: any): Observable<ApiResponse<Person>> {
    return this.http.put<ApiResponse<Person>>(`${this.apiUrl}/profile/update`, form).pipe(catchError(handleError))
  }
  sendActiveCodeToChangePassword(form: any): Observable<ApiResponse<any>> {
    return this.http.patch<ApiResponse<any>>(`${this.apiUrl}/profile/edit-phone`, form).pipe(catchError(handleError))
  }
  ChangePhoneNumber(form: any): Observable<ApiResponse<any>> {
    return this.http.patch<ApiResponse<any>>(`${this.apiUrl}/profile/update-phone`, form).pipe(catchError(handleError))
  }
  Changepassword(form: any): Observable<ApiResponse<any>> {
    return this.http.patch<ApiResponse<any>>(`${this.apiUrl}/profile/update-password`, form).pipe(catchError(handleError))
  }
  updatEmail(form: any): Observable<ApiResponse<any>> {
    return this.http.patch<ApiResponse<any>>(`${this.apiUrl}/profile/update-email`, form).pipe(catchError(handleError))
  }
}
