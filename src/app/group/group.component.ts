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
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  username = "";
  role = "";

  constructor(private router: Router, private httpClient: HttpClient) { 
    if (!(sessionStorage.getItem('valid')=="true")){
      alert("login please");
      this.router.navigateByUrl("/login");
    }
    this.username = sessionStorage.getItem('username')!;
    this.role = sessionStorage.getItem('role')!;
  }

  ngOnInit(): void {
  }

  creategroup () {
    let user = { username: this.username, role: this.role};
    this.httpClient.post(BAKEND_URL + '/group', user, httpOptions)
      .subscribe((k: any) => {alert(JSON.stringify(k));
      });
    }
}
