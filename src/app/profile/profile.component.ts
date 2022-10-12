import { assertPlatform, Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NonNullableFormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { user } from '../user';
const httpOptions = {
 headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

const BAKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id = 0;
  username = "";
  role = "";
  email = "";
  password = ""; 
  user: user[] = [];

  constructor(private router: Router, private httpClient: HttpClient, private userservice: UserService) { 
    //if (!(sessionStorage.getItem('id')=="true")){
      //alert("login please");
      //this.router.navigateByUrl("/login");
    //}
    //this.username = sessionStorage.getItem('username')!;
    //this.role = sessionStorage.getItem('role')!;
    //this.id = Number(sessionStorage.getItem('id'));
    //this.email = sessionStorage.getItem('email')!;
    //this.password = sessionStorage.getItem('password')!;
   }

  ngOnInit(): void {
  }

  //editFunc () {
    //let userobj = {
      //'id': this.id,
      //'username': this.username, 
     //'role': this.role
    //}
    //sessionStorage.setItem('username', this.username);
    //sessionStorage.setItem('role', this.role);
    //sessionStorage.setItem('id', this.id.toString());

    //this.httpClient.post(BAKEND_URL + '/afterlogin', userobj,  httpOptions)
      //.subscribe((m: any) => {alert(JSON.stringify(m));});
  //}

  getUser(): void {
    console.log("finding");
    this.userservice.userFind().subscribe(data => {
      this.user = data;
    });
  };

  deleteUser(user: user){
    this.userservice.userDelete({_id: user.id});
    console.log({_id: user.id});
    let i = this.user.indexOf(user);
    this.user.splice(i,1);
  }

  updateUser(user: user){
    localStorage.removeItem('user');
    delete user.id;
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['useredit']);
  }
}
