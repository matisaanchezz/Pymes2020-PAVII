import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ArticulosFamiliaComponent } from './Components/articulos-familia/articulos-familia.component';
import { ArticulosComponent } from './Components/articulos/articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    ArticulosFamiliaComponent,
    ArticulosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
