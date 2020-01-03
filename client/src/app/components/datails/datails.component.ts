// Angular Core
import { Component, OnInit, HostBinding } from '@angular/core';
import { UnitsService } from '../../services/units.service';
import { Unit } from '../../models/units';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datails',
  templateUrl: './datails.component.html',
  styleUrls: ['./datails.component.css']
})

// Entering images in a String[]
export class DatailsComponent implements OnInit {
  @HostBinding('class') clases = 'row';
  private position = 0;
  private images: string[];
  private items: any;
  private unit: Unit;



  constructor(private unitService: UnitsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log(params.id);
    this.unitService.getDetailUnit(+params.id).subscribe(
      res => {
        this.items = res;
        this.unit = this.items;
        this.images = this.unit.fotoPrincipal;
        console.log(this.unit);
      },
      err => console.log(err)

    );
  }

  aumentarPos() {
    if (this.unit.fotoPrincipal.length - 1 !== this.position) {
      this.position = this.position + 1;
    }

  }

  disminuirPos() {
    if (this.position !== 0) {
      this.position = this.position - 1;
    }
  }

  selectImage(image: string) {
    for (let i = 0; i <= this.images.length; i++) {
      if (image === this.images[i]) {
        this.position = i;
      }
    }
  }

}
