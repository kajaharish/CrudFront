import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterDetailComponent } from './enter-detail/enter-detail.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatButtonModule} from "@angular/material/button";
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatChipsModule} from "@angular/material/chips";
import {FormService} from "./form.service";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule,MatSnackBar, MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatInputModule, } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    EnterDetailComponent,
    ShowDetailComponent,
    SignUpComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,MatSnackBarModule,
    MatProgressBarModule,
    MatChipsModule,
    HttpClientModule,



  ],
  providers: [FormService, LoginComponent,AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
