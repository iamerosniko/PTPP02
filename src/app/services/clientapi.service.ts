/*

DO NOT MODIFY

*/

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ClientApiSettings } from './clientapi.settings';
@Injectable()
export class ClientApiService {

  public apiUrl = '';
  public headers = new Headers({});

  constructor(private http:Http) { }

  public authorizedHeader(){
    this.headers=new Headers([
      {'authorization':'Bearer '+sessionStorage.getItem('Cache1')},
      {'Content-Type': 'application/json'}
    ]);
  }

  public normalHeader(){

    //Refused to set unsafe header "Access-Control-Request-Method"

    this.headers=new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Credentials':'true',
      'Access-Control-Allow-Methods':'GET,POST,PUT',
      'Access-Control-Allow-Headers':'Access-Control-Allow-Headers',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT',
      'Etag' :"3GgqcTj/W6Z2IZ5uqkzEAg=="
    });
  }

  public sampl(){
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
  });
  }

  async getAll() {  
   return await this.http
    .get(this.apiUrl, {headers: this.headers})
    .toPromise()
    .then(res=>res.json());
  }

  async getOne(id:string){
    var apiurl= this.apiUrl +'/'+id
    return this.http
      .get(apiurl, {headers: this.headers})
      .toPromise()
      .then(res=>res.json());
  }  

  async postData(body:string){
    return this.http
      .post(this.apiUrl, body, {headers: this.headers})
      .toPromise()
      .then(res=>res.json());
  }

  async putData(ID:string,body:string){
    const url = `${this.apiUrl}/${ID}`;
    return this.http
      .put(url, body, {headers: this.headers})
      .toPromise()
      .then(res=>res.json());
  }

  async deleteData(ID:string){
    const url = `${this.apiUrl}/${ID}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(res=>res.json());
  }
}
