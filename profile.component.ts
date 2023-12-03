// src/app/profile/profile.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userProfile = {
    username: 'Admin',
    email: 'admin@gmail.com',
    bio: 'LOL xD',
  };

  constructor(private router: Router) {}

  ngOnInit() {
    // Check authentication status
    if (!localStorage.getItem('authenticated')) {
      // If not authenticated, redirect to login
      this.router.navigate(['/login']);
    }
  }

  isAuthenticated(): boolean {
    // Check authentication status
    return !!localStorage.getItem('authenticated');
  }
}
