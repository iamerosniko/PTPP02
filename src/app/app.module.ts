import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { MaintenanceModule } from './views/maintenance/maintenance.module'
import { MainModule } from './views/main/main.module'
import { ReportsModule } from './views/reports/reports.module'
import { SearchModule } from './views/search/search.module'
import { HttpModule } from '@angular/http'

import { TopNavComponent } from './views/top-nav/top-nav.component';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,TopNavComponent
  ],
  imports: [
    HttpModule,BrowserModule,MaintenanceModule,MainModule,ReportsModule,SearchModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
