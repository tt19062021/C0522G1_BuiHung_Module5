import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../category/category.service';
import {Category} from '../../category/category';
import {Product} from '../product';
import {Router} from '@angular/router';

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
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(value => {
      this.categorys = value;
    }),
      this.productForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9 ]+$')]),
        price: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
        description: new FormControl(),
        category: new FormControl(),
      });
  }

  submit() {
    this.product = this.productForm.value;
    this.productService.saveProduct(this.product).subscribe(value => {
      // @ts-ignore
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thêm mới thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl('product/list');
    });
  }
}
