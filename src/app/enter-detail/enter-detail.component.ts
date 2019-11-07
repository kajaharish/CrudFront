import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {Router} from "@angular/router"
import {ShowDetailComponent} from "../show-detail/show-detail.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormService} from "../form.service";
import {AppComponent} from "../app.component";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-enter-detail',
  templateUrl: './enter-detail.component.html',
  styleUrls: ['./enter-detail.component.css']
})
export class EnterDetailComponent implements OnInit {
  // passId:String = this.logincomponent.passId;
  name = JSON.parse(localStorage.getItem('credential'));
  flags:boolean=true;
  profileForm = this.fb.group({
    name: ['',[Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
    age: ['',[Validators.required, Validators.pattern(/([2-9][0-9])/)]],  //20-99
    number:['',[Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]]
  });


  constructor(private fb: FormBuilder, private router: Router,public appComponent: AppComponent) {

    if(this.appComponent.flag == true || this.appComponent.flag2 == false){
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {

    setTimeout(() => {
      this.flags=false
    }, 3000);

    if(JSON.parse(window.localStorage.getItem('user'))){
      var detail = JSON.parse(window.localStorage.getItem('user'));
      this.profileForm.patchValue({
        name: detail.name,
        age: detail.age,
        number: detail.number
      })
    }
  }

  validateName() {
    return this.profileForm.get('name').hasError('required') ? 'Field is required' :
      this.profileForm.get('name').hasError('pattern') ? 'please type only alphabets' : '';
  }

  validateAge(){
    return this.profileForm.get('age').hasError('required') ? 'Field is required':
      this.profileForm.get('age').hasError('pattern') ? 'please type age between 20-99' : '';
  }

  validatePhone(){
    return this.profileForm.get('number').hasError('required') ? 'Field is required' :
      this.profileForm.get('number').hasError('pattern') ? 'please type only numbers' :
        this.profileForm.get('number').hasError('minlength') ? 'Minimum 10 digit' : '';
  }

  onSubmit(){


      if(this.profileForm.valid){
        // alert("form submitted by user");
        // console.warn(this.profileForm.value);
        // alert(window.localStorage.getItem('username'));
        // sessionStorage.setItem('user',this.profileForm.value);
        window.localStorage.setItem('user',JSON.stringify(this.profileForm.value));
        //this.profileForm.reset();
        this.router.navigate(['/fetch']);

    }
  }

}
