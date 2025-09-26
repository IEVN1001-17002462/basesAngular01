import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {

  
  nombre: string = '';
  cantCompradores: number = 0;
  tarjetaCine: boolean = false;
  cantBoletos: number = 0;
  precioBoleto: number = 12;
  total: number = 0;
  mensajeError: string = '';

  calcular(): void {
    const maxBoletos = this.cantCompradores * 7;

    if (this.cantBoletos > maxBoletos) {
      this.mensajeError = `No puedes comprar más de ${maxBoletos} boletos en total.`;
      this.total = 0;
      return;
    }
    this.mensajeError = '';

    let subtotal = this.cantBoletos * this.precioBoleto;

    if (this.cantBoletos > 5) {
      subtotal *= 0.85;
    } else if (this.cantBoletos >= 3 && this.cantBoletos <= 5) {
      subtotal *= 0.90;
    }

    if (this.tarjetaCine == true) {
      subtotal *= 0.90;
    }

    this.total = subtotal;
  }
}


