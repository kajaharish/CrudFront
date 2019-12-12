import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FormService} from "../form.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  signupform = this.fb.group({
    emailid: ['',[Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    username: ['',[Validators.required, Validators.pattern(/^[A-Za-z0-9 ]{3,20}$/)]],
    password:['',[Validators.required, Validators.pattern(/^[A-Za-z0-9!@#$%^&*()_]{6,20}$/)]]
  });


  constructor(private fb: FormBuilder,private router: Router,private formService:FormService,public snackBar: MatSnackBar ) {

  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.openSnackBar("Please register yourself", "Dismiss");
  }

  onSubmit() {

    // if(this.signupform.valid) {
    //
    //
    //   window.localStorage.setItem('credential', JSON.stringify(this.signupform.value));
    //   console.warn(this.signupform.value);
    //   //this.profileForm.reset();
    //   this.router.navigate(['/login']);
    // }
    if (this.signupform.valid) {
      this.formService.saveUser(this.signupform.value)

        .then(() => {

          this.router.navigate(['/login']);
          this.openSnackBar("Registeration done", "Dismiss");
        })

        .catch(err => alert(err));

    }
  }

  x = "Please enter a password which has a length of 6-20 characters. Special characters supported are: ! @ # $ % ^ & * () _";
  validateEmailId(){
    return this.signupform.get('emailid').hasError('required') ? 'Field is required' :
      this.signupform.get('emailid').hasError('pattern') ? 'Not a valid email address' : '';
  }
  validateUserName(){
    return this.signupform.get('username').hasError('required') ? 'Field is required' :
      this.signupform.get('username').hasError('pattern') ? 'Please type a  minimum of 3 alphanumeric characters only' : '';
  }
  validatePassword(){

    return this.signupform.get('password').hasError('required') ? 'Field is required' :
      this.signupform.get('password').hasError('pattern') ? this.x : '';
  }

}
