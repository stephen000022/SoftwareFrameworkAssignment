import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { user } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  old = JSON.parse(localStorage.getItem('user')!);
  new = JSON.parse(localStorage.getItem('user')!);

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void {}

  editfunc() {
    this.userservice.userUpdate(this.old, this.new).subscribe(data =>{
      console.log(data);
      this.router.navigate(['']);
    });
  }

}
