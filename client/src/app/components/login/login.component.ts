import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UnitsService} from '../../services/units.service';
import { User } from '../../models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logged: any;
  user: User = {
    username: '',
    password: ''
  };
  mensaje: string = '';


  constructor(private router: Router, private unitsService: UnitsService) { }

  ngOnInit() {
  }

  iniciarSesion(nUser, nPass) {
    if(nUser.value == '' || nPass.value == '')
    {
      this.mensaje = 'El usuario y/o la clave no pueden estar vacíos';
    }
    else
    {
      this.unitsService.validateUser(this.user).subscribe(
        res => {
          this.logged = res;
          console.log(this.logged);
        },
        err => console.log(err)
      );
      if(this.logged) {
        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(nUser.value));
        this.user = JSON.parse(localStorage.getItem('user'));
        this.router.navigate(['/']);
      }
      else
      {
        this.mensaje = 'Usuario o clave incorrecta';
      }

    }

  }
}
