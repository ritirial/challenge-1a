import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  media(lista: number[]) {
    var accumulator = 0;
    lista.forEach(num => accumulator = accumulator + num);
    accumulator = accumulator / lista.length;
    return accumulator;
  }
}
