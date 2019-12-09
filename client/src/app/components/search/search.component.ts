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
    arriendoHasta: 100000000,
    habitaciones: 1,
    banios: 1,
    parqueadero: 0
  };
  constructor(private unitService: UnitsService) { }

  ngOnInit() {
  }

  private searchUnits() {

    this.mensaje = 'Buscando';
    this.consultUnit.arriendoDesde = +this.splitData(this.canonFrom);
    this.consultUnit.arriendoHasta = +this.splitData(this.canonUntil);
    if( this.consultUnit.sector === '' && this.canonFrom === null && this.canonUntil === null) {
      this.mensaje = 'Indique al menos un criterio de búsqueda';
    } else {
      if (this.consultUnit.sector === '') {
        this.consultUnit.sector = 'todos';
      } else {
        if (this.canonFrom === '') {
          this.consultUnit.arriendoDesde = 0;
        }
        console.log(this.canonUntil);
        if (this.canonUntil === '') {
          this.consultUnit.arriendoHasta = 100000000;
        }
        console.log(this.consultUnit.arriendoDesde);
        console.log(this.consultUnit.arriendoHasta);
        if (this.consultUnit.arriendoDesde > this.consultUnit.arriendoHasta) {
          this.mensaje = 'El rango del arriendo debe ir de un número menor a uno mayor';
        } else {
          console.log(this.consultUnit);
          this.unitService.searchUnits(this.consultUnit).subscribe(
            res => {
              this.items = res;
              this.units = this.items.Items;
              if (this.units.length === 0)  {
                this.mensaje = 'No hay resultados para tu búsqueda';
              } else {
                this.mensaje = 'Resultados para tu búsqueda:';
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

  }

  public splitData(str: string) {
    if (str !== null) {
      str = str.replace('$', '');
      str = str.replace('.', '');
      str = str.replace('.', '');
    }
    return str;
  }

}

