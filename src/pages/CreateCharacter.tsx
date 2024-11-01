import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import D20Dice from '../features/dices/d20';
import { fetchClasses, fetchRaces, fetchSubRaces } from '../features/api/fetchApi';
import ClassSelector from '../components/ClassSelector';
import AvatarSelection from '../components/AvatarSelection';
import CharacterAttributes from '../components/CharacterAttributes';
import EquipmentSelector from '../components/EquipmentSelector';
import { Stats } from '../types/Stats';
import { createCharacter, getCharacter } from '../logic/CharacterStorage';
import { baseValues, RandomBaseValues } from '../Data/BaseCharacter';

const CreateCharacter: React.FC = () => {
  const [name, setName] = useState('');
  const [rollResult, setRollResult] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [classOptions, setClassOptions] = useState<string[]>([]);
  const [races, setRaces] = useState<string[]>([]);
  const [selectedRace, setSelectedRace] = useState('');
  const [subRaces, setSubRaces] = useState<string[]>([]);
  const [selectedSubRace, setSelectedSubRace] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<any[]>([]);
  const [selectedEquipments, setSelectedEquipments] = useState<any[]>([]);
  const [stats, setStats] = useState<Stats>(RandomBaseValues);
  const navigate = useNavigate();

  document.title = 'Criação de Personagem';

  const loadChar = () => {
    useEffect(() => {
      const loadCharacter = async () => {
        const savedCharacter = await getCharacter();
        if (savedCharacter) {
          setName(savedCharacter.name || '');
          setSelectedAvatar(savedCharacter.avatar || '');
          setSelectedClass(savedCharacter.class || '');
          setSelectedRace(savedCharacter.race || '');
          setSelectedSubRace(savedCharacter.subRace || '');
          setSelectedEquipments(savedCharacter.equipment || []);
          setStats(savedCharacter.stats || RandomBaseValues);
        }
      };

      loadCharacter();
    }, []);
  };

  useEffect(() => {
    const loadClasses = async () => {
      const classes = await fetchClasses();
      setClassOptions(classes);
    };

    const loadRaces = async () => {
      const races = await fetchRaces();
      setRaces(races);
    };

    loadClasses();
    loadRaces();
  }, []);

  useEffect(() => {
    const loadSubRaces = async () => {
      if (selectedRace) {
        const subRaces = await fetchSubRaces();
        setSubRaces(subRaces);
      }
    };

    loadSubRaces();
  }, [selectedRace]);

  const handleStatChange = (stat: keyof Stats, value: number) => {
    setStats(prev => ({ ...prev, [stat]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const characterData = {
      name,
      stats,
      avatar: selectedAvatar,
      class: selectedClass,
      race: selectedRace,
      subRace: selectedSubRace,
      equipment: selectedEquipments,
    };

    createCharacter(characterData);

    setName('');
    setStats(RandomBaseValues());
    setSelectedAvatar('');
    setSelectedClass('');
    setSelectedRace('');
    setSelectedSubRace('');
    setSelectedCategories([]);
    setSelectedEquipments([]);

    navigate('/character-sheet');
  };

  const rollDie = (sides: number) => {
    const result = Math.floor(Math.random() * sides) + 1;
    setRollResult(result);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#4A3B2A] text-center">Criar Personagem</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl px-4 divide-y divide-gray-300">
        <AvatarSelection selectedAvatar={selectedAvatar} onSelectAvatar={setSelectedAvatar} />

        <CharacterAttributes
          name={name}
          setName={setName}
          stats={stats}
          handleStatChange={handleStatChange}
          onSubmit={handleSubmit}
          races={races}
          selectedRace={selectedRace}
          setSelectedRace={setSelectedRace}
          subRaces={subRaces}
          selectedSubRace={selectedSubRace}
          setSelectedSubRace={setSelectedSubRace}
        />

        <EquipmentSelector
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedEquipments={selectedEquipments}
          setSelectedEquipments={setSelectedEquipments}
        />

        <ClassSelector
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          classOptions={classOptions}
        />
      </div>

      <button
        onClick={() => rollDie(20)}
        className="mt-6 w-full max-w-xs p-3 bg-[#4B8B3B] text-white rounded hover:bg-[#3B6831] font-semibold transition duration-200"
      >
        Rolar D20
      </button>

      <button
        type="submit"
        onClick={handleSubmit}
        className="mt-4 w-full max-w-xs p-3 bg-[#4B8B3B] text-white rounded hover:bg-[#3B6831] font-semibold transition duration-200"
      >
        Criar Personagem
      </button>

      {isModalOpen && rollResult !== null && <D20Dice result={rollResult} onClose={closeModal} />}
    </div>
  );
};

export default CreateCharacter;
