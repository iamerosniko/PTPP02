import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-contacts-delete',
  templateUrl: './contacts-delete.component.html',
  styleUrls: ['./contacts-delete.component.css']
})
export class ContactsDeleteComponent implements OnInit {

  conBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute':['Contacts']}}])
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
