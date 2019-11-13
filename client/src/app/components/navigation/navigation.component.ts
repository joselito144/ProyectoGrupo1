import { Component, OnInit } from '@angular/core';
import { UnitsService} from '../../services/units.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  neigs: any = [];

  constructor(private unitService: UnitsService) { }

  ngOnInit() {
    this.unitService.getNeighborhoods().subscribe(
      res => {
        console.log(res[0]);
        this.neigs = res[0];
      },
      err => console.log(err)

    );
  }

}
