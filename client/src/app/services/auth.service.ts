import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable, tap } from "rxjs";

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token!: string;

  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    return this.http.get<TokenResponse>('http://localhost:5000/api/v1/token').pipe(
      tap((response: TokenResponse) => {
        this.token = response.access_token;
      })
    );
  }

  getToken() {

  }
}
