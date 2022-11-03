import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BankPassBookComponent} from './pass-book/bank-pass-book/bank-pass-book.component';
import {BankPassBookEditComponent} from './pass-book/bank-pass-book-edit/bank-pass-book-edit.component';
import {BankPassBookListComponent} from './pass-book/bank-pass-book-list/bank-pass-book-list.component';

const routes: Routes = [
  {path: '', component: BankPassBookComponent},
  {path: 'edit/:id', component: BankPassBookEditComponent},
  {path: 'list', component: BankPassBookListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
