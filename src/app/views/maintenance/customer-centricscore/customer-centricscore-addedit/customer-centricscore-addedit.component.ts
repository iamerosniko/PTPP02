import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-customer-centricscore-addedit',
  templateUrl: './customer-centricscore-addedit.component.html',
  styleUrls: ['./customer-centricscore-addedit.component.css']
})
export class CustomerCentricscoreAddeditComponent implements OnInit {

  cuscenBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['CustomerCentrics']}}])
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
