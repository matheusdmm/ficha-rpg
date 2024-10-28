import React from 'react';

const Inventory: React.FC = () => {
  return (
    <div className="mt-4 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Inventário</h2>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded flex-1"
            placeholder="Item"
          />
          <input
            type="number"
            className="p-2 border border-gray-300 rounded w-20"
            placeholder="Qtd."
          />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
