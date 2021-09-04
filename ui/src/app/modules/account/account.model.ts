import { Observable } from "rxjs";
import { ICustomer } from "../customer/customer.model";
import { ILead } from "../lead/lead.model";
import { IProduct } from "../product/product.model";

export interface IAccount {
    id: number;
    accountNo: string;
    dateOfCreation:Date;
    repaymentDate: Date;
    closingBalance?: number;
    status: string;
    leadId: string;
    customerId: string;
    productId: string;
    lead?: Observable<ILead>;
    customer?: Observable<ICustomer>;
    product?: Observable<IProduct>;
}

export interface IAccountDetails {
    id: number;
    accountNo: string;
    dateOfCreation:Date;
    repaymentDate: Date;
    closingBalance: number;
    status: string;
    leadId: string;
    lead: Observable<ILead>;
    customer: Observable<ICustomer>;
    product: Observable<IProduct>;
}

export interface IEmi {
    id: number;
    emiAmount: number;
    dueDate: Date;
    status: String;
}

export interface IAccountQueryParams {
    accountNo?: string;
    status?: string;
    customerId?: string;
    leadId?: string;
}