import React, { useState } from 'react';

interface AvatarSelectionProps {
  selectedAvatar: string;
  onSelectAvatar: (avatar: string) => void;
}

const AvatarSelection: React.FC<AvatarSelectionProps> = ({ selectedAvatar, onSelectAvatar }) => {
  const avatars = [
    '/avatars/barbarian_female.png',
    '/avatars/barbarian_men.jpg',
    '/avatars/bard_female.jpg',
    '/avatars/cleric_female.png',
    '/avatars/cleric_men.jpg',
    '/avatars/druid_female.jpg',
    '/avatars/fighter_female.png',
    '/avatars/fighter_men.jpg',
    '/avatars/monk_female.jpg',
    '/avatars/paladin_female.png',
    '/avatars/paladin_men.jpg',
    '/avatars/ranger_female.jpg',
    '/avatars/rogue_female.png',
    '/avatars/rogue_female_alternative.png',
    '/avatars/sorcerer_female.jpg',
    '/avatars/warlock_female.png',
    '/avatars/wizard_female.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAvatar = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % avatars.length);
  };

  const prevAvatar = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + avatars.length) % avatars.length);
  };

  const selectAvatar = () => {
    onSelectAvatar(avatars[currentIndex]);
  };

  return (
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold text-[#4A3B2A] mb-4">Escolher Avatar</h2>

      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={prevAvatar}
          className="p-2 rounded-full bg-[#4B8B3B] text-white hover:bg-[#3B6831] transition duration-200"
        >
          {'<'}
        </button>

        <img
          src={avatars[currentIndex]}
          alt={`Avatar ${currentIndex + 1}`}
          className={`h-32 w-32 object-cover rounded-lg shadow-lg cursor-pointer ${
            selectedAvatar === avatars[currentIndex] ? 'border-4 border-[#4B8B3B]' : ''
          }`}
          onClick={selectAvatar}
        />

        <button
          onClick={nextAvatar}
          className="p-2 rounded-full bg-[#4B8B3B] text-white hover:bg-[#3B6831] transition duration-200"
        >
          {'>'}
        </button>
      </div>

      <p className="text-sm mt-2 text-gray-600">Clique na imagem para selecionar o avatar</p>
    </div>
  );
};

export default AvatarSelection;
