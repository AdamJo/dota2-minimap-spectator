import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: AboutComponent },
    ])
  ],
  declarations: [
    AboutComponent
  ],
  exports: [AboutComponent]
})

export class AboutModule { }
