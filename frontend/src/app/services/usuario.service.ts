import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './GLOBAL';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url;
  public usuario;

  constructor(private http: HttpClient) {
    this.url = global.url;
    this.usuario = new Usuario('','',0,'','','', false);

   }
   

   login(usuario: Usuario, getToken = true): Observable<any> {
  
    let json = usuario;

    if (!getToken) {
    } else {
      usuario.getToken = true;
    }

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'login', json, { headers: headers });
  }
 

 

  getToken() {}
 
 
  getIdentity() {}
}
