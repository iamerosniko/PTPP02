import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.css']
})
export class DepartmentDeleteComponent implements OnInit {

  depBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['Departments']}}])
  };
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
