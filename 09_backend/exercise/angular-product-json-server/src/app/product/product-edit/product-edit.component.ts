import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import {CategoryService} from '../../category/category.service';
import {Category} from '../../category/category';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../product';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  categorys: Category[];
  product: Product;
  @ViewChild('content', {static: true}) el!: ElementRef<HTMLImageElement>;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.productService.findById(id).subscribe(value => {
      console.log(value);
      this.product = value;
      this.productForm.patchValue(this.product);
    }),
      this.productForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        price: new FormControl(),
        description: new FormControl(),
        category: new FormControl(),
      });
    this.categoryService.findAll().subscribe(value => {
      this.categorys = value;
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
      this.router.navigateByUrl('product/list');
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  exportPdf() {
    html2canvas(this.el.nativeElement).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF({
        orientation: 'portrait'
      });
      const imageProps = pdf.getImageProperties(imgData);
      const pdfw = pdf.internal.pageSize.getWidth();
      const pdfh = (imageProps.height * pdfw) / imageProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfw, pdfh);
      pdf.save('output.pdf');
    });
  }
}
