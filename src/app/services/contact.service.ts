//this is the sample template that can be used when calling a businessworkflow api

import { Injectable } from '@angular/core';
import { ClientApiService } from './clientapi.service'; 
import { ClientApiSettings } from './clientapi.settings'; 
import { Contact } from '../entities/entities';

@Injectable()
export class ContactService {

  constructor(private api:ClientApiService) {
    //uncomment api.authorizedHeader() if AD Authentication is enabled.
    //use api.normalHeader() if anonymous authentication is enabled.
    //api.authorizedHeader();
  }

  getContacts() {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Contacts")
    return this.api.getAll();
  }

  getWorkday(employee:string){
    this.api.normalHeader();
    this.api.apiUrl="https://employee-service.apps.cac.pcf.manulife.com/api/employee/firstNameLike/"+employee+"?limit=10"
    return this.api.getAll();
  }

  getContact(id: string) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Contacts")
    return this.api.getOne(id);
  }

  postContact(data: Contact) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Contacts")
    var body = JSON.stringify(data);
    return this.api.postData(body);
  } 

  putContact(data: Contact) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Contacts")
    var body = JSON.stringify(data);
    return this.api.putData(data.ContactID.toString(),body );
  }

  deleteContact(id: string) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Contacts")
    return this.api.deleteData(id);
  }
}
