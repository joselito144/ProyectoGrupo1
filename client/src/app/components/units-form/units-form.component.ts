import { Component, OnInit, HostBinding } from '@angular/core';
import { UnitsService} from '../../services/units.service';
import {Unit } from '../../models/Units';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-units-form',
  templateUrl: './units-form.component.html',
  styleUrls: ['./units-form.component.css']
})
export class UnitsFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  router: Router;
  location: string = '';
  ts: number;
  randid: number;
  activatedRoute: ActivatedRoute;


  unit: Unit = {
    id: this.generateRowId(4),
    direccion: '',
    barrio: '',
    estrato: null,
    habitaciones: null,
    banios: null,
    parqueadero: null,
    valorCanon: null,
    area: null,
    tipoParqueadero: 'Cubierto',
    tipoCocina: 'Integral',
    fotoPrincipal: [null]
  };

  constructor(private unitsService: UnitsService ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);
  }

  saveNewUnit() {
    this.unit.fotoPrincipal[0] = this.location;
    console.log(this.unit);
    this.unitsService.saveUnit(this.unit)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/units']);
        },
        err => console.log(err)
      )
  }

  private generateRowId(shardId /* range 0-64 for shard/slot */) {
    this.ts = new Date().getTime() - 1300000000000; // limit to recent
    this.randid = Math.floor(Math.random() * 512);
    this.ts = (this.ts * 64);   // bit-shift << 6
    this.ts = this.ts + shardId;
    return (this.ts * 512) + (this.randid % 512);
  }

}
