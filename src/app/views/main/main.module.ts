import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainAddeditComponent } from './main-addedit/main-addedit.component';
import { MainDeleteComponent } from './main-delete/main-delete.component';

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [MainComponent, MainAddeditComponent, MainDeleteComponent]
})
export class MainModule { }
