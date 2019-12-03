import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-set-number',
  templateUrl: './set-number.component.html',
  styleUrls: ['./set-number.component.css']
})
export class SetNumberComponent implements OnInit {
  @Input() title: string;
  private value = 0;

  constructor() { }

  ngOnInit() {
  }

  public addValue() {
    this.value = this.value + 1;
  }

  public decValue() {
    if (this.value > 0) {
      this.value = this.value - 1;
    }
  }

}
