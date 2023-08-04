import { Action, State, StateContext } from '@ngxs/store';

import { Injectable } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';
import { catchError, tap } from 'rxjs';
import { GetArticle, GetArticleError, GetFilteredArticle } from './news.actions';
import { IArticleState } from '../interfaces/articleState.interface';

@State<IArticleState>({
  name: 'Article'
})
@Injectable()
export class ArticleState {
  constructor(private newsApiService: NewsApiService) { }

  @Action(GetArticle)
  getArticle(ctx: StateContext<IArticleState>) {
    return this.newsApiService.getArticle()
      .pipe(
        tap((res) => {
          const article = res.results;
          ctx.patchState({ article });
        }),
        catchError((error) => ctx.dispatch(new GetArticleError(error.message)))
      );
  }

  @Action(GetFilteredArticle)
  getFilteredArticle(ctx: StateContext<IArticleState>, { filterValue }: GetFilteredArticle) {
    return this.newsApiService.getFilteredArticle(filterValue)
      .pipe(
        tap((res) => {
          const article = res.results;
          ctx.patchState({ article });
        }),
        catchError((error) => ctx.dispatch(new GetArticleError(error.message)))
      );
  }
}