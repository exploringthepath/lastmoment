import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {
  name = '';
  email = '';

  constructor(private router: Router) {
    const cur = localStorage.getItem('currentUser');
    if (cur) {
      try {
        const u = JSON.parse(cur);
        this.name = u.name || '';
        this.email = u.email || '';
      } catch {
        // ignore
      }
    } else {
      // no session -> back to login
      this.router.navigate(['/login']);
    }
  }

  backToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
