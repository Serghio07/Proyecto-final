import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirige al inicio por defecto
  { path: 'inicio', component: InicioComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/inicio' }, // Redirige al inicio si la ruta no existe
];


export const routes: Routes = [];
