import { Observable } from "rxjs";
import { IAccount } from "../account/account.model";
import { ICustomer } from "../customer/customer.model";
import { ILead } from "../lead/lead.model";
import { IProduct } from "../product/product.model";

export interface IRepayment {
    id: number;
    repaymentId?: string;
    accountNo: string;
    leadId: string;
    customerId: string;
    productId: string;
    dateOfPayment: Date;
    amountPaid: number;
    dueAmount: number;
    status: string;
    account?: Observable<IAccount>;
    lead?: Observable<ILead>;
    customer?: Observable<ICustomer>;
    product?: Observable<IProduct>;
}

export interface IRepaymentDetails {
    id: number;
    repaymentId?: string;
    dateOfPayment: Date;
    amountPaid: number;
    dueAmount: number;
    status: string;
    accountNo: string;
    account: Observable<IAccount>;
    lead: Observable<ILead>;
    customer: Observable<ICustomer>;
    product: Observable<IProduct>;
}

export interface IRepaymentParam {
    accountNo: string;
}