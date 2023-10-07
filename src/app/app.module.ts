import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './seguridad/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { InicioComponent } from './musica/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    RegistroComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
