import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlippableCardComponent } from './flippable-card.component';



@NgModule({
  declarations: [FlippableCardComponent],
  imports: [
    CommonModule
  ],
  exports: [FlippableCardComponent]
})
export class FlippableCardModule { }
