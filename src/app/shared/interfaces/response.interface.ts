import { IArticle } from './article.interface';

export interface IResponse{
  count: number;
  next: string;
  previous: null;
  results: IArticle[]
}