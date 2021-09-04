import { Observable } from "rxjs";
import { ICustomer } from "../customer/customer.model";
import { IProduct } from "../product/product.model";

export interface ILead {
    id: number;
    leadId?: string;
    customerId?: string;
    productId?: string;
    amount: number;
    monthlyInterest?: number;
    status: string;
    customer?: Observable<ICustomer>;
    product?: Observable<IProduct>;
}

export interface ILeadQueryParam {
    leadId?: string;
    status?: string;
    customerId?: string;
    productId?: string;
}