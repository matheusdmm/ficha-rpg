import React, { useEffect, useState } from 'react';
import { CharacterState } from '../types/CharacterStats';
import { getCharacter } from '../logic/CharacterStorage';
import CharacterCard from '../components/CharacterCard';

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

      {/* Aqui você usa o CharacterCard */}
      <CharacterCard character={character} />

      <div className="flex space-x-4 mt-6">
        <button
          onClick={exportToJSON}
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Exportar para JSON
        </button>
        <button
          onClick={saveToLocalStorage}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Salvar no Local Storage
        </button>
      </div>
    </div>
  );
};

export default CharacterSheet;
