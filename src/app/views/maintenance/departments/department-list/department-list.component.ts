import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../../../../services/services';
import { Department } from '../../../../entities/entities';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments:Department[]=[];
  
  /* ROUTING SIDE */
  depDetails(a:Department){
    if(a==null)
      this.router.navigate(['../Maintenance', {outlets: {'mroute': ['DepartmentsNew']}}]);
    else
      this.router.navigate(['../Maintenance', {outlets: {'mroute': ['DepartmentsEdit',a.DepartmentID]}}]);
  };

  depDelete(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['Departments-Delete']}}])
  };
  /* FUNCTIONALITY SIDE */
  constructor(private router:Router,private deptSvc: DepartmentService) { }

  async ngOnInit() {
    await this.getDependencies();
  }

  async getDependencies(){
    this.departments = <Department[]> await this.deptSvc.getDepartments();
  }
}
