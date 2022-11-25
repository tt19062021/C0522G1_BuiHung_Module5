import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {BankService} from "../../service/bank.service";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  page = 1;
  pageSize = 4;
  studentList$ : Observable<Customer[]> | undefined;
  total$: Observable<number> | undefined;
  birthdayFrom: NgbDateStruct | undefined;
  birthdayTo: NgbDateStruct | undefined;


  constructor(private bankService: BankService) {
  }

  ngOnInit(): void {
    this.paginate();
  }

  paginate() {
    this.bankService.paginate(this.page, this.pageSize).subscribe(data => {
      console.log(data);
      this.studentList$ = new BehaviorSubject<Customer[]>(data.data);
      this.total$ = new BehaviorSubject<number>(data.pagination._totalRows);
    })
  }

  search() {
    console.log(this.birthdayFrom);
    console.log(this.birthdayTo);
  }

}
