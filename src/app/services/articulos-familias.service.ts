import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticulosFamiliasService {
  resourceUrl: string;
  //hago una inyeccion de dependencia
  constructor(private httpClient: HttpClient) {
    // la barra al final del resourse url es importante para los metodos que concatenan el
    // id del recurso (GetById, Put)
    this.resourceUrl = 'https://bitgocba.duckdns.org/api/ArticulosFamilias/'; // ver bien la URL
  }

  get() {
    return this.httpClient.get(this.resourceUrl);
  }
}
