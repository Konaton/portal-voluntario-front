import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { VoluntariosService } from './../../services/voluntarios.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private voluntarioService: VoluntariosService
    ) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      cpf: new FormControl(''),
      email: new FormControl(''),
      nomeCompleto: new FormControl(''),
      cep: new FormControl(''),
      endereco: new FormControl(''),
      complemento: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl(''),
      primeiroTelefone: new FormControl(''),
      segundoTelefone: new FormControl('')
    });
  }

  submit(formulario){
    this.voluntarioService.criaVoluntario(formulario.value).subscribe(
      success => console.log('sucesso gravou'),
      error => console.error(error)
    );
  }
}
