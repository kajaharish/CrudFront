import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {error} from "util";

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  url = 'http://localhost:3000';
  data = {};
  constructor(private http: Http) {
  }

  saveUser(data) {
    return this.http.post(`${this.url}/signup`,data)
      .toPromise()
  }

}
