import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';


@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }
