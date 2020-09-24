import { Component, OnInit } from '@angular/core';
import { MockArticulosFamiliasService } from '../../services/mock-articulos-familias.service';
import {
  ArticuloFamilia,
  ArticulosFamilias,
} from 'src/app/models/articulo-familia';
import { ArticulosFamiliasService } from '../../services/articulos-familias.service';

@Component({
  selector: 'app-articulos-familia',
  templateUrl: './articulos-familia.component.html',
  styleUrls: ['./articulos-familia.component.css'],
})
export class ArticulosFamiliaComponent implements OnInit {
  titulo = 'Articulos Familias';
  Items: ArticuloFamilia[] = [];
  constructor(
    // el mock es un servicio, q trabaja con inyeccion de dependencia
    //private articulosFamiliasService: MockArticulosFamiliasService
    // Consumimos los servicios reemplazando a mock
    private articulosFamiliasService: ArticulosFamiliasService
  ) {}

  ngOnInit() {
    this.GetFamiliasArticulos();
  }

  GetFamiliasArticulos() {
    this.articulosFamiliasService.get().subscribe((res: ArticuloFamilia[]) => {
      this.Items = res;
    });
  }
}
