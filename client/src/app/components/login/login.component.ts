import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isLoading = false;
  error: string | null = null;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['code'] !== undefined) {
        console.log(params['code']);
        this.authService.requestToken(params['code']).subscribe({
          next: (response) => {
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.error(error);
          }
        });
      }
    });
  }

  login() {
    this.isLoading = true;
    this.authService.getAuthUrl().subscribe({
        next: (response) => {
          this.error = null;
          this.isLoading = false;
        },
        error: (error) => {
          this.error = 'An error occurred during login: ' + error.message;
          this.isLoading = false;
        }
      },
    );
  }
}
