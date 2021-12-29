import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reporter } from '../interfaces/reporterInterface';

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

  getToken(){
    return localStorage.getItem('token')
  }

  //to logout
logout(){
  return this.http.delete(this.url+'logout')
}

//to get user
getProfile(){
return this.http.get<Reporter>(this.url+"profile")
}
}

