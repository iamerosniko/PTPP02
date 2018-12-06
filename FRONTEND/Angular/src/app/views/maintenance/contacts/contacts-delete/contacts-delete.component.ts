import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../../../services/services'
import { Contact } from '../../../../entities/entities'
@Component({
  selector: 'app-contacts-delete',
  templateUrl: './contacts-delete.component.html',
  styleUrls: ['./contacts-delete.component.css']
})
export class ContactsDeleteComponent implements OnInit {

  conBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute':['Contacts']}}])
  }

  contactID:string; // for getting ID of a department if route is for edit
  contact:Contact={};

  constructor(private router:Router,private conSvc : ContactService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.contactID = this.activatedRoute.snapshot.params['contactsID'];
    this.getDependencies();
  }

  async getDependencies(){
    this.contact = <Contact> await this.conSvc.getContact(this.contactID);
  }

  async delete(){
    var temp = <Contact> await this.conSvc.deleteContact(this.contactID);
    if(temp!=null){
      await alert("Successfully deleted!");
      this.conBack();
    }
  }
}
