//this is the sample template that can be used when calling a businessworkflow api

import { Injectable } from '@angular/core';
import { ClientApiService } from './clientapi.service'; 
import { ClientApiSettings } from './clientapi.settings'; 
import { Category } from '../entities/entities';

@Injectable()
export class ProjectDependenciesService {

  constructor(private api:ClientApiService) {
    //uncomment api.authorizedHeader() if AD Authentication is enabled.
    //use api.normalHeader() if anonymous authentication is enabled.
    //api.authorizedHeader();
  }

  getDependencies() {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("ProjectDependencies")
    return this.api.getAll();
  }

}
