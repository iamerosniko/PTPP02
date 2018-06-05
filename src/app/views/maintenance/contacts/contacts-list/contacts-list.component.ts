import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ContactService } from '../../../../services/services';
import { Contact } from '../../../../entities/entities';
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts:Contact[]=[];

  conDetails(con:Contact){
    if(con==null)
      this.router.navigate(['../Maintenance', {outlets: {'mroute': ['ContactsNew']}}]);
    else
      this.router.navigate(['../Maintenance', {outlets: {'mroute': ['ContactsEdit',con.ContactID]}}]);
  }

  conDelete(con:Contact){
    this.router.navigate(['../Maintenance', {outlets: {'mroute':['ContactsDelete',con.ContactID]}}])
  }

    constructor(private router:Router,private conSvc: ContactService) { }

  async ngOnInit() {
    await this.getDependencies();
  }

  async getDependencies(){
    this.contacts = <Contact[]> await this.conSvc.getContacts();
  }
}
