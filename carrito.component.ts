import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  @Input() carrito: any[] = [];

  completarPedido(): void {
    console.log('Pedido completado:', this.carrito);
    alert('Pedido procesado correctamente.');
  }
}