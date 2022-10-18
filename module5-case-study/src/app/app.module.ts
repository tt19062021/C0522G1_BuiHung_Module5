import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacilityComponent } from './facility/facility.component';
import { CreateFacilityComponent } from './create-facility/create-facility.component';
import { UpdateFacilityComponent } from './update-facility/update-facility.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { ContractComponent } from './contract/contract.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateContractComponent } from './create-contract/create-contract.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
