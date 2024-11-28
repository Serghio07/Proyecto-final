import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { NgIf } from '@angular/common'; // Para usar directivas como *ngIf

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule], // Importa los módulos necesarios
})
export class ContactoComponent {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactoForm = this.fb.group({
      NombreCompleto: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]],
      Mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  enviarContacto() {
    if (this.contactoForm.valid) {
      this.contactService.enviarContacto(this.contactoForm.value).subscribe({
        next: (response) => {
          alert('Mensaje enviado exitosamente');
        },
        error: (error) => {
          console.error('Error al enviar el mensaje:', error);
        },
      });
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
