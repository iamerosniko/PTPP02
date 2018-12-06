//this is the sample template that can be used when calling a businessworkflow api

import { Injectable } from '@angular/core';
import { ClientApiService } from './clientapi.service'; 
import { ClientApiSettings } from './clientapi.settings'; 
import { Category } from '../entities/entities';

@Injectable()
export class CategoryService {

  constructor(private api:ClientApiService) {
    //uncomment api.authorizedHeader() if AD Authentication is enabled.
    //use api.normalHeader() if anonymous authentication is enabled.
    //api.authorizedHeader();
  }

  getCategories() {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Categories")
    return this.api.getAll();
  }

  getCategory(id: string) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Categories")
    return this.api.getOne(id);
  }

  postCategory(data: Category) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Categories")
    var body = JSON.stringify(data);
    return this.api.postData(body);
  } 

  putCategory(data: Category) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Categories")
    var body = JSON.stringify(data);
    return this.api.putData(data.CategoryID.toString(),body );
  }

  deleteCategory(id: string) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_Categories")
    return this.api.deleteData(id);
  }
}
