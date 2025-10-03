import { Component } from '@angular/core';
import { Distancia } from './calculosExtra';

@Component({
  selector: 'app-extra',
  standalone: false,
  templateUrl: './extra.component.html',
  styleUrl: './extra.component.css'
})
export class ExtraComponent {

  x1:number = 0;
  y1:number = 0;
  x2:number = 0;
  y2:number = 0;
  resultado:number = 0;

  calcular(){
    const distancia = new Distancia(this.x1, this.y1, this.x2, this.y2)
    this.resultado = distancia.calcularDistancia();
  }


}
