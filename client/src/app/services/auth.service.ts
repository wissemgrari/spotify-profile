import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token!: string;

  constructor(private http: HttpClient) {}

  getToken() {

  }
}
