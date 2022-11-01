import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BankPassBookComponent } from './pass-book/bank-pass-book/bank-pass-book.component';
import { BankPassBookEditComponent } from './pass-book/bank-pass-book-edit/bank-pass-book-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { BankPassBookListComponent } from './pass-book/bank-pass-book-list/bank-pass-book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BankPassBookComponent,
    BankPassBookEditComponent,
    BankPassBookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
