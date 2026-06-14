/**
 * ARCHIVO: api.service.ts
 *
 * RESPONSABILIDAD:
 * Proveer una capa base unificada para realizar peticiones HTTP hacia el backend.
 * 
 * DEBE CONTENER:
 * - Métodos genéricos get, post, put, delete utilizando HttpClient.
 * - Inyección de HttpClient.
 *
 * NO DEBE CONTENER:
 * - Endpoints harcodeados que pertenezcan a un feature module.
 *
 * MODIFICAR CUANDO:
 * - Se necesite manejo genérico de headers o configuración base de peticiones (aunque suele ir en interceptores).
 *
 * EJEMPLO DE USO:
 * apiService.get<User[]>('/users');
 */
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${path}`, { params });
  }

  post<T>(path: string, body: any = {}): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${path}`, body);
  }

  put<T>(path: string, body: any = {}): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${path}`, body);
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${path}`);
  }
}
