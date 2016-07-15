import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { LiveLeagueGame } from './liveLeagueGame'

@Injectable()
export class ApiService {

  constructor(private af: AngularFire) {}

  grabCurrentGame() {
    return this.af.database.object('currentGame')
  }
}