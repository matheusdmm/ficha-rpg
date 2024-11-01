export type Stats = {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};

export type StatsType = {
  [key in keyof Stats]: number;
};

export interface IStats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export type CharacterData = {
    name: string;
    stats: Stats;
    avatar: string;
    class: string;
    race: string;
    subRace: string;
    equipment: any[];
  };