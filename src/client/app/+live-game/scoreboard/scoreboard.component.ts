import { Component, OnChanges, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-scoreboard',
  templateUrl: 'scoreboard.component.html',
  styleUrls: ['scoreboard.component.css']
})
export class ScoreboardComponent implements OnChanges {
  @Input() scoreboard: any;
  combinedPlayers: any;
  active: boolean;
  
  constructor() {
    this.active = true;
  }

  ngOnChanges() {
    this.addTeamToPlayers(this.scoreboard);
    this.combinedPlayers = [].concat(...[this.scoreboard.dire.players, this.scoreboard.radiant.players]);
  }

  sortValues(value: string) {
    return this.combinedPlayers.sort((a:any, b:any) => {
      if (a[value] < b[value]) {
        return 1;
      }
      if (a[value] > b[value]) {
        return -1;
      }
      return 0;
    });
  }

  addTeamToPlayers(scoreboard:any) {
    scoreboard.dire.players = scoreboard.dire.players.map(((player:any) => {
      player['team'] = 'dire';
      return player;
    }));
    scoreboard.radiant.players = scoreboard.radiant.players.map(((player:any) => {
      player['team'] = 'radiant';
      return player;
    }));
  }
  toggle() {
    console.log('inside toggle');
    this.active = this.active ? false : true;
  }
}
