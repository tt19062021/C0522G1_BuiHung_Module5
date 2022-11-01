import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = 'http://localhost:3000/';
  private API_DEV = 'http://localhost:3000/api/';
  constructor(private httpClient: HttpClient) {
  }

  findAllSearch(nameSearch: string, typeSearch: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL + 'product?name_like=' + nameSearch +
      '&category.name_like=' + typeSearch);
  }

  findSearchPaging(numberRecord: number, curPage: number, nameSearch: string, typeSearch: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL + 'product?_page=' + curPage + '&_limit=' + numberRecord +
      '&name_like=' + nameSearch + '&category.name_like=' + typeSearch);
  }

  delete(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.API_URL + 'product/' + id);
  }

  findAllType(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API_URL + 'category');
  }

  add(product): Observable<Product> {
    return this.httpClient.post<Product>(this.API_URL + 'product', product);
  }

  getById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL + 'product/' + id);
  }
  getByCategoryId(id: number): Observable<Category> {
    return this.httpClient.get<Category>(this.API_URL + 'category/' + id);
  }

  editProduct(product: Product): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + 'product/' + product.id, product);
  }
}
