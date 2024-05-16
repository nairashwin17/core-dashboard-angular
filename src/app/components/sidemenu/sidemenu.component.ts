import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  menuItems = [
    { label: 'Dashboard', iconClass: 'fas fa-tachometer-alt' },
    { label: 'Messages', iconClass: 'fas fa-envelope' },
    { label: 'Settings', iconClass: 'fas fa-cog' },
    // Add more menu items as needed
  ];
}
