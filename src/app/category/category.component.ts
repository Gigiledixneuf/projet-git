import { RouterLink } from '@angular/router';
import { Category } from './../models/category';
import { Component, Input } from '@angular/core';
import { ArticleListComponent } from '../article-list/article-list.component';

@Component({
  selector: 'app-category',
  imports: [RouterLink,ArticleListComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Input() category! : Category


}
