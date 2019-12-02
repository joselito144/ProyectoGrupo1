import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UnitsListComponent } from './components/units-list/units-list.component';
import { UnitsFormComponent } from './components/units-form/units-form.component';
import { UnitsService} from './services/units.service';
import { DatailsComponent } from './components/datails/datails.component';
import { LoginComponent } from './components/login/login.component';
import { MyUnitsComponent } from './components/my-units/my-units.component';
import { UpdateUnitComponent } from './components/update-unit/update-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UnitsListComponent,
    UnitsFormComponent,
    DatailsComponent,
    LoginComponent,
    MyUnitsComponent,
    UpdateUnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UnitsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
