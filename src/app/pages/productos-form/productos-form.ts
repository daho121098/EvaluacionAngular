import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService, Producto } from '../../servicios/producto';

@Component({
  selector: 'app-productos-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './productos-form.html'
})
export class ProductosFormComponent implements OnInit {

  id: string | null = null;

  modelo: Producto = {
    id: '',
    codigo: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    fechaRegistros: '',
    fechaActualizacion: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id) {
      this.productoService.obtenerPorId(this.id)
        .subscribe(data => this.modelo = data);
    }
  }

  guardar() {
    if(this.id) {
      this.productoService.actualizar(this.id, this.modelo)
        .subscribe(() => this.router.navigate(['/productos']));
    } else {
      this.productoService.crear(this.modelo)
        .subscribe(() => this.router.navigate(['/productos']));
    }
  }
}
