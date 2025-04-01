import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ArticleApi } from '../../models/article-api';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  articles: ArticleApi[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.loadThreeArticles();
  }

  async loadThreeArticles(): Promise<void> {
    try {
      this.articles = await this.articleService.getTroisArticle();
    } catch (error) {
      console.error('Error loading articles:', error);
    }
  }
}