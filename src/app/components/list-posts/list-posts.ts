import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { Post } from '../../models/post.model';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './list-posts.html',
  styleUrl: './list-posts.css'
})
export class ListPostsComponent implements OnInit {

  posts$?: Observable<Post[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.posts$ = this.http.get<Post[]>('https://localhost:7105/api/Post');
  }

}