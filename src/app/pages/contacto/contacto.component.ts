import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-contacto',
  standalone: true, // Define el componente como standalone
  imports: [CommonModule, ReactiveFormsModule], // Importa los módulos necesarios
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  contactoForm!: FormGroup;

  constructor(
    private contactoService: ContactoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.contactoForm = this.formBuilder.group({
      NombreCompleto: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]],
      Mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  enviarContacto(): void {
    if (this.contactoForm.valid) {
      const contactoData = this.contactoForm.value;
      this.contactoService.createContacto(contactoData).subscribe({
        next: () => {
          alert('¡Tu mensaje ha sido enviado con éxito!');
          this.contactoForm.reset(); // Limpia el formulario
        },
        error: (err) => {
          console.error('Error al enviar contacto:', err);
          alert('Ocurrió un error. Por favor, intenta nuevamente.');
        },
      });
    } else {
      alert('Por favor, completa todos los campos antes de enviar.');
    }
  }
  
}
