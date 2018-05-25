import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-department-addedit',
  templateUrl: './department-addedit.component.html',
  styleUrls: ['./department-addedit.component.css']
})
export class DepartmentAddeditComponent implements OnInit {

  depBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['Departments']}}])
  };

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
