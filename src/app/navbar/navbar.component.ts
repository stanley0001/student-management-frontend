import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) {}

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    // navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  }
}
