import { Injectable } from '@angular/core';
import { Pedido } from '../../Proyecto-final/pedido.model';

@Injectable({ providedIn: 'root' })
export class PedidosService {
  private pedidos: Pedido[] = [];
  private idCounter = 1;

  getPedidos(): Pedido[] {
    return [...this.pedidos];
  }

  addPedido(pedido: Pedido): void {
    pedido.id = this.idCounter++;
    this.pedidos.push(pedido);
  }

  updatePedido(updatedPedido: Pedido): void {
    const index = this.pedidos.findIndex(p => p.id === updatedPedido.id);
    if (index !== -1) {
      this.pedidos[index] = updatedPedido;
    }
  }

  deletePedido(id: number): void {
    this.pedidos = this.pedidos.filter(p => p.id !== id);
  }
}