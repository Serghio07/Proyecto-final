import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Para habilitar pipes como 'date'
import { InventarioService, Producto } from '../../services/inventario.service';

@Component({
  selector: 'app-inventario',
  standalone: true, // Indicamos que este componente es independiente
  imports: [ReactiveFormsModule, CommonModule], // Agregamos los módulos necesarios
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent implements OnInit {
  productos: Producto[] = [];
  productoForm: FormGroup;
  editMode: boolean = false;
  productoSeleccionado: Producto | null = null;

  constructor(private inventarioService: InventarioService, private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      idProducto: [null],
      Precio: [''],
      CostoEnvio: [''],
      Total: [''],
      FechaEntrega: [''],
    });
  }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.inventarioService.getProductos().subscribe({
      next: (data) => (this.productos = data),
      error: (err) => console.error('Error al cargar productos', err),
    });
  }

  crearProducto(): void {
    if (this.productoForm.valid) {
      const nuevoProducto = this.productoForm.value;
      this.inventarioService.createProducto(nuevoProducto).subscribe({
        next: () => {
          this.cargarProductos();
          this.productoForm.reset();
        },
        error: (err) => console.error('Error al crear producto', err),
      });
    }
  }

  seleccionarProducto(producto: Producto): void {
    this.productoSeleccionado = producto;
    this.productoForm.patchValue(producto);
    this.editMode = true;
  }

  actualizarProducto(): void {
    if (this.productoSeleccionado && this.productoForm.valid) {
      const productoActualizado = this.productoForm.value;
      this.inventarioService.updateProducto(this.productoSeleccionado.idProducto, productoActualizado).subscribe({
        next: () => {
          this.cargarProductos();
          this.productoForm.reset();
          this.editMode = false;
          this.productoSeleccionado = null;
        },
        error: (err) => console.error('Error al actualizar producto', err),
      });
    }
  }

  eliminarProducto(id: number): void {
    this.inventarioService.deleteProducto(id).subscribe({
      next: () => this.cargarProductos(),
      error: (err) => console.error('Error al eliminar producto', err),
    });
  }
}
