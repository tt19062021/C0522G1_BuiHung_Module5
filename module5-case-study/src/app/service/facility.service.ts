import { Injectable } from '@angular/core';
import {Facility} from '../model/facility/facility';


@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilitys: Facility[] = [
    {
      id: 1,
      name: 'Villa 9',
      area: 100,
      cost: 5000000,
      maxPeople: 10,
      desOtherConver: 'No',
      serviceFree: 'No',
      floors: 3,
      poolArea: 50,
      standardRoom: 'standard',
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg',
      facilityType: 'Villa',
      rentType: 'Day'
    },
    {
      id: 2,
      name: 'House 1',
      area: 100,
      cost: 5000000,
      maxPeople: 5,
      desOtherConver: 'No',
      serviceFree: 'No',
      floors: 3,
      poolArea: 50,
      standardRoom: 'standard',
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg',
      facilityType: 'Villa',
      rentType: 'Day'
    },
    {
      id: 3,
      name: 'Room 3',
      area: 100,
      cost: 5000000,
      maxPeople: 3,
      desOtherConver: 'No',
      serviceFree: 'No',
      floors: 3,
      poolArea: 50,
      standardRoom: 'standard',
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg',
      facilityType: 'Villa',
      rentType: 'Day'
    }
  ];

  constructor() { }
  findAll() {
    return this.facilitys;
  }
  findById(id: number) {
    return this.facilitys.find(facility => facility.id === id);
  }
  saveFacility(facility) {
    return this.facilitys.push(facility);
  }
  updateFacility(id: number, facility: Facility) {
    for (let i = 0; i < this.facilitys.length; i++) {
      if (this.facilitys[i].id === id) {
        this.facilitys[i] = facility;
      }
    }
  }
}
