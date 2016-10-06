/* tslint:disable: variable-name */
import {Routes, RouterModule} from '@angular/router';
import { RankedMatchesComponent } from './ranked-matches.component';
import { NgModule } from '@angular/core/src/metadata/ng_module';

export const routes: Routes = [
  {
    path: '',
    component: RankedMatchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RankedMatchesRoutingModule {
}