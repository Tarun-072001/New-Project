import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = 'http://localhost:3002/users'; // URL for user data
  private loginDataUrl = 'http://localhost:3002/loginData'; // URL for storing login attempts

  constructor(private http: HttpClient) {}

  // ✅ Check if user already exists before registration
  register(user: any): Observable<any> {
    return this.http.get<any[]>(`${this.usersUrl}?email=${user.email}`).pipe(
      switchMap(existingUsers => {
        if (existingUsers.length > 0) {
          throw new Error('User already registered'); // If user exists, throw an error
        }
        return this.http.post(this.usersUrl, user); // Register the new user
      }),
      catchError(() => throwError(() => new Error('Registration failed'))) // Handle error
    );
  }

  // ✅ Login with email/password
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http
      .get<any[]>(`${this.usersUrl}?email=${credentials.email}&password=${credentials.password}`)
      .pipe(
        map(users => {
          if (users.length === 0) throw new Error('Invalid credentials'); // Check if user exists
          return users[0]; // If user exists, return the first user
        }),
        switchMap(user => {
          const loginRecord = { email: user.email, password: user.password }; // Record login attempt
          return this.http.post(this.loginDataUrl, loginRecord).pipe(map(() => user)); // Save login data
        }),
        catchError(() => throwError(() => new Error('Login failed'))) // Handle error
      );
  }

  // ✅ Update user password
  updatePassword(email: string, newPassword: string): Observable<any> {
    return this.http.get<any[]>(`${this.usersUrl}?email=${email}`).pipe(
      switchMap(users => {
        if (users.length === 0) throw new Error('Email not found'); // Check if email exists
        const user = users[0];
        const updatedUser = { ...user, password: newPassword }; // Update password
        return this.http.put(`${this.usersUrl}/${user.id}`, updatedUser); // Update user in DB
      }),
      catchError(err => throwError(() => new Error('Password update failed'))) // Handle error
    );
  }
}
