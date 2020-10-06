import { BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit } from '@angular/core';

declare interface Necessidade {
  id: number;
  descricao: string;
}

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  necessidades: Necessidade[];
  /*
  @Input() title: string;
  @Input() msg: string;
  @Input() cancelText = 'Cancelar';
  @Input() okText = 'Ok';

  confirmResult: Subject<boolean>;
  */
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {

    this.necessidades = [
      { id: 1, descricao: 'Cortar Cabelos Masculinos'},
      { id: 2, descricao: 'Passear com Cachorro'},
      { id: 3, descricao: 'Pintar parede'},
      { id: 4, descricao: 'Aulas de Violão'},
      { id: 5, descricao: 'Cuidar de idoso'},
      { id: 6, descricao: 'Odontologia'},
    ];

  }

  /*
  ngOnInit(): void {
    this.confirmResult = new Subject();
  }

  onConfirm(){
    this.confirmAndClose(true);
  }

  cancelConfirm(){
    this.confirmAndClose(false);
  }

  private confirmAndClose(value: boolean){
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }*/
}
