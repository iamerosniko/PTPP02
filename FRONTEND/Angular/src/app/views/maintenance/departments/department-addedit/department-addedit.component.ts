import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DepartmentService } from '../../../../services/services'
import { Department } from '../../../../entities/entities'

@Component({
  selector: 'app-department-addedit',
  templateUrl: './department-addedit.component.html',
  styleUrls: ['./department-addedit.component.css']
})
export class DepartmentAddeditComponent implements OnInit {

  depBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['Departments']}}])
  };

  departmentID:string; // for getting ID of a department if route is for edit
  formState:string; // for new / edit label to template
  deptForm = new FormGroup({}); // reactiveform
  department:Department={};

  constructor(private router:Router,private deptSvc : DepartmentService,
    private fb:FormBuilder,private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.router.url.includes("New") ? this.formState ="New" : this.formState = "Edit";
    this.departmentID = this.activatedRoute.snapshot.params['departmentID'];
    this.departmentID!=null ? this.getDependencies() : null;
    this.department.GroupName='JHSS';
    this.deptForm = this.fb.group({
      Department : [this.department.Department,Validators.required],
      GroupName : [this.department.GroupName,Validators.required],
    });
  }

  async getDependencies(){
    this.department = <Department> await this.deptSvc.getDepartment(this.departmentID);
    console.log(this.department)
    
    this.deptForm = this.fb.group({
      DepartmentID:[this.department.DepartmentID],
      Department : [this.department.Department,Validators.required],
      GroupName : [this.department.GroupName],
    })
  }

  async save() {
    this.department=await this.deptForm.value;
    //for comparison
    var result:Department ={};
    if(this.department.DepartmentID==null){
      result = <Department> await this.deptSvc.postDepartment(this.department);
    }
    else{
      result = <Department> await this.deptSvc.putDepartment(this.department);
    }
    console.log(result);
    if(result!=null)
    {
      await alert("Successfully saved!");
      this.depBack();
    }  
  }
}
