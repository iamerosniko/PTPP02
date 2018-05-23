import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceComponent,MaintestComponent } from './views/maintenance/maintenance'
const routes: Routes = [
  { 
    path:'Maintenance',component:MaintenanceComponent,
    children: [
      { path: 'maintest1', component: MaintestComponent, outlet: 'mroute' },
      { path: 'maintest2', component: MaintestComponent, outlet: 'mroute' },
      { path: 'maintest3', component: MaintestComponent, outlet: 'mroute' },
      { path: 'maintest4', component: MaintestComponent, outlet: 'mroute' },
      { path: 'maintest5', component: MaintestComponent, outlet: 'mroute' }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
