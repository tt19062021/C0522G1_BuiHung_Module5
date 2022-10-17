import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  number1: number ;
  number2: number ;
  result: number;
  constructor() { }

  ngOnInit(): void {
  }

  sum2Number(): void {
    this.result = Number(this.number1) + Number(this.number2);
  }

  tru2Number() {
    this.result = Number(this.number1) - Number(this.number2);
  }

  nhan2Number() {
    this.result = Number(this.number1) * Number(this.number2);
  }

  chia2Number() {
    this.result = Number(this.number1) / Number(this.number2);
  }
}
