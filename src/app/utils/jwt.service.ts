import { Injectable } from '@angular/core';
import  jwt_decode  from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }
  public storeJWTToken(token: string) {
    localStorage.setItem('jwt-token', token);
  }

  public retrieveJWTToken(): string {
    let token = localStorage.getItem('jwt-token');
    return token;
  }
  public decodeToken(): any {
    let token = localStorage.getItem('jwt-token');
    let decode = jwt_decode(token);
    return decode;



  }
}
