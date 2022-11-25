import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './layout/home/home.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {FacilityComponent} from './facility-all/facility-list/facility.component';
import {FuramaRoutingModule} from './furama-routing.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CreateFacilityComponent} from './facility-all/facility-create/create-facility.component';
import {UpdateFacilityComponent} from './facility-all/facility-update/update-facility.component';
import {UpdateCustomerComponent} from './customer-all/update-customer/update-customer.component';
import {CustomerComponent} from './customer-all/customer/customer.component';
import {ContractComponent} from './contract-all/contract/contract.component';
import {CreateCustomerComponent} from './customer-all/create-customer/create-customer.component';
import {CreateContractComponent} from './contract-all/create-contract/create-contract.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FacilityComponent,
    CreateFacilityComponent,
    UpdateFacilityComponent,
    UpdateCustomerComponent,
    CustomerComponent,
    ContractComponent,
    CreateCustomerComponent,
    CreateContractComponent
  ],
  imports: [
    BrowserModule,
    FuramaRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
