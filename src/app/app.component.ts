import { Component } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tienda';

  pages = [
    { link: 'Inicio', path: 'pages/home' },
    { link: 'Productos', path: 'pages/product'},
    { link: 'Quienes somos', path: 'pages/qs'},
    { link: 'Contactanos', path: 'pages/contact'},
  ]

  private texto: string[] = [
    'Compra lo que deseas',
    'Mira nuestras categorias',
    'Unete a nuestra familia',
    'La Navidad esta cerca',
  ];

  constructor(private router: Router){ }

  irAlCarrito(){
    this.router.navigate([('pages/carrito')]);
  }

  irACreacionCuenta(){
    this.router.navigate([('pages/cuenta')]);
  }

}
