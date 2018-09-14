import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainProjectComponent } from './main-project.component';
import { MainAddeditComponent } from './main-addedit/main-addedit.component';
import { MainDeleteComponent } from './main-delete/main-delete.component';
import { MainTasksComponent } from './main-tasks/main-tasks.component';

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  // declarations: [MainComponent, MainAddeditComponent, MainDeleteComponent, MainTasksComponent]
  declarations: [MainProjectComponent, MainAddeditComponent, MainDeleteComponent, MainTasksComponent]
})
export class MainProjectModule { }
