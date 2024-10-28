import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterContext from '../context/CharacterContext';

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

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">Criar Personagem</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-lg font-semibold">Nome do Personagem</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            required
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          {Object.keys(stats).map((stat) => (
            <label key={stat} className="text-center">
              <span className="block font-semibold">
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
                className="mt-2 p-2 border border-gray-300 rounded w-full text-center"
                required
              />
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="mt-6 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Criar Personagem
        </button>
      </form>
    </div>
  );
};

export default CreateCharacter;
