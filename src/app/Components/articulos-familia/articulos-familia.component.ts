import { Component, OnInit } from '@angular/core';
import { MockArticulosFamiliasService } from '../../services/mock-articulos-familias.service';
import {
  ArticuloFamilia,
  ArticulosFamilias,
} from 'src/app/models/articulo-familia';

@Component({
  selector: 'app-articulos-familia',
  templateUrl: './articulos-familia.component.html',
  styleUrls: ['./articulos-familia.component.css'],
})
export class ArticulosFamiliaComponent implements OnInit {
  titulo = 'Articulos Familias';
  Items: ArticuloFamilia[] = [];
  constructor(private articulosFamiliasService: MockArticulosFamiliasService) {}

  ngOnInit() {
    this.GetFamiliasArticulos();
  }

  GetFamiliasArticulos() {
    this.articulosFamiliasService.get().subscribe((res: ArticuloFamilia[]) => {
      this.Items = res;
    });
  }
}
