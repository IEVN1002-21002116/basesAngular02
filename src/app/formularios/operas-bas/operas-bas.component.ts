import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1: string = '';
  num2: string = '';
  operacion: string = '';
  res: string = '';

  sumar(): void {
    this.res = (parseFloat(this.num1) + parseFloat(this.num2)).toString();
  }

  restar(): void {
    this.res = (parseFloat(this.num1) - parseFloat(this.num2)).toString();
  }

  multiplicar(): void {
    this.res = (parseFloat(this.num1) * parseFloat(this.num2)).toString();
  }

  dividir(): void {
    this.res = (parseFloat(this.num1) / parseFloat(this.num2)).toString();
  }


  calcular(): void {
    switch (this.operacion) {
      case 'suma':
        this.sumar();
        break;
      case 'resta':
        this.restar();
        break;
      case 'multiplicacion':
        this.multiplicar();
        break;
      case 'division':
        this.dividir();
        break;
    }
  }
}


