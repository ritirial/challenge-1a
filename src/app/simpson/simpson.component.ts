import { Component } from '@angular/core';
import { simpson } from '../common/simpson_rule';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {

  calculateSimpson(x0: number, x1: number, num_seg: number, mError_number: number, fun: any) {
    var multiplier = 1;
    var iter1 = 0;
    var iter2 = 0;
    var curError = mError_number + 1;

    do {
      iter1 = simpson(x0, x1, num_seg, multiplier, fun);

      multiplier = multiplier * 2;

      iter2 = simpson(x0, x1, num_seg, multiplier, fun);

      curError = Math.abs(iter1 - iter2);
    } while (curError > mError_number);

    return iter2;
  }
}
