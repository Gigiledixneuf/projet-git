import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ArticleApi } from '../models/article-api';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

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
      this.articles = await this.articleService.getTrois();
    } catch (error) {
      console.error('Error loading articles:', error);
    }
  }
}