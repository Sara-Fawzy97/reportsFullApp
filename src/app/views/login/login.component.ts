import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
token:any
  constructor(private authService:AuthService,private router:Router) { }

  logIn(credentials:any){
    this.authService.logIn(credentials).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.token=res.token
        localStorage.setItem('token',this.token)
        this.router.navigateByUrl('/profile')
      },
      error(httpError){
        console.log(httpError)
      }
    })
  }

  ngOnInit(): void {
  }

}
