import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Customer} from '../../model/customer';
import {BankService} from '../../service/bank.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  page = 1;
  pageSize = 2;
  customerList$: Observable<Customer[]>;
  total$: Observable<number>;
  idDelete: number;
  customerNameSearch = '';

  constructor(private bankService: BankService) {
  }

  ngOnInit(): void {
    this.paginate();
  }

  paginate() {
    this.bankService.paginate(this.customerNameSearch, this.page, this.pageSize).subscribe(data => {
      console.log(data);
      this.customerList$ = new BehaviorSubject<Customer[]>(data.content);
      this.total$ = new BehaviorSubject<number>(data.totalElements);
    });
  }

  sendId(customer: Customer) {
    console.log(customer);
    this.idDelete = customer.id;
  }

  delete() {
    this.bankService.deleteObject(this.idDelete).subscribe(() => {
      // @ts-ignore
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Đã Xóa Thành Công!',
        text: 'Saving Book: ' + this.idDelete,
        showConfirmButton: false,
        timer: 2500
      });
      this.ngOnInit();
      // confirm('Delete successfully!\n' + this.delName);
    });
  }
}
