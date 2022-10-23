import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
   contracts: Contract[] = [] ;
  constructor() { }

  ngOnInit(): void {
    this.contracts.push(new Contract('William Bùi', '12-08-2022', '20-08-2022', 500000, 'Villa 5'));
    this.contracts.push(new Contract('William Ân', '12-08-2022', '20-08-2022', 500000, 'Villa 6'));
    this.contracts.push(new Contract('William Đạt', '12-08-2022', '20-08-2022', 500000, 'Villa 7'));
    this.contracts.push(new Contract('William Nam', '12-08-2022', '20-08-2022', 500000, 'Villa 8'));
    this.contracts.push(new Contract('William Thuyen', '12-08-2022', '20-08-2022', 500000, 'Villa 9'));
    this.contracts.push(new Contract('William Thanh', '12-08-2022', '20-08-2022', 500000, 'Villa 9'));
    this.contracts.push(new Contract('William Huy', '12-08-2022', '20-08-2022', 500000, 'Villa 9'));
    this.contracts.push(new Contract('William Ty', '12-08-2022', '20-08-2022', 500000, 'Villa 9'));
  }

}
