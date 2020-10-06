import { EntidadesService } from './../../services/entidades.service';
import { Component, OnInit } from '@angular/core';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css']
})
export class EntidadesComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private alertService: AlertModalService,
    private entidadeService: EntidadesService
    ) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      cpfCnpj: new FormControl(''),
      email: new FormControl(''),
      nomeCompleto: new FormControl(''),
      webSite: new FormControl(''),
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
    console.log(formulario.value);
    this.entidadeService.criaEntidade(formulario.value).subscribe(
      success => this.alertService.showAlertSuccess('Sucesso!', 'Informações Salvas com Sucesso!'),
      error => this.alertService.showAlertDanger('Ops!', 'Não foi possível salvar as informações')
    );
  }

  mostraModalNecessidades(){
    this.alertService.mostraModalNecessidades();
  }
}
