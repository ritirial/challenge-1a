import { Component } from '@angular/core';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent {
  stddev(lista: number[]) {
    var media = new MediaComponent().media(lista);
    var sumatoria = 0;
    lista.forEach(num => sumatoria = sumatoria + (Math.pow(num - media, 2)));
    var desv = Math.sqrt(sumatoria / (lista.length - 1));
    return desv;
  }
}
