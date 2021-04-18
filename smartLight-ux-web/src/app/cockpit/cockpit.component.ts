import { Component, OnInit } from '@angular/core';
import { Lamp } from '../model/lamp';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  lampadas: Lamp[] = [
    new Lamp('lamp 1', true),
    new Lamp('lamp 2', false)
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
