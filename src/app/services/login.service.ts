import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginUrl = 'http://localhost:3001/loginData';

  constructor(private http: HttpClient) {}

  storeLogin(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }
}
