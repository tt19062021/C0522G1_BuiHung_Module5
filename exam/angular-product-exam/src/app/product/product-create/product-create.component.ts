import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../model/category';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {Product} from '../../model/product';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categoryList: Category[];
  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productService.findAllType().subscribe(value => {
      this.categoryList = value;
    }),
      this.productForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]+\\d*$')]),
        price: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
        description: new FormControl(),
        category: new FormControl(),
      });
  }

  submit() {
    const product = this.productForm.value;
    this.productService.add(product).subscribe(() => {
      // @ts-ignore
      Swal.fire({
        title: 'Thêm mới thành công!',
        text: 'Khách hàng: ' + product.name,
        imageUrl: 'https://genk.mediacdn.vn/2018/9/20/a2989534790f069f03671d247dd5222b-15374152422351400600667.gif',
        imageHeight: 250,
        imageWidth: 400
      });

      this.productForm.reset();
    }, error => {
      console.log(error);
    }, () => {
      this.router.navigateByUrl('');
      console.log('Thêm khách hàng thành công!');
    });
  }

}
