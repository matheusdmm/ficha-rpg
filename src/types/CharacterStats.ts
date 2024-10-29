export interface CharacterStats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface CharacterState {
  name: string;
  stats: CharacterStats;
  avatar: string;
  class: string;
  race: string;
  subRace: string;
}
