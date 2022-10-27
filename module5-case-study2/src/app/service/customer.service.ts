import { Injectable } from '@angular/core';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private API_URL = 'http://localhost:3000/customer';

  constructor(private httpClient: HttpClient) {
  }
  findAllCustomerSearch(nameSearch: string, addressSearch: string, phoneSearch: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL +
      '?customerName_like=' + nameSearch + '&customerAddress_like=' + addressSearch + '&customerPhone_like=' + phoneSearch);
  }

  findCustomerSearchPaging(numberRecord: number, curPage: number,
                           nameSearch: string, addressSearch: string, phoneSearch: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + '?_page=' + curPage + '&_limit=' + numberRecord +
      '&customerName_like=' + nameSearch + '&customerAddress_like=' + addressSearch + '&customerPhone_like=' + phoneSearch);
  }
  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + '/' + id);
  }

  saveCustomer(customer: Customer): Observable<void> {
    console.log('NHận rồi anh');
    return this.httpClient.post<void>(this.API_URL, customer);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }
  editCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.patch<Customer>(this.API_URL + '/' + id, customer);
  }
  findAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>('http://localhost:3000/customerType');
  }
  addCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API_URL , customer);
  }
}
