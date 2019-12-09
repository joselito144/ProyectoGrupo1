import { Component, OnInit, HostBinding } from '@angular/core';
import { UnitsService} from '../../services/units.service';
import { Unit } from '../../models/Units';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-units-form',
  templateUrl: './units-form.component.html',
  styleUrls: ['./units-form.component.css']
})
export class UnitsFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';


  ts: number;
  randid: number;
  activatedRoute: ActivatedRoute;
  private canon = '';
  private counts = 1;
  private unit: Unit = {
    id: this.generateRowId(4),
    user: JSON.parse(localStorage.getItem('user')),
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

  constructor(private unitsService: UnitsService, private router: Router ) { }

  ngOnInit() {

  }

  saveNewUnit() {
    this.unit.valorCanon = +this.splitData(this.canon);
    console.log(this.unit);
    this.unitsService.saveUnit(this.unit)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/units']);
        },
        err => console.log(err)
      );
  }

  addImage(): void {
    if (this.counts !== 5) {
      this.counts = this.counts + 1;
      console.log(this.counts);
    }

  }

  private generateRowId(shardId /* range 0-64 for shard/slot */) {
    this.ts = new Date().getTime() - 1300000000000; // limit to recent
    this.randid = Math.floor(Math.random() * 512);
    this.ts = (this.ts * 64);   // bit-shift << 6
    this.ts = this.ts + shardId;
    return (this.ts * 512) + (this.randid % 512);
  }

  public splitData(str: string) {
    str = str.replace('$', '');
    str = str.replace('.', '');
    str = str.replace('.', '');
    return str;
  }

}
