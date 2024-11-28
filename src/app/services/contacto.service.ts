import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  private baseUrl = 'http://localhost:3000/contactos'; // URL base del endpoint

  constructor(private http: HttpClient) {}

  getContactos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getContactoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createContacto(contacto: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, contacto);
  }

  updateContacto(id: number, contacto: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, contacto);
  }

  deleteContacto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
