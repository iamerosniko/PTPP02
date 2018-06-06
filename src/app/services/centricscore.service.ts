//this is the sample template that can be used when calling a businessworkflow api

import { Injectable } from '@angular/core';
import { ClientApiService } from './clientapi.service'; 
import { ClientApiSettings } from './clientapi.settings'; 
import { CentricScore } from '../entities/entities';

@Injectable()
export class CentricScoreService {

  constructor(private api:ClientApiService) {
    //uncomment api.authorizedHeader() if AD Authentication is enabled.
    //use api.normalHeader() if anonymous authentication is enabled.
    //api.authorizedHeader();
  }

  getCentricScores() {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETBWURL("FECentricScores")
    return this.api.getAll();
  }

  getCentricScore(id: string) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETBWURL("FECentricScores")
    return this.api.getOne(id);
  }

  postCentricScore(data: CentricScore) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETBWURL("FECentricScores")
    var body = JSON.stringify(data);
    return this.api.postData(body);
  } 

  putCentricScore(data: CentricScore) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETBWURL("FECentricScores")
    var body = JSON.stringify(data);
    return this.api.putData(data.CentricScoreID.toString(),body );
  }

  deleteCentricScore(id: string) {
    this.api.normalHeader();
    this.api.apiUrl=ClientApiSettings.GETBWURL("FECentricScores")
    return this.api.deleteData(id);
  }
}
