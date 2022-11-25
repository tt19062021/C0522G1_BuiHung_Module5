import {Bank} from './bank';

export interface Customer {
  id?: number;
  name: string;
  startDay: string;
  sentDay: string;
  period: number;
  money: number;
  interestRate: number;
  endow: string;
  bankPassBook: Bank;
}
