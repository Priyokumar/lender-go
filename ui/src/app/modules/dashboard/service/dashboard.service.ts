import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoint } from '../../shared/model/shared.model';
import { ISendoiVsInterestCollection } from '../dashboard.model';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) { }

  getRepaymentAgainstInvestment() {
    return this.http.get<ISendoiVsInterestCollection>(ApiEndpoint.DASHBOARD + "/principal-vs-interest");
  }

  getRepaymentAgainstInvestmentByCustomerId(customerId: string) {
    return this.http.get<ISendoiVsInterestCollection>(ApiEndpoint.DASHBOARD + "/principal-vs-interest/" + customerId);
  }
 
  getTotalInvestment() {
    return this.http.get<number>(ApiEndpoint.DASHBOARD + "/total-investment");
  }

  getCurrentAndLastMonthRepayments() {
    return this.http.get<any>(ApiEndpoint.DASHBOARD + "/current-last-month-repayments");
  }

  getResourceCounts() {
    return this.http.get<any>(ApiEndpoint.DASHBOARD + "/resources/count");
  }

  findMonthWiseRepayments() {
    return this.http.get<any>(ApiEndpoint.DASHBOARD + "/year-month/repayments");
  }

}
