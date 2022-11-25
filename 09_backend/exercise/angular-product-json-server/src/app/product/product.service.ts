import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product';
import {Category} from '../category/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) {
  }
  findAllProductSearch(nameSearch: string, priceSearch: number, categorySearch: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API + 'product?name_like=' + nameSearch +
    '&price_like=' + priceSearch + '&category.name_like=' + categorySearch);
  }
  findProductSearchPaging(numberRecord: number, curPage: number, nameSearch: string, priceSearch: number,
                          categorySearch: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API + 'product?_page=' + curPage + '&_limit=' + numberRecord +
      '&name_like=' + nameSearch + '&price_like=' + priceSearch + '&category.name_like=' + categorySearch);
  }
  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API);
  }

  findById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API + 'product/' + productId);
  }

  saveProduct(product: Product): Observable<void> {
    console.log('NHận rồi anh');
    return this.httpClient.post<void>(this.API, product);
  }
  editProduct(product: Product): Observable<void> {
    return this.httpClient.patch<void>(this.API + 'product/' + product.id, product);
  }
  deleteById(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.API + 'product/' + id);
  }
  findAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API + 'category');
  }
}
