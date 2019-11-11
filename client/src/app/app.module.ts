import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UnitsListComponent } from './components/units-list/units-list.component';
import { UnitsFormComponent } from './components/units-form/units-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UnitsListComponent,
    UnitsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
