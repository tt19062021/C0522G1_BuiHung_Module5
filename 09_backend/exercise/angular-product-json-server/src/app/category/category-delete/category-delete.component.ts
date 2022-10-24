import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl()
  });
  id: number;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCategory(this.id);
    });
  }

  ngOnInit(): void {
  }

  getCategory(id: number) {
    return this.categoryService.findById(id).subscribe(value => {
      this.categoryForm.patchValue(value);
    });
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(value => {
      this.router.navigateByUrl('/category/list');
    }, error => {
      console.log(error);
    });
  }
}
