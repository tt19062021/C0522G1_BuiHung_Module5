import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {FacilityListComponent} from './facility/facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {FacilityEditComponent} from './facility/facility-edit/facility-edit.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'facility/list', component: FacilityListComponent},
  {path: 'facility/create', component: FacilityCreateComponent},
  {path: 'facility/edit/:id', component: FacilityEditComponent},
  {path: 'customer/list', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  // {path: 'customer/edit/:id', component: CustomerEditComponent},
  // {path: 'contract', component: ContractListComponent},
  // {path: 'contract/create', component: ContractCreateComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
