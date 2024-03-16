import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, tap } from "rxjs";
import { Router } from "@angular/router";

interface AuthUrlResponse {
  url: string;
  code_verifier: string;
}

interface TokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = localStorage.getItem('token') || '';

  constructor(private http: HttpClient, private router: Router) {
  }

  getAuthUrl(): Observable<AuthUrlResponse> {
    return this.http.get<AuthUrlResponse>('http://localhost:5000/api/v1/auth-url').pipe(
      tap((response: AuthUrlResponse) => {
        if (response.url) {
          window.location.href = response.url;
        }
      }));
  }

  requestToken(code: string): Observable<TokenResponse> {
    return this.http.get(`http://localhost:5000/api/v1/token?code=${code}`).pipe(
      map(response => response as TokenResponse),
      tap((response: TokenResponse) => {
        this.token = response.access_token;
        localStorage.setItem('token', this.token);
      })
    );
  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return this.token;
  }
}
