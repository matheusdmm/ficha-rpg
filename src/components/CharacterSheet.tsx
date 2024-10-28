import React, { useContext } from 'react';
import Stats from './Stats';
import Abilities from './Abilities';
import Inventory from './Inventory';
import CharacterContext from '../context/CharacterContext';

const CharacterSheet: React.FC = () => {
  const { state, dispatch } = useContext(CharacterContext);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-4">
        {state.name || 'Ficha de Personagem'}
      </h1>
      <Stats />
      <Abilities />
      <Inventory />
    </div>
  );
};

export default CharacterSheet;
