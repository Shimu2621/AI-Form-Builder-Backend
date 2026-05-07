export type IRole = 'user' | 'admin';

export type IPlanType = 'normal' | 'premium';

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: number;
  photo?: string;
  planType?: IPlanType;
  role?: IRole;
  formLimit?: number;
}
