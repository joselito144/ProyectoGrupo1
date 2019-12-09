import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitsService } from 'src/app/services/units.service';
import { Unit } from 'src/app/models/Units';


@Component({
  selector: 'app-update-unit',
  templateUrl: './update-unit.component.html',
  styleUrls: ['./update-unit.component.css']
})
export class UpdateUnitComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  private images: string[];
  private counts = 1;
  private unit: Unit;
  private items: any;
  private position = 0;
  constructor(private unitService: UnitsService, private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;
    this.unitService.getDetailUnit(+params.id).subscribe(
      res => {
        this.items = res;
        this.unit = this.items;
        this.images = this.unit.fotoPrincipal;
        this.counts = this.images.length;
        console.log(this.unit);
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

  private updateUnit() {
    this.unit.valorCanon = +this.splitData(this.unit.valorCanon.toString());
    console.log(this.unit);
    this.unitService.saveUnit(this.unit)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/units/mine']);
        },
        err => console.log(err)
      );
  }

  public splitData(str: string) {
    str = str.replace('$', '');
    str = str.replace('.', '');
    str = str.replace('.', '');
    return str;
  }


}
