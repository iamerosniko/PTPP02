import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainProjectComponent } from './main-project.component';
import { MainAddeditComponent } from './main-addedit/main-addedit.component';
import { MainDeleteComponent } from './main-delete/main-delete.component';
import { MainTasksComponent } from './main-tasks/main-tasks.component';
import { ProjectDependenciesService } from '../../services/services';
import { SelectModule } from 'ng2-select';

@NgModule({
  imports: [
    CommonModule,SelectModule,
    RouterModule,
  ],
  providers:[ProjectDependenciesService],
  // declarations: [MainComponent, MainAddeditComponent, MainDeleteComponent, MainTasksComponent]
  declarations: [MainProjectComponent, MainAddeditComponent, MainDeleteComponent, MainTasksComponent]
})
export class MainProjectModule { }
