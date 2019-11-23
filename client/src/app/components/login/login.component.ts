import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loggeadoForm: boolean;
  @Output() userLogged: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion(nUser, nPass) {
    this.loggeadoForm = true;
    this.userLogged = nUser;
    this.router.navigate(['/units']);
  }
}
