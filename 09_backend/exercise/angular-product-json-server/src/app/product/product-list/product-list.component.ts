import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../category/category.service';
import {Category} from '../../category/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];
  categoryList: Category[];
  numberRecord = 10;
  curPage = 1;
  totalPage: number;
  productName: string;
  productId: number;
  nameSearch = '';
  priceSearch = '';
  categorySearch: Category = {id: 5, name: ''};
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {
  }
  ngOnInit(): void {
    this.productService.findAllCategory().subscribe(value => {
      this.categoryList = value;
    });
    this.productService.findAllProductSearch(this.nameSearch, Number(this.priceSearch), this.categorySearch.name)
      .subscribe(list => {
        this.totalPage = Math.ceil(list.length / this.numberRecord);
      }, error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      });

    this.productService.findProductSearchPaging(this.numberRecord,
      this.curPage, this.nameSearch, Number(this.priceSearch), this.categorySearch.name).subscribe(pagingList => {
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
  getInfoProductDelete(name: string, id: number): void {
    this.productName = name;
    this.productId = id;
  }
  deleteProduct(): void {
    this.productService.deleteById(this.productId).subscribe(() => {
      this.ngOnInit();
      // @ts-ignore
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Xóa thành công',
        showConfirmButton: false,
        timer: 1500
      });
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
}
