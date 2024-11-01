import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="drawer">
      <input id="drawer" type="checkbox" className="drawer-toggle" checked={isOpen} readOnly />
      <div className="drawer-content px-4 py-4">
        <label htmlFor="drawer" className="btn btn-primary drawer-button " onClick={toggleMenu}>
          {isOpen ? 'Fechar Menu' : 'Abrir Menu'}
        </label>
      </div>
      <div className={`drawer-side ${isOpen ? 'block' : 'hidden'}`}>
        <label htmlFor="drawer" className="drawer-overlay" onClick={toggleMenu}></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          <li>
            <Link to="/" className="" onClick={toggleMenu}>
              Personagens Criados
            </Link>
          </li>
          <li>
            <Link
              to="/create-character"
              className=""
              onClick={toggleMenu}
            >
              Criar Novo Personagem
            </Link>
          </li>
          <li>
            <Link
              to="/character-sheet"
              className=""
              onClick={toggleMenu}
            >
              Ficha de Personagem
            </Link>
          </li>
          <li>
            <Link
              to="/status-summary"
              className=""
              onClick={toggleMenu}
            >
              Resumo dos Status
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
