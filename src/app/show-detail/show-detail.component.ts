import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { FormBuilder } from '@angular/forms';
import {AppComponent} from "../app.component";
import {FormService} from "../form.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginComponent} from "../login/login.component";
@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  flag:boolean ;
  username;
  detail = JSON.parse(window.localStorage.getItem('user'));

  constructor( private router: Router,private fb: FormBuilder,public appComponent: AppComponent, public snackBar: MatSnackBar,private formservice: FormService) {
    if(this.appComponent.flag == true || this.appComponent.flag2 == false){
      this.router.navigate(['/login']);
    }

  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
  ngOnInit() {

  }

  edit(){
    this.router.navigate(['/insert']);
    this.openSnackBar("Data edited successfully", "Dismiss");
  }

  delete(){
    localStorage.clear();
    // location.reload();

    this.openSnackBar("Data has been deleted", "Dismiss");

    this.router.navigateByUrl('/insert');

  }

  deleteUser(){
  // location.reload();

  this.openSnackBar("User has been deleted","Dismiss");
  this.username = window.localStorage.getItem('username');
  console.log("from component:"+this.username);
    this.formservice.deleteUser(this.username)
      .then(result=>{

        console.warn(result);
      })
      .catch(
        err => this.openSnackBar("User Deletion failed", "Dismiss")
      );
    this.appComponent.flag = true;
    this.appComponent.flag2 = false;
  this.router.navigateByUrl('/signup')
  }
}
