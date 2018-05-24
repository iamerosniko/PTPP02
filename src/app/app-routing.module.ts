import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceComponent,MaintestComponent, DepartmentListComponent, ProjectcategoryListComponent, CustomerMapcodeListComponent, CustomerCentricscoreListComponent, ContactsListComponent } from './views/maintenance/maintenance'
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
      // { path: 'Departments', component: MaintestComponent, outlet: 'mroute' },
      // { path: 'ProjectCategories', component: MaintestComponent, outlet: 'mroute' },
      // { path: 'CustomerMaps', component: MaintestComponent, outlet: 'mroute' },
      // { path: 'CustomerCentrics', component: MaintestComponent, outlet: 'mroute' },
      // { path: 'Contacts', component: MaintestComponent, outlet: 'mroute' },
      // { path: '', component: MaintestComponent, outlet: 'mroute'},
      // delete area here
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
