import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-customer-mapcode-list',
  templateUrl: './customer-mapcode-list.component.html',
  styleUrls: ['./customer-mapcode-list.component.css']
})
export class CustomerMapcodeListComponent implements OnInit {

  cusmapDetails(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['CustomerMaps-AddEdit']}}])
  };

  cusmapDelete(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['CustomerMaps-Delete']}}])
  };

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
