import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent, FooterComponent, MobileMessageComponent } from './index';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    NavComponent, FooterComponent, MobileMessageComponent
  ],
  exports: [NavComponent, FooterComponent, MobileMessageComponent]
})

export class SharedModule { }
