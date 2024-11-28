import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/contactos'; // Cambia al puerto de tu backend

  constructor(private http: HttpClient) {}

  enviarContacto(contacto: { NombreCompleto: string; Email: string; Mensaje: string }): Observable<any> {
    return this.http.post(this.apiUrl, contacto);
  }
}
