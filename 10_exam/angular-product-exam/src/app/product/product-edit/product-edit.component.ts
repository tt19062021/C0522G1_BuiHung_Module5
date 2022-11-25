import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../model/category';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  categoryList: Category[];
  product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productService.findAllType().subscribe(value => {
      this.categoryList = value;
    });
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.productService.getById(id).subscribe(value => {
      console.log(value);
      this.product = value;
      this.productForm.patchValue(this.product);
    }),
      this.productForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
        startDay: new FormControl('', Validators.required),
        startSend: new FormControl('', Validators.required),
        period: new FormControl('', Validators.required),
        money: new FormControl('', [Validators.required, Validators.min(10000000)]),
        interest: new FormControl('', Validators.required),
        promotion: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
      });
  }

  editProduct() {
    this.product = this.productForm.value;
    this.productService.editProduct(this.product).subscribe(value => {
      // @ts-ignore
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Sửa thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl('');
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
