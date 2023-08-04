import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ArticleComponent } from './article/article.component';
import { FilterComponent } from './filter/filter.component';
import { NewsComponent } from './news/news.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule } from '@angular/forms';
import { DateFormatPipe } from 'src/app/shared/pipes/dateFormat.pipe';
import { NewsRoutingModule } from './news-routing.module';
import { HighLightPipe } from 'src/app/shared/pipes/high-light.pipe';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    FilterComponent,
    PostsComponent,
    PostComponent,
    ArticleComponent,
    NewsComponent,
    DateFormatPipe,
    HighLightPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NewsRoutingModule,
    MatCardModule
  ]
})
export class NewsModule { }