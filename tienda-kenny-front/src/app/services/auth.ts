import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Asegúrate de que esta URL sea la de tu backend
  private URL = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) { }

  registrar(usuario: any): Observable<any> {
    return this.http.post(`${this.URL}/register`, usuario);
  }

  login(usuario: any): Observable<any> {
    return this.http.post(`${this.URL}/login`, usuario);
  }
}