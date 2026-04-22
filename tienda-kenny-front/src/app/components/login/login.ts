import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  datosUsuario = { correo: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  entrar() {
    this.authService.login(this.datosUsuario).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        if(res.user.role === 'admin') {
          alert('¡Bienvenida Administradora Emilsen Torres!');
        } else {
          alert('¡Bienvenido Cliente!');
        }
        this.router.navigate(['/productos']);
      },
      error: (err) => {
        alert('Error: ' + (err.error.mensaje || 'No se pudo conectar al servidor'));
      }
    });
  }
}