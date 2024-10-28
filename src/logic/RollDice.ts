const rollDice = (sides: number) => {
  const result = Math.floor(Math.random() * sides) + 1;
  return result;
};

export default rollDice;
