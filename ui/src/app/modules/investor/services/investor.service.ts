import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../../customer/customer.model';
import { ApiEndpoint, IActionResponse } from '../../shared/model/shared.model';
import { IInvestor } from '../investor.model';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  constructor(
    private http: HttpClient
  ) { }

  getAllInvestors(): Observable<IInvestor[]> {
    return this.http.get<any>(ApiEndpoint.INVESTORS);
  }

  getInvestors(params:IInvestor): Observable<IInvestor[]> {
    return this.http.get<any>(ApiEndpoint.INVESTORS, {params:params as any});
  }

  getInvestorById(id: number): Observable<IInvestor> {
    return this.http.get<any>(ApiEndpoint.INVESTORS + "/" + id);
  }

  createInvestor(investor: IInvestor): Observable<IActionResponse> {
    return this.http.post<IActionResponse>(ApiEndpoint.INVESTORS, investor);
  }

  updateInvestor(investor: IInvestor, id: number): Observable<IActionResponse> {
    return this.http.put<IActionResponse>(ApiEndpoint.INVESTORS + "/" + id, investor);
  }

  deleteInvestor(id: number): Observable<IActionResponse> {
    return this.http.delete<IActionResponse>(ApiEndpoint.INVESTORS + "/" + id);
  }
}
