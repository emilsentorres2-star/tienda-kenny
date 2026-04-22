import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LoginComponent } from './app/components/login/login'; 

// Importante para el error de zone.js
import 'zone.js'; 

bootstrapApplication(LoginComponent, appConfig)
  .catch((err) => console.error(err));