import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private mensaje: string;
  constructor() { }

  ngOnInit() {
  }

  private searchUnits(valueFrom, valueUntil, rooms, baths, parking) {
    console.log(valueFrom.value);
    console.log(valueUntil.value);
    console.log(rooms.value);
    console.log(baths.value);
    console.log(parking.value);
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
