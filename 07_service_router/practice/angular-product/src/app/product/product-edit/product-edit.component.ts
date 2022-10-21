import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      this.id = Number(value.get('id'));
    });
    const product = this.productService.findById(this.id);
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl()
    });
    this.productForm.patchValue(product);
  }
  updateProduct() {
    const product = this.productForm.value;
    this.productService.updateProduct(product.id, product);
    this.router.navigateByUrl('');
    alert('Cập nhật thành công');
  }

}
