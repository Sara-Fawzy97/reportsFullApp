import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../interfaces/newsInterface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url='http://localhost:3000/'
  
  constructor(private http:HttpClient) { }

  //to get all news
  getNews(){
    return this.http.get<News[]>(this.url+"news")
  }

  //to add new new
  addNews(data:any){
    return this.http.post(this.url+"news",data)
  }

  updateNews(id:string,data:News){
    return this.http.patch(this.url+"news/"+id,data)
  }

  getSingleNew(id:string){
    return this.http.get(this.url+"news/"+id)
  }

  deleteNews(news:string){
    return this.http.delete(this.url+'news/'+news)
  }

}
