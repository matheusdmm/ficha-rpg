import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterContext from '../context/CharacterContext';
import D20Dice from '../features/dices/d20';
import { fetchClasses } from '../features/api/fetchApi'; // Importando a função de fetch

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
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [classes, setClasses] = useState<string[]>([]); // Estado para armazenar as classes
  const navigate = useNavigate();

  const handleStatChange = (stat: keyof typeof stats, value: number) => {
    setStats({ ...stats, [stat]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'SET_NAME', payload: name });
    dispatch({ type: 'SET_AVATAR', payload: selectedAvatar });
    dispatch({ type: 'SET_CLASS', payload: selectedClass });
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

  // Fetch classes from the D&D API
  useEffect(() => {
    const loadClasses = async () => {
      const fetchedClasses = await fetchClasses();
      setClasses(fetchedClasses); // Armazena as classes obtidas da API
    };

    loadClasses();
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-[#F9FAFB] to-[#E5E7EB] text-[#1F2937]">
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-6 text-[#4A3B2A]">
          Criar Personagem
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6"
        >
          <label className="block mb-4">
            <span className="text-lg font-semibold text-[#4A3B2A]">
              Nome do Personagem
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-3 border border-[#D1D5DB] bg-[#F7F7F7] rounded w-full text-center text-[#5A4733] font-mono transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#B89B6F]"
              required
            />
          </label>

          <div className="grid grid-cols-2 gap-4 mb-4">
            {Object.keys(stats).map((stat) => (
              <label key={stat} className="text-center">
                <span className="block font-semibold text-[#4A3B2A]">
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
                  className="mt-2 p-3 border border-[#D1D5DB] bg-[#F7F7F7] rounded w-full text-center text-[#5A4733] font-mono transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#B89B6F]"
                  required
                />
              </label>
            ))}
          </div>

          <div className="mt-4 text-center">
            <h2 className="text-xl font-bold mb-2 text-[#4A3B2A]">
              Rolar Dados
            </h2>
            <div className="flex justify-center space-x-3 mb-4">
              {[4, 6, 10, 20].map((sides) => (
                <button
                  key={sides}
                  type="button"
                  onClick={() => rollDie(sides)}
                  className="p-2 px-4 bg-[#4B8B3B] text-white rounded hover:bg-[#3B6831] shadow-md transition duration-200"
                >
                  Rolar d{sides}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full p-3 bg-[#4B8B3B] text-white rounded hover:bg-[#3B6831] font-semibold shadow-inner transition duration-200"
          >
            Criar Personagem
          </button>
        </form>
      </div>

      <div className="flex-1 p-8 bg-white rounded-lg shadow-lg mx-4">
        <h2 className="text-2xl font-bold text-[#4A3B2A] mb-4">
          Escolher Avatar
        </h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {['Avatar1', 'Avatar2', 'Avatar3'].map((avatar) => (
            <button
              key={avatar}
              onClick={() => setSelectedAvatar(avatar)}
              className={`p-4 border rounded-lg transition duration-200 ${
                selectedAvatar === avatar
                  ? 'border-[#4B8B3B] bg-[#D1B790] shadow-lg'
                  : 'border-[#D1D5DB]'
              }`}
            >
              {avatar}
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#4A3B2A] mb-4">
          Escolher Classe
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {classes.map((classe) => (
            <button
              key={classe}
              onClick={() => setSelectedClass(classe)}
              className={`p-4 border rounded-lg transition duration-200 ${
                selectedClass === classe
                  ? 'border-[#4B8B3B] bg-[#D1B790] shadow-lg'
                  : 'border-[#D1D5DB]'
              }`}
            >
              {classe}
            </button>
          ))}
        </div>
      </div>

      {isModalOpen && <D20Dice result={rollResult!} onClose={closeModal} />}
    </div>
  );
};

export default CreateCharacter;
