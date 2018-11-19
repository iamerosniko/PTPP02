import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { MainProjectComponent } from './main-project.component';
import { MainAddeditComponent } from './main-addedit/main-addedit.component';
import { MainDeleteComponent } from './main-delete/main-delete.component';
import { MainTasksComponent } from './main-tasks/main-tasks.component';
import { ProjectDependenciesService, ProjectService } from '../../services/services';
import { SelectModule } from 'ng2-select';

@NgModule({
  imports: [
    CommonModule,SelectModule,
    FormsModule,ReactiveFormsModule,
    RouterModule,
  ],
  providers:[ProjectDependenciesService,ProjectService],
  // declarations: [MainComponent, MainAddeditComponent, MainDeleteComponent, MainTasksComponent]
  declarations: [MainProjectComponent, MainAddeditComponent, MainDeleteComponent, MainTasksComponent]
})
export class MainProjectModule { }
