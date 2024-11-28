import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pedido } from './pedido.model';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent {
  @Input() pedido: Pedido | null = null;
  @Output() save = new EventEmitter<Pedido>();
  @Output() cancel = new EventEmitter<void>();

  localPedido: Pedido = {
    id: 0,
    producto: '',
    precio: 0,
    costoEnvio: 0,
    total: 0,
    fechaEntrega: ''
  };

  ngOnChanges(): void {
    if (this.pedido) {
      this.localPedido = { ...this.pedido };
    } else {
      this.localPedido = {
        id: 0,
        producto: '',
        precio: 0,
        costoEnvio: 0,
        total: 0,
        fechaEntrega: ''
      };
    }
  }

  onSubmit(): void {
    this.save.emit(this.localPedido);
  }
}