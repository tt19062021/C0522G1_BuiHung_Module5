import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {
  facilityForm: FormGroup;
  id: number;
  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      this.id = Number(value.get('id'));
    });
    const facility = this.facilityService.findById(this.id);
    this.facilityForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      area: new FormControl(),
      cost: new FormControl(),
      desOtherConver: new FormControl(),
      serviceFree: new FormControl(),
      floors: new FormControl(),
      poolArea: new FormControl(),
      maxPeople: new FormControl(),
      standardRoom: new FormControl(),
      image: new FormControl(),
      facilityType: new FormControl(),
      rentType: new FormControl(),
    });
    this.facilityForm.patchValue(facility);
  }
  updateFacility() {
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(facility.id, facility);
    alert('Update ' + this.facilityForm.value.name + ' Success!!');
    this.router.navigateByUrl('/facility');
  }
}
