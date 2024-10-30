import { Stats } from '../types/Character';

interface CharacterData {
  name: string;
  stats: Record<string, number>;
  avatar: string;
  class: string;
  race: string;
  subRace: string;
  equipment: any[];
}

let characterData: CharacterData = {
  name: '',
  stats: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  avatar: '',
  class: '',
  race: '',
  subRace: '',
  equipment: [],
};

export const getCharacterData = () => characterData;

export const saveCharacter = (data: Partial<CharacterData>) => {
  characterData = { ...characterData, ...data };
};

export const updateStat = (stat: keyof CharacterData['stats'], value: number) => {
  characterData.stats[stat] = value;
};

export const setName = (name: string) => saveCharacter({ name });
export const setAvatar = (avatar: string) => saveCharacter({ avatar });
export const setClass = (className: string) => saveCharacter({ class: className });
export const setRace = (race: string) => saveCharacter({ race });
export const setSubRace = (subRace: string) => saveCharacter({ subRace });

export const saveToLocalStorage = () => {
  localStorage.setItem('character', JSON.stringify(characterData));
  alert('Personagem salvo no Local Storage!');
};

export const exportToJSON = () => {
  const blob = new Blob([JSON.stringify(characterData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${characterData.name || 'personagem'}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
