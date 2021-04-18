import {Component, Input, OnInit} from '@angular/core';
import {Lamp} from '../../model/lamp';

@Component({
  selector: 'app-light-card',
  templateUrl: './light-card.component.html',
  styleUrls: ['./light-card.component.scss']
})
export class LightCardComponent implements OnInit {

  @Input() lamp: Lamp;

  constructor() {
    this.lamp = new Lamp('initializer', false);
  }

  ngOnInit(): void {
  }

}
