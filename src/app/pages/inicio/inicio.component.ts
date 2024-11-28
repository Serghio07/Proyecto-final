import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  onAction() {
    // Muestra un mensaje o redirige a otra página
    alert('¡Explora nuestra tienda en Llamitas Sport!');
    // Ejemplo de redirección si usas Angular Router:
    // this.router.navigate(['/tienda']);
  }
}