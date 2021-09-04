export interface IRole {
  id: number;
  name: string;
  desc: string;
}

export interface IUser {
  id?: number;
  name: string;
  email: string;
  mobileNo: string;
  roles?: string;
  gender: string;
  status: string;
  password?: string;
  needChangePassword?: boolean;
}
