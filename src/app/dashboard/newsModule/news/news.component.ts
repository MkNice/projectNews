import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { GetArticle, GetFilteredArticle } from 'src/app/shared/store/news.actions';
import { ArticleSelectors } from 'src/app/shared/store/news.selectors';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {
  @Select(ArticleSelectors.article)
  public articles$!: Observable<IArticle[]>;
  public filterValue: string = '';

  constructor(private store: Store) { }

  public ngOnInit(): void {
    this.getArticle();
  }

  public getArticle(): void {
    this.store.dispatch(new GetArticle());
  }

  public onFilterChanged(filterValue: string) {
    this.filterValue = filterValue;
    this.store.dispatch(new GetFilteredArticle(filterValue));
  }
}

