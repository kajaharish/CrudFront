import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {debug} from "util";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  statuscode = 200;
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  flag1 = false;

  saveUser(data) {
    this.flag1 =true;
    // alert("inside formservice");
    return this.http.post(`${this.url}/signup123`,data).toPromise();


  }
  authenticateUser(data1){
    // debugger
    // console.log("Insider authenticate user funciton");

    return this.http.post( `${this.url}/login`,data1).toPromise();

  }

  deleteUser(passId){
    console.warn(passId);
    return this.http.delete(`${this.url}/delete?id=${passId}`).toPromise();
  }
}
