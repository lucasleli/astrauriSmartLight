import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-card',
  templateUrl: './light-card.component.html',
  styleUrls: ['./light-card.component.scss']
})
export class LightCardComponent implements OnInit {

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

}
