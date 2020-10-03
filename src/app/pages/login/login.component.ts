import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  formulario: FormGroup;

  constructor(public auth: AuthService){}

  ngOnInit() {
    this.formulario = new FormGroup({
      email: new FormControl(''),
      pass: new FormControl('')
    });
  }

  ngOnDestroy() {
  }

  loginOn(forumulario): void {
    this.auth.loginNormal(forumulario.value.email, forumulario.value.pass);
  }

}
