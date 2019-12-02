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

  private activeUser: string;
  units: any = [];
  items: any = [];

  constructor(private unitService: UnitsService, private router: Router) { }

  ngOnInit() {
    this.activeUser = JSON.parse(localStorage.getItem('user'));
    this.unitService.getMyUnits(this.activeUser).subscribe(
      res => {
        this.items = res;
        this.units = this.items.Items;
      },
      err => console.log(err)

    );
  }

  private deleteUnit(id: number) {
    console.log('borrando');
  }

  private updateUnit(id: number) {
    console.log('actualizando');
    this.router.navigate(['units/mine/update/' + id]);
  }

}
