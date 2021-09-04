import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CustomerService } from "../../customer/service/customer.service";
import { ProductService } from "../../product/service/product.service";
import { ApiEndpoint, IActionResponse } from "../../shared/model/shared.model";
import { ILead, ILeadQueryParam } from "../lead.model";

@Injectable()
export class LeadService {
  constructor(
    private http: HttpClient,
    private customerService: CustomerService,
    private productService: ProductService
  ) {}

  getLeads(params?: ILeadQueryParam): Observable<ILead[]> {
    let leads$ = this.http.get<ILead[]>(ApiEndpoint.LEADS);
    if (params)
      leads$ = this.http.get<ILead[]>(ApiEndpoint.LEADS, {
        params: params as any,
      });
    return leads$.pipe(
      map((data) => {
        if (!data || data.length <= 0) return [];
        return data.map((ele) => {
          const lead: ILead = { ...ele };
          (lead.customer = this.customerService.getCustomerByCustomerId(
            ele.customerId
          )),
            (lead.product = this.productService.getIProductByProductId(
              ele.productId
            ));
          return lead;
        });
      })
    );
  }

  getLead(params: ILeadQueryParam): Observable<ILead> {
    return this.getLeads(params).pipe(
      map((data) => {
        if (!data) return null;
        return data[0];
      })
    );
  }

  getActiveLeads(customerId: string): Observable<ILead[]> {
    return this.http.get<any>(ApiEndpoint.LEADS + "/active/" + customerId).pipe(
      map((data) => {
        if (!data || data.length <= 0) return [];
        return data.map((ele) => {
          const lead: ILead = { ...ele };
          (lead.customer = this.customerService.getCustomerByCustomerId(
            ele.customerId
          )),
            (lead.product = this.productService.getIProductByProductId(
              ele.productId
            ));
          return lead;
        });
      })
    );
  }

  getQualifiedLeads(): Observable<ILead[]> {
    return this.http.get<any>(ApiEndpoint.LEADS + "/qualified/leads").pipe(
      map((data) => {
        if (!data || data.length <= 0) return [];
        return data.map((ele) => {
          const lead: ILead = { ...ele };
          (lead.customer = this.customerService.getCustomerByCustomerId(
            ele.customerId
          )),
            (lead.product = this.productService.getIProductByProductId(
              ele.productId
            ));
          return lead;
        });
      })
    );
  }

  getLeadById(id: number): Observable<ILead> {
    return this.http.get<any>(ApiEndpoint.LEADS + "/" + id).pipe(
      map((data) => {
        if (!data) return null;
        const lead: ILead = { ...data };
        (lead.customer = this.customerService.getCustomerByCustomerId(
          data.customerId
        )),
          (lead.product = this.productService.getIProductByProductId(
            data.productId
          ));
        return lead;
      })
    );
  }

  getLeadByLeadId(leadId: string): Observable<ILead> {
    return this.getLeads({ leadId: leadId }).pipe(
      map((data) => {
        if (data && data.length > 0) {
          return data[0];
        } else {
          return null;
        }
      })
    );
  }

  createLead(customer: ILead): Observable<IActionResponse> {
    return this.http.post<IActionResponse>(ApiEndpoint.LEADS, customer);
  }

  updateLead(customer: ILead, id: number): Observable<IActionResponse> {
    return this.http.put<IActionResponse>(
      ApiEndpoint.LEADS + "/" + id,
      customer
    );
  }

  deleteLead(id: number): Observable<IActionResponse> {
    return this.http.delete<IActionResponse>(ApiEndpoint.LEADS + "/" + id);
  }
}
