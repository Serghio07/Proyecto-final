import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar">
      <div class="logo">
        <a routerLink="/inicio">Mi Proyecto</a>
      </div>
      <ul class="nav-links">
        <li><a routerLink="/inicio">Inicio</a></li>
        <li><a routerLink="/inventario">Inventario</a></li>
        <li><a routerLink="/pedidos">Pedidos</a></li>
        <li><a routerLink="/contacto">Contacto</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {}
