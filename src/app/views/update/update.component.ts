import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/interfaces/newsInterface';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private newService:NewsService, private route:ActivatedRoute,private router:Router) { }
news:News={}
id:string=this.route.snapshot.params['id']


getSingleNew(){

this.newService.getSingleNew(this.id).subscribe({
  next:(res:any)=>{
    console.log(res)
    this.news=res
  }
})
}

updateNews(data:News){
  this.newService.updateNews(this.id,data).subscribe({
    next:()=>{
      this.router.navigateByUrl('/profile')
    }
  })
}

  ngOnInit(): void {
  this.getSingleNew()
  }

}
