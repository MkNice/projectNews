import { Selector } from '@ngxs/store';
import { ArticleState } from './news.state';
import { IArticleState } from '../interfaces/articleState.interface';

export class ArticleSelectors {
  @Selector([ArticleState])
  static article(state: IArticleState) {
    return state.article;
  }

  @Selector([ArticleState])
  static filteredArticle(state: IArticleState) {
    return state.article;
  }

  @Selector([ArticleState])
  static error(state: IArticleState) {
    return state.error;
  }
}
