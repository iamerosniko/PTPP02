import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-projectcategory-list',
  templateUrl: './projectcategory-list.component.html',
  styleUrls: ['./projectcategory-list.component.css']
})
export class ProjectcategoryListComponent implements OnInit {

  procatDetails(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['ProjectCategories-AddEdit']}}])
  };

  procatDelete(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['ProjectCategories-Delete']}}])
  };

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
