import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [
    {
      name: 'William Bùi',
      birthDay: '22/08/1993',
      gender: 'Male',
      idCard: 838284854,
      phone: 799752479,
      email: 'williamhulk@paris.washington.DC',
      address: 'Kiev',
      customerType: [{id: 2, name: 'Diamond'}]
    },
    {
      name: 'William Bùi',
      birthDay: '22/08/1993',
      gender: 'Male',
      idCard: 838284854,
      phone: 799752479,
      email: 'williamhulk@paris.washington.DC',
      address: 'Kiev',
      customerType: [{id: 2, name: 'Diamond'}]
    },
    {
      name: 'William Bùi',
      birthDay: '22/08/1993',
      gender: 'Male',
      idCard: 838284854,
      phone: 799752479,
      email: 'williamhulk@paris.washington.DC',
      address: 'Kiev',
      customerType: [{id: 2, name: 'Diamond'}]
    },
    {
      name: 'William Bùi',
      birthDay: '22/08/1993',
      gender: 'Male',
      idCard: 838284854,
      phone: 799752479,
      email: 'williamhulk@paris.washington.DC',
      address: 'Kiev',
      customerType: [{id: 2, name: 'Diamond'}]
    },
    {
      name: 'William Bùi',
      birthDay: '22/08/1993',
      gender: 'Male',
      idCard: 838284854,
      phone: 799752479,
      email: 'williamhulk@paris.washington.DC',
      address: 'Kiev',
      customerType: [{id: 2, name: 'Diamond'}]
    }, {
      name: 'William Bùi',
      birthDay: '22/08/1993',
      gender: 'Male',
      idCard: 838284854,
      phone: 799752479,
      email: 'williamhulk@paris.washington.DC',
      address: 'Kiev',
      customerType: [{id: 2, name: 'Diamond'}]
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
