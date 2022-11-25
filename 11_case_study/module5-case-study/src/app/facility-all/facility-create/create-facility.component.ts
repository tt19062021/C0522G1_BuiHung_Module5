import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  facilityCreateForm = new FormGroup({
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
    rentType: new FormControl()
  });

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
  }
  createFacility() {
    const facility = this.facilityCreateForm.value;
    this.facilityService.saveFacility(facility);
    alert('Add  Success!!');
    this.router.navigateByUrl('facility');
  }
}
