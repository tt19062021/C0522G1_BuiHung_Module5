import { Injectable } from '@angular/core';
import {RentType} from '../model/facility/rent-type';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  rentTypes: RentType[] = [
    {id: 1, name: 'Hour'},
    {id: 2, name: 'Day'},
    {id: 3, name: 'Month'},
    {id: 4, name: 'Year'},
  ];
  constructor() { }
  findAll() {
    return this.rentTypes;
  }
}
