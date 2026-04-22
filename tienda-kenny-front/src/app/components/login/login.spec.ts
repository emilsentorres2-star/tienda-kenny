import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login'; // Cambiado aquí

describe('LoginComponent', () => { // Cambiado aquí
  let component: LoginComponent; // Cambiado aquí
  let fixture: ComponentFixture<LoginComponent>; // Cambiado aquí

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent], // Cambiado aquí
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent); // Cambiado aquí
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});