import { Component } from '@angular/core';
import { sumX, sumXX, sumXY } from '../common/calculate';

@Component({
  selector: 'app-correlation',
  templateUrl: './correlation.component.html',
  styleUrls: ['./correlation.component.css']
})
export class CorrelationComponent {

  listaX: number[] = [];
  listaY: number[] = [];

  calculateR() {
    var dividendo = (this.listaX.length * sumXY(this.listaX, this.listaY) - sumX(this.listaX) * sumX(this.listaY)); 
    var divisor1 = (this.listaX.length * sumXX(this.listaX) - Math.pow(sumX(this.listaX), 2)) * (this.listaX.length * sumXX(this.listaY) - Math.pow(sumX(this.listaY), 2)); 
    var divisorRaiz = Math.sqrt(divisor1);

    return dividendo / divisorRaiz;
  }

  calculateRR() {
    return Math.pow(this.calculateR(), 2);
  }

}
