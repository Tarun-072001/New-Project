import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {};
  error: string = '';
  success: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    if (this.user.password !== this.user.confirmPassword) {
      this.error = "Passwords don't match";
      this.success = '';
      return;
    }

    this.auth.register(this.user).subscribe({
      next: () => {
        this.success = 'Registration Successful';
        this.error = '';
        setTimeout(() => this.router.navigate(['/']), 1500);
      },
      error: (err) => {
        this.error = err.message;
        this.success = '';
      }
    });
  }
}
