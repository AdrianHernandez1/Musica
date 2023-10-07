import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './seguridad/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { InicioComponent } from './musica/inicio/inicio.component';
import { ArtistaComponent } from './musica/artista/artista.component';
import { GeneroComponent } from './musica/genero/genero.component';
import { InfoArtistaComponent } from './musica/info-artista/info-artista.component';
import { UsuarioComponent } from './seguridad/usuario/usuario.component';

const routes: Routes = [
  {
    path: 'inicioSesion', 
    component: InicioSesionComponent
  },
  {
    path: 'registrarse', 
    component: RegistroComponent
  },
  {
    path: 'inicio', 
    component: InicioComponent
  },
  {
    path: 'artista', 
    component: ArtistaComponent
  },
  {
    path: 'genero', 
    component: GeneroComponent
  },
  {
    path: 'infoArtista', 
    component: InfoArtistaComponent
  },
  {
    path: 'usuario', 
    component: UsuarioComponent
  },
  {
    path: '**',
    redirectTo: 'inicioSesion'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
