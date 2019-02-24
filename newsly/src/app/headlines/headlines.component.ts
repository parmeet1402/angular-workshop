import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from} from 'rxjs';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  url;
  KEY = '19c1a8e759a14d0b8b7373e6e5979f85';
  baseURl = 'https://newsapi.org/v2/top-headlines?country=au';
  headlineText = "Latest news";
  news;

  constructor(private http: HttpClient) { 
    this.url = this.baseURl + '&apiKey='+this.KEY;
  }
  
  ngOnInit() {
    this.fetchNews();
  }

  
  
  fetchNews(){
     this.http.get(this.url).subscribe(data => this.news = data['articles']); 
  }
}