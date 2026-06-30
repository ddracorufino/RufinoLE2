import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './register-page.html',
  styleUrls: ['./register-page.css']
})
export class RegisterPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    firstName: null,
    lastName: null
  }

  confirmPassword: string | null = null;
  errorMessage: string = '';

  constructor(private http: HttpClient,
    private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.errorMessage = '';

    this.http.post("https://localhost:7105/api/Login/register", this.form, {responseType: 'text'}).subscribe(data => {
      this.route.navigate(['/login'])
    })
  }
}