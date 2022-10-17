import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-show-pet',
  templateUrl: './show-pet.component.html',
  styleUrls: ['./show-pet.component.css']
})
export class ShowPetComponent implements OnInit {
  pet: Pet = {
    name: 'puppie',
    image: 'data:image/jpeg;base64,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'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
