import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ArticulosFamiliaComponent } from './Components/articulos-familia/articulos-familia.component';
import { ArticulosComponent } from './Components/articulos/articulos.component';
//clase que me permite consumir datos de un servidor de WebAPI
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    ArticulosFamiliaComponent,
    ArticulosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulos', component: ArticulosComponent },
      { path: 'articulosfamilia', component: ArticulosFamiliaComponent },
    ]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
