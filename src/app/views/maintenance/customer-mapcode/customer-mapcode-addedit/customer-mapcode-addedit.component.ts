import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-customer-mapcode-addedit',
  templateUrl: './customer-mapcode-addedit.component.html',
  styleUrls: ['./customer-mapcode-addedit.component.css']
})
export class CustomerMapcodeAddeditComponent implements OnInit {

  cusmapBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['CustomerMaps']}}])
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
