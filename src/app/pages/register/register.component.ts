import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { rejects } from 'assert';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private authService: AuthService) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      email: new FormControl(''),
      pass: new FormControl('')
    });
  }

  registrarNovoUsuario(formulario){
    this.authService.signup(formulario.value.email, formulario.value.pass);
  }
}
