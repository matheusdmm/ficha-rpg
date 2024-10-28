import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="block lg:hidden p-2 text-white bg-gray-800 rounded"
      >
        {isOpen ? 'Fechar Menu' : 'Abrir Menu'}
      </button>

      <div
        className={`hidden lg:flex w-64 bg-gray-800 text-white p-4 flex-col space-y-4 h-full`}
      >
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

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 text-white flex flex-col p-4 z-50">
          <button onClick={toggleMenu} className="self-end p-2 text-lg">
            Fechar
          </button>
          <h2 className="text-2xl font-bold mb-6 text-center">Menu</h2>
          <Link
            to="/"
            className="hover:bg-gray-700 p-2 rounded mb-2 text-center"
            onClick={toggleMenu}
          >
            Personagens Criados
          </Link>
          <Link
            to="/create-character"
            className="hover:bg-gray-700 p-2 rounded mb-2 text-center"
            onClick={toggleMenu}
          >
            Criar Novo Personagem
          </Link>
          <Link
            to="/character-sheet"
            className="hover:bg-gray-700 p-2 rounded mb-2 text-center"
            onClick={toggleMenu}
          >
            Ficha de Personagem
          </Link>
          <Link
            to="/status-summary"
            className="hover:bg-gray-700 p-2 rounded mb-2 text-center"
            onClick={toggleMenu}
          >
            Resumo dos Status
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
