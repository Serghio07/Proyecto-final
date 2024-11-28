import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None // Desactiva la encapsulación de estilos

})
export class NavbarComponent {}
