import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntidadesService {

  constructor(private http: HttpClient) { }

  criaEntidade(entidade){
    return this.http.post('http://localhost:8080/entidadeparceira', entidade).pipe(take(1));
  }
}
