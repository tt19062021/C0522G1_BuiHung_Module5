import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { FacilityCreateComponent } from './facility/facility-create/facility-create.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    CustomerListComponent,
    CustomerCreateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
