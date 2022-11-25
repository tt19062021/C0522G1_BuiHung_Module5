import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BankComponent} from './bank/bank/bank.component';
import {BankEditComponent} from './bank/bank-edit/bank-edit.component';

const routes: Routes = [
  {path: '', component: BankComponent},
  {path: 'edit/:id', component: BankEditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
