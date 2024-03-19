import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isLoading = false;
  error: string | null = null;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, private ngxService: NgxUiLoaderService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.ngxService.start()
      if (params['code'] !== undefined) {
        this.authService.requestToken(params['code']).subscribe({
          next: (response) => {
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.error(error);
          }
        });
      }
      this.ngxService.stop()
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
