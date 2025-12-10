import { Routes } from '@angular/router';
import { ProductosListaComponent } from './pages/productos-lista/productos-lista';
import { ProductosFormComponent } from './pages/productos-form/productos-form';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },

  { path: 'productos', component: ProductosListaComponent },

  { path: 'productos/nuevo', component: ProductosFormComponent },
  { path: 'productos/editar/:id', component: ProductosFormComponent },
];