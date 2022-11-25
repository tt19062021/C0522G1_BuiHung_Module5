import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityForm: FormGroup;
  facilityId: number;
  facilityType: string;
  rentTypes: string[] = ['Giờ', 'Ngày', 'Month', 'Year'];
  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.facilityId = Number(this.activatedRoute.snapshot.params.id);
    const facility = this.facilityService.findById(this.facilityId);
    this.facilityType = facility.facilityType;
    this.facilityForm = new FormGroup({
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
    this.facilityForm.patchValue(facility);
  }
  submit(id: any): void {
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(id, facility);
    alert('Cập nhật thành công!');
    this.router.navigateByUrl('facility');
  }
}
