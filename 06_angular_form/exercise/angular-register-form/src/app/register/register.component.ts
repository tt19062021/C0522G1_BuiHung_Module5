import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      gmail: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl(''),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl(''),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\84\\d{9,10}$')]),
      pwGroup: new FormGroup({
        password: new FormControl('', Validators.minLength(5)),
        confirmPass: new FormControl('', Validators.minLength(5))
      }, this.checkPassword),
    });
  }

  giveFormValue() {
    console.log(this.formRegister.value);
  }
  checkPassword(p: AbstractControl): any {
    const v = p.value;
    return (v.password === v.confirmPass) ? null : {passNotMatch: true};
  }
}
