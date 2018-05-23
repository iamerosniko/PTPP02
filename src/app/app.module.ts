import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { MaintenanceModule } from './views/maintenance/maintenance.module'

import { TopNavComponent } from './views/top-nav/top-nav.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,TopNavComponent
  ],
  imports: [
    BrowserModule,MaintenanceModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
