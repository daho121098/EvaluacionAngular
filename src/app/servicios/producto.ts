import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id: string;
  codigo: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  fechaRegistros: string;
  fechaActualizacion: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'http://localhost:5028/api/Productos';

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  obtenerPorId(id: string): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  crear(producto: Producto): Observable<any> {
    return this.http.post(this.apiUrl, producto);
  }

  actualizar(id: string, producto: Producto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, producto);
  }

  eliminar(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
