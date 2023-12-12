import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { CuentaComponent } from './pages/cuenta/cuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienesSomosComponent,
    ContactanosComponent,
    CarritoComponent,
    ProductosComponent,
    CuentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp({"projectId":"tiendadelveci","appId":"1:310676597190:web:b8f9dfdb65b4c372c96ac7","storageBucket":"tiendadelveci.appspot.com","apiKey":"AIzaSyC_7dMuPz-nnZofWv_4S_nSFPicYpJRiBw","authDomain":"tiendadelveci.firebaseapp.com","messagingSenderId":"310676597190"})),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp((environment.firebaseConfig)),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
