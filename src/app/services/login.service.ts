import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly BASE_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  login(nome: string, password: string): Observable<any> {
    let resp: Observable<any>;

    let utenteDTO = {'nome': nome};
    const body = {utenteDTO,password};
    resp = this.http.post(this.BASE_URL + '/utente/login', body, {
      observe: 'body',
      responseType: 'text',
    });

    return resp;
  }
}
