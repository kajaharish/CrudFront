import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnterDetailComponent} from "./enter-detail/enter-detail.component";
import {ShowDetailComponent} from "./show-detail/show-detail.component";


const routes: Routes = [
  {path:'insert',component: EnterDetailComponent},
  {path: 'fetch', component: ShowDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
