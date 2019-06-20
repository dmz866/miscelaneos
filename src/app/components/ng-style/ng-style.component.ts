import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <!-- <p [ngStyle]="{'font-size': tamano + 'px', 'color': 'red'}">
      Hola Mundo
    </p> -->
    <!-- <p [style.fontSize]="'60px'"> -->
    <!--<p [style.fontSize.px]="tamano">
      Dosh
    </p>-->
    <p [style.fontSize.px]="tamano">Dosh</p>
    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano = 10;

  constructor() { }

  ngOnInit() {
  }

}
