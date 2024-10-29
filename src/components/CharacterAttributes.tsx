import React from 'react';

interface CharacterAttributesProps {
  name: string;
  setName: (name: string) => void;
  stats: Record<string, number>;
  handleStatChange: (stat: keyof typeof stats, value: number) => void;
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
          <span className="text-lg font-semibold text-[#4A3B2A]">Nome do Personagem</span>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="mt-2 p-3 border border-[#D1D5DB] bg-[#F7F7F7] rounded w-full text-center text-[#5A4733] font-mono transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#B89B6F]"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-lg font-semibold text-[#4A3B2A]">Raça</span>
          <select
            value={selectedRace}
            onChange={e => setSelectedRace(e.target.value)}
            className="mt-2 p-3 border border-[#D1D5DB] bg-[#F7F7F7] rounded w-full text-center text-[#5A4733] font-mono transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#B89B6F]"
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
          <span className="text-lg font-semibold text-[#4A3B2A]">Subraça</span>
          <select
            value={selectedSubRace}
            onChange={e => setSelectedSubRace(e.target.value)}
            className="mt-2 p-3 border border-[#D1D5DB] bg-[#F7F7F7] rounded w-full text-center text-[#5A4733] font-mono transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#B89B6F]"
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
          {Object.keys(stats).map(stat => (
            <label key={stat} className="text-center">
              <span className="block font-semibold text-[#4A3B2A]">
                {stat.charAt(0).toUpperCase() + stat.slice(1)}
              </span>
              <input
                type="number"
                value={stats[stat as keyof typeof stats]}
                onChange={e =>
                  handleStatChange(stat as keyof typeof stats, parseInt(e.target.value))
                }
                className="mt-2 p-3 border border-[#D1D5DB] bg-[#F7F7F7] rounded w-full text-center text-[#5A4733] font-mono transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#B89B6F]"
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
