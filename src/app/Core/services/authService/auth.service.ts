import { Inject, Injectable, PLATFORM_ID } from '@angular/core'
import { Enviroment } from '../../Enviroment/enviroment'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, catchError } from 'rxjs'
import { jwtDecode } from 'jwt-decode'
import { isPlatformBrowser } from '@angular/common'
import { handleError } from '../../Helper/handle-error'
import { objectBaseApi } from '../../Interface/public.model'
import { UserProfile } from '../../Interface/login.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl!: string
  UserSignIn = new BehaviorSubject(null)
  constructor(
    private http: HttpClient,
    // eslint-disable-next-line @typescript-eslint/ban-types
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.apiUrl = Enviroment.BaseUrl
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      if (localStorage.getItem('userToken') != null) {
        this.decode()
      }
    }
  }
  userRegister(userForm: any): Observable<objectBaseApi<null>> {
    return this.http.post<objectBaseApi<null>>(`${this.apiUrl}/register`, userForm).pipe(catchError(handleError))
  }
  activateCode(userForm: any): Observable<objectBaseApi<null>> {
    return this.http.post<objectBaseApi<null>>(`${this.apiUrl}/verify`, userForm).pipe(catchError(handleError))
  }
  ResendActivateCode(userForm: any): Observable<objectBaseApi<null>> {
    return this.http.post<objectBaseApi<null>>(`${this.apiUrl}/resendCode`, userForm).pipe(catchError(handleError))
  }
  userLogin(userForm: any): Observable<objectBaseApi<UserProfile>> {
    return this.http.post<objectBaseApi<UserProfile>>(`${this.apiUrl}/login`, userForm).pipe(catchError(handleError))
  }
  decode() {
    const encoded = JSON.stringify(localStorage.getItem('userToken'))
    const decoded: any = jwtDecode(encoded)

    this.UserSignIn.next(decoded)
  }
}
