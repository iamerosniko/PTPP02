import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance.component';
import { MaintestComponent } from './maintest/maintest.component';

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [MaintenanceComponent, MaintestComponent]
})
export class MaintenanceModule { }
