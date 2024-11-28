import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {
  @Input() carrito: any[] = [];

  get total(): number {
    return this.carrito.reduce((sum, item) => sum + item.precio, 0);
  }
}