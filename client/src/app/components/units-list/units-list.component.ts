import { Component, OnInit, HostBinding } from '@angular/core';
import { UnitsService} from '../../services/units.service';


@Component({
  selector: 'app-units-list',
  templateUrl: './units-list.component.html',
  styleUrls: ['./units-list.component.css']
})
export class UnitsListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  units: any = [];
  items: any = [];

  constructor(private unitService: UnitsService) { }

  ngOnInit() {
    this.unitService.getUnits().subscribe(
      res => {
        this.items = res;
        this.units = this.items.Items;
      },
      err => console.log(err)

    );
  }

}
