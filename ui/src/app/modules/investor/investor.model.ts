export interface IInvestor {
    id?: number;
    investorId?: string;
    name?: string;
    status?: string;
    gender?: string;
    dob?: Date;
    occupation?: string;
    address?: string;
    mobileNo?: string;
    email?: string
    panCard?: string
    aadhaarNo?:string
    createdAt?: Date
    lastUpdatedAt?: Date
}