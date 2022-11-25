import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerPassBook} from './customer-pass-book';
import {BankPassBook} from './bank-pass-book';
import {SearchResult} from './search-result';


@Injectable({
  providedIn: 'root'
})
export class BankPassBookService {
  private API_URL = 'http://localhost:3000/';
  private API_SPRING = 'http://localhost:3000/api/';
  constructor(private httpClient: HttpClient) {
  }

  findAllSearch(nameCustomerSearch: string, bankSearch: string): Observable<CustomerPassBook[]> {
    return this.httpClient.get<CustomerPassBook[]>(this.API_SPRING + 'customer?_name=' + nameCustomerSearch +
      '&bankPassBook.name_like=' + bankSearch);
  }

  findSearchPaging(numberRecord: number, curPage: number, nameCustomerSearch: string, bankSearch: string): Observable<CustomerPassBook[]> {
    return this.httpClient.get<CustomerPassBook[]>(this.API_SPRING + 'customer?_page=' + curPage + '&_limit=' + numberRecord +
      '&name_like=' + nameCustomerSearch + '&bankPassBook.name_like=' + bankSearch);
  }

  delete(id: number): Observable<CustomerPassBook> {
    return this.httpClient.delete<CustomerPassBook>(this.API_SPRING + 'customer/' + id);
  }
  findAllCustomer(): Observable<CustomerPassBook[]> {
    return this.httpClient.get<CustomerPassBook[]>(this.API_SPRING + 'customer');
  }

  findAllBank(): Observable<BankPassBook[]> {
    return this.httpClient.get<BankPassBook[]>(this.API_SPRING + 'bankPassBook');
  }

  add(customerPassBook): Observable<CustomerPassBook> {
    return this.httpClient.post<CustomerPassBook>(this.API_SPRING + 'customer', customerPassBook);
  }

  getById(id: number): Observable<CustomerPassBook> {
    return this.httpClient.get<CustomerPassBook>(this.API_SPRING + 'customer/' + id);
  }
  editCustomer(customerPassBook: CustomerPassBook): Observable<void> {
    return this.httpClient.patch<void>(this.API_SPRING + 'customer/' + customerPassBook.id, customerPassBook);
  }
  paginate(page: number, limit: number): Observable<SearchResult<CustomerPassBook>> {
    return this.httpClient.get<SearchResult<CustomerPassBook>>(this.API_SPRING + 'customer' + '?_page=' + page + '&_limit=' + limit);
  }
}
