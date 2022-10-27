import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerNameSearch = '';
  customerAddressSearch = '';
  customerPhoneSearch = '';
  formDelete: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  });

  customerListPaging: Customer[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;

  customerNameDelete: string;
  customerIdDelete: number;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.findAllCustomerSearch(this.customerNameSearch, this.customerAddressSearch, this.customerPhoneSearch)
      .subscribe(list => {
        this.totalPage = Math.ceil(list.length / this.numberRecord);
      }, error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      });

    this.customerService.findCustomerSearchPaging(this.numberRecord, this.curPage,
      this.customerNameSearch, this.customerAddressSearch, this.customerPhoneSearch).subscribe(pagingList => {
      this.customerListPaging = pagingList;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Hiển thị khách hàng ở trang ' + this.curPage);
    });
  }

  next(): void {
    this.curPage++;
    this.ngOnInit();
  }

  previos(): void {
    this.curPage--;
    this.ngOnInit();
  }

  getInfoCustomerDelete(customerName: string, customerId: number): void {
    this.formDelete.controls.id.setValue(customerId);
    this.formDelete.controls.name.setValue(customerName);
    // this.customerNameDelete = customerName;
    // this.customerIdDelete = customerId;
    // alert(this.customerIdDelete);
  }

  deleteCustomer(): void {
    this.customerIdDelete = +this.formDelete.value.id;
    this.customerService.deleteCustomer(this.customerIdDelete).subscribe(value => {
      // @ts-ignore
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Đã Xóa',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }
  searchByMore(): void {
    this.curPage = 1;
    this.ngOnInit();
  }
}
