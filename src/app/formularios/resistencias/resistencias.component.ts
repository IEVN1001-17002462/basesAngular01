import { Component } from '@angular/core';
import { Resistencia } from './operacionesResistecias';

@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent {
  color1:number=0;
  color2:number=0;
  multi:number=0;
  tol:number=0;

  resultado: any = null;
  c1: any= null;
  c2: any= null;
  bg1: any=null;
  bg2: any=null;
  bg3: any=null;
  bg4: any=null;
  tolText: any=null;

  procesar(){
    const resistencia = new Resistencia(this.color1, this.color2, this.multi, this.tol);
    this.resultado = resistencia.calcularValor();
    this.c1 = resistencia.defColor(this.color1);
    this.c2 = resistencia.defColor(this.color2);
    this.bg1 = resistencia.defColorHex(this.color1);
    this.bg2 = resistencia.defColorHex(this.color2);
    this.bg3 = resistencia.defColorMult(this.multi);
    this.bg4 = resistencia.defToleranciaHex(this.tol);
    this.tolText = resistencia.defTolerancia(this.tol);

  }

}
