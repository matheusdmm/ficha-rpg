export const baseValues = {
  strength: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10,
};

export const RandomBaseValues = () => {
  return {
    strength: Math.floor(Math.random() * 10) + 1,
    dexterity: Math.floor(Math.random() * 10) + 1,
    constitution: Math.floor(Math.random() * 10) + 1,
    intelligence: Math.floor(Math.random() * 10) + 1,
    wisdom: Math.floor(Math.random() * 10) + 1,
    charisma: Math.floor(Math.random() * 10) + 1,
  };
};
