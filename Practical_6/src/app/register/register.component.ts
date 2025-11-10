import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';   // <-- ADD THIS

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule], // <-- ADD RouterModule
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onRegister() {
    if (this.registerForm.invalid) {
      alert('Please fill valid details');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = this.registerForm.value;
    // prevent duplicate email
    if (users.find((u: any) => u.email === user.email)) {
      alert('Email already registered. Please login.');
      this.router.navigate(['/login']);
      return;
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registered successfully. Please login.');
    this.router.navigate(['/login']);
  }
}
