import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  facilityForm: FormGroup = new FormGroup({
    facilityId: new FormControl(''),
    facilityName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    facilityArea: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    rentCost: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    maxPeople: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    standardRoom: new FormControl(''),
    descriptionOtherConvenience: new FormControl(''),
    numberOfFloors: new FormControl(''),
    poolArea: new FormControl(''),
    facilityFree: new FormControl(''),
    facilityType: new FormControl('', Validators.required),
    rentType: new FormControl('', Validators.required),
    facilityImage: new FormControl('', Validators.required)
  });
  facilityTypes: string[] = ['Villa', 'House', 'Room'];
  rentTypes: string[] = ['Giờ', 'Ngày', 'Month', 'Year'];
  idAuto = this.facilityService.findAll()[this.facilityService.findAll().length - 1].facilityId + 1;
  status: string;
  constructor(private facilityService: FacilityService,
              private router: Router) { }

  ngOnInit(): void {
  }
  submit(): void {
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility);
    alert('Thêm mới dịch vụ  [' + facility.facilityName + ']  thành công!');
    this.facilityForm.reset();
    this.router.navigateByUrl('facility');
    this.idAuto++;
  }
}
