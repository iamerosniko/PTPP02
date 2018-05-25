import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-projectcategory-delete',
  templateUrl: './projectcategory-delete.component.html',
  styleUrls: ['./projectcategory-delete.component.css']
})
export class ProjectcategoryDeleteComponent implements OnInit {

  procatBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['ProjectCategories']}}])
  };

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
