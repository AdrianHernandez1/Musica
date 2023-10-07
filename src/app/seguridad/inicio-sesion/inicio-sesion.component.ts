import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
    strUsuario:string='';
    strContrasenia:string='';

    constructor(private _router: Router){

    }

    irRegistrarse(){
      this._router.navigateByUrl('registrarse');
    }

    irInicio(){
      if(this.strUsuario == 'admin' && this.strContrasenia == 'admin'){
        Swal.fire(
          'EXITO!',
          'Credenciales correctas!',
          'success'
        )
        this._router.navigateByUrl('inicio');
      }else{
        Swal.fire(
          'ERROR!',
          'Verifica que las credenciales sean correctas!',
          'error'
        )
      }
    }
}
