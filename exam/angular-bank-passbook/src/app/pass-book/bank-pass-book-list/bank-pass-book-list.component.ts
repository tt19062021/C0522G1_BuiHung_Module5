import { Component, OnInit } from '@angular/core';
import {BankPassBookService} from '../bank-pass-book.service';
import {CustomerPassBook} from '../customer-pass-book';
import {BehaviorSubject, Observable} from 'rxjs';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-bank-pass-book-list',
  templateUrl: './bank-pass-book-list.component.html',
  styleUrls: ['./bank-pass-book-list.component.css']
})
export class BankPassBookListComponent implements OnInit {
  page = 1;
  pageSize = 4;
  customerList$: Observable<CustomerPassBook[]>;
  total$: Observable<number>;
  birthdayFrom: NgbDateStruct;
  birthdayTo: NgbDateStruct;
  constructor(private bankPassBookService: BankPassBookService) {
  }

  ngOnInit(): void {
    this.paginate();
  }

  paginate() {
    this.bankPassBookService.paginate(this.page, this.pageSize).subscribe(data => {
      console.log(data);
      this.customerList$ = new BehaviorSubject<CustomerPassBook[]>(data.data);
      this.total$ = new BehaviorSubject<number>(data.pagination._totalRows);
    });
  }

  search() {
    console.log(this.birthdayFrom);
    console.log(this.birthdayTo);
  }

}
