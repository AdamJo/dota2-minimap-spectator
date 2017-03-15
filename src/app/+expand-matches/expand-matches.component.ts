import { Component, HostBinding, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { ApiService } from '../services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'em-expand-matches',
  templateUrl: 'expand-matches.component.html',
  styleUrls: ['./expand-matches.component.css'],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'scale(1)'
        })
      ),
      transition('void => *', [
        style({
          opacity: .5,
          transform: 'scale(.95)'
        }),
        animate('0.3s ease-in')
      ])
    ])
  ]
})

export class ExpandMatchesComponent {

  scoreboardValue: string;

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }

  constructor(public apiService: ApiService, private router: Router) {
    this.scoreboardValue = 'None';
  }

  // add line for None to replace scoreboard from Live game
  // ngOnInit() {
  //   this.scoreboardValue = this.apiService.scoreboardValues.sortedValue
  // }

  // Switch user selected game
  switchToGame($event) {
    this.apiService.SwitchToGame($event);
    this.router.navigate(['']);
  }

  // toggles menu and scorebaord
  switchScoreboardValue(userValue) {
    if (userValue === this.scoreboardValue) {
      this.scoreboardValue = 'None';
    } else {
      this.scoreboardValue = userValue;
    }
  }

  // use in-game shortcuts to navigate scoreboard
  @HostListener(`document:keypress`, ['$event'])
  keypress(e: KeyboardEvent) {
      switch (e.key) {
        case 'q':
        case 'Q':
          this.switchScoreboardValue({value: 'kills'});
          break;
        case 'w':
        case 'W':
          this.switchScoreboardValue({value: 'last_hits'});
          break;
        case 'e':
        case 'E':
          this.switchScoreboardValue({value: 'level'});
          break;
        case 'r':
        case 'R':
          this.switchScoreboardValue({value: 'xp_per_min'});
          break;
        case 't':
        case 'T':
          this.switchScoreboardValue({value: 'gold'});
          break;
        case 'y':
        case 'Y':
          this.switchScoreboardValue({value: 'net_worth'});
          break;
        case 'u':
        case 'U':
          this.switchScoreboardValue({value: 'gold_per_min'});
          break;
        case 'i':
        case 'I':
          this.switchScoreboardValue({value: 'ultimate_cooldown'});
          break;
        case 'o':
        case 'O':
          this.switchScoreboardValue({value: 'respawn_timer'});
          break;
        default:
          break;
      }
  }
}
