import { Injectable } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { AlertComponent } from './alert/alert.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(
    private modalService: BsModalService,

    ) { }

  private showAlert(msgControle: string, msg: string, type: AlertTypes){
    const bsModalRef = this.modalService.show(AlertComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.msg = msg;
    bsModalRef.content.msgControle = msgControle;
  }

  showAlertDanger(msgControle: string, msg: string){
    this.showAlert(msgControle, msg, AlertTypes.DANGER);
  }

  showAlertSuccess(msgControle: string, msg: string){
    this.showAlert(msgControle, msg, AlertTypes.SUCCESS);
  }

  showModal(title: string, msg: string, okText?: string, cancelText?: string){
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if(okText){
      bsModalRef.content.okText = okText;
    }

    if(cancelText){
      bsModalRef.content.cancelText = cancelText;
    }

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }
}