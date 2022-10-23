import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  name: string;
  birthDay: string;
  gender: string;
  idCard: number;
  phone: number;
  email: string;
  address: string;
  customerType: CustomerType[];
}
