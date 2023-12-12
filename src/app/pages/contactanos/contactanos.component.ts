import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent {

  constructor(
    private apiSer: ApiService
  ){}

  saveContact(name: HTMLInputElement, email:HTMLInputElement, message: HTMLTextAreaElement){
    if(!name.value || !email.value || !message.value){
      alert('Debe llenar todos los campos');
      return false;
    } else {
      const mensaje = {
        name: name.value,
        email: email.value,
        password: message.value
      }

      this.apiSer.saveMessaje(mensaje);
      return false;
    }
  }
}
