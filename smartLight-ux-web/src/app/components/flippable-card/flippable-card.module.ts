import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlippableCardComponent } from './flippable-card.component';
import {FlippableCardBackComponent} from './flippable-card-back';
import {FlippableCardFrontComponent} from './flippable-card-front';



@NgModule({
  declarations: [FlippableCardComponent, FlippableCardBackComponent, FlippableCardFrontComponent],
  imports: [
    CommonModule
  ],
  exports: [FlippableCardComponent, FlippableCardBackComponent, FlippableCardFrontComponent]
})
export class FlippableCardModule { }
