import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { initSupaBase } from 'src/utils/initSupaBse';
import { Cuenta, Mensaje, Tienda } from '../models/tienda.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //supabase: SupabaseClient = createClient(initSupaBase.supabaseUrl, initSupaBase.supabaseKey);

  private tiendaRef: AngularFirestoreCollection<any>;
  private contactRef: AngularFirestoreCollection<any>;
  private cuentaRef: AngularFirestoreCollection<any>;
  private path1 = '/productos';
  private path2 = '/mensajes';
  private path3 = '/cuentas';

  constructor(private af: AngularFirestore) {
    this.tiendaRef = af.collection(this.path1);
    this.contactRef = af.collection(this.path2);
    this.cuentaRef = af.collection(this.path3);
   }

  /*async addProduct(productos: Tienda){
    const {data, error} = await this.supabase
    .from('productos')
    .insert(productos)
    return {data, error};
  }*/

  saveProducts(producto: Tienda){
    const id = this.af.createId();
    producto.id = id;
    this.tiendaRef.doc(id).set(Object.assign({}, producto));
  }

  saveMessaje(mensaje: Mensaje){
    const id = this.af.createId();
    mensaje.id = id;
    this.contactRef.doc(id).set(Object.assign({}, mensaje));
  }

  saveAccount(cuenta: Cuenta) {
    const id = this.af.createId();
    cuenta.id = id
    this.cuentaRef.doc(id).set(Object.assign({}, cuenta));
  }
}
