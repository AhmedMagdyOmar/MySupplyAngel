import { Injectable } from '@angular/core'
import { Enviroment } from '../../Enviroment/enviroment'
import { Observable, catchError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { ApiResponse } from '../../Interface/api-response'
import { SearchObj } from '../../Interface/search-obj'
import { handleError } from '../../Helper/handle-error'
import { RequiredAgent } from '../../Interface/agent.model'
import { is_Favorite, objectBaseApi } from '../../Interface/public.model'

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  apiUrl!: string
  constructor(private http: HttpClient) {
    this.apiUrl = Enviroment.BaseUrl
  }
  getRequiredAgent(searchObj: SearchObj, current_page: number): Observable<ApiResponse<RequiredAgent[]>> {
    return this.http
      .get<ApiResponse<RequiredAgent[]>>(`${this.apiUrl}/agents?type=required_agent_or_distrebutor`, {
        params: {
          ...searchObj,

          page: current_page
        }
      })
      .pipe(catchError(handleError))
  }
  getoptionalAgent(searchObj: SearchObj, current_page: number): Observable<ApiResponse<RequiredAgent[]>> {
    return this.http
      .get<ApiResponse<RequiredAgent[]>>(`${this.apiUrl}/agents?type=potential_agent_or_potential_distrebutor`, {
        params: {
          ...searchObj,
          page: current_page
        }
      })
      .pipe(catchError(handleError))
  }
  addAgenToFavorite(id: number): Observable<objectBaseApi<is_Favorite>> {
    return this.http.post<objectBaseApi<is_Favorite>>(`${this.apiUrl}/agent/${id}/favorite `, id).pipe(catchError(handleError))
  }
  addAgentOffer(offerForm: FormData, agentId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/agents/${agentId}/offers`, offerForm).pipe(catchError(handleError))
  }
  addAgentOrDistrebuter(form: FormData) {
    return this.http.post<any>(`${this.apiUrl}/agents`, form).pipe(catchError(handleError))
  }
  updateAgentOrDistrebuter(form: FormData, id: number) {
    return this.http.put<any>(`${this.apiUrl}/agents/${id}`, form).pipe(catchError(handleError))
  }
  updateOffer(form: FormData, id: number, offerId: number) {
    return this.http.put<any>(`${this.apiUrl}/agents/${id}/offers/${offerId}`, form).pipe(catchError(handleError))
  }
  getAgentDetails(id: number): Observable<objectBaseApi<RequiredAgent>> {
    return this.http.get<objectBaseApi<RequiredAgent>>(`${this.apiUrl}/agents/${id}`).pipe(catchError(handleError))
  }
  getMyagent(current_page: number): Observable<ApiResponse<RequiredAgent[]>> {
    return this.http
      .get<ApiResponse<RequiredAgent[]>>(`${this.apiUrl}/my-agent?filter=all `, {
        params: {
          page: current_page
        }
      })
      .pipe(catchError(handleError))
  }
  getMyagentWhereIaddOffer(current_page: number): Observable<objectBaseApi<RequiredAgent[]>> {
    return this.http
      .get<objectBaseApi<RequiredAgent[]>>(`${this.apiUrl}/agent/offers`, {
        params: {
          page: current_page
        }
      })
      .pipe(catchError(handleError))
  }
  getMyagentoffers(tenderId: number): Observable<objectBaseApi<RequiredAgent[]>> {
    return this.http.get<any>(`${this.apiUrl}/agents/${tenderId}/offers`, {}).pipe(catchError(handleError))
  }
  getFavouriteAgent(current_page: number): Observable<ApiResponse<RequiredAgent[]>> {
    return this.http
      .get<ApiResponse<RequiredAgent[]>>(`${this.apiUrl}/agent/favorites`, {
        params: {
          page: current_page
        }
      })
      .pipe(catchError(handleError))
  }
}
