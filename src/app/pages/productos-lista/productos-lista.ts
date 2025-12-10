import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductoStore } from '../../store/producto';
import { ProductoService, Producto } from '../../servicios/producto';

@Component({
  selector: 'app-productos-lista',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos-lista.html'
})
export class ProductosListaComponent implements OnInit {

  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private store: ProductoStore
  ) {}

  ngOnInit(): void {

    // PRIMERO suscribirse al store
    this.store.productos$.subscribe(data => {
      console.log("STORE ACTUALIZADO:", data);
      this.productos = data;
    });

    // LUEGO cargar los datos (y esto actualiza el store)
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.obtenerTodos().subscribe(data => {
      console.log("DATA API:", data);
      this.store.actualizarLista(data); // ESTO dispare el observable
    });
  }

  eliminar(id: string) {
    if (confirm("¿Desea eliminar este producto?")) {
      this.productoService.eliminar(id).subscribe(() => {
        this.cargarProductos();
      });
    }
  }
}
