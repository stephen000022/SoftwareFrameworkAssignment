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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  //user: user[] = [];

  constructor(private router: Router, private httpClient: HttpClient, private userservice: UserService) {}
  ngOnInit() {
    //this.getdata()
  }

  //getdata() {
    //this.userservice.userFind().subscribe(data => {
      //this.user = data;
    //});
  //}

  public loginfunc() {
    let login = {email: this.email, password: this.password};
    this.httpClient.post(BAKEND_URL + '/login', login, httpOptions)
      .subscribe((data: any) => {
        alert("posting: " +JSON.stringify(login));
        alert("postRes: " +JSON.stringify(data));
        if (data.ok) {
          alert("Go to profile!");
          //sessionStorage.setItem('u', data.username);
          //sessionStorage.setItem('p', data.id);
          //sessionStorage.setItem('role', data.role);
          //sessionStorage.setItem('email', data.role);
          //sessionStorage.setItem('password', data.role);
          this.router.navigateByUrl('/profile');
        } else {
          alert('Sorry, username or password is not valid')
        }   
    });
  }
}
