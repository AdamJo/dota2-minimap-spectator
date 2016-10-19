/* tslint:disable:no-string-literal */

export interface LiveLeagueGame {
  $key?: string;
  dire_team_name: string;
  league: League;
  match_id: number;
  radiant_team_name: string;
  scoreboard: Scoreboard;
  series: Series;
  spectators: number;
  stream_delay_s: number;
}

export interface Scoreboard {
  day_cycle: string;
  did_game_start: boolean;
  dire: Team;
  duration: number;
  radiant: Team;
  roshan_respawn_timer: number;
};

export interface Team {
    // abilities: Array<Abilities>;
    bans: Array<string>;
    barracks_state: string;
    picks: Array<string>;
    players: Array<Players>;
    score: number;
    tower_state: string;
}

export interface Abilities {
  ability_id: number;
  ability_level: number;
}

export interface Bans {
  hero_id: string;
}

export interface Picks {
  hero_id: string;
}

export interface League {
    name: string;
    tournament_url: string;
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
  old_ultimate_cooldown?: number;
  ultimate_used?: boolean;
  ultimate_state: number;
  xp_per_min: number;
}
