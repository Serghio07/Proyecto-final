import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidosForm!: FormGroup; // Usar '!' para indicar que será inicializada después

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.pedidosForm = this.fb.group({
      producto: ['', Validators.required],
      tipoProducto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.pedidosForm.valid) {
      console.log('Pedido enviado:', this.pedidosForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
