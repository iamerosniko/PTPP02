import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-customer-centricscore-delete',
  templateUrl: './customer-centricscore-delete.component.html',
  styleUrls: ['./customer-centricscore-delete.component.css']
})
export class CustomerCentricscoreDeleteComponent implements OnInit {

  cuscenBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['CustomerCentrics']}}])
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
