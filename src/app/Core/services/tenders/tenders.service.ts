import { Injectable } from '@angular/core'
import { Enviroment } from '../../Enviroment/enviroment'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, catchError } from 'rxjs'
import { TenderMassage } from '../../Interface/tender'
import { SearchObj } from '../../Interface/search-obj'
import { handleError } from '../../Helper/handle-error'

@Injectable({
  providedIn: 'root'
})
export class TendersService {
  apiUrl!: string
  myTender = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient) {
    this.apiUrl = Enviroment.BaseUrl
  }

  addTenders(tenderForm: FormData): Observable<TenderMassage> {
    return this.http.post<TenderMassage>(`${this.apiUrl}/tenders`, tenderForm).pipe(catchError(handleError))
  }
  updateTenders(tenderForm: FormData, tenderId: number): Observable<TenderMassage> {
    return this.http.put<TenderMassage>(`${this.apiUrl}/tenders/${tenderId}`, tenderForm).pipe(catchError(handleError))
  }
  updateOffer(tenderForm: FormData, tenderId: number, offerId: number): Observable<TenderMassage> {
    return this.http.put<TenderMassage>(`${this.apiUrl}/tenders/${tenderId}/offers/${offerId}`, tenderForm).pipe(catchError(handleError))
  }

  addTenderToWishlist(id: number) {
    return this.http.post<any>(`${this.apiUrl}/tenders/${id}/favorite`, id).pipe(catchError(handleError))
  }
  getFavouriteTenders(current_page: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/tender/favorites`, {
        params: {
          page: current_page
        }
      })
      .pipe(catchError(handleError))
  }

  getMytenders(current_page: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/my-tenders?filter=my_tenders `, {
        params: {
          page: current_page
        }
      })
      .pipe(catchError(handleError))
  }
  gettenderWhereIaddOffer(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tender/offers`, {}).pipe(catchError(handleError))
  }
  getMytendersoffers(tenderId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tenders/${tenderId}/offers`, {}).pipe(catchError(handleError))
  }
  getAllTenders(searchObj: SearchObj, current_page: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/tenders`, {
        params: {
          ...searchObj,
          page: current_page
        }
      })
      .pipe(catchError(handleError))
  }
  getTenderDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tenders/${id}`).pipe(catchError(handleError))
  }
  addTendeOffer(offerForm: FormData, TenderId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tenders/${TenderId}/offers`, offerForm).pipe(catchError(handleError))
  }
}
