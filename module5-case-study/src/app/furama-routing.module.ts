import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {FacilityComponent} from './facility-all/facility/facility.component';
import {UpdateFacilityComponent} from './facility-all/update-facility/update-facility.component';
import {CreateFacilityComponent} from './facility-all/create-facility/create-facility.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'facility', component: FacilityComponent},
  {path: 'facility/update/:id', component: UpdateFacilityComponent},
    // {path: 'facility/create', component: CreateFacilityComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class FuramaRoutingModule { }
