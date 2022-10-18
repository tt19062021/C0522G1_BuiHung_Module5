import {Component, OnInit} from '@angular/core';
import {Customers} from '../customers';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customers[] = [
    {
      name: 'William Bùi',
      birthDay: '22/08/1993',
      gender: 'Male',
      idCard: 838284854,
      phone: 799752479,
      email: 'williamhulk@paris.washington.DC',
      address: 'Kiev',
      customerType: 'Diamond'
    },
    {
      name: 'William Bùi',
      birthDay: '22/08/1993',
      gender: 'Male',
      idCard: 838284854,
      phone: 799752479,
      email: 'williamhulk@paris.washington.DC',
      address: 'Kiev',
      customerType: 'Diamond'
    },
    {
      name: 'William Bùi',
      birthDay: '22/08/1993',
      gender: 'Male',
      idCard: 838284854,
      phone: 799752479,
      email: 'williamhulk@paris.washington.DC',
      address: 'Kiev',
      customerType: 'Diamond'
    },
    {
      name: 'William Bùi',
      birthDay: '22/08/1993',
      gender: 'Male',
      idCard: 838284854,
      phone: 799752479,
      email: 'williamhulk@paris.washington.DC',
      address: 'Kiev',
      customerType: 'Diamond'
    },
    {
      name: 'William Bùi',
      birthDay: '22/08/1993',
      gender: 'Male',
      idCard: 838284854,
      phone: 799752479,
      email: 'williamhulk@paris.washington.DC',
      address: 'Kiev',
      customerType: 'Diamond'
    }, {
      name: 'William Bùi',
      birthDay: '22/08/1993',
      gender: 'Male',
      idCard: 838284854,
      phone: 799752479,
      email: 'williamhulk@paris.washington.DC',
      address: 'Kiev',
      customerType: 'Diamond'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
