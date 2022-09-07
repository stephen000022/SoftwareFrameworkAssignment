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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id = 0;
  username = "";
  role = "";

  constructor(private router: Router, private httpClient: HttpClient) { 
    if (!(sessionStorage.getItem('valid')=="true")){
      alert("login please");
      this.router.navigateByUrl("/login");
    }
    this.username = sessionStorage.getItem('username')!;
    this.role = sessionStorage.getItem('role')!;
    this.id = Number(sessionStorage.getItem('id'));
   }

  ngOnInit(): void {
  }

  editFunc () {
    let userobj = {
      'id': this.id,
      'username': this.username, 
      'role': this.role
    }
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('role', this.role);
    sessionStorage.setItem('id', this.id.toString());

    this.httpClient.post(BAKEND_URL + '/afterlogin', userobj,  httpOptions)
      .subscribe((m: any) => {alert(JSON.stringify(m));});


  }
}
