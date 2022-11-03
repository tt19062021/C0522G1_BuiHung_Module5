import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Bank} from '../../model/bank';
import {Customer} from '../../model/customer';
import {BankService} from '../../service/bank.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.css']
})
export class BankEditComponent implements OnInit {

  customerForm: FormGroup;
  bankList: Bank[];
  customer: Customer;

  constructor(private bankService: BankService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.bankService.findAllBank().subscribe(value => {
      this.bankList = value;
    });
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.bankService.getById(id).subscribe(value => {
      console.log(value);
      this.customer = value;
      this.customerForm.patchValue(this.customer);
    }),
      this.customerForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
        startDay: new FormControl('', Validators.required),
        sentDay: new FormControl('', Validators.required),
        period: new FormControl('', Validators.required),
        money: new FormControl('', [Validators.required, Validators.min(10000000)]),
        interestRate: new FormControl('', Validators.required),
        endow: new FormControl('', Validators.required),
        bankPassBook: new FormControl('', Validators.required),
      });
  }

  editObject() {
    this.customer = this.customerForm.value;
    this.bankService.editObject(this.customer).subscribe(value => {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Sửa thành công',
        showConfirmButton: false,
        timer: 2500
      });
      this.router.navigateByUrl('');
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

}
