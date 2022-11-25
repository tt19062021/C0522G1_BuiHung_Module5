import {Category} from './category';

export interface Product {
  id?: number;
  name?: string;
  startDay?: string;
  startSend?: string;
  period?: number;
  money?: number;
  interest?: number;
  promotion?: string;
  category?: Category;
}
