import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistaService } from 'src/app/servicios/artista.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  strNombre:string='Luis Adrián';
  strApellidoP:string='Hernández';
  strApellidoM:string='Sánhez';
  strUsuario:string='Adrian Hernandez';
  strContrasenia:string='admin';

  constructor(private _router:Router, private _servicioArtista: ArtistaService){

  }


  regresar(){
    this._router.navigateByUrl('inicio');
  }

  guardar(){
    Swal.fire(
      'EXITO!',
      'Se actualizo el usuario!',
      'success'
    )
  }
}
