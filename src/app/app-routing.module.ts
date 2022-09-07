import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { GroupComponent } from './group/group.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent}, 
  {path:'profile', component: ProfileComponent},
  {path: 'group', component: GroupComponent}
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
