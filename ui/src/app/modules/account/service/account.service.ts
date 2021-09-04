import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CustomerService } from "../../customer/service/customer.service";
import { LeadService } from "../../lead/service/lead.service";
import { ProductService } from "../../product/service/product.service";
import { ApiEndpoint, IActionResponse } from "../../shared/model/shared.model";
import {
  IAccount,
  IAccountQueryParams,
} from "../account.model";

@Injectable()
export class AccountService {
  constructor(
    private http: HttpClient,
    private leadService: LeadService,
    private customerService: CustomerService,
    private productService: ProductService
  ) {}

  getAccounts(params?: IAccountQueryParams): Observable<IAccount[]> {
    let accounts$ = this.http.get<any>(ApiEndpoint.ACCOUNTS);
    if (params) {
      accounts$ = this.http.get<IAccount[]>(ApiEndpoint.ACCOUNTS, {
        params: params as any,
      });
    }
    return accounts$.pipe(
      map((data) => {
        if (!data || data.length <= 0) return [];
        return data.map((ele) => {
          const account: IAccount = { ...ele };
          account.lead = this.leadService.getLeadByLeadId(account.leadId);
          account.customer = this.customerService.getCustomerByCustomerId(
            account.customerId
          );
          account.product = this.productService.getIProductByProductId(
            account.productId
          );
          return account;
        });
      })
    );
  }

  getAccountById(id: number): Observable<IAccount> {
    return this.http.get<any>(ApiEndpoint.ACCOUNTS + "/" + id).pipe(
      map((data) => {
        if (!data) return null;
        const account: IAccount = { ...data };
        account.lead = this.leadService.getLeadByLeadId(account.leadId);
        account.customer = this.customerService.getCustomerByCustomerId(
          account.customerId
        );
        account.product = this.productService.getIProductByProductId(
          account.productId
        );
        return account;
      })
    );
  }

  getAccountByAccountNo(accountNo: string): Observable<IAccount> {
    return this.getAccounts({ accountNo: accountNo }).pipe(
      map((data) => {
        if (!data || data.length <= 0) return null;
        return data[0];
      })
    );
  }

  getAccount(params: IAccountQueryParams): Observable<IAccount> {
    return this.getAccounts(params).pipe(
      map((data) => {
        if (!data || data.length <= 0) return null;
        return data[0];
      })
    );
  }

  createAccount(account: IAccount): Observable<IActionResponse> {
    return this.http.post<IActionResponse>(ApiEndpoint.ACCOUNTS, account);
  }

  updateAccount(account: IAccount, id: number): Observable<IActionResponse> {
    return this.http.put<IActionResponse>(
      ApiEndpoint.ACCOUNTS + "/" + id,
      account
    );
  }

  deleteAccount(id: number): Observable<IActionResponse> {
    return this.http.delete<IActionResponse>(ApiEndpoint.ACCOUNTS + "/" + id);
  }
}
