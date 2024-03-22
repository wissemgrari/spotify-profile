import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map, Observable, tap } from "rxjs";
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
  private token: string = JSON.parse(localStorage.getItem('user_tokens') || '{}').access_token || '';
  private loggedIn = new BehaviorSubject<boolean>(!!this.getToken());

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
        localStorage.setItem('user_tokens', JSON.stringify(response));
        this.loggedIn.next(true);
      })
    );
  }

  logout() {
    localStorage.removeItem('user_tokens');
    this.token = '';
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  getToken() {
    return this.token;
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  isValidToken() {
    //TODO: check if token is expired
    return true;
  }

  refreshToken(): Observable<TokenResponse> {
    return this.http.post('http://localhost:5000/api/v1/refresh/token', {
      refreshToken: JSON.parse(localStorage.getItem('user_tokens') || '{}').refresh_token
    }).pipe(
      map(response => response as TokenResponse),
      tap((response: TokenResponse) => {
        this.token = response.access_token;
        localStorage.removeItem('user_tokens')
        localStorage.setItem('user_tokens', JSON.stringify(response));
        this.loggedIn.next(true);
      })
    );
  }
}
