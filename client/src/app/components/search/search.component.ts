import { Component, OnInit, HostBinding } from '@angular/core';
import { ConsultUnit } from '../../models/consultUnits';
import {UnitsService } from '../../services/units.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  private canonFrom = null;
  private canonUntil = null;
  private mensaje = '';
  private units: any = [];
  private items: any = [];
  private consultUnit: ConsultUnit = {
    sector: '',
    arriendoDesde: 0,
    arriendoHasta: 0,
    habitaciones: 1,
    banios: 1,
    parqueadero: 0
  };
  constructor(private unitService: UnitsService) { }

  ngOnInit() {
  }

  private searchUnits() {
    this.mensaje = '';
    console.log(this.canonFrom);
    console.log(this.splitData(this.canonFrom));
    console.log(this.splitData(this.canonUntil));
    this.consultUnit.arriendoDesde = +this.splitData(this.canonFrom);
    this.consultUnit.arriendoHasta = +this.splitData(this.canonUntil);
    console.log(this.consultUnit);
    if (this.consultUnit.sector === '') {
      this.consultUnit.sector = 'todos';
    } else {
      if (this.canonFrom === null) {
        this.consultUnit.arriendoDesde = 0;
      }
      if (this.canonUntil === null) {
        this.consultUnit.arriendoHasta = 100000000;
      }
      if (this.consultUnit.arriendoDesde > this.consultUnit.arriendoHasta) {
        this.mensaje = 'El rango del arriendo debe ir de un número menor a uno mayor';
      } else {
        this.unitService.searchUnits(this.consultUnit).subscribe(
          res => {
            this.items = res;
            this.units = this.items.Items;
            if (this.units.length === 0)  {
              this.mensaje = 'No hay resultados para tu búsqueda';
            }
          },
          err => {
            console.log(err),
            this.mensaje = 'Ha ocurrido un error al consultar';
          }
        );
      }
    }

  }

  public splitData(str: string) {
    str = str.replace('$', '');
    str = str.replace('.', '');
    str = str.replace('.', '');
    return str;
  }

}

