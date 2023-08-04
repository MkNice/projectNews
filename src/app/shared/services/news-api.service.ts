import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private readonly URL: string = '/v4/articles/'

  constructor(public http: HttpClient) {}

  public getArticle(): Observable<IResponse> {
    return this.http.get<IResponse>(this.URL);
  }

  public getFilteredArticle(filterValue: string): Observable<IResponse> {
    let params = new HttpParams();
    params = params.set('search', filterValue);

    return this.http.get<IResponse>(this.URL, { params });
  }
}
