
export interface KeyVal {
    key: string;
    val: any;
}

export const Genders: KeyVal[] = [
    { key: "Male", val: "Male" },
    { key: "Female", val: "Female" }
];

export class CustomerStatus {
    static ACTIVE = "Active";
    static EXPIRED = "Expired";
}

export const CustomerStatuses: KeyVal[] = [
    { key: CustomerStatus.ACTIVE, val: CustomerStatus.ACTIVE },
    { key: CustomerStatus.EXPIRED, val: CustomerStatus.EXPIRED }
]

export const Statuses: KeyVal[] = [
    { key: "Active", val: "Active" },
    { key: "Expired", val: "Expired" }
]

export const YesNo: KeyVal[] = [
    { key: "Yes", val: true },
    { key: "No", val: false }
]


export class InterestFrequency {
    static MONTHLY = "Monthly";
    static YEARLY = "Yearly";
}
export const InterestFrequencies: KeyVal[] = [
    { key: InterestFrequency.MONTHLY, val: InterestFrequency.MONTHLY },
    //{ key: InterestFrequency.YEARLY, val: InterestFrequency.YEARLY }
]

export class UserRole {
    static ADMIN = "Admin";
    static INVESTOR = "Investor";
}
export const UserRoles: KeyVal[] = [
    { key: UserRole.ADMIN, val: UserRole.ADMIN },
    { key: UserRole.INVESTOR, val: UserRole.INVESTOR }
]

export class AccountStatus {
    static CREATED = "Created";
    static DISBURSED = "Disbursed";
    static REJECTED = "Rejected";
    static CLOSED = "Closed";
}
export const AccountStatuses: KeyVal[] = [
    { key: AccountStatus.CREATED, val: AccountStatus.CREATED },
    { key: AccountStatus.DISBURSED, val: AccountStatus.DISBURSED },
    { key: AccountStatus.REJECTED, val: AccountStatus.REJECTED },
    { key: AccountStatus.CLOSED, val: AccountStatus.CLOSED }
]

export class LeadStatus {
    static NEW = "New"; 
    static QUALIFIED = "Qualified";
    static DIS_QUALIFIED = "Dis-qualified";
    static CLOSED = "Closed";
    static ACCOUNT_CREATED = "Account Created";
}
export const LeadStatuses: KeyVal[] = [
    { key: LeadStatus.NEW, val: LeadStatus.NEW },
    { key: LeadStatus.QUALIFIED, val: LeadStatus.QUALIFIED },
    { key: LeadStatus.DIS_QUALIFIED, val: LeadStatus.DIS_QUALIFIED },
    { key: LeadStatus.CLOSED, val: LeadStatus.CLOSED },
    { key: LeadStatus.ACCOUNT_CREATED, val: LeadStatus.ACCOUNT_CREATED },
]

export class ProductType {
    static LOAN = "Loan";
    static SENDOI = "Sendoi";
}
export const ProductTypes: KeyVal[] = [
    // { key: ProductType.LOAN, val: ProductType.LOAN },
    { key: ProductType.SENDOI, val: ProductType.SENDOI }
]

export class RepaymentStatus {
    static PAID = "Paid";
    static NOT_PAID = "Not Paid";
    static PARTIALLY_PAID = "Partially Paid";
}
export const RepaymentStatuses: KeyVal[] = [
    { key: RepaymentStatus.PAID, val: RepaymentStatus.PAID },
    { key: RepaymentStatus.NOT_PAID, val: RepaymentStatus.NOT_PAID },
    { key: RepaymentStatus.PARTIALLY_PAID, val: RepaymentStatus.PARTIALLY_PAID }
]