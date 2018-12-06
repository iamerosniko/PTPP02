//this is the sample template that can be used when calling a businessworkflow api

import { Injectable } from '@angular/core';
import { ClientApiService } from './clientapi.service'; 
import { ClientApiSettings } from './clientapi.settings'; 
import { Tasks } from '../entities/entities';

@Injectable()
export class TaskStatusesService {

  constructor(private api:ClientApiService) {
    //uncomment api.authorizedHeader() if AD Authentication is enabled.
    //use api.normalHeader() if anonymous authentication is enabled.
    //api.authorizedHeader();
  }

  getTaskStatuses() {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_TaskStatuses")
    return this.api.getAll();
  }

  getTaskStatus(id: string) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_TaskStatuses")
    return this.api.getOne(id);
  }

  postTaskStatus(data: Tasks) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_TaskStatuses")
    var body = JSON.stringify(data);
    return this.api.postData(body);
  } 

  putTaskStatus(data: Tasks) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_TaskStatuses")
    var body = JSON.stringify(data);
    return this.api.putData(data.TaskID.toString(),body );
  }

  deleteTaskStatus(id: string) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_TaskStatuses")
    return this.api.deleteData(id);
  }
}
