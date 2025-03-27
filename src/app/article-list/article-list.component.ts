import { Component, inject } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { NgFor } from '@angular/common';
import { ArticleService } from '../services/article.service';
import { ArticleApi } from '../models/article-api';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-article-list',
  imports: [ArticleComponent, NgFor, RouterLink, FooterComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})

export class ArticleListComponent {
  articles!: ArticleApi[];
  service:ArticleService = inject(ArticleService);     
   
  ngOnInit(){
    this.service.getAll().then((articleApi:ArticleApi[])=>{
      this.articles = articleApi
    })
  }

// export class ArticleListComponent {
//   articles!: ArticleApi[];
//   service:ArticleService = inject(ArticleService);     
   
//   ngOnInit(){
//     this.service.getAll().then((articleApi:ArticleApi[])=>{
//       this.articles = articleApi
//     })
//   }

  
}
