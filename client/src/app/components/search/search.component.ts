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
    arriendoDesde: 0,
    arriendoHasta: 1,
    habitaciones: 1,
    banios: 1,
    parqueaderos: 0
  };
  private mensaje: string;
  constructor() { }

  ngOnInit() {
  }

  private searchUnits(valueFrom, valueUntil, rooms, baths, parking) {
    if ( valueFrom.value === '' || valueUntil.value === '' || rooms.value === null || baths.value === null || parking.value === null) {
      this.mensaje = 'Debe diligenciar todos los campos';
    } else {
      if ( valueFrom.value > valueUntil.value) {
        this.mensaje  = 'El valor de arriendo desde debe ser menor que el hasta';
      } else {
        this.mensaje = 'Buscando Resultados';
      }
    }
  }

}
