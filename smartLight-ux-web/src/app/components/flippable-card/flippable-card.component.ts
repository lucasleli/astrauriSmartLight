import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flippable-card',
  templateUrl: './flippable-card.component.html',
  styleUrls: ['./flippable-card.component.scss']
})
export class FlippableCardComponent implements OnInit {
  isFlipped = false;

  constructor() { }

  ngOnInit(): void {
  }

  flip(): void{
    this.isFlipped = !this.isFlipped;
  }
}
