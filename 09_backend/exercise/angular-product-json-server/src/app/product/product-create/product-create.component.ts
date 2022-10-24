import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  id: number;
  productForm: FormGroup;
  categorys: Category[];
  product: Product;

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(value => {
      this.categorys = value;
    }),
      this.productForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        price: new FormControl(),
        description: new FormControl(),
        category: new FormControl(),
      });
  }

  submit() {
    console.log('Nhan chưa em');
    this.product = this.productForm.value;
    this.productService.saveProduct(this.product).subscribe(value => {
      this.productForm.reset();
    });
  }
}
