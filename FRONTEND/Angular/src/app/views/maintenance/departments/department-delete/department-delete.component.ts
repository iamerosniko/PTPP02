import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../../../../services/services'
import { Department } from '../../../../entities/entities'

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.css']
})
export class DepartmentDeleteComponent implements OnInit {

  depBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['Departments']}}])
  };

  departmentID:string; // for getting ID of a department if route is for edit
  department:Department={};
  
  constructor(private router:Router,private deptSvc : DepartmentService,
   private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.departmentID = this.activatedRoute.snapshot.params['departmentID'];
    this.getDependencies();
  }

  async getDependencies(){
    this.department = <Department> await this.deptSvc.getDepartment(this.departmentID);
  }

  async delete(){
    var temp = <Department> await this.deptSvc.deleteDepartment(this.departmentID);
    if(temp!=null){
      await alert("Successfully deleted!");
      this.depBack();
    }
  }
}
