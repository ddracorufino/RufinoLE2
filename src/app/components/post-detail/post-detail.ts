import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs'; // Import these
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css'
})
export class PostDetailComponent implements OnInit {

  // We use an Observable instead of a variable
  post$?: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // switchMap grabs the ID from the URL and automatically fetches the data
    this.post$ = this.route.params.pipe(
      switchMap(params => this.http.get<Post>("https://localhost:7105/api/Post/" + params['id']))
    );
  }
}