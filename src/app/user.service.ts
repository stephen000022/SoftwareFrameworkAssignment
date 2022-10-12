import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { user } from './user';
import { group } from './group';
import { Observable} from 'rxjs';
import { io } from 'socket.io-client';
const theurl = 'http://localhost:3001';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/';
  private socket: any;
  constructor( private http: HttpClient ) { this.socket = io(theurl); }

  userInsert(prod:any) {
    console.log(prod);
    this.http.post(this.url + 'userInsert', prod)
        .subscribe(res => console.log('Done'));
  }

  userFind(){
    return this.http.get<user[]>(this.url + 'userFind');
  }

  userUpdate(prodQuery:any, userUpdate:any){
  const queryUpdate = {query: prodQuery, update: userUpdate};
  return this.http.put(this.url + '//userUpdate', queryUpdate);
  }

  userDelete(prod:any) {
    console.log(prod);
    this.http.post(this.url + 'userDelete',prod)
        .subscribe(res => console.log('Done'));
  }

  groupInsert(prod:any) {
    console.log(prod);
    this.http.post(this.url + 'groupInsert', prod)
        .subscribe(res => console.log('Done'));
  }

  groupFind(){
    return this.http.get<group[]>(this.url + 'groupFind');
  }

  groupUpdate(prodQuery:any, groupUpdate:any){
  const queryUpdate = {query: prodQuery, update: groupUpdate};
  return this.http.put(this.url + 'groupUpdate', queryUpdate);
  }

  groupDelete(prod:any) {
    console.log(prod);
    this.http.post(this.url + 'groupDelete',prod)
        .subscribe(res => console.log('Done'));
  }

  send(message: string) {
    this.socket.emit('message', message);
    alert(message)
  }

  //sendimage(file: URL) {
    //this.socket.emit('file', file);
  //}

  getMessage() {
    console.log("Get Message");
    return new Observable(observer => {
      this.socket.on('message', (data:any) => {observer.next(data)});
    });
  }
}
