import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BienvenidaComponent } from './component/bienvenida/bienvenida.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    BienvenidaComponent,
    RouterLink
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

  constructor() { }

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

  login(): void {
    console.log('Login');
    
  }

  signup(): void {
    console.log('Sign up');
    
  }

  resetPassword(): void {
    console.log('Reset password');
    
  }


}

