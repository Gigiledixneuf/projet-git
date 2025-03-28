import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArticleApi } from '../models/article-api';
import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { ArticleComponent } from "../article/article.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-article-by-categorie',
  imports: [RouterLink, NgFor,ArticleComponent],
  templateUrl: './article-by-categorie.component.html',
  styleUrl: './article-by-categorie.component.css'
})
export class ArticleByCategorieComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  articles!: ArticleApi[]|undefined ;
  service: CategoryService = inject(CategoryService);
  articleId = -1;

  async ngOnInit() {
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    const categories = await this.service.getArticlebyCategory(this.articleId);
    this.articles = categories.articles;
    // console.log(this.articles);
  }
}
