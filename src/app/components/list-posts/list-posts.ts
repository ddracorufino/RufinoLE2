import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';
import { Observable } from 'rxjs'; // Import Observable

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-posts.html',
  styleUrl: './list-posts.css'
})
export class ListPostsComponent implements OnInit {

  // Change to Observable
  posts$?: Observable<Post[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Just assign the observable, no subscribe needed
    this.posts$ = this.http.get<Post[]>('https://localhost:7105/api/Post');
  }
}