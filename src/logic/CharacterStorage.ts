import { Stats } from '../types/Character';

const CHARACTER_KEY = 'characterData';

export const createCharacter = (characterData: Stats) => {
  localStorage.setItem(CHARACTER_KEY, JSON.stringify(characterData));
};

export const updateCharacter = (updateData: Partial<Stats>) => {
  const existingData = getCharacter();
  const updatedData = { ...existingData, ...updateData };
  localStorage.setItem(CHARACTER_KEY, JSON.stringify(updatedData));
};

export const getCharacter = (): CharacterData | null => {
  const data = localStorage.getItem(CHARACTER_KEY);
  return data ? JSON.parse(data) : null;
};
