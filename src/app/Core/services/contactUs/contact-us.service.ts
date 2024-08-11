import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Enviroment } from '../../Enviroment/enviroment'
import { Observable, catchError } from 'rxjs'
import { ApiResponse } from '../../Interface/api-response'
import { ContactInfo, ContentApiResponse } from '../../Interface/contact'
import { handleError } from '../../Helper/handle-error'
import { Notification } from '../../Interface/notification.model'

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  apiUrl!: string

  constructor(private http: HttpClient) {
    this.apiUrl = Enviroment.BaseUrl
  }

  getContact(): Observable<ApiResponse<ContactInfo>> {
    return this.http.get<ApiResponse<ContactInfo>>(`${this.apiUrl}/contacts`).pipe(catchError(handleError))
  }

  getAbout(): Observable<ApiResponse<{ about: string }>> {
    return this.http.get<ApiResponse<{ about: string }>>(`${this.apiUrl}/about`).pipe(catchError(handleError))
  }

  sendMessage(form: any): Observable<ContentApiResponse> {
    return this.http.post<any>(`${this.apiUrl}/contact-us`, form).pipe(catchError(handleError))
  }
  getNotifications(): Observable<ApiResponse<Notification[]>> {
    return this.http.get<ApiResponse<Notification[]>>(`${this.apiUrl}/notifications`).pipe(catchError(handleError))
  }
  getShowedNotifications(): Observable<ApiResponse<Notification[]>> {
    return this.http.get<ApiResponse<Notification[]>>(`${this.apiUrl}/notifications/bad80cfc-5766-4946-ab62-fce16048bbce`).pipe(catchError(handleError))
  }
}
