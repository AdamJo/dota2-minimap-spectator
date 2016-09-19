import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-league',
  templateUrl: 'league.component.html'
})
export class leagueComponent{
  @Input() league: any;
}