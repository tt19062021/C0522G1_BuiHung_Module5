import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Category} from '../../model/category';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productNameSearch = '';
  categorySearch: Category = {id: 0, name: ''};
  categoryList: Category[];

  productList: Product[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;

  productNameDelete: string;
  productIdDelete: number;
  categoryIdDelete: number;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.findAllType().subscribe(value => {
      this.categoryList = value;
    });

    this.productService.findAllSearch(this.productNameSearch,
      this.categorySearch.name)
      .subscribe(list => {
        this.totalPage = Math.ceil(list.length / this.numberRecord);
      }, error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      });

    this.productService.findSearchPaging(this.numberRecord, this.curPage,
      this.productNameSearch, this.categorySearch.name).subscribe(pagingList => {
      this.productList = pagingList;
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
    this.productNameDelete = name;
    this.productIdDelete = id;
  }

  delete(): void {
    this.productService.delete(this.productIdDelete).subscribe(() => {
      // @ts-ignore
      Swal.fire({
        icon: 'success',
        title: 'Xóa thành công!',
        text: 'Tên khách hàng: ' + this.productNameDelete,
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
    this.productNameSearch = '';
    this.categorySearch = {id: 0, name: ''};
  }

}
