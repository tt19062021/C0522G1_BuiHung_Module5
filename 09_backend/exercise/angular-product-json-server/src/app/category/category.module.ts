import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ CategoryListComponent,
    CategoryEditComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CategoryModule { }
