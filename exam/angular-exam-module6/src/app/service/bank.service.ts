import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SearchResult} from '../model/search-result';
import {Customer} from '../model/customer';
import {Bank} from '../model/bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private API_JSON = 'http://localhost:3000/api/';
  private API_SPRING = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {
  }

  paginate(name: string, page: number, size: number): Observable<SearchResult<Customer>> {
    console.log(this.API_SPRING +
      'customer?customerName=' + name + '&?page=' + page + '&size=' + size);
    return this.httpClient.get<SearchResult<Customer>>(this.API_SPRING +
      'customer?customerName=' + name + '&page=' + (page - 1) + '&size=' + size);
  }
  deleteObject(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_SPRING + 'customer/' + id);
  }
  editObject(customer: Customer): Observable<void> {
    return this.httpClient.patch<void>(this.API_SPRING + 'customer/' + customer.id, customer);
  }
  findAllBank(): Observable<Bank[]> {
    return this.httpClient.get<Bank[]>(this.API_SPRING + 'passBook');
  }
  getById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_SPRING + 'customer/' + id);
  }
  // searchNameCustomer()
}
