import { Component } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading = false;
  error: string | null = null;

  constructor(private authService: AuthService) {
  }

  login() {
    this.isLoading = true;
    this.authService.login().subscribe({
        next: () => {
          this.error = null;
          this.isLoading = false;
        },
        error: () => {
          this.error = 'An error occurred during login';
          this.isLoading = false;
        }
      },
    );
  }
}
