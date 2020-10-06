import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ConfirmModalComponent } from './shared/confirm-modal/confirm-modal.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertComponent } from './shared/alert/alert.component';


const firebaseConfig = {
  apiKey: 'AIzaSyD1CNU-dE_ziSWHHp7nVrnOCdq3r5YFXn0',
  authDomain: 'portalvoluntario-6ecbf.firebaseapp.com',
  databaseURL: 'https://portalvoluntario-6ecbf.firebaseio.com',
  projectId: 'portalvoluntario-6ecbf',
  storageBucket: 'portalvoluntario-6ecbf.appspot.com',
  messagingSenderId: '712372087639',
  appId: '1:712372087639:web:fd110801717fe21bed6c12'
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,    
    ConfirmModalComponent,
    AlertComponent
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
