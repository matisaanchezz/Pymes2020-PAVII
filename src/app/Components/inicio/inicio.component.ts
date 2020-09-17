import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  titulo = 'Pymes 2020 - PAV II';

  constructor() {}

  ngOnInit(): void {}
}
