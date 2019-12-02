import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Browser
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private user: string;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.getUser();
  }

  public getUser() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  private closeSesion() {
    localStorage.clear();
  }

}
