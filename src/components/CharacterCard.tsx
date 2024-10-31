import React from 'react';
import { CharacterState } from '../types/CharacterStats';

interface CharacterCardProps {
  character: CharacterState;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="relative w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-2 gap-4 p-4">
        {/* Avatar and Basic Info Column */}
        <div className="flex flex-col items-center">
          <img
            src={character.avatar}
            alt={character.name}
            className="w-48 h-48 object-cover rounded-lg mb-4 shadow-md"
          />
          <h2 className="text-2xl font-bold text-[#4A3B2A]">{character.name}</h2>
          <div className="text-center mt-2">
            <p className="text-sm text-gray-600">
              {character.race} {character.subRace}
            </p>
            <p className="text-sm text-gray-600">{character.class}</p>
          </div>
        </div>

        {/* Attributes and Equipment Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#4A3B2A] border-b pb-2">Atributos</h3>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(character.stats).map(([key, value]) => (
              <div key={key} className="bg-gray-100 p-2 rounded text-center">
                <strong className="block text-sm text-gray-600 capitalize">{key}</strong>
                <span className="text-lg font-bold text-[#4A3B2A]">{value}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-4 text-[#4A3B2A] border-b pb-2">
            Equipamentos
          </h3>
          <ul className="list-disc list-inside text-sm">
            {character.equipment.length > 0 ? (
              character.equipment.map((equip, index) => (
                <li key={index} className="text-gray-700">
                  {equip.label}
                </li>
              ))
            ) : (
              <li className="text-gray-500 italic">Nenhum equipamento selecionado</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
