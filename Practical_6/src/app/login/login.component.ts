import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';   // <-- ADD THIS

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      alert('Enter valid email & password.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find((u: any) => u.email === this.loginForm.value.email && u.password === this.loginForm.value.password);
    if (!found) {
      alert('Invalid credentials. Please register or try again.');
      return;
    }
    // Save current session user (only name & email for display)
    const sessionUser = { name: found.name, email: found.email };
    localStorage.setItem('currentUser', JSON.stringify(sessionUser));
    // navigate to dashboard
    this.router.navigate(['/dashboard']);
  }
}
