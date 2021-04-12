import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  resultado: number = 0;

  lampadas: any[] = [
    {
      nome : 'lampada 1',
      status : true
    },
    {
      nome : 'lampada 2',
      status : false
    },
    {
      nome : 'lampada 3',
      status : true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  exibirDados(numero: number, numero2: number){

    this.resultado = numero * numero2;

  }

}
