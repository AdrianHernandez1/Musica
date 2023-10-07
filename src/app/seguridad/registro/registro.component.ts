import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    constructor(private _router: Router){

    }

    irInicioSesion(){
      this._router.navigateByUrl('inicioSesion');
      Swal.fire(
        'EXITO!',
        'Usuario creado correctamente!',
        'success'
      )
    }
}
