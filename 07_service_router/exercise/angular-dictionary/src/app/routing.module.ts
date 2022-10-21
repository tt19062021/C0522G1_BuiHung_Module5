import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DictionaryPageComponent} from './dictionary/dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary/dictionary-detail/dictionary-detail.component';

const routes: Routes = [
  {path: '', component: DictionaryPageComponent},
  {path: 'detail/:word', component: DictionaryDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
