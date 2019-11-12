import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitsListComponent} from '../app/components/units-list/units-list.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/units',
    pathMatch: 'full'
  },

  {
    path: 'units',
    component: UnitsListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
