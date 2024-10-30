import React, { useEffect, useState } from 'react';
import { CharacterStats, CharacterState } from '../types/CharacterStats';
import { getCharacter } from '../logic/CharacterStorage';

const CharacterSheet: React.FC = () => {
  const [character, setCharacter] = useState<CharacterState | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const loadedCharacter = await getCharacter();
      setCharacter(loadedCharacter);
    };

    fetchCharacter();
  }, []);

  const exportToJSON = () => {
    if (!character) return;

    const blob = new Blob([JSON.stringify(character, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${character.name || 'personagem'}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const saveToLocalStorage = () => {
    if (!character) return;

    localStorage.setItem('character', JSON.stringify(character));
    alert('Personagem salvo no Local Storage!');
  };

  if (!character) {
    return <div>Carregando ficha do personagem...</div>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">Ficha do Personagem</h1>

      <p>
        <strong>Nome:</strong> {character.name}
      </p>
      <ul className="mt-4">
        {character.stats &&
          typeof character.stats === 'object' &&
          Object.entries(character.stats).map(([stat, value]) => (
            <li key={stat} className="mb-2">
              <strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong>{' '}
              {value as string | number}
            </li>
          ))}
        <li className="mb-2">
          <strong>Classe:</strong> {character.class}
        </li>
        <li className="mb-2">
          <strong>Raça:</strong> {character.race}
        </li>
        <li className="mb-2">
          <strong>Sub-raça:</strong> {character.subRace}
        </li>
        <li className="mb-2">
          <strong>Avatar:</strong> {character.avatar}
        </li>
        <li className="mb-2">
          <strong>Equipamentos:</strong>{' '}
          {character.equipment.map(equip => equip.label).join(', ') ||
            'Nenhum equipamento selecionado.'}
        </li>
      </ul>

      <div className="flex space-x-4">
        <button
          onClick={exportToJSON}
          className="mt-6 w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Exportar para JSON
        </button>
        <button
          onClick={saveToLocalStorage}
          className="mt-6 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Salvar no Local Storage
        </button>
      </div>
    </div>
  );
};

export default CharacterSheet;
