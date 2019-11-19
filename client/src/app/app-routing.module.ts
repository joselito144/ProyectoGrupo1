import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitsListComponent} from '../app/components/units-list/units-list.component';
import { DatailsComponent} from '../app/components/datails/datails.component';
import {UnitsFormComponent } from '../app/components/units-form/units-form.component';
import { LoginComponent } from '../app/components/login/login.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/units',
    pathMatch: 'full'
  },

  {
    path: 'units',
    component: UnitsListComponent
  },
  {
    path: 'details/:id',
    component: DatailsComponent
  },

  {
    path: 'units/add',
    component: UnitsFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
