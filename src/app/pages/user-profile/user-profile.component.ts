
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { VoluntariosService } from './../../services/voluntarios.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private voluntarioService: VoluntariosService,
    private alertService: AlertModalService
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
      success => this.alertService.showAlertSuccess('Sucesso!', 'Informações Salvas com Sucesso!'),
      error => this.alertService.showAlertDanger('Ops!', 'Não foi possível salvar as informações')
    );
  }
}
