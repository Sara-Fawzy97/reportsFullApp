import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/interfaces/newsInterface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

news:News[]=[]
  constructor(private  newService:NewsService,private router:Router) { }

addNew(data:any){
  this.newService.addNews(data).subscribe({
    next:(res:any)=>{ 
    console.log(res)
    this.router.navigateByUrl('/profile')
    }
  })
}


  ngOnInit(): void {
  }

}
