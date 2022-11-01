import { Component, OnInit } from '@angular/core';
import {BankPassBook} from '../bank-pass-book';
import {CustomerPassBook} from '../customer-pass-book';
import {BankPassBookService} from '../bank-pass-book.service';

@Component({
  selector: 'app-bank-pass-book',
  templateUrl: './bank-pass-book.component.html',
  styleUrls: ['./bank-pass-book.component.css']
})
export class BankPassBookComponent implements OnInit {
  customerBankNameSearch = '';
  bankBookSearch: BankPassBook = {id: 0, name: ''};
  bankPassBookList: BankPassBook[];

  customerBankList: CustomerPassBook[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;

  customerNameDelete: string;
  customerIdDelete: number;

  constructor(private bankPassBookService: BankPassBookService) {
  }

  ngOnInit(): void {
    this.bankPassBookService.findAllBank().subscribe(value => {
      this.bankPassBookList = value;
    });

    this.bankPassBookService.findAllSearch(this.customerBankNameSearch,
      this.bankBookSearch.name)
      .subscribe(list => {
        this.totalPage = Math.ceil(list.length / this.numberRecord);
      }, error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      });

    this.bankPassBookService.findSearchPaging(this.numberRecord, this.curPage,
      this.customerBankNameSearch, this.bankBookSearch.name).subscribe(pagingList => {
      this.customerBankList = pagingList;
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

  getInfoDelete(name: string, id: number): void {
    this.customerNameDelete = name;
    this.customerIdDelete = id;
  }

  delete(): void {
    this.bankPassBookService.delete(this.customerIdDelete).subscribe(() => {
      // @ts-ignore
      Swal.fire({
        icon: 'success',
        title: 'Xóa thành công!',
        text: 'Tên khách hàng: ' + this.customerNameDelete,
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
    this.customerBankNameSearch = '';
    this.bankBookSearch = {id: 0, name: ''};
  }

}
