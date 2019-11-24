import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private user: string;

  constructor(private router: Router) { 
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {

  }

  closeSesion(){
    localStorage.clear();
  }

}
