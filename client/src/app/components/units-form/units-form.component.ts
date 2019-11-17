import { Component, OnInit, HostBinding } from '@angular/core';
import { UnitsService} from '../../services/units.service'
import {Unit } from '../../models/Units'

@Component({
  selector: 'app-units-form',
  templateUrl: './units-form.component.html',
  styleUrls: ['./units-form.component.css']
})
export class UnitsFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  unit: Unit = {
    id: 0,
    address: '',
    neigs: '',
    strate: null,
    rooms: null,
    bathrooms: null,
    parking: null,
    canonValue: ''
  }

  constructor(private unitsService: UnitsService) { }

  ngOnInit() {
  }

  saveNewUnit() {
    console.log(this.unit);
  }

}
