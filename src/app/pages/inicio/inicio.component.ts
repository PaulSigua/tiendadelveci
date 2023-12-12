import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  constructor(private router: Router,
    private apiSer: ApiService){}

  irAproductos(){
    this.router.navigate([('pages/product')]);
  }

  saveProduct(description: HTMLTextAreaElement, name: HTMLInputElement, price: HTMLInputElement, urlImage: HTMLInputElement){
    if(!name.value || !description.value || !price.value){
      alert('Llene todos los campos');
      return false;
    } else {
      const product = {
        name: name.value,
        description: description.value,
        price: price.valueAsNumber,
        urlImage: urlImage.value
      }

      this.apiSer.saveProducts(product);
      return false;
    }
  }

  
  
}
