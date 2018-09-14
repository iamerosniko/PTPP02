import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';

import { MaintenanceComponent,MaintestComponent, DepartmentListComponent, ProjectcategoryListComponent, CustomerMapcodeListComponent, CustomerCentricscoreListComponent, ContactsListComponent, DepartmentAddeditComponent, DepartmentDeleteComponent, ProjectcategoryDeleteComponent, ProjectcategoryAddeditComponent, CustomerMapcodeAddeditComponent, CustomerCentricscoreAddeditComponent, ContactsAddeditComponent, CustomerMapcodeDeleteComponent, CustomerCentricscoreDeleteComponent, ContactsDeleteComponent } from './views/maintenance/maintenance'
<<<<<<< HEAD
import { MainComponent,MainAddeditComponent,MainDeleteComponent,MainTasksComponent } from './views/main/main'
import { SearchComponent, SearchDetailsComponent, SearchTasksComponent } from './views/search/search'
=======
import { MainProjectComponent,MainAddeditComponent,MainDeleteComponent } from './views/main/main-project'
import { SearchComponent, SearchDetailsComponent } from './views/search/search'
>>>>>>> e14eea0bd1154ca0ba4ec9b261602839f56f22ab
import { ReportsComponent } from './views/reports/reports'
const routes: Routes = [
  { 
    path:'Maintenance',component:MaintenanceComponent,
    children: [
      /*Core Routing - do not modify path names*/
      // lists here
      { path: 'Departments', component: DepartmentListComponent, outlet: 'mroute' },
      { path: 'ProjectCategories', component: ProjectcategoryListComponent, outlet: 'mroute' },
      { path: 'CustomerMaps', component: CustomerMapcodeListComponent, outlet: 'mroute' },
      { path: 'CustomerCentrics', component: CustomerCentricscoreListComponent, outlet: 'mroute' },
      { path: 'Contacts', component: ContactsListComponent, outlet: 'mroute' },
      { path: '', component: MaintestComponent, outlet: 'mroute'},
      // forms here Add
      { path: 'DepartmentsNew', component: DepartmentAddeditComponent, outlet: 'mroute' },
      { path: 'ProjectCategoriesNew', component: ProjectcategoryAddeditComponent, outlet: 'mroute' },
      { path: 'CustomerMapsNew', component: CustomerMapcodeAddeditComponent, outlet: 'mroute' },
      { path: 'CustomerCentricsNew', component: CustomerCentricscoreAddeditComponent, outlet: 'mroute' },
      { path: 'ContactsNew', component: ContactsAddeditComponent, outlet: 'mroute' },
       // forms here Edit
       { path: 'DepartmentsEdit/:departmentID', component: DepartmentAddeditComponent, outlet: 'mroute' },
       { path: 'ProjectCategoriesEdit/:categoryID', component: ProjectcategoryAddeditComponent, outlet: 'mroute' },
       { path: 'CustomerMapsEdit/:mapID', component: CustomerMapcodeAddeditComponent, outlet: 'mroute' },
       { path: 'CustomerCentricsEdit/:centricScoreID', component: CustomerCentricscoreAddeditComponent, outlet: 'mroute' },
       { path: 'ContactsEdit/:contactsID', component: ContactsAddeditComponent, outlet: 'mroute' },
      // delete area here
      { path: 'DepartmentsDelete/:departmentID', component: DepartmentDeleteComponent, outlet: 'mroute' },
      { path: 'ProjectCategoriesDelete/:categoryID', component: ProjectcategoryDeleteComponent, outlet: 'mroute' },
      { path: 'CustomerMapsDelete/:mapID', component: CustomerMapcodeDeleteComponent, outlet: 'mroute' },
      { path: 'CustomerCentricsDelete/:centricScoreID', component: CustomerCentricscoreDeleteComponent, outlet: 'mroute' },
      { path: 'ContactsDelete/:contactsID', component: ContactsDeleteComponent, outlet: 'mroute' },
    ]  
  },
  {
    path:'Search',component:SearchComponent,
  },
  {
    path:'Search/SearchDetails',component:SearchDetailsComponent,
  },
  {
<<<<<<< HEAD
    path:'Search/SearchTasks',component:SearchTasksComponent,
  },
  {
    path:'Main',component:MainComponent,
=======
    path:'Main',component:MainProjectComponent,
>>>>>>> e14eea0bd1154ca0ba4ec9b261602839f56f22ab
  },
  {
    path: 'Main/MainNew', component: MainAddeditComponent
  },
  {
    path: 'Main/MainTasks', component: MainTasksComponent
  },
  {
    path: 'Main/MainDelete', component: MainDeleteComponent
  },
  {
    path:'Reports',component:ReportsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }