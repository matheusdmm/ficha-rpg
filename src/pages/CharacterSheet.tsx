import React, { useContext } from 'react';
import CharacterContext from '../context/CharacterContext';

const CharacterSheet: React.FC = () => {
  const { state } = useContext(CharacterContext);

  const exportToJSON = () => {
    const characterData = {
      name: state.name,
      stats: state.stats,
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

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">
        Ficha do Personagem
      </h1>

      <p>
        <strong>Nome:</strong> {state.name}
      </p>
      <ul className="mt-4">
        {state.stats &&
          Object.entries(state.stats).map(([stat, value]) => (
            <li key={stat} className="mb-2">
              <strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong>{' '}
              {value}
            </li>
          ))}
      </ul>

      {/* Botão para Exportar JSON */}
      <button
        onClick={exportToJSON}
        className="mt-6 w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Exportar para JSON
      </button>
    </div>
  );
};

export default CharacterSheet;
