export class Customers {
  name: string;
  birthDay: string;
  gender: string;
  idCard: number;
  phone: number;
  email: string;
  address: string;
  customerType: string;

  constructor(name: string, birthDay: string, gender: string, idCard: number, phone: number, email: string, address: string, customerType: string) {
    this.name = name;
    this.birthDay = birthDay;
    this.gender = gender;
    this.idCard = idCard;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.customerType = customerType;
  }
}
