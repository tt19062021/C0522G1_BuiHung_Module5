import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categorys: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(value => {
      this.categorys = value;
    }, error => {
      console.log('Error');
    }, () => {
      console.log('COMPLETE');
    });
  }

}
