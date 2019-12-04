import { Component, OnInit } from '@angular/core';
import { ConsultUnit } from '../../models/consultUnits';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private consultUnit: ConsultUnit = {
    Sector: '',
    arriendoDesde: null,
    arriendoHasta: null,
    habitaciones: 1,
    banios: 1,
    parqueaderos: 0
  };
  private mensaje: string;
  constructor() { }

  ngOnInit() {
  }

  private searchUnits() {
    console.log(this.consultUnit);
  }

}

