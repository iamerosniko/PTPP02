import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-contacts-addedit',
  templateUrl: './contacts-addedit.component.html',
  styleUrls: ['./contacts-addedit.component.css']
})
export class ContactsAddeditComponent implements OnInit {

  conBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['Contacts']}}])
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
