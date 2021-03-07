import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() drawer: any;

  constructor() { }

  ngOnInit(): void {
  }

}
