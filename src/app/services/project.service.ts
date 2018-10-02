//this is the sample template that can be used when calling a businessworkflow api

import { Injectable } from '@angular/core';
import { ClientApiService } from './clientapi.service'; 
import { ClientApiSettings } from './clientapi.settings'; 
import { Projects } from '../entities/entities';

@Injectable()
export class ProjectService {

  constructor(private api:ClientApiService) {
    //uncomment api.authorizedHeader() if AD Authentication is enabled.
    //use api.normalHeader() if anonymous authentication is enabled.
    //api.authorizedHeader();
  }

  getMapcodes() {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Projects")
    return this.api.getAll();
  }

  getMapcode(id: string) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Projects")
    return this.api.getOne(id);
  }

  postMapcode(data: Projects) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Projects")
    var body = JSON.stringify(data);
    return this.api.postData(body);
  } 

  putMapcode(data: Projects) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Projects")
    var body = JSON.stringify(data);
    return this.api.putData(data.ProjectID.toString(),body );
  }

  deleteMapcode(id: string) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Projects")
    return this.api.deleteData(id);
  }
}
