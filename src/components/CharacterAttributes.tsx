import React from 'react';
import { CharacterStats } from '../types/CharacterStats';

interface CharacterAttributesProps {
  stats: CharacterStats;
  name: string;
  setName: (name: string) => void;
  handleStatChange: (stat: keyof CharacterStats, value: number) => void;
  onSubmit: (e: React.FormEvent) => void;
  races: string[];
  selectedRace: string;
  setSelectedRace: (race: string) => void;
  subRaces: string[];
  selectedSubRace: string;
  setSelectedSubRace: (subRace: string) => void;
}

const CharacterAttributes: React.FC<CharacterAttributesProps> = ({
  name,
  setName,
  stats,
  handleStatChange,
  onSubmit,
  races,
  selectedRace,
  setSelectedRace,
  subRaces,
  selectedSubRace,
  setSelectedSubRace,
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label className="block mb-4">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="input input-bordered w-full max-w-xs"
            placeholder="Nome do Personagem"
            required
          />
        </label>

        <label className="block mb-4">
          <select
            value={selectedRace}
            onChange={e => setSelectedRace(e.target.value)}
            className="select select-bordered w-full max-w-xs"
            required
          >
            <option value="">Selecione uma raça</option>
            {races.map((race, index) => (
              <option key={index} value={race}>
                {race}
              </option>
            ))}
          </select>
        </label>

        <label className="block mb-4">
          <select
            value={selectedSubRace}
            onChange={e => setSelectedSubRace(e.target.value)}
            className="select select-bordered w-full max-w-xs"
            required
          >
            <option value="">Selecione uma subraça</option>
            {subRaces.map((subRace, index) => (
              <option key={index} value={subRace}>
                {subRace}
              </option>
            ))}
          </select>
        </label>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {Object.entries(stats).map(([stat, value]) => (
            <label key={stat} className="text-center">
              <span className="block font-semibold text-[#4A3B2A]">
                {stat.charAt(0).toUpperCase() + stat.slice(1)}
              </span>
              <input
                type="number"
                value={stats[stat as keyof CharacterStats]}
                onChange={e => handleStatChange(stat as Stats, parseInt(e.target.value))}
                className="input input-bordered w-full max-w-xs no-scrollbar"
                required
              />
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default CharacterAttributes;
