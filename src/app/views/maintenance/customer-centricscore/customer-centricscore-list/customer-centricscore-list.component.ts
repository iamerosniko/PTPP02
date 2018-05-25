import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-customer-centricscore-list',
  templateUrl: './customer-centricscore-list.component.html',
  styleUrls: ['./customer-centricscore-list.component.css']
})
export class CustomerCentricscoreListComponent implements OnInit {

  cuscenDetails(){
    this.router.navigate(['../Maintenance', {outlets:{'mroute': ['CustomerCentrics-AddEdit']}}])
  }

  cuscenDelete(){
    this.router.navigate(['../Maintenance', {outlets:{'mroute': ['CustomerCentrics-Delete']}}])
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
