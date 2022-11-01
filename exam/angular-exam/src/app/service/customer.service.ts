import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) {
  }

  findAllCustomerSearch(nameSearch: string, addressSearch: string, typeSearch: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + 'customers?customerName_like=' + nameSearch +
      '&customerAddress_like=' + addressSearch + '&customerType.customerTypeName_like=' + typeSearch);
  }

  findCustomerSearchPaging(numberRecord: number, curPage: number,
                           nameSearch: string, addressSearch: string, typeSearch: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + 'customers?_page=' + curPage + '&_limit=' + numberRecord +
      '&customerName_like=' + nameSearch + '&customerAddress_like=' + addressSearch + '&customerType.customerTypeName_like=' + typeSearch);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.API_URL + 'customers/' + id);
  }

  findAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.API_URL + 'customerTypes');
  }

  addCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API_URL + 'customers', customer);
  }

  getById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + 'customers/' + id);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.API_URL + 'customers/' + id, customer);
  }
}
