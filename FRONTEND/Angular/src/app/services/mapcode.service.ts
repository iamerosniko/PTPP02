//this is the sample template that can be used when calling a businessworkflow api

import { Injectable } from '@angular/core';
import { ClientApiService } from './clientapi.service'; 
import { ClientApiSettings } from './clientapi.settings'; 
import { MapCode } from '../entities/entities';

@Injectable()
export class MapCodeService {

  constructor(private api:ClientApiService) {
    //uncomment api.authorizedHeader() if AD Authentication is enabled.
    //use api.normalHeader() if anonymous authentication is enabled.
    //api.authorizedHeader();
  }

  getMapcodes() {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_MapCodes")
    return this.api.getAll();
  }

  getMapcode(id: string) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_MapCodes")
    return this.api.getOne(id);
  }

  postMapcode(data: MapCode) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_MapCodes")
    var body = JSON.stringify(data);
    return this.api.postData(body);
  } 

  putMapcode(data: MapCode) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_MapCodes")
    var body = JSON.stringify(data);
    return this.api.putData(data.MapCodeID.toString(),body );
  }

  deleteMapcode(id: string) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETAPIURL("PP_MapCodes")
    return this.api.deleteData(id);
  }
}
