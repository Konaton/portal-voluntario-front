import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {

  constructor(private http: HttpClient) { }

  criaVoluntario(voluntario){
    return this.http.post('http://localhost:8080/voluntario', voluntario).pipe(take(1));
  }
}
