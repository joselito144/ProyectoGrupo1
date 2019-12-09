import { Component, OnInit, HostBinding } from '@angular/core';
import { UnitsService } from '../../services/units.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-units',
  templateUrl: './my-units.component.html',
  styleUrls: ['./my-units.component.css']
})
export class MyUnitsComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  private mensaje = '';
  private activeUser: string;
  units: any = [];
  items: any = [];

  constructor(private unitService: UnitsService, private router: Router) { }

  ngOnInit() {
    this.getUnits();
  }

  private deleteUnit(id: number) {
    const anwer = confirm('¿Está seguro de eliminar esta publicación?');
    if (anwer) {
      console.log('borrando');
      this.unitService.deleteUnit(id).subscribe(
        res => {
          console.log(res);
          this.getUnits();
        },
        err => {
          this.getUnits();
        }
      );
    }
  }

  private updateUnit(id: number) {
    console.log('actualizando');
    this.router.navigate(['units/mine/update/' + id]);
  }

  private getUnits() {
    this.activeUser = JSON.parse(localStorage.getItem('user'));
    this.unitService.getMyUnits(this.activeUser).subscribe(
      res => {
        this.items = res;
        this.units = this.items.Items;
        console.log(this.units);
        if (this.units.length === 0) {
          this.mensaje = 'Aún no tienes publicaciones';
        }
      },
      err => console.log(err)
    );
  }

}

