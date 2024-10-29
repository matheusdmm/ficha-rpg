export interface CharacterStats {
  [key: string]: number | string; // Permite valores como número ou string
}

export interface CharacterState {
  name: string;
  stats: CharacterStats;
  avatar: string;
  class: string;
  race: string;
  subRace: string;
}
