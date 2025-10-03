export class Resistencia {
  color1: number;
  color2: number;
  multi: number;
  tolerancia: number;

  
  colores: { [key: number]: string } = {
    0: 'Negro',
    1: 'Café', 
    2: 'Rojo',
    3: 'Naranja',
    4: 'Amarillo',
    5: 'Verde',
    6: 'Azul',
    7: 'Morado',
    8: 'Gris',
    9: 'Blanco'
  };

  coloresHex: { [key: number]: string } = {
    0: 'black',
    1: 'burlywood',
    2: 'red',
    3: 'orangered', 
    4: 'yellow',
    5: 'green',
    6: 'blue',
    7: 'purple',
    8: 'gray',
    9: 'gainsboro'
  };

  colorMult: { [key: number]: string } = {
    1: 'black',
    10: 'burlywood',
    100: 'red',
    1000: 'orangered', 
    10000: 'yellow',
    100000: 'green',
    1000000: 'blue',
    10000000: 'purple',
    100000000: 'gray',
    1000000000: 'gainsboro'
  };

  constructor(color1: number, color2: number, multi: number, tolerancia: number) {
    this.color1 = color1;
    this.color2 = color2;
    this.multi = multi;
    this.tolerancia = tolerancia;
  }

  calcularValor(): any {
    const base = Number(`${this.color1}${this.color2}`);
    const valor = base * this.multi;
    const valorMax = valor + (valor * this.tolerancia / 100);
    const valorMin = valor - (valor * this.tolerancia / 100);

    return {
      color1: this.color1,
      color2: this.color2,
      multi: this.multi,
      tolerancia: this.tolerancia,
      valor,
      valorMax,
      valorMin
    };
  }


  defColor(valor:number){
    return this.colores[valor];
  }
  defColorHex(valor:number){
    return this.coloresHex[valor];
  }
  defColorMult(valor:number){
    return this.colorMult[valor];
  }
  defTolerancia(tol: number): string {
    return tol == 5 ? 'Dorado' : 'Plateado';
  }
  defToleranciaHex(tol: number): string {
    return tol == 5 ? 'gold' : 'silver';
  }
  

}
