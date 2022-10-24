import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {combineAll} from 'rxjs/operators';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] ;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.findAll().subscribe(value => {
      this.products = value;
    }, error => {
      console.log('Error');
    }, () => {
      console.log('COMPLETE');
    });
  }

}
