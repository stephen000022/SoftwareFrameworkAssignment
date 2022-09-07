import { assertPlatform, Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NonNullableFormBuilder } from '@angular/forms';

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

  constructor(private router: Router, private httpClient: HttpClient) {}
  ngOnInit() {}
  public loginfunc() {
    let user = {email:this.email, password: this.password};
    this.httpClient.post(BAKEND_URL + '/login', user, httpOptions)
      .subscribe((data: any) => {
        alert("posting: " +JSON.stringify(user));
        alert("postRes: " +JSON.stringify(data));
        if (data.ok) {
          sessionStorage.setItem('username', data.username);
          sessionStorage.setItem('valid', data.ok.toString());
          sessionStorage.setItem('id', data.id.toString());
          sessionStorage.setItem('role', data.role);
          this.router.navigateByUrl('/profile');
        } else {
          alert('Sorry, username or password is not valid')
        }   
    });
  }
}
