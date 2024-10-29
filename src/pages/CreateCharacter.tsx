import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterContext from '../context/CharacterContext';
import DiceRoll from '../features/DiceRoll';
import D20Dice from '../features/d20';

const CreateCharacter: React.FC = () => {
  const { dispatch } = useContext(CharacterContext);
  const [name, setName] = useState('');
  const [stats, setStats] = useState({
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  });
  const [rollResult, setRollResult] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleStatChange = (stat: keyof typeof stats, value: number) => {
    setStats({ ...stats, [stat]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'SET_NAME', payload: name });
    Object.entries(stats).forEach(([stat, value]) => {
      dispatch({ type: 'UPDATE_STAT', payload: { stat, value } });
    });
    navigate('/character-sheet');
  };

  const rollDie = (sides: number) => {
    const result = Math.floor(Math.random() * sides) + 1;
    setRollResult(result);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-[#f5f1e8] border border-[#d3c6a5] rounded-lg shadow-lg mt-10 font-serif text-gray-900 relative">
      <h1 className="text-3xl font-bold text-center mb-4 text-[#6b4f24]">
        Criar Personagem
      </h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-6">
          <span className="text-lg font-semibold text-[#6b4f24]">
            Nome do Personagem
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-3 border border-[#d3c6a5] bg-[#f9f7f0] rounded w-full text-center text-[#5a4733] font-mono"
            required
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          {Object.keys(stats).map((stat) => (
            <label key={stat} className="text-center">
              <span className="block font-semibold text-[#6b4f24]">
                {stat.charAt(0).toUpperCase() + stat.slice(1)}
              </span>
              <input
                type="number"
                value={stats[stat as keyof typeof stats]}
                onChange={(e) =>
                  handleStatChange(
                    stat as keyof typeof stats,
                    parseInt(e.target.value)
                  )
                }
                className="mt-2 p-3 border border-[#d3c6a5] bg-[#f9f7f0] rounded w-full text-center text-[#5a4733] font-mono"
                required
              />
            </label>
          ))}
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-xl font-bold mb-2 text-[#6b4f24]">Rolar Dados</h2>
          <div className="flex justify-center space-x-3 mb-6">
            <button
              type="button"
              onClick={() => rollDie(4)}
              className="p-2 px-4 bg-[#d1b790] text-white rounded hover:bg-[#b89b6f] shadow-inner"
            >
              Rolar d4
            </button>
            <button
              type="button"
              onClick={() => rollDie(6)}
              className="p-2 px-4 bg-[#d1b790] text-white rounded hover:bg-[#b89b6f] shadow-inner"
            >
              Rolar d6
            </button>
            <button
              type="button"
              onClick={() => rollDie(10)}
              className="p-2 px-4 bg-[#d1b790] text-white rounded hover:bg-[#b89b6f] shadow-inner"
            >
              Rolar d10
            </button>
            <button
              type="button"
              onClick={() => rollDie(20)}
              className="p-2 px-4 bg-[#d1b790] text-white rounded hover:bg-[#b89b6f] shadow-inner"
            >
              Rolar d20
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full p-3 bg-[#b89b6f] text-white rounded hover:bg-[#6b4f24] font-semibold shadow-inner"
        >
          Criar Personagem
        </button>
      </form>

      {isModalOpen && <D20Dice result={rollResult!} onClose={closeModal} />}
    </div>
  );
};

export default CreateCharacter;
