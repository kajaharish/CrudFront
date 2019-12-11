import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";
import {FormService} from "../form.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // passId:String ;
  loginform = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9 ]{3,20}$/)]],
    pass: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9!@#$%^&*()_]{6,20}$/)]]
  });

  constructor(private fb: FormBuilder, private router: Router, public appComponent: AppComponent,private formservice: FormService,public snackBar: MatSnackBar ) {  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

  ngOnInit() {


  }

  credential = JSON.parse(localStorage.getItem('credential'));


  onSubmit() {



    // if (!this.credential) {
    //   alert("No credential stored");
    // } else if (this.loginform.get('uname').value == this.credential.username && this.loginform.get('pass').value == this.credential.password) {
    //   alert("logged in");
    //   this.router.navigate(["insert"]);
    //   this.appComponent.flag = false;
    //   this.appComponent.flag2 = true;
    //
    // }
    // debugger;
    this.formservice.authenticateUser(this.loginform.value)
      .then(result=>{

        // window.localStorage.setItem('username', result.username);
        this.router.navigate(['/insert']);

        this.openSnackBar("Login successfull, Welcome ", "Dismiss");
        this.appComponent.flag = false;
        this.appComponent.flag2 = true;
      })
      .catch(
          err => this.openSnackBar("Authentication Failed", "Dismiss")
      );
  }
}
