import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../../../services/services'
import { Contact } from '../../../../entities/entities'
@Component({
  selector: 'app-contacts-addedit',
  templateUrl: './contacts-addedit.component.html',
  styleUrls: ['./contacts-addedit.component.css']
})
export class ContactsAddeditComponent implements OnInit {

  conBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['Contacts']}}])
  }

  contactID:string; // for getting ID of a department if route is for edit
  formState:string; // for new / edit label to template
  contactForm = new FormGroup({}); // reactiveform
  contact:Contact={};

  constructor(private router:Router,private conSvc : ContactService,
    private fb:FormBuilder,private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.router.url.includes("New") ? this.formState ="New" : this.formState = "Edit";
    this.contactID = this.activatedRoute.snapshot.params['contactsID'];
    this.contactID!=null ? this.getDependencies() : null;
    this.contact.GroupName='JHSS';
    this.contactForm = this.fb.group({
      ContactName : [this.contact.ContactName,Validators.required],
      LastName : [this.contact.LastName,Validators.required],
      GroupName : [this.contact.GroupName],
    });
  }

  async getDependencies(){
    this.contact = <Contact> await this.conSvc.getContact(this.contactID);
    console.log(this.contact)
    
    this.contactForm = this.fb.group({
      ContactID:[this.contact.ContactID],
      ContactName : [this.contact.ContactName,Validators.required],
      LastName : [this.contact.LastName,Validators.required],
      GroupName : [this.contact.GroupName],
    })
  }

  async save() {
    this.contact=await this.contactForm.value;
    //for comparison
    var result:Contact ={};
    if(this.contact.ContactID==null){
      result = <Contact> await this.conSvc.postContact(this.contact);
    }
    else{
      result = <Contact> await this.conSvc.putContact(this.contact);
    }
    console.log(result);
    if(result!=null)
    {
      await alert("Successfully saved!");
      this.conBack();
    }  
  }
}
