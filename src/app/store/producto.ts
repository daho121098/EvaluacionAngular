import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../servicios/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoStore {

  private productosSource = new BehaviorSubject<Producto[]>([]);

  productos$ = this.productosSource.asObservable();

  actualizarLista(data: Producto[]) {
    this.productosSource.next(data);
  }
}
