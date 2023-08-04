import { IArticle } from '../interfaces/article.interface';

export class GetArticle {
  static readonly type = '[Article] Get article ';
}

export class GetFilteredArticle {
  static readonly type = '[Article] Get filtered article ';

  constructor(public filterValue: string) {}
}

export class GetFilteredArticleSuccess {
  static readonly type = '[Article] Get filtered article  - Success';

  constructor(public article: IArticle) {}
}

export class GetArticleSuccess {
  static readonly type = '[Article] Get article  - Success';

  constructor(public article: IArticle) {}
}

export class GetArticleError {
  static readonly type = '[Article] Get article Error';

  constructor(public error: string) {}
}
