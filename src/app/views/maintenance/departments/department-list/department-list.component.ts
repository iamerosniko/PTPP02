import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  depDetails(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['Departments-AddEdit']}}])
  };

  depDelete(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['Departments-Delete']}}])
  };

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
