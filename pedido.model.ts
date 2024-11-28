export interface Pedido {
    id: number;
    producto: string;
    precio: number;
    costoEnvio: number;
    total: number;
    fechaEntrega: string;
  }