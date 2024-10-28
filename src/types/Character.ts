export interface Stats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface Character {
  name: string;
  stats: Stats;
  abilities: string[];
  inventory: { item: string; quantity: number }[];
}
