import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 flex flex-col space-y-4">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <Link to="/" className="hover:bg-gray-700 p-2 rounded">
        Personagens Criados
      </Link>
      <Link to="/create-character" className="hover:bg-gray-700 p-2 rounded">
        Criar Novo Personagem
      </Link>
      <Link to="/character-sheet" className="hover:bg-gray-700 p-2 rounded">
        Ficha de Personagem
      </Link>
      <Link to="/status-summary" className="hover:bg-gray-700 p-2 rounded">
        Resumo dos Status
      </Link>
    </div>
  );
};

export default Sidebar;
