/*=============================================
REVIEW para inyectar clases de dependencias en los componentes
=============================================*/
/*=============================================
REVIEW  para conectar a cualquier API con peticiones HTTP
=============================================*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  /*=============================================
  REVIEW usable en todos los componentes de la app (root)
  =============================================*/
  providedIn: 'root',
})
export class UsersService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = '../assets/json/users.json';
  }
  getUsersData(): any {
    return this.http.get(this.url);
  }
}
