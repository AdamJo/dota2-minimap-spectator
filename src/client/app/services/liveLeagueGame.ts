/* tslint:disable:no-string-literal */

export interface LiveLeagueGame {
  $key?: string;
  dire_series_wins: number;
  dire_team_name: string;
  game_number: number;
  league: {
    name: string,
    tournament_url: string
  };
  league_game_id: number;
  league_series_id: number;
  league_tier: string;
  match_id: number;
  radiant_series_wins: number;
  radiant_team_name: string;
  scoreboard: {
    day_cycle: string,
    dire: {
      abilities: Array<Abilities>,
      bans: Array<Bans>,
      barracks_state: number,
      picks: Array<Picks>,
      players: Array<Players>,
      score: number,
      tower_state: number
    },
    duration: number,
    radiant: {
      abilities: Array<Abilities>,
      bans: Array<Bans>,
      barracks_state: number,
      picks: Array<Picks>,
      players: Array<Players>,
      score: number,
      tower_state: number
    },
    roshan_respawn_timer: number
  };
  series_id: number;
  series: Series;
  series_type: string;
  spectators: number;
  stage_name: string;
  stream_delay_s: number;
}

export interface Abilities {
  ability_id: number;
  ability_level: number;
}

export interface Bans {
  hero_id : number;
}

export interface Picks {
  hero_id : number;
}

export interface Series {
  dire_series_wins: number;
  radiant_series_wins: number;
  series_type: number;
}

export interface Players {
  ultimate_cooldown: number;
  xp_per_min: number;
  position_x: number;
  gold_per_min: number;
  last_hits: number;
  assists: number;
  ultimate_state: number;
  respawn_timer: number;
  items: Array<number>;
  name: string;
  death: number;
  gold: number;
  net_worth: number;
  account_id: number;
  position_y: number;
  kills: number;
  player_slot: number;
  level: number;
  hero_id: number;
  denies: number;
  old_position_x?: number;
  old_position_y?: number;
}
