import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  readonly BASE_URL = 'http://localhost:8080/api';

  private badge: number;
  constructor(private http: HttpClient) { }

  addItemToCart(codiceArticolo: string, quantita: number, token: string): Observable<any> {
    let resp: Observable<any>;
    console.log(codiceArticolo)
    let httpParams = new HttpParams()
      .set('codiceArticolo', codiceArticolo)
      .set('quantita', quantita.toString());

    resp = this.http.put(this.BASE_URL + '/carrello/add', null, {
      headers: {
        'auth-token': token
      },
      params: httpParams,
      responseType: 'json',
    });

    return resp;
  }

  updateBadge(righeCarrello?) {
    if(righeCarrello != undefined) {
      this.badge = righeCarrello.length;
    }
    else {
        this.badge++;
    }
    return this.badge;
  }

  getBadge() {    
    return this.badge;
  }

  setBadge(value: number) {
      this.badge = value;
  }

  getCart(token: string) {
    let resp: Observable<any>;

    resp = this.http.get(this.BASE_URL + '/carrello/get-cart', {
      headers: {
        'auth-token': token
      },
      responseType: 'json',
    });

    return resp;
  }
}
