import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '../../../core/models/menu-item.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Inicio',
      icon: '🏠',
      route: '/inicio',
    },
    {
      label: 'Médicos',
      icon: '👨‍⚕️',
      route: '/doctors',
    },
    {
      label: 'Pacientes',
      icon: '👥',
      route: '/pacientes',
    },
    {
      label: 'Citas',
      icon: '📅',
      route: '/citas',
    },
  ];
}
