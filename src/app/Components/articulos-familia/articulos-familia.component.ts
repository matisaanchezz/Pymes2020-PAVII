import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
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
  Items = ArticulosFamilias;
  constructor() {}

  ngOnInit(): void {}
}
