import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent, FooterComponent, BrowserMessageComponent } from './index';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    NavComponent, FooterComponent, BrowserMessageComponent
  ],
  exports: [NavComponent, FooterComponent, BrowserMessageComponent]
})

export class SharedModule { }
