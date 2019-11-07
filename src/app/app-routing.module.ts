import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnterDetailComponent} from "./enter-detail/enter-detail.component";
import {ShowDetailComponent} from "./show-detail/show-detail.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path:'insert', component: EnterDetailComponent},
  {path: 'fetch', component: ShowDetailComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path:'',redirectTo:'signup',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
