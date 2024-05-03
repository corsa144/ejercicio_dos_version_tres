import { Component } from '@angular/core';
import { BienvenidaComponent } from '../bienvenida/bienvenida.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from 'express';


interface User {
  userName: string;
  loginEmail: string;
  loginPassword: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    BienvenidaComponent,
    RouterLink,
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements User{
    router : any;
    loginEmail: string = '';
    loginPassword: string = '';
    userName: string = '';
    sessionStorage: Storage | undefined;
    constructor(){
      
    }


    ngOnInit(): void {
      this.addTestUsers();
    }

    redirectToBienvenida(userEmail: string, password: string): void {
    // Aquí puedes realizar la lógica de autenticación
    this.login(userEmail, password);
    if (userEmail === this.loginEmail && password === this.loginPassword) {
      // Credenciales válidas, redirige a la página de bienvenida
      alert('Usuario correcto')
      this.router.navigate(["/bienvenida"]);
    } else {
      // Credenciales inválidas, muestra un mensaje de error o realiza otra acción
      alert('Nombre de usuario o contraseña incorrectos');
    }
  }

  login(userEmail: string, password: string): void {
    console.log('Login');
    // Recuperar usuarios del sessionStorage
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    console.log("usuarios: "+ users.find(u => u.loginEmail === userEmail))
    // Buscar usuario por email y contraseña
    const user = users.find(u => u.loginEmail === userEmail && u.loginPassword === password);
    console.log(user);
    if (user) {
      console.log('Usuario autenticado:', user);
      this.loginEmail = user.loginEmail;
      this.loginPassword = user.loginPassword;
      // Aquí puedes redirigir al usuario a la página de inicio, etc.
    } else {
      console.log('Credenciales incorrectas');
    }
    
  }

  addTestUsers(): void {
    const testUsers: User[] = [
      { userName: 'Cristian', loginEmail: 'cris@example.com', loginPassword: '123123' },
      { userName: 'Juan', loginEmail: 'juan@example.com', loginPassword: 'asdasd' },
      { userName: 'Pedro', loginEmail: 'pedro@example.com', loginPassword: 'qweqwe' }
    ];
    localStorage.setItem('users', JSON.stringify(testUsers));
    console.log('Usuarios de prueba añadidos al localStorage' + localStorage.getItem('users') || '[]');
  }

}
