import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos = [
    { id: 1, nombre: 'Perfume A', precio: 50 },
    { id: 2, nombre: 'Perfume B', precio: 70 },
    { id: 3, nombre: 'Perfume C', precio: 40 }
  ];
  productosFiltrados = [...this.productos];
  carrito: any[] = [];

  buscarProducto(event: any): void {
    const valor = event.target.value.toLowerCase();
    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(valor)
    );
  }

  agregarAlCarrito(producto: any): void {
    this.carrito.push({ ...producto });
  }
}