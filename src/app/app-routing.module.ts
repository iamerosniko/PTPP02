import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceComponent,MaintestComponent } from './views/maintenance/maintenance'
import { MainComponent } from './views/main/main'
import { SearchComponent } from './views/search/search'
import { ReportsComponent } from './views/reports/reports'
const routes: Routes = [
  { 
    path:'Maintenance',component:MaintenanceComponent,
    children: [
      { path: 'Departments', component: MaintestComponent, outlet: 'mroute' },
      { path: 'ProjectCategories', component: MaintestComponent, outlet: 'mroute' },
      { path: 'CustomerMaps', component: MaintestComponent, outlet: 'mroute' },
      { path: 'CustomerCentrics', component: MaintestComponent, outlet: 'mroute' },
      { path: 'Contacts', component: MaintestComponent, outlet: 'mroute' },
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
