import React from 'react';

const Abilities: React.FC = () => {
  return (
    <div className="mt-4 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
      <textarea
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Digite as habilidades do personagem aqui..."
        rows={4}
      />
    </div>
  );
};

export default Abilities;
