import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavbarComponent,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  stats = [
    { title: 'Total Students', value: 120, icon: 'bi bi-people-fill' },
    { title: 'New Admissions', value: 15, icon: 'bi bi-person-plus-fill' },
    { title: 'Pending Fees', value: '$2,500', icon: 'bi bi-cash' }
  ];
}
