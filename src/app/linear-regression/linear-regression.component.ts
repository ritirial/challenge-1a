import { Component } from '@angular/core';
import { sumXX, sumXY } from '../common/calculate';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.css']
})
export class LinearRegressionComponent {

  listaX: number[] = [];
  listaY: number[] = [];

  calculateB1() {
    var medComp = new MediaComponent();
    return (sumXY(this.listaX, this.listaY) - this.listaX.length * medComp.media(this.listaX) * medComp.media(this.listaY)) / (sumXX(this.listaX) - this.listaX.length * Math.pow(medComp.media(this.listaX), 2));
  }

  calculateB0() {
    var medComp = new MediaComponent();
    return (medComp.media(this.listaY) - this.calculateB1() * medComp.media(this.listaX));
  }

  calculateYk(Xk: number) {
    return (this.calculateB0() + this.calculateB1() * Xk);
  }
}
