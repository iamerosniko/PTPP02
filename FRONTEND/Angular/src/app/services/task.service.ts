//this is the sample template that can be used when calling a businessworkflow api

import { Injectable } from '@angular/core';
import { ClientApiService } from './clientapi.service'; 
import { ClientApiSettings } from './clientapi.settings'; 
import { Tasks } from '../entities/entities';

@Injectable()
export class TaskService {

  constructor(private api:ClientApiService) {
    //uncomment api.authorizedHeader() if AD Authentication is enabled.
    //use api.normalHeader() if anonymous authentication is enabled.
    //api.authorizedHeader();
  }

  getTasks() {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Tasks")
    return this.api.getAll();
  }

  getTask(id: string) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Tasks")
    return this.api.getOne(id);
  }

  postTask(data: Tasks) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Tasks")
    var body = JSON.stringify(data);
    return this.api.postData(body);
  } 

  putTask(data: Tasks) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Tasks")
    var body = JSON.stringify(data);
    return this.api.putData(data.TaskID.toString(),body );
  }

  deleteTask(id: string) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Tasks")
    return this.api.deleteData(id);
  }
}
