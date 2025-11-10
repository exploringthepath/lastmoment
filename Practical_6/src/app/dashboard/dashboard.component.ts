import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  name = 'User';

  constructor(private router: Router) {
    const cur = localStorage.getItem('currentUser');
    if (cur) {
      try {
        const u = JSON.parse(cur);
        this.name = u.name || 'User';
      } catch { /* ignore */ }
    } else {
      // If no session, redirect to login
      this.router.navigate(['/login']);
    }
  }

  viewProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
