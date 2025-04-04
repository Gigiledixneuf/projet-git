import {Component, EventEmitter, inject, Input, output, Output} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ArticleApi} from '../models/article-api';
import {NgFor} from '@angular/common';
import {ArticleService} from '../services/article.service';
import { ShareButtonsComponent } from '../share-button/share-button.component';

@Component({
  selector: 'app-article',
  imports: [RouterLink, NgFor, ShareButtonsComponent],
  templateUrl: './article.component.html',
  standalone: true,
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input() article!: ArticleApi;
  @Output() refreshPage = new EventEmitter();

  private articleService = inject(ArticleService)

  async onLike() {

    console.log(localStorage.getItem('token'))

    try {
      await this.articleService.likeArticle({
        articleId: this.article.id
      })
      // permet d'informer au composant parent qu'il  doit modifer la page
      this.refreshPage.emit()
    } catch (e) {
      console.log('error', e)
    }
  }

  // Function pour récupérer l'URL de l'article
  getArticleUrl(): string{
    return `${window.location.origin}/article/${this.article.id}`;
  }

}
