import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BankPassBookComponent} from './pass-book/bank-pass-book/bank-pass-book.component';
import {BankPassBookEditComponent} from './pass-book/bank-pass-book-edit/bank-pass-book-edit.component';

const routes: Routes = [
  {path: '', component: BankPassBookComponent},
  {path: 'edit/:id', component: BankPassBookEditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
