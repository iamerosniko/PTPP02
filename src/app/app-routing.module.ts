import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceComponent,MaintestComponent, DepartmentListComponent, ProjectcategoryListComponent, CustomerMapcodeListComponent, CustomerCentricscoreListComponent, ContactsListComponent, DepartmentAddeditComponent, DepartmentDeleteComponent, ProjectcategoryDeleteComponent, ProjectcategoryAddeditComponent, CustomerMapcodeAddeditComponent, CustomerCentricscoreAddeditComponent, ContactsAddeditComponent, CustomerMapcodeDeleteComponent, CustomerCentricscoreDeleteComponent, ContactsDeleteComponent } from './views/maintenance/maintenance'
import { MainComponent } from './views/main/main'
import { SearchComponent } from './views/search/search'
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
      // forms here
      { path: 'Departments-AddEdit', component: DepartmentAddeditComponent, outlet: 'mroute' },
      { path: 'ProjectCategories-AddEdit', component: ProjectcategoryAddeditComponent, outlet: 'mroute' },
      { path: 'CustomerMaps-AddEdit', component: CustomerMapcodeAddeditComponent, outlet: 'mroute' },
      { path: 'CustomerCentrics-AddEdit', component: CustomerCentricscoreAddeditComponent, outlet: 'mroute' },
      { path: 'Contacts-AddEdit', component: ContactsAddeditComponent, outlet: 'mroute' },
      { path: '', component: MaintestComponent, outlet: 'mroute'},
      // delete area here
      { path: 'Departments-Delete', component: DepartmentDeleteComponent, outlet: 'mroute' },
      { path: 'ProjectCategories-Delete', component: ProjectcategoryDeleteComponent, outlet: 'mroute' },
      { path: 'CustomerMaps-Delete', component: CustomerMapcodeDeleteComponent, outlet: 'mroute' },
      { path: 'CustomerCentrics-Delete', component: CustomerCentricscoreDeleteComponent, outlet: 'mroute' },
      { path: 'Contacts-Delete', component: ContactsDeleteComponent, outlet: 'mroute' },
      { path: '', component: MaintestComponent, outlet: 'mroute'},
    ]  
  },
  {
    path:'Search',component:SearchComponent,
  },
  {
    path:'Main',component:MainComponent
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
