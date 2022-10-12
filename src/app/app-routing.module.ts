import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { GroupComponent } from './group/group.component';
import { RegisterComponent } from './register/register.component';
import { UsereditComponent } from './useredit/useredit.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent}, 
  {path:'profile', component: ProfileComponent},
  {path: 'group', component: GroupComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'useredit', component: UsereditComponent}
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
