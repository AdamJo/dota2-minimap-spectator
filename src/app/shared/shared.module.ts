import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent, FooterComponent } from './index';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    NavComponent, FooterComponent
  ],
  exports: [NavComponent, FooterComponent]
})

export class SharedModule { }
