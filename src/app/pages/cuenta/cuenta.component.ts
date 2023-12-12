import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss']
})
export class CuentaComponent {

  constructor(private apiSer: ApiService) { }

  saveAccount(name: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement) {
    if (!name.value || !email.value || !password.value) {
      alert('Debe llenar todos los campos');
      return false;
    } else {
      const cuenta = {
        name: name.value,
        email: email.value,
        password: password.value
      }

      this.apiSer.saveAccount(cuenta);
      return false;
    }
  }
}
