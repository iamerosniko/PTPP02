import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-customer-mapcode-delete',
  templateUrl: './customer-mapcode-delete.component.html',
  styleUrls: ['./customer-mapcode-delete.component.css']
})
export class CustomerMapcodeDeleteComponent implements OnInit {

  cusmapBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['CustomerMaps']}}])
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
