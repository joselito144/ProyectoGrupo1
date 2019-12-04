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
  private mensaje = '';
  private units: any = [];
  private items: any = [];
  private consultUnit: ConsultUnit = {
    sector: '',
    arriendoDesde: null,
    arriendoHasta: null,
    habitaciones: 1,
    banios: 1,
    parqueaderos: 0
  };
  constructor(private unitService: UnitsService) { }

  ngOnInit() {
  }

  private searchUnits() {
    this.mensaje = '';
    this.consultUnit.arriendoDesde = +this.consultUnit.arriendoDesde;
    this.consultUnit.arriendoHasta = +this.consultUnit.arriendoHasta;
    console.log(this.consultUnit);
    if (this.consultUnit.sector === '') {
      this.mensaje = 'Debe especificar el sector de búsqueda';
    } else {
      if (this.consultUnit.arriendoDesde === 0) {
        this.consultUnit.arriendoDesde = 0;
      }
      if (this.consultUnit.arriendoHasta === 0) {
        this.consultUnit.arriendoHasta = 100000000;
      }
      this.unitService.searchUnits(this.consultUnit).subscribe(
        res => {
          this.items = res;
          this.units = this.items.Items;
          if (this.units.length === 0)  {
            this.mensaje = 'No hay resultados para tu búsqueda';
          }
        },
        err => console.log(err)
  
      );
    }

  }

}

