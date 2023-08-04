import { IArticle } from './article.interface';

export interface IArticleState {
  article: IArticle[]
  error: string | null,
}