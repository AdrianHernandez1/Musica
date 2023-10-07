import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  enviarDatosArtista$ = new EventEmitter<any>();


  constructor() { }
}
