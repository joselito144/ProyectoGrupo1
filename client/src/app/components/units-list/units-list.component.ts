import { Component, OnInit, HostBinding } from '@angular/core';
import { UnitsService} from '../../services/units.service';


@Component({
  selector: 'app-units-list',
  templateUrl: './units-list.component.html',
  styleUrls: ['./units-list.component.css']
})
export class UnitsListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  private user: any; 
  units: any = [];
  items: any = [];

  constructor(private unitService: UnitsService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    this.unitService.getUnits().subscribe(
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

}
