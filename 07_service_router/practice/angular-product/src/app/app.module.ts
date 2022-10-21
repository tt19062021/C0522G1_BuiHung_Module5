import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ProductRoutingModule} from './product/product-routing.module';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    ProductRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
