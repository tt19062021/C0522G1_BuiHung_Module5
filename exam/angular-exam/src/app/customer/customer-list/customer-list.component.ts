import { Component, OnInit } from '@angular/core';
import {CustomerType} from '../../model/customer-type';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerNameSearch = '';
  customerAddressSearch = '';
  customerTypeSearch: CustomerType = {id: 6, customerTypeName: ''};
  customerTypeList: CustomerType[];

  customerListPaging: Customer[];
  numberRecord = 10;
  curPage = 1;
  totalPage: number;

  customerNameDelete: string;
  customerIdDelete: number;


  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.findAllCustomerType().subscribe(value => {
      this.customerTypeList = value;
    });

    this.customerService.findAllCustomerSearch(this.customerNameSearch, this.customerAddressSearch,
      this.customerTypeSearch.customerTypeName)
      .subscribe(list => {
        this.totalPage = Math.ceil(list.length / this.numberRecord);
      }, error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      });

    this.customerService.findCustomerSearchPaging(this.numberRecord, this.curPage,
      this.customerNameSearch, this.customerAddressSearch, this.customerTypeSearch.customerTypeName).subscribe(pagingList => {
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
    this.customerNameDelete = customerName;
    this.customerIdDelete = customerId;
  }

  deleteCustomer(): void {
    this.customerService.deleteCustomer(this.customerIdDelete).subscribe(() => {
      // @ts-ignore
      Swal.fire({
        icon: 'success',
        title: 'Xóa thành công!',
        text: 'Khách hàng: ' + this.customerNameDelete,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });

      this.curPage = 1;
      this.ngOnInit();
    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa khách hàng thành công!');
    });
  }

  searchByMore(): void {
    this.curPage = 1;
    this.ngOnInit();
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
  resetSearchInput(): void {
    this.customerNameSearch = '';
    this.customerAddressSearch = '';
    this.customerTypeSearch = {id: 6, customerTypeName: ''};
  }
}
