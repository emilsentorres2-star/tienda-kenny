import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) { }

  login(usuario: any): Observable<any> {
    return this.http.post(`${this.URL}/login`, usuario);
  }
}