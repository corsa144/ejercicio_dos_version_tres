import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BienvenidaComponent } from './component/bienvenida/bienvenida.component';
import { LoginComponent } from './component/login/login.component';

interface User {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    BienvenidaComponent,
    RouterLink,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  isModalVisible: boolean = false;
  selectedTab: string = 'login';
  loginEmail: string = '';
  loginPassword: string = '';
  rememberMe: boolean = false;
  signupUsername: string = '';
  signupEmail: string = '';
  signupPassword: string = '';
  acceptTerms: boolean = false;
  resetEmail: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  router: any;
  

  constructor() {

  }

  ngOnInit(): void {

  }

  toggleModal(tab: string): void {
    this.isModalVisible = !this.isModalVisible;
    if (this.isModalVisible) {
      this.selectedTab = tab;
    }
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }



  signup(): void {
    console.log('Sign up');
    // Crear nuevo usuario
    const newUser: User = {
      username: this.signupUsername,
      email: this.signupEmail,
      password: this.signupPassword
    };
    // Recuperar usuarios del sessionStorage
    const users: User[] = JSON.parse(sessionStorage.getItem('users') || '[]');
    // Verificar si el usuario ya existe
    const existingUser = users.find(u => u.email === this.signupEmail);
    if (existingUser) {
      console.log('El usuario ya existe');
    } else {
      // Agregar nuevo usuario
      users.push(newUser);
      sessionStorage.setItem('users', JSON.stringify(users));
      console.log('Usuario registrado:', newUser);
      // Aquí puedes redirigir al usuario a la página de inicio de sesión, etc.
    }
    
  }

  resetPassword(): void {
    console.log('Reset password');
    // Aquí puedes agregar la lógica para restablecer la contraseña
    if (this.resetEmail) {
      // Lógica de restablecimiento de contraseña
      console.log('Se ha enviado un enlace de restablecimiento de contraseña a:', this.resetEmail);
    } else {
      console.log('Por favor ingrese su email para restablecer la contraseña');
    }
  }

  addTestUsers(): void {
    const testUsers: User[] = [
      { username: 'Cristian', email: 'cris@example.com', password: '123123' },
      { username: 'Juan', email: 'juan@example.com', password: 'asdasd' },
      { username: 'Pedro', email: 'pedro@example.com', password: 'qweqwe' }
    ];
    sessionStorage.setItem('users', JSON.stringify(testUsers));
    console.log('Usuarios de prueba añadidos al sessionStorage');
  }
    

  


}

