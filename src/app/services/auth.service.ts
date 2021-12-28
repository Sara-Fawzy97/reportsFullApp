import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='http://localhost:3000/'

  constructor(private http:HttpClient) { }

  signUp(credentials:any){
    return this.http.post(this.url+"reporters",credentials)
  }

  logIn(credentials:any){
    return this.http.post(this.url+'login',credentials)
  }
}
