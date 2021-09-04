import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AccountService } from "../../account/service/account.service";
import { CustomerService } from "../../customer/service/customer.service";
import { LeadService } from "../../lead/service/lead.service";
import { ProductService } from "../../product/service/product.service";
import { ApiEndpoint, IActionResponse } from "../../shared/model/shared.model";
import {
  IRepayment,
  IRepaymentParam,
} from "../repayment.model";

@Injectable()
export class RepaymentService {
  constructor(
    private http: HttpClient,
    private accountService: AccountService,
    private leadService: LeadService,
    private productService: ProductService,
    private customerService: CustomerService
  ) {}

  getRepayments(params?: IRepaymentParam): Observable<IRepayment[]> {
    let repayments$ = this.http.get<any>(ApiEndpoint.REPAYMENTS);
    if (params) {
      repayments$ = this.http.get<any>(ApiEndpoint.REPAYMENTS, {
        params: params as any,
      });
    }
    return repayments$.pipe(
      map((data) => {
        if (!data || data.length <= 0) return [];
        return data.map((ele) => {
          const repayment: IRepayment = { ...ele };
          repayment.account = this.accountService.getAccountByAccountNo(
            repayment.accountNo
          );
          repayment.lead = this.leadService.getLeadByLeadId(repayment.leadId);
          repayment.customer = this.customerService.getCustomerByCustomerId(
            repayment.customerId
          );
          repayment.product = this.productService.getIProductByProductId(
            repayment.productId
          );
          return repayment;
        });
      })
    );
  }

  getRepayment(params: IRepaymentParam): Observable<IRepayment> {
    return this.getRepayments(params).pipe(
      map((data) => {
        if (!data || data.length <= 0) return null;
        return data[0];
      })
    );
  }

  getRepaymentById(id: number): Observable<IRepayment> {
    return this.http.get<any>(ApiEndpoint.REPAYMENTS + "/" + id).pipe(
      map((data) => {
        if (!data) return null;
        const repayment: IRepayment = { ...data };
        repayment.account = this.accountService.getAccountByAccountNo(
          repayment.accountNo
        );
        repayment.lead = this.leadService.getLeadByLeadId(repayment.leadId);
        repayment.customer = this.customerService.getCustomerByCustomerId(
          repayment.customerId
        );
        repayment.product = this.productService.getIProductByProductId(
          repayment.productId
        );
        return repayment;
      })
    );
  }

  createRepayment(repayment: IRepayment): Observable<IActionResponse> {
    return this.http.post<IActionResponse>(ApiEndpoint.REPAYMENTS, repayment);
  }

  updateRepayment(
    repayment: IRepayment,
    id: number
  ): Observable<IActionResponse> {
    return this.http.put<IActionResponse>(
      ApiEndpoint.REPAYMENTS + "/" + id,
      repayment
    );
  }

  deleteRepayment(id: number): Observable<IActionResponse> {
    return this.http.delete<IActionResponse>(ApiEndpoint.REPAYMENTS + "/" + id);
  }
}
