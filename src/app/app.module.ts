import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './seguridad/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { InicioComponent } from './musica/inicio/inicio.component';
import { ArtistaComponent } from './musica/artista/artista.component';
import { GeneroComponent } from './musica/genero/genero.component';
import { InfoArtistaComponent } from './musica/info-artista/info-artista.component';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './seguridad/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    RegistroComponent,
    InicioComponent,
    ArtistaComponent,
    GeneroComponent,
    InfoArtistaComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
