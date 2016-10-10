export interface MMR {
    average_mmr: number;
    delay: number;
    dire_score: number;
    game_time: number;
    lobby_id: string;
    players: Array<RankedPlayers>;
    radiant_score: number;
    server_steam_id: string;
    spectators: number;
}

export interface RankedPlayers {
  assists: number;
  deaths: number;
  hero: string;
  kills: number;
  name: string;
}
