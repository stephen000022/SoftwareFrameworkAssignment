import { assertPlatform, Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NonNullableFormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

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
  messagecontent = "";
  message:string[] = [];
  ioConnection:any;


  constructor(private router: Router, private httpClient: HttpClient, private userservice: UserService) { 
    //if (!(sessionStorage.getItem('valid')=="true")){
      //alert("login please");
      //this.router.navigateByUrl("/login");
    //}
    //this.username = sessionStorage.getItem('username')!;
    //this.role = sessionStorage.getItem('role')!;
  }

  ngOnInit(): void {
    this.initIoConnection();
  }

  creategroup () {
    let user = { username: this.username, role: this.role};
    this.httpClient.post(BAKEND_URL + '/group', user, httpOptions)
      .subscribe((k: any) => {alert(JSON.stringify(k));
      });
  }

  initIoConnection() {
    this.ioConnection = this.userservice.getMessage()
    .subscribe((message:any) => {
      this.message.push(message);
    });
  }

  public chat() {
    if(this.messagecontent) {
      this.userservice.send(this.messagecontent);
      
      this.messagecontent = "";
    } else {
      console.log("no Message");
    }
  }
}
