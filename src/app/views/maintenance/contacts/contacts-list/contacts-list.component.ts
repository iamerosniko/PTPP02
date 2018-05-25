import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  conDetails(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['Contacts-AddEdit']}}])
  }

  conDelete(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute':['Contacts-Delete']}}])
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
