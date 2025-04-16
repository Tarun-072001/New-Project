import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';  // Import HttpErrorResponse for error handling

@Component({
  selector: 'app-forgot-password',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']  // Corrected the 'styleUrl' to 'styleUrls'
})
export class ForgotPasswordComponent {

  email: string = '';
  newPassword: string = '';
  success: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  resetPassword() {
    if (!this.email || !this.newPassword) {
      this.error = 'Please enter email and new password';
      return;
    }

    this.authService.updatePassword(this.email, this.newPassword).subscribe({
      next: () => {
        this.success = 'Password updated successfully!';
        this.error = '';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err) => {
        this.error = err.message || 'Something went wrong';
        this.success = '';
      }
    });
  }
}
