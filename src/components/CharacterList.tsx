import React, { useContext } from 'react';
import CharacterContext from '../context/CharacterContext';

const CharacterList: React.FC = () => {
  const { state } = useContext(CharacterContext);

  document.title = 'Personagens criados';

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Personagens Criados</h1>
      <ul>
        <li>{state.name || 'Nenhum personagem criado ainda'}</li>
      </ul>
    </div>
  );
};

export default CharacterList;
