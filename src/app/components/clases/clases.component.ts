import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {
  alerta: string;
  loading = false;
  propiedades: Object =
  {
    danger: false
  };
  constructor()
  {
    this.alerta = 'alert-danger';
   }

  ejecutar()
  {
    this.loading = true;
    setTimeout(() =>
    {
      this.loading = false;
    }, 3000);
  }

  ngOnInit() {
  }

}
