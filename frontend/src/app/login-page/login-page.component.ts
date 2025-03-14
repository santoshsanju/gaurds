import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Implement your login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Add authentication logic and navigate to the next page upon successful login
    sessionStorage.setItem('login credentials', btoa(JSON.stringify({ username: this.username, password: this.password })));
    sessionStorage.setItem('role detail', (Math.random() * 10) > 5 ? 'Admin' : 'User');
  }
}
