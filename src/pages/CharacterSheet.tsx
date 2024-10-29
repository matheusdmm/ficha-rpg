import React, { useContext } from 'react';
import CharacterContext from '../context/CharacterContext';

const CharacterSheet: React.FC = () => {
  const { state } = useContext(CharacterContext);
  document.title = 'Ficha do personagem';

  const exportToJSON = () => {
    const characterData = {
      name: state.name,
      stats: state.stats,
      avatar: state.avatar,
      class: state.class,
      race: state.race,
      subRace: state.subRace,
    };

    const blob = new Blob([JSON.stringify(characterData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${state.name || 'personagem'}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const saveToLocalStorage = () => {
    const characterData = {
      name: state.name,
      stats: state.stats,
      avatar: state.avatar,
      class: state.class,
      race: state.race,
      subRace: state.subRace,
    };

    localStorage.setItem('character', JSON.stringify(characterData));
    alert('Personagem salvo no Local Storage!');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">Ficha do Personagem</h1>

      <p>
        <strong>Nome:</strong> {state.name}
      </p>
      <ul className="mt-4">
        {state.stats &&
          Object.entries(state.stats).map(([stat, value]) => (
            <li key={stat} className="mb-2">
              <strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong> {value}
            </li>
          ))}
        <li className="mb-2">
          <strong>Classe:</strong> {state.class}
        </li>
        <li className="mb-2">
          <strong>Raça:</strong> {state.race}
        </li>
        <li className="mb-2">
          <strong>Sub-raça:</strong> {state.subRace}
        </li>
        <li className="mb-2">
          <strong>Avatar:</strong> {state.avatar}
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
