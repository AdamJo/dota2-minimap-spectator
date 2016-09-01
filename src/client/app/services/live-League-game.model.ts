/* tslint:disable:no-string-literal */

export interface LiveLeagueGame {
  $key?: string;
  dire_team_name: string;
  league: {
    name: string,
    tournament_url: string
  };
  match_id: number;
  radiant_team_name: string;
  scoreboard: {
    day_cycle: string,
    did_game_start: boolean,
    dire: {
      // abilities: Array<Abilities>,
      bans: Array<string>,
      barracks_state: string,
      picks: Array<string>,
      players: Array<Players>,
      score: number,
      tower_state: string
    },
    duration: number,
    radiant: {
      // abilities: Array<Abilities>,
      bans: Array<string>,
      barracks_state: string,
      picks: Array<string>,
      players: Array<Players>,
      score: number,
      tower_state: string
    },
    roshan_respawn_timer: number
  };
  series: Series;
  spectators: number;
  stream_delay_s: number;
}

export interface Abilities {
  ability_id: number;
  ability_level: number;
}

export interface Bans {
  hero_id : string;
}

export interface Picks {
  hero_id : string;
}

export interface Series {
  dire_series_wins: Array<number>;
  radiant_series_wins: Array<number>;
}

export interface Players {
  account_id: number;
  assists: number;
  death: number;
  denies: number;
  gold: number;
  gold_per_min: number;
  hero: string;
  items: Array<string>;
  kills: number;
  last_hits: number;
  level: number;
  name: string;
  net_worth: number;
  player_slot: number;
  position_x: number;
  position_y: number;
  respawn_timer: number;
  old_position_x?: number;
  old_position_y?: number;
  ultimate_cooldown: number;
  ultimate_state: number;
  xp_per_min: number;
}
