import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  id: number;
  category: Category;
  categoryForm: FormGroup;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      name: new FormControl()
    });
  }
  saveCategory() {
    this.category = this.categoryForm.value;
    this.categoryService.saveCategory(this.category).subscribe(value => {
      this.categoryForm.reset();
    });
  }
}
