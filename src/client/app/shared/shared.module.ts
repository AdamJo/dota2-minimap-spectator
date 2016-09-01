import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    MenuComponent
  ],
  exports: [MenuComponent]
})

export class SharedModule { }
