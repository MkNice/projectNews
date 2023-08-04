import { Component, ChangeDetectionStrategy} from '@angular/core';
import { Router } from '@angular/router';
import { IArticle } from 'src/app/shared/interfaces/article.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  public article!: IArticle;

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.article = state && state['data'];
  }
}