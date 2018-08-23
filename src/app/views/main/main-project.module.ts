import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainProjectComponent } from './main-project.component';
import { MainAddeditComponent } from './main-addedit/main-addedit.component';
import { MainDeleteComponent } from './main-delete/main-delete.component';
<<<<<<< HEAD:src/app/views/main/main.module.ts
import { MainTasksComponent } from './main-tasks/main-tasks.component';

=======
>>>>>>> e14eea0bd1154ca0ba4ec9b261602839f56f22ab:src/app/views/main/main-project.module.ts
@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
<<<<<<< HEAD:src/app/views/main/main.module.ts
  declarations: [MainComponent, MainAddeditComponent, MainDeleteComponent, MainTasksComponent]
=======
  declarations: [MainProjectComponent, MainAddeditComponent, MainDeleteComponent]
>>>>>>> e14eea0bd1154ca0ba4ec9b261602839f56f22ab:src/app/views/main/main-project.module.ts
})
export class MainProjectModule { }
