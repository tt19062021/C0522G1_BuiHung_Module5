import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_URL = 'http://localhost:3000/category';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API_URL);
  }

  findById(categoryId: number): Observable<Category> {
    return this.httpClient.get<Category>(this.API_URL + '/' + categoryId);
  }

  saveCategory(category: Category): Observable<void> {
    console.log('NHận rồi anh');
    return this.httpClient.post<void>(this.API_URL, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.httpClient.delete<Category>(this.API_URL + '/' + id);
  }
  editCategory(id: number, category: Category): Observable<Category> {
    return this.httpClient.patch<Category>(this.API_URL + '/' + id, category);
  }
}
