// Components
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnitsService} from '../../services/units.service';
import { User } from '../../models/users';
import { NavigationComponent } from '../navigation/navigation.component';


// Login
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// Username and password
export class LoginComponent implements OnInit {
  navigationComponent: NavigationComponent;
  logged: any;
  user: User = {
    username: '',
    password: ''
  };
  mensaje = '';


  constructor(private router: Router, private unitsService: UnitsService) { }

  ngOnInit() {
  }

  // Exception capture of empty fields
  private iniciarSesion(nUser, nPass) {
    if (nUser.value === '' || nPass.value === '') {
      this.mensaje = 'El usuario y/o la clave no pueden estar vacíos';
    } else {
      this.unitsService.validateUser(this.user).subscribe(
         res => {
          this.logged = res;
          if (this.logged) {
            localStorage.clear();
            localStorage.setItem('user', JSON.stringify(nUser.value));
            this.user = JSON.parse(localStorage.getItem('user'));
            this.router.navigate(['/']);
            this.navigationComponent.getUser();
          } else {
            this.mensaje = 'Usuario o clave incorrecta';
          }
        },
        err => console.log(err)
      );
    }
  }

}

