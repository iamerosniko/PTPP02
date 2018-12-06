//this is the sample template that can be used when calling a businessworkflow api

import { Injectable } from '@angular/core';
import { ClientApiService } from './clientapi.service'; 
import { ClientApiSettings } from './clientapi.settings'; 
import { Department } from '../entities/entities';

@Injectable()
export class DepartmentService {

  constructor(private api:ClientApiService) {
    //uncomment api.authorizedHeader() if AD Authentication is enabled.
    //use api.normalHeader() if anonymous authentication is enabled.
    //api.authorizedHeader();
  }

  getDepartments() {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Departments")
    return this.api.getAll();
  }

  getDepartment(id: string) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Departments")
    return this.api.getOne(id);
  }

  postDepartment(data: Department) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Departments")
    var body = JSON.stringify(data);
    return this.api.postData(body);
  } 

  putDepartment(data: Department) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Departments")
    var body = JSON.stringify(data);
    return this.api.putData(data.DepartmentID.toString(),body );
  }

  deleteDepartment(id: string) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Departments")
    return this.api.deleteData(id);
  }
}
