import {Component, Input, OnInit} from '@angular/core';
import {FormService} from "./form.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Crud ';

  flag:boolean;
  flag2:boolean;


  ngOnInit(): void {
    localStorage.clear();
    this.flag = true;
    this.flag2 = false;
  }


}
