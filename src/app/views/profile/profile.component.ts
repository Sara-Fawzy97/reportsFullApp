import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/interfaces/newsInterface';
import { Reporter } from 'src/app/interfaces/reporterInterface';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  reporter:Reporter={}
  news:News[]=[]

  constructor(private authService:AuthService,private newsService:NewsService ) { }

getProfile(){
  this.authService.getProfile().subscribe({
    next:(res:any)=>{
      console.log(res)
      this.reporter=res
    },error:(error:any)=>{
      console.log(error)
    }

  })
}

getNews(){
  this.newsService.getNews().subscribe({
    next:(res:any)=>{
         console.log(res)
         this.news=res
    },error:(error:any)=>{
          console.log(error)
    }
  })
}

deleteNew(news:string,i:number){
this.newsService.deleteNews(news).subscribe({
  next:()=>{
    this.news.splice(i,1)
  },error:(error:any)=>{
    console.log(error)
  }

})
}

  ngOnInit(): void {
    this.getProfile()
    this.getNews()
  }

}
