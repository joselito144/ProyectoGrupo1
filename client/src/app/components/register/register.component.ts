import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { UnitsService } from '../../services/units.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    username: '',
    password: ''
  };
  mensaje = '';
  logged: any;

  constructor(private unitsService: UnitsService, private router: Router) { }

  ngOnInit() {
  }

  private registerUser(nUser, nPassword, nPasswordConfirm) {
    console.log('password: ' + nPassword.value);
    console.log('passwordC: ' + nPasswordConfirm.value);
    if (nUser.value === '' || nPassword.value === '' || nPasswordConfirm.value === '') {
      this.mensaje = 'Todos los campos deben ser diligenciados';
    } else {
        if (nPassword.value !== nPasswordConfirm.value) {
          this.mensaje = 'Las contraseñas suministradas no coinciden';
        } else {
          this.mensaje = 'Estamos creando el usuario';
          this.unitsService.createUser(this.user).subscribe(
            res => {
              this.mensaje = 'Tu usuario ha sido creado éxitosamente';
              this.router.navigate(['/login']);
           },
           err => console.log(err)
         );
        }
      }
  }

}
