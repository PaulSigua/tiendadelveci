import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';

const routes: Routes = [
  { path: '', redirectTo: 'pages/home', pathMatch: 'full' },
  { path: 'pages/home', component: InicioComponent },
  { path: 'pages/product', component: ProductosComponent},
  { path: 'pages/qs', component: QuienesSomosComponent },
  { path: 'pages/contact', component: ContactanosComponent },
  { path: 'pages/carrito', component: CarritoComponent },
  { path: 'pages/cuenta', component: CuentaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
