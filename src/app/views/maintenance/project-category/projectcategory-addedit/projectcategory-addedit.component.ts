import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-projectcategory-addedit',
  templateUrl: './projectcategory-addedit.component.html',
  styleUrls: ['./projectcategory-addedit.component.css']
})
export class ProjectcategoryAddeditComponent implements OnInit {

  procatBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['ProjectCategories']}}])
  };

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
