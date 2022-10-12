import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newuser = { username:'', role:'', email:'', password: '' };
  constructor(private userservice: UserService) { }

  ngOnInit(): void {}

  adduser() {
    this.userservice.userInsert(this.newuser);
  }

}
