import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = 'http://localhost:3000/product';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL);
  }

  findById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL + '/' + productId);
  }

  saveProduct(product: Product): Observable<void> {
    console.log('NHận rồi anh');
    return this.httpClient.post<void>(this.API_URL, product);
  }
  editProduct(product: Product): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + product.id, product);
  }
  deleteById(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.API_URL + '/' + id);
  }
}
