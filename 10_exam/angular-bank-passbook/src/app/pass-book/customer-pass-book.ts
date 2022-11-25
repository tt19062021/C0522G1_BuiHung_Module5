import {BankPassBook} from './bank-pass-book';

export interface CustomerPassBook {
  id?: number;
  name?: string;
  startDay?: string;
  sentDay?: string;
  period?: number;
  money?: number;
  interestRate?: number;
  endow?: string;
  bankPassBook?: BankPassBook;
}
