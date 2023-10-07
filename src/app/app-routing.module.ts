import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './seguridad/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { InicioComponent } from './musica/inicio/inicio.component';

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
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
