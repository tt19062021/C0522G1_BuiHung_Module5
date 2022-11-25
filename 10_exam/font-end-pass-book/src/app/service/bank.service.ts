import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer";
import {SearchResult} from "../model/search-result";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private API_SPRING = 'http://localhost:3000/api/';
  constructor(private httpClient: HttpClient) { }
  paginate(page:number, limit: number): Observable<SearchResult<Customer>> {
    console.log(this.API_SPRING);
    return this.httpClient.get<SearchResult<Customer>>(this.API_SPRING + "customer" + "?_page=" + page + "&_limit="+limit);
  }
}
