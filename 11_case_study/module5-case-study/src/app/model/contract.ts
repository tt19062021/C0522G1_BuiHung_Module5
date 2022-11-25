export class Contract {
  customerName: string;
  startDay: string;
  endDay: string;
  deposit: number;
  facility: string;


  constructor(customerName: string, startDay: string, endDay: string, deposit: number, facility: string) {
    this.customerName = customerName;
    this.startDay = startDay;
    this.endDay = endDay;
    this.deposit = deposit;
    this.facility = facility;
  }
}
